import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaBriefcase,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

import { compareResumeWithJD } from "../../utils/jdMatcher";

function JDMatcher({ resumeText }) {

  const [jdText, setJdText] = useState("");

  const result = compareResumeWithJD(
    resumeText,
    jdText
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
        duration: .5,
      }}

      className="card shadow-lg border-0"

      style={{
        borderRadius: "20px",
      }}

    >

      <div className="card-body">

        <h4 className="fw-bold mb-4">

          <FaBriefcase
            className="me-2 text-primary"
          />

          Resume vs Job Description

        </h4>

        <textarea

          className="form-control"

          rows="8"

          placeholder="Paste Job Description Here..."

          value={jdText}

          onChange={(e) =>
            setJdText(e.target.value)
          }

          style={{
            borderRadius: "15px",
          }}

        />

        {
          jdText && (
                        <div className="mt-4">

              <h5 className="fw-bold">

                🎯 Match Score

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
                    width: `${result.score}%`,
                  }}
                />

              </div>

              <h2 className="fw-bold text-success mt-3">

                {result.score}%

              </h2>

              <hr />

              <h5 className="fw-bold text-success">

                <FaCheckCircle className="me-2" />

                Matched Skills

              </h5>

              {

                result.matched.length > 0 ? (

                  result.matched.map((skill, index) => (

                    <span

                      key={index}

                      className="badge bg-success me-2 mb-2"

                    >

                      {skill}

                    </span>

                  ))

                ) : (

                  <p className="text-muted">

                    No matched skills found.

                  </p>

                )

              }

              <hr />

              <h5 className="fw-bold text-danger">

                <FaTimesCircle className="me-2" />

                Missing Skills

              </h5>

              {

                result.missing.length > 0 ? (

                  result.missing.map((skill, index) => (

                    <span

                      key={index}

                      className="badge bg-danger me-2 mb-2"

                    >

                      {skill}

                    </span>

                  ))

                ) : (

                  <p className="text-success">

                    Excellent! No missing skills.

                  </p>

                )

              }

              <div

                className="alert alert-info mt-4"

                style={{
                  borderRadius: "15px",
                }}

              >

                <h6 className="fw-bold">

                  🤖 AI Suggestion

                </h6>

                <p className="mb-0">

                  {

                    result.score >= 90

                      ? "Excellent! Your resume matches this job description very well."

                      : result.score >= 70

                      ? "Good match. Add the missing skills to improve your chances."

                      : "Your resume needs more relevant skills for this job. Consider updating your projects and technical skills."

                  }

                </p>

              </div>

            </div>

          )

        }

      </div>

    </motion.div>

  );

}

export default JDMatcher;