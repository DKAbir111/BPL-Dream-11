import Body from "./Body/Body";
import Header from "./Header/Header";
import { toast } from 'react-toastify';
import Footer from "./Footer/Footer";
import { useState } from "react";

export default function MainContainer() {
    const [coin, setCoin] = useState(0);

    const handleClick = () => {
        setCoin(prevCoin => prevCoin + 6000000);
        notify();
    }

    const notify = () => toast.success("Credit added to your account!");

    function handleNewCoin(price) {
        setCoin(prevCoin => prevCoin - price);
    }
    return (
        <div>
            <Header handleClick={handleClick} coin={coin} />
            <Body handleNewCoin={handleNewCoin} coin={coin} />
            <Footer />
        </div>
    );
}
