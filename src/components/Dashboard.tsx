import { useEffect, useState } from "react";
import { VITE_BE_URL } from "../config";
import type { TaskType, User } from "../types";
import { getBalance } from "../web3functions";
import Modal from "./Modal";
import CreateTask from "./CreateTask";
import Tasks from "./Tasks";

import moneyImage from '../assets/images/randomGold.jpeg'
import taskImage from '../assets/images/fireflyTask.jpg'
import { useNavigate } from "react-router-dom";
import { getLatoStyle, getMontserratStyle, getRalewayStyle } from "../fonts";
import { toast } from "sonner";


export default function Dashboard({
    context,
}: {
    context: User | null,
    setContext: Function
}) {

    if (!context) {
        return <div>
            User not present currently, login again
            <br />
            You refreshed the page prolly
        </div>
    }



    const [isModalOpen, setIsModalOpen] = useState(false);
    const [trigger, setTrigger] = useState(false);
    const [tasks, setTasks] = useState<TaskType[]>([]);

    const [balance, setBalance] = useState(0);

    const navigate = useNavigate();

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


        const fetchBalance = async () => {
            setBalance(await getBalance(context.publicKey))
        }

        fetchTasks()
        fetchBalance()
    }, [trigger])

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const createTaskClose = () => {
        closeModal();
        setTrigger(!trigger);
    }

    return (
        <div className="grid grid-cols-12 gap-4 p-[2rem]" style={getLatoStyle(400)}>

            {/* left part */}
            <div className="col-span-12 lg:col-span-8">

                <div className="flex gap-[1rem] flex-col lg:flex-row">

                    {/* profile */}
                    <div className="w-full lg:w-1/2 border-2 border-gray-300 rounded-lg p-[1rem] shadow-lg shadow-gray-400">
                        <div className="flex justify-between">
                            <div>
                                <h2 className="text-2xl font-bold mb-[1rem]" style={getMontserratStyle(800)}>Welcome, {context.username}!</h2>
                                <p className="text-gray-500">{context.email}</p>
                                <div onClick={() => { 
                                    navigator.clipboard.writeText(context.publicKey)
                                    toast.success("Copied to clipboard")
                                }} className="cursor-pointer">
                                    Your public key: {transformPublicKey(context.publicKey)}
                                </div>
                            </div>
                            <div>
                                <img src={context.picture} referrerPolicy="no-referrer" className="w-[10rem] h-[10rem] rounded-full" />
                            </div>
                        </div>
                    </div>

                    {/* add money */}
                    <div className="w-full lg:w-1/2 border-2 border-gray-300 rounded-lg p-[1rem] shadow-lg shadow-gray-400">
                        <div className="flex justify-between items-center">
                            <div className="w-full px-[1rem]">

                                <div className="relative text-xl text-white font-semibold h-[5rem] bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${moneyImage})` }} onClick={() => navigate("/money")}>
                                    <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
                                    <div className="relative z-10 flex items-center justify-center h-full" style={getRalewayStyle(400)}>
                                        Add Money
                                    </div>
                                </div>

                                <div className="relative h-[5rem] bg-cover bg-center rounded-lg mt-[0.35rem]" style={{ backgroundImage: `url(${taskImage})` }} onClick={openModal}>
                                    <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
                                    <div className="relative z-10 flex items-center justify-center h-full">

                                        <h1 className="text-xl text-white font-semibold" style={getRalewayStyle(400)}>Create a new task</h1>
                                        <Modal isOpen={isModalOpen} onClose={closeModal}>
                                            <CreateTask onClose={createTaskClose} />
                                        </Modal>
                                    </div>
                                </div>
                            </div>

                            <div className="text-[6rem] font-thin">
                                <div className="text-xl text-gray-500 font-semibold">Balance</div>
                                {balance.toFixed(2)}
                                <span className="text-xl text-gray-500 font-bold">SOL</span>
                            </div>
                        </div>
                    </div>



                </div>



                <div className="mt-[2rem]">
                    <Tasks tasks={tasks} setTrigger={setTrigger} />
                </div>
            </div>


            {/* right part */}  
            <div className="col-span-12 lg:col-span-4" style={getMontserratStyle(400)}>
                Other Tasks
            </div>
        </div>
    )
}


const transformPublicKey = (publicKey: string) => {
    return publicKey.slice(0, 6) + "..." + publicKey.slice(-6);
}