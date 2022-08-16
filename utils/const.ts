import { clusterApiUrl, PublicKey } from "@solana/web3.js";
import mobius from './mobius_idl.json';

export const CLUSTER =
  process.env.REACT_APP_CLUSTER === "mainnet"
    ? "mainnet"
    : process.env.REACT_APP_CLUSTER === "testnet"
      ? "testnet"
      : process.env.REACT_APP_CLUSTER === "devnet"
        ? "devnet"
        : "localnet";

export const SOLANA_HOST = process.env.REACT_APP_SOLANA_API_URL
  ? process.env.REACT_APP_SOLANA_API_URL
  : CLUSTER === "mainnet"
    ? clusterApiUrl("mainnet-beta")
    : CLUSTER === "testnet"
      ? clusterApiUrl("testnet")
      : CLUSTER === "devnet"
        ? clusterApiUrl("devnet")
        : "http://localhost:8899";

      
export const MOBIUS_PROG_ID = new PublicKey(
  CLUSTER === 'localnet' 
  ? '5izPbb651w3ZUTgNZnUpmF2bRdzmePAwz4xcnK4NNbEx' 
  : CLUSTER === 'testnet' 
  ? '5izPbb651w3ZUTgNZnUpmF2bRdzmePAwz4xcnK4NNbEx'
  : CLUSTER === 'devnet'
      ? '5izPbb651w3ZUTgNZnUpmF2bRdzmePAwz4xcnK4NNbEx'
  : ''
);

export const MOBIUS_IDL = mobius;