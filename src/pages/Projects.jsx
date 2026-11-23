import { useSearchParams } from "react-router-dom";
import StatusBadge from "../components/StatusBadge";
import { projects } from "../data/mockData";

const filters = ["All", "Active", "Pending", "Completed", "Overdue"];

const formatDate = (iso) =>
    new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

export default function Projects() {
    const [searchParams, setSearchParams] = useSearchParams();

    const statusParam = searchParams.get("status");
    const filter =
        filters.find((f) => f.toLowerCase() === statusParam?.toLowerCase()) ?? "All";

    const changeFilter = (f) => {
        setSearchParams(
        (prev) => {
            const next = new URLSearchParams(prev);
            if (f === "All") next.delete("status");
            else next.set("status", f.toLowerCase());
            return next;
        },
        { replace: true }
        );
    };

    const visible = filter === "All" ? projects : projects.filter((p) => p.status === filter);

    return (
        <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Projects</h2>

        <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
            <button
                key={f}
                onClick={() => changeFilter(f)}
                aria-pressed={filter === f}
                className={`rounded-full border px-3 py-1 text-sm ${
                filter === f
                    ? "border-brand bg-brand text-white"
                    : "border-ink/25 bg-surface text-ink hover:bg-canvas"
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
            <div className="hidden overflow-hidden rounded-lg border border-line bg-surface md:block">
                <table className="w-full text-left text-sm text-ink">
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

            <div className="space-y-3 md:hidden">
                {visible.map((p) => (
                <div key={p.id} className="rounded-lg border border-line bg-surface p-4">
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