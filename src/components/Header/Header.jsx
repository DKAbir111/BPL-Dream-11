import PropTypes from "prop-types";
import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Header({ newCoin, coin, setCoin }) {

    return (
        <div className="relative">
            <Navbar coin={coin} newCoin={newCoin} />
            <Hero coin={coin} setCoin={setCoin} />
        </div>
    )
}

Header.propTypes = {
    coin: PropTypes.number.isRequired,
    setCoin: PropTypes.func.isRequired,
    newCoin: PropTypes.number.isRequired,
};

