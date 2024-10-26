import { useState } from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Header() {
    const [coin, setCoin] = useState(0);
    return (
        <div className="relative">
            <Navbar coin={coin} />
            <Hero coin={coin} setCoin={setCoin} />
        </div>
    )
}
