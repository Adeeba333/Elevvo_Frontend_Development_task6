import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function DashboardLayout() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [desktopOpen, setDesktopOpen] = useState(true);

    function handleMenuClick() {
        const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
        if (isDesktop) {
        setDesktopOpen((prev) => !prev);
        } else {
        setMobileOpen(true);
        }
    }

    function closeAll() {
        setMobileOpen(false);
        setDesktopOpen(false);
    }

    return (
        <div className="min-h-screen bg-canvas text-ink">
        <Sidebar
            mobileOpen={mobileOpen}
            desktopOpen={desktopOpen}
            onNavigate={() => setMobileOpen(false)}
            onCloseButton={closeAll}
        />
        <div className={`transition-[padding] duration-300 ${desktopOpen ? "lg:pl-60" : "lg:pl-0"}`}>
            <Header onMenuClick={handleMenuClick} />
            <main className="p-4 sm:p-6">
            <Outlet />
            </main>
        </div>
        <ScrollToTopButton />
        </div>
    );
}