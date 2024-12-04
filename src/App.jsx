import { useEffect } from "react"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Products from "./components/Products/Products"
import AOS from "aos"
import "aos/dist/aos.css"
import TopProducts from "./components/Products/TopProducts"

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
    </main>
  )
}

export default App