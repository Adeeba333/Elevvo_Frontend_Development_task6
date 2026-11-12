export default function ActivityList({ items }) {
    if (items.length === 0) {
        return <p className="text-sm text-ink/60">No recent activity yet.</p>;
    }
    return (
        <ul className="divide-y divide-line">
        {items.map((item) => (
            <li key={item.id} className="flex justify-between gap-4 py-3 text-sm">
            <span>{item.text}</span>
            <span className="shrink-0 text-xs text-ink/60">{item.time}</span>
            </li>
        ))}
        </ul>
    );
}
