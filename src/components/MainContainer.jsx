import { useState } from "react";
import Body from "./Body/Body";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function MainContainer() {
    const [coin, setCoin] = useState(0);
    const [newCoin, setNewCoin] = useState(1);
    return (

        <div>
            <Header newCoin={newCoin} coin={coin} setCoin={setCoin} />
            <Body setCoin={setCoin} coin={coin} setNewCoin={setNewCoin} newCoin={newCoin} />
            <Footer />
        </div>
    )
}
