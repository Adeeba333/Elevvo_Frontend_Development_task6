import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
        onClick={toggleTheme}
        className="rounded-md border border-ink/25 px-3 py-1 text-sm hover:bg-canvas"
        aria-label="Toggle dark and light theme"
        >
        {theme === "dark" ? "Light" : "Dark"}
        </button>
    );
    }