import { useState } from "react";
import type { ResType, TaskType } from "../types";
import { Button } from "./Button";
import { addParticipant } from "../functions";

export default function AddParticipant({
    task,
    setTrigger,
    onClose
}: {
    task: TaskType,
    setTrigger: Function,
    onClose: () => void
}) {

    const addParticipantWrapper = async() => {
        const res : ResType = await addParticipant(email, task.taskId)
        console.log(res)
        if (res.valid) {
            onClose()
            setTrigger((prev: any) => !prev)
        }
    }
    const [email, setEmail] = useState('');

    return (
        <div>
            <div>Enter his/her email:</div>
            <div><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>

            <div>
                The friend you add needs to be registered on the site and must give their consent for completion of the task. Do you want to add them?
            </div>

            <Button onClick={addParticipantWrapper}>Hell yeah! Add him</Button>
        </div>
    );
}