import { useGoogleLogin } from "@react-oauth/google"
import { useNavigate } from "react-router-dom"
import { VITE_BE_URL } from "../config"
import { Button } from "./Button"
import { User } from "../types"

export default function LandingPage({
    setContext
}: {
    context: User|null
    setContext: Function
}) {
    const navigate = useNavigate() 
    const login = useGoogleLogin({
        onSuccess: async (codeResponse) => {
            const url = VITE_BE_URL + '/auth'
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(codeResponse),
            })
            const data = await response.json()
            
            
            if (data.valid) {
                navigate('/dashboard')
                setContext(data.msg)
            }
        },
    })

    return (
        <div>
            <Button onClick={login}>Sign In with Google</Button>
        </div>
    )
}