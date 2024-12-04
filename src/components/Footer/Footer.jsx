import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from "react-icons/fa6"
import Logo from "../../assets/img/ecommerce-logo.webp"
import { footerLinks } from "../../constant"
import { FaMobileAlt } from "react-icons/fa"
const Footer = () => {
    return (
        <div className="text-primary dark:text-tertiary dark:bg-tertiary-dark">
            <div className="container">
                <div className="grid md:grid-cols-3 pv-44 pt-5"  >
                    <div className="py-8 px-4">
                        <h1 
                            className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3"
                        >
                            <img 
                                src={Logo}
                                alt="" 
                                className="max-w-[50px]"
                                />
                            e-commerce
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Itaque quis provident deserunt voluptatibus recusandae aspernatur optio autem rem sequi
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 cols-span-2 md:pl-10">
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="sm:text-3xl text-xl font-bold mb-3 sm:text-left text-justify">Important Links</h1>
                                <ul className="flex flex-col gap-3">
                                    {
                                        footerLinks.map((link) => (
                                            <li key={link.id} className="cursor-pointer hover:text-accent hover:translate-x-1 duration-300 text-primary/60 dark:text-tertiary/70 dark:hover:text-accent-dark">
                                                <a href={link.link} className="text-sm">{link.name}</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                        <div>
                            <div className="flex items-center gap-3 mt-6">
                                <a href="">
                                    <FaInstagram className="text-3xl"/>
                                </a>
                                <a href="">
                                    <FaFacebook className="text-3xl"/>
                                </a>
                                <a href="">
                                    <FaLinkedin className="text-3xl"/>
                                </a>
                            </div>
                            <div className="mt-6">
                                <div className="flex items-center gap-3">
                                    <FaLocationArrow />
                                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaMobileAlt/>
                                    <p className="text-sm">+123456789</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Footer