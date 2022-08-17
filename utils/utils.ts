import * as anchor from "@project-serum/anchor";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { MOBIUS_PROG_ID, MOBIUS_IDL } from "./utils";

export function getProgramInstance(connection, wallet) {
  if (wallet.publicKey) throw new WalletNotConnectedError();

  const provider = new anchor.AnchorProvider(
    connection,
    wallet,
    anchor.AnchorProvider.defaultOptions()
  );

  const idl = MOBIUS_IDL;

  const programId = MOBIUS_PROG_ID;

  const program = new anchor.Program(idl, programId, provider);

  return program;
}

export const getProvider = () => {
  if ("phantom" in window) {
    const anyWindow: any = window;
    const provider = anyWindow.phantom?.solana;

    if (provider?.isPhantom) {
      return provider;
    }
  }

  window.open("https://phantom.app/", "_blank");
};
