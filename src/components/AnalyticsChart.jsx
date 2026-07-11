import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

function AnalyticsChart() {
  const { darkMode } = useTheme();

  const history =
    JSON.parse(localStorage.getItem("resumeHistory")) || [];

  const data = history
    .slice(0, 7)
    .reverse()
    .map((item, index) => ({
      name: `R${index + 1}`,
      score: item.score,
    }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .6 }}
      className="card border-0 shadow-lg"
      style={{
        borderRadius: "20px",
        background: darkMode ? "#1e293b" : "#fff",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <div className="card-body">

        <h4 className="fw-bold mb-4">
          📈 ATS Score Analytics
        </h4>

        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <LineChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="score"
              stroke="#2563eb"
              strokeWidth={4}
            />

          </LineChart>
        </ResponsiveContainer>

      </div>
    </motion.div>
  );
}

export default AnalyticsChart;