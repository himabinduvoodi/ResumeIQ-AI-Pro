import { motion } from "framer-motion";
import {
  FaBullseye,
  FaBrain,
  FaBriefcase,
  FaUserTie,
} from "react-icons/fa";

function StatsCards({ atsScore = 0 }) {
  const stats = [
    {
      title: "ATS Score",
      value: `${atsScore}%`,
      icon: <FaBullseye size={30} />,
      color: "#2563eb",
      gradient: "linear-gradient(135deg,#2563eb,#60a5fa)",
    },
    {
      title: "Skills Detected",
      value: `${Math.floor(atsScore / 8) + 8}`,
      icon: <FaBrain size={30} />,
      color: "#9333ea",
      gradient: "linear-gradient(135deg,#9333ea,#c084fc)",
    },
    {
      title: "Job Match",
      value: `${Math.min(atsScore + 5, 100)}%`,
      icon: <FaBriefcase size={30} />,
      color: "#16a34a",
      gradient: "linear-gradient(135deg,#16a34a,#4ade80)",
    },
    {
      title: "Interview Ready",
      value: `${Math.min(atsScore + 2, 100)}%`,
      icon: <FaUserTie size={30} />,
      color: "#ea580c",
      gradient: "linear-gradient(135deg,#ea580c,#fb923c)",
    },
  ];

  return (
    <div className="row g-4">
      {stats.map((item, index) => (
        <div className="col-lg-3 col-md-6" key={index}>
          <motion.div
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            transition={{
              duration: 0.25,
            }}
            className="shadow-lg"
            style={{
              borderRadius: "22px",
              overflow: "hidden",
              background: "#ffffff",
              cursor: "pointer",
            }}
          >
            {/* Top Gradient */}
            <div
              style={{
                height: "7px",
                background: item.gradient,
              }}
            />

            <div className="p-4">

              <div className="d-flex justify-content-between align-items-center">

                <div>

                  <p
                    className="text-secondary mb-2"
                    style={{
                      fontWeight: 600,
                      fontSize: "14px",
                    }}
                  >
                    {item.title}
                  </p>

                  <h2
                    className="fw-bold"
                    style={{
                      color: item.color,
                    }}
                  >
                    {item.value}
                  </h2>

                </div>

                <div
                  style={{
                    width: "65px",
                    height: "65px",
                    borderRadius: "18px",
                    background: item.gradient,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </div>

              </div>

              <div className="mt-4">

                <div
                  className="progress"
                  style={{
                    height: "8px",
                    borderRadius: "20px",
                  }}
                >
                  <div
                    className="progress-bar"
                    style={{
                      width: item.value,
                      background: item.gradient,
                    }}
                  />

                </div>

              </div>

            </div>

          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;