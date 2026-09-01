import { Link, NavLink } from "react-router-dom";
import Foreground from "./Foreground/foreground.jsx";
function Header() {
    return (
        <>
            <header className="shadow sticky z-50 top-0">
                <nav className="bg-transparent px-4 lg:px-6 py-2.5">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl">
                        <Link to="component/homepage" className="flex items-center">
                            <h1 className="self-center text-xl font-semibold whitespace-nowrap text-white">
                                Notesy
                            </h1>
                        </Link>
                       
                        
                            <Link
                                to="/Foreground"
                                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 -mr-200 focus:outline-none"
                            >
                                Get started
                            </Link>
                        
                        <div
                            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                            id="mobile-menu-2"
                        >
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
export default Header;




















