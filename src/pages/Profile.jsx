import { useState } from "react";

export default function Profile() {
    const [form, setForm] = useState({
        name: "Mahmuda Adeeba Tul Husna",
        email: "adeeba@example.com",
        password: "",
    });
    const [saved, setSaved] = useState(false);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
        setSaved(false);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSaved(true); // mock save, no backend
    }

    const inputClass = "mt-1 w-full rounded-md border border-ink/25 px-3 py-2 text-sm focus:border-brand focus:outline-none";

    return (
        <div className="max-w-lg space-y-4">
        <h2 className="text-2xl font-semibold">Profile Settings</h2>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-line bg-white p-5">
            <label className="block text-sm">
            Full name
            <input name="name" value={form.name} onChange={handleChange} className={inputClass} />
            </label>
            <label className="block text-sm">
            Email
            <input name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} />
            </label>
            <label className="block text-sm">
            New password
            <input
                name="password"
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                className={inputClass}
            />
            </label>

            <button type="submit" className="rounded-md bg-brand px-4 py-2 text-sm text-white hover:bg-brand-light">
            Save changes
            </button>
            {saved && <p className="text-sm text-brand">Changes saved.</p>}
        </form>
        </div>
    );
}
