import { useState } from "react";
import { ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { monthlyEarnings } from "../data/mockData";
import { useChartColors } from "../context/ThemeContext";

export default function EarningsChart() {
    const c = useChartColors();
    const [activeIndex, setActiveIndex] = useState(null);
    const tip = { background: c.surface, border: `1px solid ${c.grid}`, color: c.text };

    return (
        <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyEarnings} onMouseLeave={() => setActiveIndex(null)}>
            <CartesianGrid stroke={c.grid} strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" tick={{ fill: c.text }} stroke={c.grid} />
            <YAxis tick={{ fill: c.text }} stroke={c.grid} />
            <Tooltip
                formatter={(v) => `$${v}`}
                contentStyle={tip}
                itemStyle={{ color: c.text }}
                labelStyle={{ color: c.text }}
                cursor={false}
            />
            <Bar
                dataKey="amount"
                radius={[4, 4, 0, 0]}
                onMouseEnter={(_, index) => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
            >
                {monthlyEarnings.map((entry, i) => (
                <Cell
                    key={entry.month}
                    fill={c.bar}
                    opacity={activeIndex === null || activeIndex === i ? 1 : 0.6}
                    stroke={c.bar}
                    strokeWidth={activeIndex === i ? 3 : 0}
                />
                ))}
            </Bar>
            </BarChart>
        </ResponsiveContainer>
        </div>
    );
}