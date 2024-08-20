import './App.css'
import { useGoogleLogin } from '@react-oauth/google'
import { VITE_BE_URL } from './config'

function App() {
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
            console.log(data)
        },
    })

    return (
        <div>
            hello world
            <button className="border-black border-2" onClick={() => login()}>
                Sign in with Google 🚀
            </button>
            <button className="border-black border-2 rounded-md px-[1rem] py-[0.5rem]">Create a account</button>
        </div>
    )
}

export default App
