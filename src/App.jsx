import { useEffect } from "react"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Products from "./components/Products/Products"
import AOS from "aos"
import "aos/dist/aos.css"
import TopProducts from "./components/Products/TopProducts"
import Banner from "./components/Banner/Banner"
import Subscribe from "./components/Banner/Subscribe"
import Testimonials from "./components/Testimonials/Testimonials"
import Footer from "./components/Footer/Footer"

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    })
  }, [])
  return (
    <main className="">
      <Navbar/>
      <Hero/>
      <Products/>
      <TopProducts/>
      <Banner/>
      <Subscribe/>
      <Testimonials/>
      <Footer/>
    </main>
  )
}

export default App