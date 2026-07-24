import { motion } from "framer-motion";
import {
  FaRobot,
  FaBullseye,
  FaChartLine,
  FaBriefcase,
} from "react-icons/fa";

function WelcomeCard({ atsScore = 0 }) {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const user =
    storedUser?.name ||
    storedUser?.email?.split("@")[0] ||
    "User";

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: .6,
      }}
      className="mb-4"
    >
      <div
        className="shadow-lg"
        style={{
          borderRadius: "25px",
          overflow: "hidden",
          background:
            "linear-gradient(135deg,#2563eb,#4f46e5,#7c3aed)",
          color: "#fff",
        }}
      >
        <div className="p-5">

          <div className="row align-items-center">

            {/* LEFT */}

            <div className="col-lg-8">

              <h1
                className="fw-bold mb-3"
                style={{
                  fontSize: "38px",
                }}
              >
                👋 {greeting},
                <br />
                {user}
              </h1>

              <p
                style={{
                  fontSize: "18px",
                  opacity: .9,
                  maxWidth: "550px",
                }}
              >
                Welcome back to <b>ResumeIQ AI Pro</b>.
                Analyze your resume, improve ATS score,
                match jobs and prepare for interviews
                using Artificial Intelligence.
              </p>

              <div className="d-flex gap-4 mt-4 flex-wrap">

                <div>

                  <h2 className="fw-bold">
                    {atsScore}%
                  </h2>

                  <small>Current ATS Score</small>

                </div>

                <div>

                  <h2 className="fw-bold">
                    96%
                  </h2>

                  <small>AI Accuracy</small>

                </div>

                <div>

                  <h2 className="fw-bold">
                    18+
                  </h2>

                  <small>Skills Detected</small>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="col-lg-4 text-center">

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
              >

                <FaRobot
                  size={120}
                  color="#ffffff"
                />

              </motion.div>

              <div
                className="mt-4 d-flex justify-content-center gap-3"
              >

                <FaBullseye size={28} />

                <FaChartLine size={28} />

                <FaBriefcase size={28} />

              </div>

            </div>

          </div>

        </div>

      </div>

    </motion.div>
  );
}

export default WelcomeCard;