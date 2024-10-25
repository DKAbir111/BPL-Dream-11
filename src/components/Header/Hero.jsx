import PropTypes from "prop-types";
import Banner from "../../assets/banner-main.png"
import BgImage from "../../assets/bg-shadow.png"
export default function Hero({ coin, setCoin, notify }) {
    const handleClick = () => {
        setCoin(coin + 6000000);
        notify();
    }
    return (


        <div className="hero bg-[#131313] rounded-lg container md:mx-auto mt-24">
            <img src={BgImage} alt="bg-image" className="rounded-lg h-full" />

            <div className="hero-content text-center">
                <div className="flex flex-col justify-center items-center gap-5">

                    <img src={Banner} alt="" className="border border-dashed" />


                    <h1 className="text-4xl font-bold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className="py-6 text-2xl text-white text-opacity-70">
                        Beyond Boundaries Beyond Limits
                    </p>
                    <div>
                        <div className="border rounded-xl border-[#E7FE29] p-2">
                            <button className="btn bg-[#E7FE29] border-none" onClick={handleClick}>Claim Free Credit</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
Hero.propTypes = {
    coin: PropTypes.number.isRequired,
    setCoin: PropTypes.func.isRequired,
    notify: PropTypes.func.isRequired,
};
