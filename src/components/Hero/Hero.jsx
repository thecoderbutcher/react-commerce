import CarouselHero from "./CarouselHero"

const Hero = () => {
    return (
        <section className="flex justify-center items-center relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-secondary/5 dark:bg-secondary-dark/90 duration-200">
            <article className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/3 right-0 rounded-3xl rotate-45 -z-8"></article>
            <CarouselHero/>
        </section>
    )
}

export default Hero