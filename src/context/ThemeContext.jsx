import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

function getInitialTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}

export function useChartColors() {
    const { theme } = useTheme();
    return theme === "dark"
        ? { bar: "#e03a39", text: "#e8e8e8", grid: "#3a3a3a", surface: "#262626",
            pie: ["#e03a39", "#b90504", "#e8e8e8", "#8c8c8c"] }
        : { bar: "#990100", text: "#333333", grid: "#e8e8e8", surface: "#ffffff",
            pie: ["#990100", "#B90504", "#333333", "#8c8c8c"] };
}