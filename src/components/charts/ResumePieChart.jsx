import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

import { resumeSections } from "../../data/dashboardData";

const COLORS = [
  "#2563eb",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
];

function ResumePieChart() {
  return (
    <div
      className="card shadow border-0"
      style={{
        borderRadius: "20px",
      }}
    >
      <div className="card-body">

        <h5 className="fw-bold mb-4">
          📄 Resume Sections
        </h5>

        <ResponsiveContainer
          width="100%"
          height={320}
        >
          <PieChart>

            <Pie
              data={resumeSections}
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={50}
              paddingAngle={4}
              dataKey="value"
              label
            >

              {resumeSections.map((entry, index) => (
                <Cell
                  key={index}
                  fill={
                    COLORS[index % COLORS.length]
                  }
                />
              ))}

            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
}

export default ResumePieChart;