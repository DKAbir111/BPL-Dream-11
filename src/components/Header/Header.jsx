import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Header() {
    const [coin, setCoin] = useState(0);

    const notify = () => {
        toast.success('Credit Added to Your Account', {
            position: "top-center",
        });
    };
    return (
        <div className="relative">
            <Navbar coin={coin} />
            <Hero coin={coin} setCoin={setCoin} notify={notify} />
        </div>
    )
}
