import type { TaskType } from "../types";
import Task from "./Task";

export default function Tasks({
    tasks,
    setTrigger
}: {
    tasks: TaskType[],
    setTrigger: Function
}) {
    return (
        tasks.map((task) => {
            return (
                <Task
                    key={task.taskId}
                    task={task}
                    setTrigger={setTrigger}
                />
            );
        })                
    );
}