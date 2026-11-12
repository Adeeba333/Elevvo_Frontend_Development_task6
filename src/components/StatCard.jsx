export default function StatCard({ label, value, note }) {
    return (
        <div className="rounded-lg border border-line bg-surface p-5">
        <p className="text-sm text-ink/60">{label}</p>
        <p className="mt-1 text-3xl font-semibold">{value}</p>
        <p className="mt-1 text-xs text-ink/60">{note}</p>
        </div>
    );
}