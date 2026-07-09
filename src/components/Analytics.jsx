import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

function Analytics({ atsScore, resumeText }) {

  const text = resumeText.toLowerCase();

  const skills = text.includes("skills") ? 1 : 0;

  const education = text.includes("education") ? 1 : 0;

  const projects = text.includes("project") ? 1 : 0;

  const experience =
    text.includes("experience") ||
    text.includes("internship")
      ? 1
      : 0;

  const certificates =
    text.includes("certificate") ||
    text.includes("certification")
      ? 1
      : 0;

  const pieData = {
    labels: [
      "Skills",
      "Education",
      "Projects",
      "Experience",
      "Certificates",
    ],

    datasets: [
      {
        label: "Resume Sections",
        data: [
          skills,
          education,
          projects,
          experience,
          certificates,
        ],
        backgroundColor: [
          "#36A2EB",
          "#4BC0C0",
          "#FFCE56",
          "#FF6384",
          "#9966FF",
        ],
      },
    ],
  };

  const barData = {
    labels: ["ATS Score"],

    datasets: [
      {
        label: "Score",
        data: [atsScore],
        backgroundColor: "#36A2EB",
      },
    ],
  };

  const barOptions = {
    responsive: true,

    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (

    <div
      className="card shadow-lg border-0 mt-4"
      style={{
        borderRadius: "20px",
      }}
    >

      <div className="card-body">

        <h3 className="fw-bold mb-4">
          📊 Resume Analytics
        </h3>

        <div className="row">

          <div className="col-lg-6 mb-4">

            <div
              className="card border-0 shadow-sm"
              style={{
                borderRadius: "15px",
              }}
            >

              <div className="card-body">

                <h5 className="text-center mb-3">
                  🥧 Resume Sections
                </h5>

                <Pie data={pieData} />

              </div>

            </div>

          </div>

          <div className="col-lg-6 mb-4">

            <div
              className="card border-0 shadow-sm"
              style={{
                borderRadius: "15px",
              }}
            >

              <div className="card-body">

                <h5 className="text-center mb-3">
                  📈 ATS Score
                </h5>

                <Bar
                  data={barData}
                  options={barOptions}
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Analytics;