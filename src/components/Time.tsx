import { useState, useEffect } from "react"

export default function Time({time}: {time: number}) {
    
    const [seconds, setSeconds] = useState(time - (Date.now() / 1000))
    
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds - 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [seconds])

    return (
        <div>
            <div>
                {seconds}
                {JSON.stringify(typeof time)}
            </div>
        </div>
    )
}