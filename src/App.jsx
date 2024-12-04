import { useEffect, useState } from "react"
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
import Popup from "./components/Popup/Popup"

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }

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
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero/>
      <Products/>
      <TopProducts/>
      <Banner/>
      <Subscribe/>
      <Testimonials/>
      <Footer/>
      <Popup orderPopup={orderPopup} setOrderPopup={handleOrderPopup}/>
    </main>
  )
}

export default App