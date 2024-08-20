import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'

const VITE_CLIENT_ID = import.meta.env.VITE_CLIENT_ID

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GoogleOAuthProvider clientId={VITE_CLIENT_ID}>
            <App />
        </GoogleOAuthProvider>
    </StrictMode>
)
