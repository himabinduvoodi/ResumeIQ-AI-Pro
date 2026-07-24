import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { atsTrendData } from "../../data/dashboardData";

function ATSTrendChart() {
  return (
    <div
      className="card shadow border-0"
      style={{
        borderRadius: "20px",
      }}
    >
      <div className="card-body">

        <h5 className="fw-bold mb-4">
          📈 ATS Score Trend
        </h5>

        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <LineChart data={atsTrendData}>

            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="name"
            />

            <YAxis
              domain={[50, 100]}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="score"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{
                r: 6,
                fill: "#2563eb",
              }}
              activeDot={{
                r: 8,
              }}
            />

          </LineChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
}

export default ATSTrendChart;