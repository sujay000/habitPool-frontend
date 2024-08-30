import { markDone } from "../functions";
import type { ResType, TaskType } from "../types";
import { Button } from "./Button";

export default function MarkDone({
    task,
    setTrigger,
    onClose
}: {
    task: TaskType,
    setTrigger: Function,
    onClose: () => void
}) {

    const markDoneWrapper = async() => {
        const res: ResType = await markDone(task.taskId);

        if(res.valid) {
            setTrigger((prev: any) => !prev);
            onClose();
        }
    }

    return (
        <>
            <div>
                Are you sure you want to mark this task as done?
            </div>
            <Button onClick={markDoneWrapper}>Yes! Its done</Button>
        </>
    );
}   