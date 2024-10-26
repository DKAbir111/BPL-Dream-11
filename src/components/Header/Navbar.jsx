import PropTypes from "prop-types";
import Doller from "../../assets/coin.png"
import Logo from "../../assets/logo.png"
import { ToastContainer } from "react-toastify";

export default function Navbar({ coin }) {

    return (

        <div className="bg-white bg-opacity-70 backdrop-blur-lg  fixed top-0 left-0 right-0 z-10">
            <ToastContainer position="top-center" />
            <div className="navbar container md:mx-auto">
                <div className="flex-1">
                    <a className="text-xl"><img src={Logo} alt="Logo" className="border border-dashed" /></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 font-light">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                        <li className="flex items-center"><a className="border font-semibold">{coin} Coin <img src={Doller} alt="" /></a></li>
                    </ul>
                </div>
            </div>
        </div>

    )

}

Navbar.propTypes = {
    coin: PropTypes.number.isRequired,
};
