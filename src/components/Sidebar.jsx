import { NavLink } from "react-router-dom";

const links = [
    { to: "/", label: "Overview" },
    { to: "/projects", label: "Projects" },
    { to: "/profile", label: "Profile Settings" },
];

export default function Sidebar({ open, onClose }) {
    return (
        <>
        {open && (
            <div className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={onClose} />
        )}

        <aside
            className={`fixed inset-y-0 left-0 z-40 w-60 bg-sidebar text-white p-5 transition-transform
            ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
        >
            <h1 className="text-xl font-semibold mb-8">FreelaAxis</h1>
            <nav className="flex flex-col gap-1">
            {links.map((link) => (
                <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={onClose}
                className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-sm ${
                    isActive ? "bg-brand font-medium" : "hover:bg-white/10"
                    }`
                }
                >
                {link.label}
                </NavLink>
            ))}
            </nav>
        </aside>
        </>
    );
}