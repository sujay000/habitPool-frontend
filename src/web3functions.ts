import {
    clusterApiUrl,
    Connection,
    PublicKey,
    LAMPORTS_PER_SOL,
  } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"), 'confirmed');

export async function getBalance(publicKey: string) {
    try {
        const balance = await connection.getBalance(new PublicKey(publicKey));
        return balance / LAMPORTS_PER_SOL;
    } catch (e) {
        console.log("There was an error while fetching the balance." + e);
    }
    return 0;
}