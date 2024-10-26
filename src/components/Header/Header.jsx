import PropTypes from "prop-types";
import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Header({ coin, handleClick }) {

    return (
        <div className="relative">
            <Navbar coin={coin} />
            <Hero handleClick={handleClick} />
        </div>
    )
}

Header.propTypes = {
    coin: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
};

