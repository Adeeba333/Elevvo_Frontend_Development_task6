import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { monthlyEarnings } from "../data/mockData";
import { useChartColors } from "../context/ThemeContext";

export default function EarningsChart() {
    const c = useChartColors();
    const tip = { background: c.surface, border: `1px solid ${c.grid}`, color: c.text };

    return (
        <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyEarnings}>
            <CartesianGrid stroke={c.grid} strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" tick={{ fill: c.text }} stroke={c.grid} />
            <YAxis tick={{ fill: c.text }} stroke={c.grid} />
            <Tooltip
                formatter={(v) => `$${v}`}
                contentStyle={tip}
                itemStyle={{ color: c.text }}
                labelStyle={{ color: c.text }}
                cursor={{ fill: c.grid, opacity: 0.4 }}
            />
            <Bar dataKey="amount" fill={c.bar} radius={[4, 4, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
        </div>
    );
}