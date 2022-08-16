import * as anchor from "@project-serum/anchor";
import { BN, Idl, Program, AnchorProvider } from "@project-serum/anchor";
import { Connection, Keypair, PublicKey, SystemProgram } from "@solana/web3.js";
import {
  Account,
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import {
  AccountUtils,
  toBN,
  isKp,
  translateAddress,
  Address,
} from "./mobius-common";
import { MobiusProtocolPl } from "target/types/mobius_protocol_pl";

export class MobiusClient extends AccountUtils {
  // @ts-ignore
  wallet: anchor.Wallet;
  provider!: anchor.Provider;
  mobiusProgram!: anchor.Program<MobiusProtocolPl>;

  constructor(
    conn: Connection,
    // @ts-ignore
    wallet: anchor.Wallet,
    idl?: Idl,
    programId?: PublicKey
  ) {
    super(conn);
    this.wallet = wallet;
    this.setProvider();
    this.setMobiusProtocolPlProgram(idl, programId);
  }

  setProvider() {
    this.provider = new AnchorProvider(
      this.conn,
      this.wallet,
      AnchorProvider.defaultOptions()
    );
    anchor.setProvider(this.provider);
  }

  setMobiusProtocolPlProgram(idl?: Idl, programId?: PublicKey) {
    //instantiating program depends on the environment
    if (idl && programId) {
      //means running in prod
      this.mobiusProgram = new anchor.Program<MobiusProtocolPl>(
        idl as any,
        programId,
        this.provider
      );
    } else {
      //means running inside test suite
      // @ts-ignore
      this.mobiusProgram = anchor.workspace
        .MobiusProtocolPl as Program<MobiusProtocolPl>;
    }
  }

  // --------------------------------------- fetch deserialized accounts

  async fetchFundraiserAcc(fundraiser: PublicKey) {
    return this.mobiusProgram.account.fundraiser.fetch(fundraiser);
  }

  async fetchContributorAcc(contributor: PublicKey) {
    return this.mobiusProgram.account.contributor.fetch(contributor);
  }

  // --------------------------------------- find PDA addresses

  async findTokenVaultPDA(fundraiserConfig: PublicKey) {
    return await PublicKey.findProgramAddress(
      [
        Buffer.from(anchor.utils.bytes.utf8.encode("token-vault")),
        fundraiserConfig.toBytes(),
      ],
      this.mobiusProgram.programId
    );
  }

  // async findPlayerFundPDA(player: PublicKey, gameConfig: PublicKey) {
  //     return await PublicKey.findProgramAddress(
  //         [Buffer.from(
  //             anchor.utils.bytes.utf8.encode("player-fund")),
  //         player.toBytes(),
  //         gameConfig.toBytes()
  //         ],
  //         this.mobiusProgram.programId
  //     )
  // }

  // --------------------------------------- find all PDA addresses

  // --------------------------------------- breed ops ixs

  async createFundraiser(
    fundraiserConfig: Keypair,
    fundraiser: Address,
    tokenVault: PublicKey,
    start: number,
    end: number,
    tokenVaultBump: number
  ) {
    const signers = [fundraiserConfig];
    // if (isKp(fundraiser)) signers.push(<Keypair>fundraiser)
    const txSig = await this.mobiusProgram.methods
      .createFundraiser(toBN(start), toBN(end), tokenVaultBump)
      .accounts({
        fundraiserConfig: fundraiserConfig.publicKey,
        fundraiser: translateAddress(fundraiser),
        tokenVault,
        systemProgram: SystemProgram.programId,
        rent: anchor.web3.SYSVAR_RENT_PUBKEY,
      })
      .signers(signers)
      .rpc();
    return { txSig };
  }
}
