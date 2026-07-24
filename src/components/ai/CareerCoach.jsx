import { motion } from "framer-motion";

import {
  FaRobot,
  FaBullseye,
  FaCheckCircle,
  FaExclamationTriangle,
  FaRoad,
  FaChartLine,
} from "react-icons/fa";

function CareerCoach({ atsScore }) {

  const strengths = [];

  const weaknesses = [];

  const roadmap = [];

  // Strengths

  if (atsScore >= 80) {

    strengths.push("Excellent ATS Compatibility");

    strengths.push("Strong Resume Structure");

    strengths.push("Good Technical Skills");

  } else if (atsScore >= 60) {

    strengths.push("Good Resume");

    strengths.push("Basic ATS Optimization");

  } else {

    strengths.push("Resume Uploaded Successfully");

  }

  // Weaknesses

  if (atsScore < 90)
    weaknesses.push("Add more projects");

  if (atsScore < 85)
    weaknesses.push("Improve resume summary");

  if (atsScore < 80)
    weaknesses.push("Add certifications");

  if (atsScore < 75)
    weaknesses.push("Improve technical skills");

  if (atsScore < 70)
    weaknesses.push("Include internship experience");

  // Roadmap

  roadmap.push("Complete 2 Industry Level Projects");

  roadmap.push("Practice DSA Daily");

  roadmap.push("Improve Aptitude");

  roadmap.push("Practice Mock Interviews");

  roadmap.push("Apply for Product & Service Companies");

  const placementChance = Math.min(
    atsScore + 8,
    100
  );

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 20,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.5,
      }}

      className="card border-0 shadow-lg"

      style={{
        borderRadius: "20px",
      }}

    >

      <div className="card-body">

        <div className="d-flex align-items-center mb-4">

          <FaRobot
            size={34}
            color="#2563eb"
          />

          <h4
            className="fw-bold ms-3 mb-0"
          >
            AI Career Coach
          </h4>

        </div>

        <div
          className="alert alert-primary border-0"
          style={{
            borderRadius: "15px",
          }}
        >

          <div className="d-flex justify-content-between">

            <div>

              <h6 className="mb-1">

                Current ATS Score

              </h6>

              <h2 className="fw-bold">

                {atsScore}%

              </h2>

            </div>

            <FaBullseye
              size={45}
            />

          </div>

        </div>
                {/* Strengths */}

        <div className="mt-4">

          <h5 className="fw-bold mb-3">

            <FaCheckCircle
              color="#16a34a"
              className="me-2"
            />

            Strengths

          </h5>

          <ul className="list-group">

            {strengths.map((item, index) => (

              <li
                key={index}
                className="list-group-item border-0"
              >

                ✅ {item}

              </li>

            ))}

          </ul>

        </div>

        {/* Weaknesses */}

        <div className="mt-4">

          <h5 className="fw-bold mb-3">

            <FaExclamationTriangle
              color="#ea580c"
              className="me-2"
            />

            Areas to Improve

          </h5>

          <ul className="list-group">

            {weaknesses.map((item, index) => (

              <li
                key={index}
                className="list-group-item border-0"
              >

                ⚠️ {item}

              </li>

            ))}

          </ul>

        </div>

        {/* Roadmap */}

        <div className="mt-4">

          <h5 className="fw-bold mb-3">

            <FaRoad
              color="#2563eb"
              className="me-2"
            />

            90-Day Roadmap

          </h5>

          <ul className="list-group">

            {roadmap.map((item, index) => (

              <li
                key={index}
                className="list-group-item border-0"
              >

                🚀 {item}

              </li>

            ))}

          </ul>

        </div>

        {/* Placement Chance */}

        <div className="mt-4">

          <h5 className="fw-bold">

            <FaChartLine
              className="me-2"
              color="#2563eb"
            />

            Placement Prediction

          </h5>

          <div
            className="progress mt-3"
            style={{
              height: "12px",
              borderRadius: "30px",
            }}
          >

            <div
              className="progress-bar bg-success"
              style={{
                width: `${placementChance}%`,
              }}
            />

          </div>

          <h3
            className="fw-bold text-success mt-3"
          >

            {placementChance}%

          </h3>

        </div>

        {/* AI Message */}

        <div
          className="alert alert-success mt-4 border-0"
          style={{
            borderRadius: "15px",
          }}
        >

          <h6 className="fw-bold">

            🤖 AI Recommendation

          </h6>

          <p className="mb-0">

            {placementChance >= 90
              ? "Excellent! Your resume is highly competitive. Continue practicing DSA and attend mock interviews."
              : placementChance >= 75
              ? "You're on the right track. Add one strong project, improve ATS keywords, and apply consistently."
              : "Focus on improving projects, certifications, and technical skills before applying to companies."}

          </p>

        </div>

      </div>

    </motion.div>

  );

}

export default CareerCoach;