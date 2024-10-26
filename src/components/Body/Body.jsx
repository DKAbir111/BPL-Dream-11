import PropTypes from 'prop-types';
import { useState } from 'react'
import Available from './Available'
import Selected from './Selected'
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function Body({ handleNewCoin, coin }) {
    const [active, setActive] = useState(true);

    const handleClick = (isActive) => {
        if (isActive !== active) {
            setActive(isActive);
        }
    }

    const handleAddMore = () => {
        setActive(true);
    }

    const [selected, setSeletcted] = useState([]);
    const notify = (name) => toast.success(`Congratulations! ${name} has been added to your team!`);
    const handleChoosePlayer = (player) => {

        if (selected.length < 6 && !selected.includes(player) && player.price <= coin) {
            setSeletcted([...selected, player]);
            notify(player.name);
            handleNewCoin(Number(player.price));
            return;
        }
        if (selected.includes(player)) {
            toast.error("Player already selected!");
            return;

        }
        if (coin < player.price) {
            toast.error("Not enough funds available!");
            return;
        }
        else {
            toast.error("Maximum limit reached for team selection!");
            return;

        }
    }

    // Delete
    const handleDelete = (id) => {
        setSeletcted(selected.filter(selected => selected.id !== id));
    }
    // console.log(selected);
    return (
        <div className='container md:mx-auto p-2'>

            <div className='flex justify-between items-center py-16'>
                <h2 className='text-xl font-semibold'>{active ? "Available Players" : `Selected Player ${selected.length + "/ 6"}`}</h2>

                <div className='border rounded-lg shadow-none'>
                    <button className={`btn rounded-l-lg rounded-r-none px-10 ${active ? "bg-[#E7FE29]" : ""}`} onClick={() => handleClick(true)}>Available</button>
                    <button className={`btn rounded-r-lg rounded-l-none px-10 ${!active ? "bg-[#E7FE29]" : ""}`} onClick={() => handleClick(false)}>{`Selected (${selected.length})`}</button>

                </div>
            </div>
            {active ? <Available handleChoosePlayer={handleChoosePlayer} handleNewCoin={handleNewCoin} /> : <Selected selected={selected} handleDelete={handleDelete} handleAddMore={handleAddMore} />}
        </div>
    )
}


Body.propTypes = {
    handleNewCoin: PropTypes.func.isRequired,
    coin: PropTypes.number.isRequired,
}


