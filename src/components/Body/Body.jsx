import PropTypes from 'prop-types';
import { useState } from 'react';
import Available from './Available';
import Selected from './Selected';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Body({ handleNewCoin, coin }) {
    const [active, setActive] = useState(true);
    const [selected, setSelected] = useState([]);

    const handleClick = (isActive) => {
        if (isActive !== active) {
            setActive(isActive);
        }
    };

    const notify = (name) => toast.success(`Congratulations! ${name} has been added to your team!`);
    const handleChoosePlayer = (player) => {
        if (selected.length < 6 && !selected.includes(player) && player.price <= coin) {
            setSelected([...selected, player]);
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
        } else {
            toast.error("Maximum limit reached for team selection!");
            return;
        }
    };
    // Add-more
    const handleAddMore = () => {
        setActive(true);
    }
    // Delete
    const handleDelete = (id) => {
        setSelected(selected.filter(selected => selected.id !== id));
    };

    return (
        <div className='container md:mx-auto p-2'>
            {/* Sticky Button Container */}
            <div className='sticky top-20 bg-white z-10'>
                <div className='flex  justify-end md:justify-between items-center py-4'>
                    <h2 className='text-xl font-semibold hidden md:block'>{active ? "Available Players" : `Selected Players ${selected.length + "/ 6"}`}</h2>
                    <div className='border rounded-lg shadow-none'>
                        <button className={`btn rounded-l-lg rounded-r-none px-10 ${active ? "bg-[#E7FE29]" : ""}`} onClick={() => handleClick(true)}>Available</button>
                        <button className={`btn rounded-r-lg rounded-l-none px-10 ${!active ? "bg-[#E7FE29]" : ""}`} onClick={() => handleClick(false)}>{`Selected (${selected.length})`}</button>
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                {/* Content Below Sticky Button */}
                {active ? <Available handleChoosePlayer={handleChoosePlayer} /> : <Selected selected={selected} handleDelete={handleDelete} handleAddMore={handleAddMore} />}
            </div>
        </div>
    );
}

Body.propTypes = {
    handleNewCoin: PropTypes.func.isRequired,
    coin: PropTypes.number.isRequired,
};
