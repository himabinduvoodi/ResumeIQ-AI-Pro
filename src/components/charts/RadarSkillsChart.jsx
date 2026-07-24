import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Java",
    A: 90,
  },
  {
    subject: "Python",
    A: 85,
  },
  {
    subject: "React",
    A: 75,
  },
  {
    subject: "SQL",
    A: 80,
  },
  {
    subject: "AWS",
    A: 60,
  },
  {
    subject: "Communication",
    A: 88,
  },
];

function RadarSkillsChart() {
  return (
    <div
      className="card shadow border-0"
      style={{
        borderRadius: "20px",
      }}
    >
      <div className="card-body">

        <h5 className="fw-bold mb-4">
          🎯 Skills Radar
        </h5>

        <ResponsiveContainer
          width="100%"
          height={320}
        >
          <RadarChart data={data}>

            <PolarGrid />

            <PolarAngleAxis dataKey="subject" />

            <PolarRadiusAxis />

            <Radar
              name="Skills"
              dataKey="A"
              stroke="#2563eb"
              fill="#2563eb"
              fillOpacity={0.6}
            />

          </RadarChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
}

export default RadarSkillsChart;