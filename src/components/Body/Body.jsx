
import { useState } from 'react'
import Available from './Available'
import Selected from './Selected'

export default function Body() {
    const [active, setActive] = useState(true);

    const handleClick = (isActive) => {
        if (isActive !== active) {
            setActive(isActive);
        }
    }
    return (
        <div className='container md:mx-auto p-2'>

            <div className='flex justify-between items-center py-16'>
                <h2 className='text-xl font-semibold'>{active ? "Available Players" : "Selected Player (4/6)"}</h2>

                <div className='border rounded-lg shadow-none'>
                    <button className={`btn rounded-l-lg rounded-r-none px-10 ${active ? "bg-[#E7FE29]" : ""}`} onClick={() => handleClick(true)}>Available</button>
                    <button className={`btn rounded-r-lg rounded-l-none px-10 ${!active ? "bg-[#E7FE29]" : ""}`} onClick={() => handleClick(false)}>Selected</button>

                </div>
            </div>
            {active ? <Available /> : <Selected />}
        </div>
    )
}
