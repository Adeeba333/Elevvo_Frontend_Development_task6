import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        function handleScroll() {
        setVisible(window.scrollY > 300);
        }
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (!visible) return null;

    return (
        <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white shadow-lg hover:bg-brand-light"
        aria-label="Scroll to top"
        title="Back to top"
        >
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
        </svg>
        </button>
    );
}