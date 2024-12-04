import { IoCloseCircleOutline } from "react-icons/io5"

const Popup = ({orderPopup, setOrderPopup}) => {
    return (
        <>
            {orderPopup && (
                <div className="popup">
                    <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
                        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-tertiary rounded-md dark:bg-tertiary-dark duration-200 w-[300px]">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="text-2xl font-bold text-primary-dark dark:text-tertiary/70">Order Now</h1>
                                </div>
                                <IoCloseCircleOutline onClick={() => setOrderPopup(false)} className="text-2xl cursor-pointer hover:text-primary dark:text-tertiary dark:hover:text-primary"/>
                            </div>    
                            <div className="mt-4">
                                <input 
                                    type="text"
                                    placeholder="Name" 
                                    className="w-full rounded-full border border-tertiary dark:border-tertiary-dark dark:bg-secondary-dark/40 dark:text-tertiary/70 px-2 py-1 mb-4 outline-none"
                                />
                                <input 
                                    type="text"
                                    placeholder="Email" 
                                    className="w-full rounded-full border border-tertiary dark:border-tertiary-dark dark:bg-secondary-dark/40 dark:text-tertiary/70 px-2 py-1 mb-4 outline-none"
                                />
                                <input 
                                    type="text"
                                    placeholder="Address" 
                                    className="w-full rounded-full border border-tertiary dark:border-tertiary-dark dark:bg-secondary-dark/40 dark:text-tertiary/70 px-2 py-1 mb-4 outline-none"
                                />
                                <div className="flex justify-center">
                                    <button className="bg-gradient-to-r from-accent to-accent-dark text-tertiary py-1 px-4 rounded-full">
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
        </>
    )
}

export default Popup