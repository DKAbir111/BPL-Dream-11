import PropTypes from "prop-types";
import Doller from "../../assets/coin.png"
import Logo from "../../assets/logo.png"
import { ToastContainer } from "react-toastify";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Navbar({ coin }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };
    return (

        <div className="bg-white bg-opacity-70 backdrop-blur-lg  fixed top-0 left-0 right-0 z-20">
            <ToastContainer position="top-center" />
            <div className="navbar container md:mx-auto justify-between items-center">
                <div>
                    <a className="text-xl"><img src={Logo} alt="Logo" className="border border-dashed w-1/2 md:w-full" /></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 font-light">
                        <li className="hidden md:block"><a>Home</a></li>
                        <li className="hidden md:block"><a>Fixture</a></li>
                        <li className="hidden md:block"><a>Teams</a></li>
                        <li className="hidden md:block"><a>Schedules</a></li>
                        <li className="flex items-center"><a className="border font-semibold">{coin} Coin <img src={Doller} alt="" /></a></li>
                    </ul>
                </div>
                <div className="md:hidden flex flex-col items-end px-1 font-light relative">
                    <FaBars className="text-2xl relative z-10" onClick={toggleMenu} />
                    {isMenuOpen && (
                        <div className="flex flex-col absolute bg-base-200 p-3 rounded-lg border bg-opacity-80 backdrop-blur-xl shadow-md">
                            <a >Home</a>
                            <a >Fixture</a>
                            <a >Teams</a>
                            <a >Schedules</a>
                        </div>
                    )}
                </div>
            </div>
        </div>

    )

}

Navbar.propTypes = {
    coin: PropTypes.number.isRequired,
};
