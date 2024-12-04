import { FaStar } from "react-icons/fa6"
import { products } from "../../constant"
const Products = () => {
    return (
        <section className="py-12 bg-primary/10 dark:bg-tertiary-dark/80 duration-200">
            <article className="container">
                <div className="text-center mb-10 max-w-[600px] mx-auto" data-aos="fade-up">
                    <p className="text-sm text-primary dark:text-tertiary/70">Top selling products for you</p>
                    <h1 className="text-3xl font-bold text-secondary dark:text-tertiary">Products</h1>
                    <p className="text-xs text-tertiary-dark dark:text-tertiary/60">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    </p>
                </div>
            </article>
            <article className="">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 place-items-center">
                    {
                        products.map((product) => (
                            <div key={product.id} className="rounded-md overflow-hidden space-y-1" data-aos="fade-up" data-aos-delay={product.id * 100}>
                                <img src={product.image} alt="" className="h-[220px] w-[150px] obejct-cover rounded-md"/>
                                <div className="">
                                    <h3 className="font-semibold text-primary dark:text-tertiary/90">{product.name}</h3>
                                    <p className="text-sm text-secondary dark:text-tertiary">{product.color}</p>
                                    <div className="flex items-center gap-1">
                                        <FaStar className="text-accent"/>
                                        <span className="text-sm text-tertiary-dark dark:text-tertiary/50">{product.rating}</span>
                                    </div>
                                    <p className="text-sm text-tertiary-dark">${product.price}</p>
                                </div> 
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-col justify-center items-center">
                    <button 
                        className="bg-gradient-to-r from-accent to-accent-dark text-tertiary py-1 px-2 rounded-full duration-200 mt-8"
                        data-aos="fade-up"
                    >
                            View all products
                    </button>
                </div>
            </article>

        </section>
    )
}

export default Products