import Man from '../assets/img/man-shopping.webp'
import Women from '../assets/img/women-shopping.webp'
import Supersales from '../assets/img/supersales.webp'

export const menu = [
    {
        id: 1,
        name: "Home",
        path: "/#home",
    },
    {
        id: 2,
        name: "Top Rated",
        path: "/#services",
    },
    {
        id: 3,
        name: "Kid Wear",
        path: "/#kid",
    },
    {
        id: 4,
        name: "Men Wear",
        path: "/#men",
    },
    {
        id: 5,
        name: "Women Wear",
        path: "/#women",
    }
]

export const dropdown = [
    {
        id: 1,
        name: "Treding Products",
        link: "/#trending",
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/#toprated",
    },
    {
        id: 3,
        name: "Best Selling",
        link: "/#bestselling",
    }
]

export const slidesContent = [
    {
        id: 1,
        title:"Up to 50% off on all Men Wear", 
        img: Man,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
    },
    {
        id: 2,
        title: "30% off on all Women's Wear",
        img: Women,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
    },
    {
        id: 3,
        title: "70% off on all Product Sale",
        img: Supersales,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
    }
]

export const sliderSettings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: true, 
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
}