import { useNavigate } from "react-router-dom"
import { Button } from "./Button"
import { TaskType, User } from "../types";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import CreateTask from "./CreateTask";
import { VITE_BE_URL } from "../config";
import Tasks from "./Tasks";

function Dashboard({
    context,
}: {
    context: User|null
    setContext: Function
}) {

    const navigate = useNavigate();
    
    if(!context) {
        return <div>
            User not present currently, login again
            <br />
            You refreshed the page prolly
        </div>
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [trigger, setTrigger] = useState(false);
    const [tasks, setTasks] = useState<TaskType[]>([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const url = VITE_BE_URL + "/tasks" 
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const data = await res.json()
            console.log(data);
            setTasks(data.msg)
        }

        fetchTasks()
    }, [trigger])

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const createTaskClose = () => {
        closeModal();
        setTrigger(!trigger);
    }

    return (
        <div>
            hello from dashboard
            <div>
                {JSON.stringify(context)}
            </div>

            <Button onClick={openModal}>Create a new task</Button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <CreateTask onClose={createTaskClose}  />
            </Modal>

            <Button onClick={() => navigate("/money")}>Add SOL to wallet</Button>

            <Tasks tasks={tasks} setTrigger={setTrigger} />

        </div>
    )
}

export default Dashboard