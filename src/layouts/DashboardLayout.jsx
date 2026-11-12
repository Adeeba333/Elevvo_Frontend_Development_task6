import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function DashboardLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-canvas text-ink">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="lg:pl-60">
            <Header onMenuClick={() => setSidebarOpen(true)} />
            <main className="p-4 sm:p-6">
            <Outlet />
            </main>
        </div>
        </div>
    );
}
