import { testimonials } from "../../constant"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Testimonials = () => {
    return (
        <div className="py-10 bg-secondary/5 dark:bg-secondary-dark/80">
            <div className="container">
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-tertiary-dark dark:text-tertiary/70">
                        Whats our customers are saying
                    </p>
                    <h1 className="text-3xl font-bold text-secondary dark:text-tertiary" data-aos="fade-up">
                        Testimonials
                    </h1>
                    <p className="text-xs text-tertiary-dark dark:text-tertiary/60" data-aos="fade-up">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nemo eos, sint quod veritatis id impedit
                    </p>
                </div>
                <div data-aos="zoom-in">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={3}
                        initialSlide={3}
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
                        {
                            testimonials.map((testimonial) => (
                                <SwiperSlide 
                                    key={testimonial.id}
                                    className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-accent/10 dark:bg-tertiary-dark/90"
                                >
                                    <div className="mb-4">
                                        <img 
                                            src={testimonial.image} 
                                            alt="" 
                                            className="rounded-full w-20 h-20 object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4 items-center">
                                        <div className="space-y-3">
                                            <p className="text-xs text-tertiary-dark dark:text-tertiary/60">
                                                {testimonial.text}
                                            </p>
                                            <h1 className="text-xl font-bold text-secondary dark:text-tertiary">
                                                {testimonial.name}
                                            </h1>
                                        </div>
                                    </div>
                                    <p className="text-9xl text-tertiary-dark/10 dark:text-tertiary/10 font-serif absolute top-0 right-0">
                                        &rdquo;
                                    </p>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Testimonials