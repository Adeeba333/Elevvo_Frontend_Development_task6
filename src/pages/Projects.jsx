import { useState } from "react";
import StatusBadge from "../components/StatusBadge";
import { projects } from "../data/mockData";

const filters = ["All", "Active", "Pending", "Completed", "Overdue"];

const formatDate = (iso) =>
    new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

export default function Projects() {
    const [filter, setFilter] = useState("All");

    const visible = filter === "All" ? projects : projects.filter((p) => p.status === filter);

    return (
        <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Projects</h2>

        <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
            <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-3 py-1 text-sm ${
                filter === f ? "border-brand bg-brand text-white" : "border-ink/25 bg-white"
                }`}
            >
                {f}
            </button>
            ))}
        </div>

        {visible.length === 0 ? (
            <p className="text-sm text-ink/60">No {filter.toLowerCase()} projects.</p>
        ) : (
            <>
            {/* Table: tablet and desktop */}
            <div className="hidden overflow-hidden rounded-lg border border-line bg-white md:block">
                <table className="w-full text-left text-sm">
                <thead className="bg-canvas text-ink/70">
                    <tr>
                    <th className="px-4 py-3">Project</th>
                    <th className="px-4 py-3">Client</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Deadline</th>
                    </tr>
                </thead>
                <tbody>
                    {visible.map((p) => (
                    <tr key={p.id} className="border-t border-line">
                        <td className="px-4 py-3 font-medium">{p.name}</td>
                        <td className="px-4 py-3">{p.client}</td>
                        <td className="px-4 py-3"><StatusBadge status={p.status} /></td>
                        <td className="px-4 py-3">{formatDate(p.deadline)}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>

            {/* Cards: mobile */}
            <div className="space-y-3 md:hidden">
                {visible.map((p) => (
                <div key={p.id} className="rounded-lg border border-line bg-white p-4">
                    <div className="flex items-start justify-between gap-2">
                    <p className="font-medium">{p.name}</p>
                    <StatusBadge status={p.status} />
                    </div>
                    <p className="mt-1 text-sm text-ink/70">{p.client}</p>
                    <p className="text-xs text-ink/60">Due {formatDate(p.deadline)}</p>
                </div>
                ))}
            </div>
            </>
        )}
        </div>
    );
}
