import { useState } from "react";

function CoverLetter() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [skills, setSkills] = useState("");
  const [letter, setLetter] = useState("");

  const generateLetter = () => {
    if (!name || !role || !company) {
      alert("Please fill all required fields.");
      return;
    }

    const coverLetter = `
${name}

Dear Hiring Manager,

I am excited to apply for the ${role} position at ${company}.

With my knowledge in ${skills || "software development"}, I am confident that I can contribute effectively to your team. I have strong problem-solving skills, a passion for learning new technologies, and the ability to work collaboratively in fast-paced environments.

I am eager to bring my technical knowledge, dedication, and enthusiasm to ${company}. I believe this opportunity will help me grow professionally while adding value to your organization.

Thank you for considering my application. I look forward to discussing how my skills and passion align with your team's goals.

Sincerely,

${name}
`;

    setLetter(coverLetter);
  };

  const downloadLetter = () => {
    const blob = new Blob([letter], {
      type: "text/plain",
    });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "CoverLetter.txt";
    link.click();
  };

  return (
    <div className="container py-5">

      <div
        className="card shadow-lg border-0"
        style={{ borderRadius: "20px" }}
      >

        <div className="card-body">

          <h2 className="fw-bold text-center mb-4">
            📄 AI Cover Letter Generator
          </h2>

          <div className="row">

            <div className="col-md-6 mb-3">
              <label className="form-label">Your Name</label>
              <input
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Job Role</label>
              <input
                className="form-control"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Company</label>
              <input
                className="form-control"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Skills</label>
              <input
                className="form-control"
                placeholder="Java, React, SQL..."
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </div>

          </div>

          <button
            className="btn btn-primary mt-3"
            onClick={generateLetter}
          >
            Generate Cover Letter
          </button>

          {letter && (
            <>
              <div
                className="card mt-4 border-0 shadow-sm"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body">

                  <h5 className="fw-bold mb-3">
                    Generated Cover Letter
                  </h5>

                  <textarea
                    className="form-control"
                    rows="18"
                    value={letter}
                    readOnly
                  />

                </div>
              </div>

              <button
                className="btn btn-success mt-3"
                onClick={downloadLetter}
              >
                Download Cover Letter
              </button>
            </>
          )}

        </div>

      </div>

    </div>
  );
}

export default CoverLetter;