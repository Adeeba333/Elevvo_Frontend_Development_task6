import StatCard from "../components/StatCard";
import ActivityList from "../components/ActivityList";
import EarningsChart from "../components/EarningsChart";
import TaskPieChart from "../components/TaskPieChart";
import { stats, activities } from "../data/mockData";

export default function Overview() {
    return (
        <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Overview</h2>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {stats.map((s) => (
            <StatCard key={s.id} label={s.label} value={s.value} note={s.note} />
            ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
            <section className="rounded-lg border border-line bg-surface p-5">
            <h3 className="mb-3 font-medium">Monthly earnings</h3>
            <EarningsChart />
            </section>
            <section className="rounded-lg border border-line bg-surface p-5">
            <h3 className="mb-3 font-medium">Tasks by type</h3>
            <TaskPieChart />
            </section>
        </div>

        <section className="rounded-lg border border-line bg-surface p-5">
            <h3 className="mb-2 font-medium">Recent activity</h3>
            <ActivityList items={activities} />
        </section>
        </div>
    );
}