const styles = {
    Active: "bg-brand/10 text-brand",
    Pending: "bg-ink/10 text-ink",
    Completed: "bg-line text-ink/70",
    Overdue: "bg-brand-light text-white",
};

export default function StatusBadge({ status }) {
    return (
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[status]}`}>
        {status}
        </span>
    );
}
