import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { taskTypes } from "../data/mockData";
import { useChartColors } from "../context/ThemeContext";

export default function TaskPieChart() {
    const c = useChartColors();

    return (
        <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
            <Pie data={taskTypes} dataKey="value" nameKey="name" outerRadius={80} stroke={c.surface}>
                {taskTypes.map((entry, i) => (
                <Cell key={entry.name} fill={c.pie[i % c.pie.length]} />
                ))}
            </Pie>
            <Tooltip
                contentStyle={{ background: c.surface, border: `1px solid ${c.grid}`, color: c.text }}
                itemStyle={{ color: c.text }}
            />
            <Legend formatter={(v) => <span style={{ color: c.text }}>{v}</span>} />
            </PieChart>
        </ResponsiveContainer>
        </div>
    );
}