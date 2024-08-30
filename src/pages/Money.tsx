import { useEffect, useState } from "react"
import { Button } from "../components/Button"
import { VITE_BE_URL } from "../config"
import type { User } from "../types"
import { Link } from "react-router-dom"
import { getBalance } from "../web3functions"

export default function Money({
    context,
    setContext
}: {
    context: User | null,
    setContext: Function
}) {


    if (!context) {
        return <div>
            User not present currently, login again
            <br />
            You refreshed the page prolly
        </div>
    }

    const [signature, setSignature] = useState("")
    const [balance, setBalance] = useState(0)

    useEffect(() => {

        const getBalanceWrapper = async() => {
            const balance = await getBalance(context.publicKey)
            setBalance(balance)
        }

        getBalanceWrapper()

    }, [signature])

    async function requestAirdrop() {
        const url = VITE_BE_URL + '/money'
        const res = await fetch(url, {
            method: "GET",
            credentials: "include",
        })

        const data = await res.json()
        if (data.valid) {
            setSignature(data.msg)
        }
    }

    const transactionLink = `https://explorer.solana.com/tx/${signature}?cluster=devnet`
    return (
        <div>
            <div>
                {JSON.stringify(context)}
            </div>
            <Button onClick={requestAirdrop}>Request dev Airdrop</Button>

            {/* TODO: pop it up in a toast */}
            <a href={transactionLink} target="_blank" rel="noopener noreferrer">
                {signature.length ? "View Transaction" : null}
            </a>

            <div>
                Your balance:
                ${balance}
            </div>

            <div>
                <Link to="/dashboard">Go back to dashboard</Link>
            </div>
        </div>
    )
}
