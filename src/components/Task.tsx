import { useState } from "react";
import type { TaskType } from "../types";
import { Button } from "./Button";
import Modal from "./Modal";
import AddParticipant from "./AddParticipant";
import AddAmount from "./AddAmount";
import MarkDone from "./MarkDone";
import Time from "./Time";

export default function Task({
    task,
    setTrigger
}: {
    task: TaskType,
    setTrigger: Function
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [isModalOpenAmount, setIsModalOpenAmount] = useState(false);
    const openModalAmount = () => setIsModalOpenAmount(true);
    const closeModalAmount = () => setIsModalOpenAmount(false);

    const [isModalOpenDone, setIsModalOpenDone] = useState(false);
    const openModalDone = () => setIsModalOpenDone(true);
    const closeModalDone = () => setIsModalOpenDone(false);

    for (const [key, value] of Object.entries(task)) {
        console.log(key, value)
        console.log(typeof value)
    }

    return (
        <div className="p-[2rem] border-[2px] border-gray-300 rounded-md w-full">
            <div key={task.taskId}>
                Name: {task.name}
            </div>

            <div>
                Descrption: {task.description}
            </div>

            <div>
                TimeLeft: {task.time}
            </div>

            <div>
                {task.status}
            </div>

            <div>
                creator:
                {task.creatorPublicKey}
            </div>
            <div>
                participants:
                {
                    (task.participants || []).map(participant => (
                        <div>
                            {JSON.stringify(participant)}
                        </div>
                    ))
                }
            </div>

            <div>
                Results:
                {
                    (task.results || []).map(result => (
                        JSON.stringify(result)
                    ))
                }
            </div>
            
            <div>
                TimeLeft: <Time time={task.time} />
            </div>


            <Button onClick={openModalAmount}>Add Amount</Button>
            <Modal isOpen={isModalOpenAmount} onClose={closeModalAmount}>
                <AddAmount task={task} setTrigger={setTrigger} onClose={closeModalAmount} />
            </Modal>

            <Button onClick={openModal}>Add Friends</Button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <AddParticipant task={task} setTrigger={setTrigger} onClose={closeModal} />
            </Modal>

            <Button onClick={openModalDone}>Mark Task as Done</Button>
            <Modal isOpen={isModalOpenDone} onClose={closeModalDone}>
                <MarkDone task={task} setTrigger={setTrigger} onClose={closeModalDone} />
            </Modal>
        </div>
    )
}