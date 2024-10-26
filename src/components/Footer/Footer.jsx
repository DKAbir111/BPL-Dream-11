import Logo from "../../assets/logo-footer.png"
import Backgound from "../../assets/bg-shadow.png"
export default function Footer() {
    return (

        <div className="bg-[#07091a] flex flex-col p-10 items-center gap-10 relative mt-40">
            {/* News Shelter */}

            <div className="absolute -top-32 w-11/12 md:w-5/6 border rounded-lg bg-white p-5 backdrop-blur-lg bg-opacity-95"  >
                <div className="flex flex-col gap-5 justify-center items-center p-5 md:p-10 rounded-lg" style={{ backgroundImage: `url(${Backgound})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <h2 className="text-black text-2xl font-semibold">Subscribe to our Newsletter</h2>
                    <p>Get the latest updates and news right in your inbox!</p>
                    <div className="join  lg:w-1/2">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="input input-bordered join-item w-2/3" />
                        <button className="btn bg-gradient-to-r from-yellow-400 to-orange-500 join-item border-none w-1/3">Subscribe</button>
                    </div>
                </div>
            </div>


            {/* Footer */}
            <div className="flex flex-col items-center mt-32 gap-10">
                <div className="p-2 border border-dashed">
                    <img src={Logo} alt="Logo" />
                </div>

                <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-base-content container md:mx-auto w-full gap-10 lg:gap-40">

                    <nav>
                        <h6 className="footer-title text-white opacity-100">About Us</h6>
                        <p className="text-white opacity-50">We are a passionate team dedicated to providing the best services to our customers.</p>
                    </nav>
                    <nav className="flex flex-col">
                        <h6 className="footer-title text-white opacity-100">Quick Links</h6>
                        <div className="text-white flex flex-col opacity-50">
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </div>
                    </nav>

                    <form className="flex flex-col gap-3">
                        <h6 className="footer-title text-white opacity-100">Subscribe</h6>
                        <span className="label-text text-white opacity-50">Subscribe to our newsletter for the latest updates.</span>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="input input-bordered join-item" />
                            <button className="btn bg-gradient-to-r from-yellow-400 to-orange-500 join-item border-none">Subscribe</button>
                        </div>
                    </form>
                </footer>
                <div className="w-full container flex flex-col gap-5">
                    <div className="border"></div>
                    <p className="text-white opacity-50 text-center">@2024 Your Company All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}
