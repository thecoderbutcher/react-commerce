import { FaStar } from "react-icons/fa"
import { topProducts } from "../../constant"
const TopProducts = () => {
    return (
        <div className="py-10 dark:bg-tertiary-dark/90 duration-200">
            <div className="container">
                <div className="text-left mb-24">
                    <p
                        className="text-sm text-primary dark:text-tertiary/70"
                        data-aos="fade-up"
                    >
                        Top rated products for you
                    </p>
                    <h1
                        className="text-3xl font-bold text-secondary dark:text-tertiary"
                        data-aos="fade-up"
                    >
                        Best Products
                    </h1>
                    <p
                        className="text-sm text-tertiary-dark dark:text-tertiary/60"
                        data-aos="fade-up"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nemo eos, sint quod veritatis id impedit
                    </p>
                </div>
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center"
                >
                    {
                        topProducts.map((products) => (
                            <div 
                                key={products.id}
                                className="rounded-2xl bg-tertiary dark:bg-secondary-dark/80 hover:bg-primary-dark dark:hover:bg-tertiary-dark/80 duration-200 hover:text-tertiary relative shadow-xl group max-w-[300px] p-2"
                                data-aos="fade-up"
                            >
                                <div className="h-[100px]">
                                    <img 
                                        src={products.image} 
                                        alt="" 
                                        className="max-w-[120px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"/>
                                </div>
                                <div className="p-4 text-center">
                                    <div className="w-full flex items-center justify-center gap-1">
                                        <FaStar className="text-accent"/>
                                        <FaStar className="text-accent"/>
                                        <FaStar className="text-accent"/>
                                        <FaStar className="text-accent"/>
                                        <FaStar className="text-accent"/>
                                    </div>
                                    <h1 className="text-xl font-bold">{products.name}</h1>
                                    <p className="text-sm text-secondary/60 dark:text-tertiary/70 line-clamp-2 duration-300 group-hover:text-tertiary">{products.description}</p>
                                    <button className="bg-gradient-to-r from-accent to-accent-dark text-tertiary py-1 px-2 rounded-full duration-200 mt-2">
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TopProducts