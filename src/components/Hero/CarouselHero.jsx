import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { slidesContent } from '../../constant/index.jsx'
import 'swiper/css';

const CarouselHero = () => { 
    return ( 
        <div className="w-2/3 "> 
            <Swiper 
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
                {slidesContent.map((slide) => (
                    <SwiperSlide key={slide.id} >
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 md:order-1 relative z-10">
                                <h1 
                                    className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary dark:text-tertiary"
                                    data-aos="zoom-out"
                                    data-aos-duration="500"
                                    data-aos-once="true"
                                >
                                    {slide.title}
                                </h1>
                                <p 
                                    className="text-sm text-secondary dark:text-tertiary"
                                    data-aos="fade-up"
                                    data-aos-duration="500"
                                    data-aos-delay="100"
                                >
                                    {slide.description}
                                </p>
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration="500"
                                    data-aos-delay="300"
                                >
                                    <button className="bg-gradient-to-r from-accent to-accent-dark text-tertiary py-2 px-4 rounded-full duration-200">
                                        Order Now
                                    </button>
                                </div>
                            </div>
                            <div className="order-1 md:order-2 h-full w-full">
                                <div className="relative z-10">
                                    <img 
                                        src={slide.img}
                                        alt={slide.title} 
                                        className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-105 lg:scale-100 mx-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div> 
                    </SwiperSlide>
                ))} 
            </Swiper> 
        </div>
    )
}

export default CarouselHero