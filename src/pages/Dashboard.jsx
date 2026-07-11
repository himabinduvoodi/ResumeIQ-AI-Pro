import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import UploadCard from "../components/UploadCard";
import ResumePreview from "../components/ResumePreview";
import ATSCard from "../components/ATSCard";
import ResumeAnalysis from "../components/ResumeAnalysis";
import Suggestions from "../components/Suggestions";
import { extractTextFromPDF } from "../utils/extractText";

function Dashboard() {
  const [resume, setResume] = useState(null);
  const [resumeText, setResumeText] = useState("");
  const [atsScore, setAtsScore] = useState(0);

  const handleResume = async (file) => {
    setResume(file);

    try {
      const text = await extractTextFromPDF(file);
      setResumeText(text);

      let score = 40;

      // Email
      if (
        /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(text)
      )
        score += 10;

      // Phone
      if (
        /(\+91[\s-]?)?[6-9]\d{9}/.test(text)
      )
        score += 10;

      // Skills
      if (
        /python|java|javascript|react|node|html|css|sql|mysql|mongodb|c\+\+/i.test(
          text
        )
      )
        score += 20;

      // Projects
      if (/project/i.test(text))
        score += 10;

      // Education
      if (/education/i.test(text))
        score += 10;

      // Experience
      if (/experience|internship/i.test(text))
        score += 10;

      if (score > 100)
        score = 100;

      setAtsScore(score);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex bg-light">

      <Sidebar />

      <div
        style={{
          marginLeft: "260px",
          width: "100%",
          minHeight: "100vh",
          padding: "25px",
        }}
      >
        <Topbar />

        <div className="row mt-4">

          {/* LEFT SIDE */}

          <div className="col-lg-8">

            <UploadCard setResume={handleResume} />

            <div className="mt-4">
              <ResumePreview file={resume} />
            </div>

            {/* Resume Statistics */}

            <div className="row mt-4">

              <div className="col-md-4 mb-3">
                <div
                  className="card shadow border-0"
                  style={{ borderRadius: "15px" }}
                >
                  <div className="card-body text-center">
                    <h6 className="text-muted">
                      Total Words
                    </h6>

                    <h2 className="fw-bold text-primary">
                      {resumeText
                        ? resumeText.split(/\s+/).filter(Boolean).length
                        : 0}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <div
                  className="card shadow border-0"
                  style={{ borderRadius: "15px" }}
                >
                  <div className="card-body text-center">
                    <h6 className="text-muted">
                      Characters
                    </h6>

                    <h2 className="fw-bold text-success">
                      {resumeText.length}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <div
                  className="card shadow border-0"
                  style={{ borderRadius: "15px" }}
                >
                  <div className="card-body text-center">
                    <h6 className="text-muted">
                      Resume Uploaded
                    </h6>

                    <h2 className="fw-bold text-danger">
                      {resume ? "Yes" : "No"}
                    </h2>
                  </div>
                </div>
              </div>

            </div>

            {/* Extracted Text */}

            <div
              className="card shadow-lg border-0 mt-4"
              style={{
                borderRadius: "20px",
              }}
            >
              <div className="card-body">

                <h3 className="fw-bold mb-3">
                  📄 Extracted Resume Text
                </h3>

                <div
                  style={{
                    maxHeight: "400px",
                    overflowY: "auto",
                    whiteSpace: "pre-wrap",
                    background: "#f8f9fa",
                    padding: "20px",
                    borderRadius: "15px",
                    lineHeight: "1.7",
                    fontSize: "15px",
                  }}
                >
                  {resumeText ? (
                    resumeText
                  ) : (
                    <div className="text-center py-5">
                      <h5 className="text-muted">
                        Upload a resume to view extracted text
                      </h5>
                    </div>
                  )}
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}

          <div
            className="col-lg-4"
            style={{
              position: "sticky",
              top: "20px",
              height: "fit-content",
            }}
          >

            <ATSCard score={atsScore} />

            <div className="mt-4">
              <ResumeAnalysis resumeText={resumeText} />
            </div>

            <div className="mt-4">
              <Suggestions resumeText={resumeText} />
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;