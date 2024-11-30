import ligthMode from "../../assets/img/light-mode.webp"
import darkMode from "../../assets/img/dark-mode.webp"
import { useEffect, useState } from "react";
const DarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    const element = document.documentElement;
    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);
    return (
        <div>
            <img 
                src={ligthMode} 
                alt="" 
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1] transition-all duration-300 ease-in-out absolute z-10 ${theme === "light" ? "opacity-0" : "opacity-100"}`}
            />
            <img 
                src={darkMode} 
                alt="" 
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1] transition-all duration-300 ease-in-out"
            />
        </div>
    )
}

export default DarkMode