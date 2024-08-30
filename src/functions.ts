import { VITE_BE_URL } from "./config";

export async function createTask(name: string, description: string, amount: number, time: number) {
    const url = VITE_BE_URL + '/tasks/create';
    const result = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            description,
            amount,
            time
        }),
        credentials: 'include'
    })
    const data = result.json()
    return data
}


export async function addParticipant(email: string, taskId: number) {
    // TODO: check if its a email
    const url = VITE_BE_URL + '/tasks/add-participant';
    const result = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            taskId
        }),
        credentials: 'include'
    })
    const data = result.json()
    return data
}

export async function addAmount(taskId: number, amount: number) {
    const url = VITE_BE_URL + '/tasks/add-amount';
    const result = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            taskId,
            amount
        }),
        credentials: 'include'
    })
    const data = result.json()
    return data
}

export async function markDone(taskId: number) {
    const url = VITE_BE_URL + '/tasks/done';
    const result = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            taskId
        }),
        credentials: 'include'
    })
    const data = result.json()
    return data
}