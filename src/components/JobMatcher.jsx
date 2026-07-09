import { useState } from "react";

function JobMatcher({ resumeText }) {

  const [jobRole, setJobRole] = useState("");

  const [result, setResult] = useState(null);

  const jobs = {

    "java developer": [
      "java",
      "spring",
      "spring boot",
      "sql",
      "git",
      "html",
      "css"
    ],

    "frontend developer": [
      "html",
      "css",
      "javascript",
      "react",
      "bootstrap",
      "git"
    ],

    "python developer": [
      "python",
      "django",
      "flask",
      "sql",
      "git"
    ],

    "full stack developer": [
      "html",
      "css",
      "javascript",
      "react",
      "node",
      "mongodb",
      "sql",
      "git"
    ]

  };

  const checkMatch = () => {

    const role = jobRole.toLowerCase();

    if (!jobs[role]) {

      alert("Job Role Not Found");

      return;

    }

    const requiredSkills = jobs[role];

    const foundSkills = [];

    const missingSkills = [];
        requiredSkills.forEach((skill) => {

      if (
        resumeText.toLowerCase().includes(skill)
      ) {

        foundSkills.push(skill);

      } else {

        missingSkills.push(skill);

      }

    });

    const score = Math.round(

      (foundSkills.length / requiredSkills.length) * 100

    );

    setResult({

      score,

      foundSkills,

      missingSkills,

    });

  };

  return (

    <div
      className="card shadow-lg border-0"
      style={{
        borderRadius: "20px",
      }}
    >

      <div className="card-body">

        <h3 className="fw-bold mb-4">

          💼 Job Role Matcher

        </h3>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter Job Role"
          value={jobRole}
          onChange={(e) =>
            setJobRole(e.target.value)
          }
        />

        <button
          className="btn btn-primary mb-4"
          onClick={checkMatch}
        >

          Check Match

        </button>
                {result && (

          <>

            <h4 className="text-success mb-3">

              🎯 Match Score : {result.score}%

            </h4>

            <hr />

            <div className="row">

              <div className="col-md-6">

                <h5 className="text-success">

                  ✅ Skills Found

                </h5>

                <ul>

                  {result.foundSkills.map((skill, index) => (

                    <li key={index}>

                      {skill}

                    </li>

                  ))}

                </ul>

              </div>

              <div className="col-md-6">

                <h5 className="text-danger">

                  ❌ Missing Skills

                </h5>

                <ul>

                  {result.missingSkills.map((skill, index) => (

                    <li key={index}>

                      {skill}

                    </li>

                  ))}

                </ul>

              </div>

            </div>

            <div className="alert alert-info mt-4">

              <strong>Recommendation:</strong>

              <br />

              Learn the missing skills to improve
              your ATS score and increase your
              chances of getting shortlisted.

            </div>

          </>

        )}
              </div>

    </div>

  );

}

export default JobMatcher;