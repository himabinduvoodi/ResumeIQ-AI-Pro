import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { skillsData } from "../../data/dashboardData";

function SkillsChart() {
  return (
    <div
      className="card shadow border-0"
      style={{
        borderRadius: "20px",
      }}
    >
      <div className="card-body">

        <h5 className="fw-bold mb-4">
          💻 Technical Skills
        </h5>

        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <BarChart data={skillsData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="value"
              fill="#2563eb"
              radius={[8, 8, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>
    </div>
  );
}

export default SkillsChart;