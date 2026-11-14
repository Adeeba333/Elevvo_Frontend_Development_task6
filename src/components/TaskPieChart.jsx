import { useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend, Sector } from "recharts";
import { taskTypes } from "../data/mockData";
import { useChartColors } from "../context/ThemeContext";

// Draws the hovered slice a little bigger than the others
function renderActiveShape(props) {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
    return (
        <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 8}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        />
    );
    }

export default function TaskPieChart() {
    const c = useChartColors();
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
            <Pie
                data={taskTypes}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                stroke={c.surface}
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                onMouseEnter={(_, index) => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
            >
                {taskTypes.map((entry, i) => (
                <Cell
                    key={entry.name}
                    fill={c.pie[i % c.pie.length]}
                    opacity={activeIndex === null || activeIndex === i ? 1 : 0.6}
                />
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