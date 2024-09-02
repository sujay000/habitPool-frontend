
import './css/App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard.tsx'
import NotFound from './components/NotFound.tsx'
import { User } from './types.ts'
import { useState } from 'react'
import LandingPage from './components/LandingPage.tsx'
import Money from './pages/Money.tsx'
import { Toaster } from 'sonner'



export default function App() {
    const [context, setContext] = useState<User | null>(null)
    return (
            <>
                <Toaster richColors={true} />
                <Routes>
                    <Route path='/' element={<LandingPage context={context} setContext={setContext} />} />
                    <Route path='/dashboard' element={<Dashboard context={context} setContext={setContext} />} />
                    <Route path='/money' element={<Money context={context} setContext={setContext} />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            
            </>
    )
}

