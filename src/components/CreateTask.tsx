import { useState } from "react";
import { Button } from "./Button";
import { createTask } from "../functions";

export default function CreateTask({ onClose }: { onClose: Function }) {
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [amount, setAmount] = useState<number>(0.0001);
    const [time, setTime] = useState<number>(10);

    const timefn = (timeInHrs: number): number => {
        const currentTimeInSeconds = Math.floor(Date.now() / 1000);
        return currentTimeInSeconds + (timeInHrs * 60 * 60)
    }

    const onClick = async () => {
        const data = await createTask(name, description, amount, timefn(time));
        console.log(data);

        if (data.valid) {
            onClose();
        }
    }

    const EXTRA_VAL = 0.00005

    return (
        <div>
            <h1 className="text-3xl font-bold mb-[1rem]">Task</h1>
            Name:
            <input type="text" value={name} onChange={e => setName(e.target.value)} required />
            <br />
            Description:
            <input type="text" value={description} onChange={e => setDescription(e.target.value)} required />
            <br />
            Time In Hours:
            <input type="number" value={time} onChange={e => setTime(Number(e.target.value))} required />
            <br />
            Amount:
            <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} required />
            <br />
            + some small approx {EXTRA_VAL} for transactions
            <br />

            <Button mt="[1rem]" onClick={onClick}>
                Create
            </Button>
        </div>
    )
}