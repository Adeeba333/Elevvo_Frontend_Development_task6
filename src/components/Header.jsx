import NotificationDropdown from "./notificationDropdown";
import ThemeToggle from "./ThemeToggle";

export default function Header({ onMenuClick }) {
    return (
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-line bg-surface px-4 sm:px-6">
        <div className="flex items-center gap-3">
            <button
            onClick={onMenuClick}
            className="rounded-md border border-ink/25 px-3 py-1 text-sm lg:hidden"
            aria-label="Open menu"
            >
            Menu
            </button>
            <span className="font-medium">Welcome back, Adeeba</span>
        </div>

        <div className="flex items-center gap-2">
            <ThemeToggle />
            <NotificationDropdown />
        </div>
        </header>
    );
}