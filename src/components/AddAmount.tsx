import { useState } from "react";
import { addAmount } from "../functions";
import type { ResType, TaskType } from "../types";

export default function AddAmount({
    task,
    setTrigger,
    onClose
}: {
    task: TaskType,
    setTrigger: Function
    onClose: () => void
}) {
    const [amount, setAmount] = useState(0.01);


    const addAmountWrapper = async() => {
        const res : ResType = await addAmount(task.taskId, amount);
        console.log("res", res);
        
        if (res.valid) {
            setTrigger((prev: any) => !prev);
            onClose();
        }
    }

    return (
        <div>
            How much amount do you want to add?
            <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
            <button onClick={addAmountWrapper}>Add</button>
        </div>
    );
}