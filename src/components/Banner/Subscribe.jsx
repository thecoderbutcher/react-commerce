
const Subscribe = () => {
    return (
        <div
            className="bg-gradient-to-r from-accent-dark to-accent duration-200 py-10"
            data-aos="zoom-in"
        >
            <div className="container backdrop-blur-sm py-10">
                <div className="space-y-6 max-w-xl mx-auto">
                    <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold text-secondary dark:text-tertiary">
                        Get Notified About New Products
                    </h1>
                    <input type="text"
                        className="w-full mt-5 px-4 py-2 rounded-md outline-none"
                        placeholder="Enter your email" 
                        data-aos="fade-up"
                    />
                </div>
            </div>
        </div>
    )
}

export default Subscribe