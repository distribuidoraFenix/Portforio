import { useState, useEffect } from "react";

export default function useTheme() {

    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem("theme");

        if(savedTheme)
            return savedTheme === "dark";

        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {

        if(isDark){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
        }else{
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
        }

    },[isDark]);

    const toggleTheme = () => setIsDark(prev => !prev);

    return {
        isDark,
        toggleTheme
    };

}