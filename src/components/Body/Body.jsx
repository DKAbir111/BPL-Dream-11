
import { useState } from 'react'
import Available from './Available'
import Selected from './Selected'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function Body() {
    const [active, setActive] = useState(true);

    const handleClick = (isActive) => {
        if (isActive !== active) {

            setActive(isActive);
        }
    }

    const [selected, setSeletcted] = useState([]);
    const notify = (name) => toast.success(`Congratulations! ${name} has been added to your team!`);
    const handleChoosePlayer = (player) => {
        // const allSelected = [...selected, player]
        setSeletcted([...selected, player]);
        notify(player.name);
    }
    // console.log(selected);
    return (
        <div className='container md:mx-auto p-2'>
            <ToastContainer position="top-center"
            />
            <div className='flex justify-between items-center py-16'>
                <h2 className='text-xl font-semibold'>{active ? "Available Players" : "Selected Player (4/6)"}</h2>

                <div className='border rounded-lg shadow-none'>
                    <button className={`btn rounded-l-lg rounded-r-none px-10 ${active ? "bg-[#E7FE29]" : ""}`} onClick={() => handleClick(true)}>Available</button>
                    <button className={`btn rounded-r-lg rounded-l-none px-10 ${!active ? "bg-[#E7FE29]" : ""}`} onClick={() => handleClick(false)}>Selected</button>

                </div>
            </div>
            {active ? <Available handleChoosePlayer={handleChoosePlayer} /> : <Selected selected={selected} />}
        </div>
    )
}
