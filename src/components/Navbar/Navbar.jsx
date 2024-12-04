import { FaCaretDown, FaCartShopping } from "react-icons/fa6"
import logo from "../../assets/img/ecommerce-logo.webp"
import { IoMdSearch } from "react-icons/io"
import DarkMode from "./DarkMode"
import { dropdown, menu } from "../../constant"
const Navbar = ({handleOrderPopup}) => {
    return (
        <nav className="shadow-md bg-primary/20 text-secondary dark:bg-primary-dark dark:secondary-dark transition-all duration-200 relative z-40">
            {/* upper navigation */}
            <ul className="bg-primary/60 dark:bg-secondary/60 dark:text-gray-900/60 py-2">
                <div className="container flex items-center justify-between">
                    <li className="">
                        <a href="/" className="flex items-center gap-2">
                            <img src={logo} alt="shopping logo" className="w-10"/>
                            <span className="text-xl font-bold text-tertiary-dark dark:text-tertiary">e-commerce</span>
                        </a>
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="group relative hidden sm:block">
                            <input 
                                type="text" 
                                name="search" 
                                id="search" 
                                placeholder="Search" 
                                className="w-[200px] sm:w-[200px] py-1 px-2 border border-tertiary rounded-full 
                                group-hover:w-[300px] transition-all duration-300 ease-in-out focus:outline-none focus:border-1 focus:border-primary dark:bg-secondary-dark dark:border-tertiary-dark dark:tertiary"
                                />
                                <IoMdSearch className="text-primary group-hover:text-secondary absolute top-1/2 -translate-y-1/2 right-3"/>
                        </div>
                        <button 
                            onClick={() => handleOrderPopup()} 
                            className="bg-gradient-to-r from-accent to-accent-dark text-tertiary py-1 px-4 rounded-full flex items-center gap-3 group transition-all duration-200">
                            <span className="group-hover:block hidden transition-all duration-300 ease-in-out">
                                Order
                            </span>
                            <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer"/>
                        </button>
                        <DarkMode/>
                    </li>
                </div>
            </ul>
            {/* lower navigation */}
            <div data-aos="zoom-in" className="flex justify-center bg-tertiary text-secondary-dark/70 dark:bg-secondary-dark/50 dark:text-tertiary/60 ">
                <ul className="sm:flex hidden items-center gap-4">
                    {menu.map((data) => (
                        <li key={data.id} >
                            <a 
                                href={data.path}
                                className="inline-block px-4 hover:text-primary duraction-200 ease-in-out"
                            >
                                {data.name}
                            </a>
                        </li>
                    ))}
                    <li className="group relative cursor-pointer">
                        <a href="#" className="flex items-center gap-2 py-2">
                            Tredding
                            <span>
                                <FaCaretDown className="transition-all duration-300 ease-in-out group-hover:rotate-180"/>
                            </span>
                        </a>
                        <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md shadow-md bg-tertiary text-secondary-dark/70 dark:bg-secondary-dark dark:text-tertiary/60 p-2">
                            <ul>
                                {dropdown.map((data) => (
                                    <li key={data.id}>
                                        <a href={data.path} className="inline-block w-full rounded-md px-2 py-1 hover:bg-primary/20 hover:text-white">
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar