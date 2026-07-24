import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

import { matchJobs } from "../../utils/jobMatcher";

function JobMatcher({ resumeText }) {

  const jobs = matchJobs(resumeText);

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
      className="card shadow-lg border-0"
      style={{
        borderRadius: "20px",
      }}
    >

      <div className="card-body">

        <h4 className="fw-bold mb-4">

          💼 AI Job Matcher

        </h4>

        {!resumeText ? (

          <div className="text-center py-4">

            <h6 className="text-muted">

              Upload your resume to see matching jobs.

            </h6>

          </div>

        ) : (

          jobs.map((job, index) => (

            <motion.div

              key={index}

              whileHover={{
                scale: 1.02,
              }}

              className="card border-0 shadow-sm mb-4"

              style={{
                borderRadius: "18px",
              }}

            >

              <div className="card-body">

                <div className="d-flex justify-content-between">

                  <div>

                    <h5 className="fw-bold text-primary">

                      {job.company}

                    </h5>

                    <p className="mb-2">

                      {job.role}

                    </p>

                  </div>

                  <div className="text-end">

                    <h4 className="text-success fw-bold">

                      {job.percentage}%

                    </h4>

                    <small>

                      Match

                    </small>

                  </div>

                </div>

                <div className="mt-3">

                  <p>

                    <FaMapMarkerAlt className="me-2 text-danger" />

                    {job.location}

                  </p>

                  <p>

                    <FaMoneyBillWave className="me-2 text-success" />

                    {job.package}

                  </p>

                </div>

                <div
                  className="progress"
                  style={{
                    height: "10px",
                    borderRadius: "30px",
                  }}
                >

                  <div
                    className="progress-bar bg-success"
                    style={{
                      width: `${job.percentage}%`,
                    }}
                  />

                </div>

                <div className="mt-4">

                  <h6 className="fw-bold text-success">

                    Matched Skills

                  </h6>

                  {

                    job.matched.length > 0 ?

                      job.matched.map((skill, i) => (

                        <span
                          key={i}
                          className="badge bg-success me-2 mb-2"
                        >

                          <FaCheckCircle className="me-1" />

                          {skill}

                        </span>

                      ))

                      :

                      <span className="text-muted">

                        No matching skills

                      </span>

                  }

                </div>

                <div className="mt-3">

                  <h6 className="fw-bold text-danger">

                    Missing Skills

                  </h6>

                  {

                    job.missing.map((skill, i) => (

                      <span
                        key={i}
                        className="badge bg-danger me-2 mb-2"
                      >

                        <FaTimesCircle className="me-1" />

                        {skill}

                      </span>

                    ))

                  }

                </div>

                <div
                  className="alert alert-info mt-4 mb-0"
                  style={{
                    borderRadius: "12px",
                  }}
                >

                  <strong>

                    AI Recommendation

                  </strong>

                  <br />

                  {job.missing.length === 0
                    ? "Excellent! Your resume is highly suitable for this role."
                    : `Learn ${job.missing
                        .slice(0, 3)
                        .join(", ")} to improve your chances.`}

                </div>

              </div>

            </motion.div>

          ))

        )}

      </div>

    </motion.div>

  );

}

export default JobMatcher;