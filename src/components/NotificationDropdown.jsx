import { useState, useRef, useEffect } from "react";
import { activities } from "../data/mockData";

export default function NotificationDropdown() {
    const [open, setOpen] = useState(false);
    const boxRef = useRef(null);

    // Close the dropdown when the user clicks outside it
    useEffect(() => {
        function handleClickOutside(e) {
        if (boxRef.current && !boxRef.current.contains(e.target)) setOpen(false);
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const recent = activities.slice(0, 3);

    return (
        <div className="relative" ref={boxRef}>
        <button
            onClick={() => setOpen((prev) => !prev)}
            className="relative rounded-md border border-ink/25 px-3 py-1 text-sm hover:bg-canvas"
            aria-label="Notifications"
        >
            Alerts
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-brand-light" />
        </button>

        {open && (
            <div className="absolute right-0 mt-2 w-72 rounded-lg border border-line bg-surface p-2 shadow-lg">
            <p className="px-2 py-1 text-sm font-medium">Recent activity</p>
            <ul>
                {recent.map((item) => (
                <li key={item.id} className="rounded-md px-2 py-2 text-sm hover:bg-canvas">
                    <p>{item.text}</p>
                    <p className="text-xs text-ink/60">{item.time}</p>
                </li>
                ))}
            </ul>
            </div>
        )}
        </div>
    );
}