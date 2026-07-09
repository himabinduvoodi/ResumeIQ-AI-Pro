import React from "react";
import { downloadReport } from "../utils/downloadReport";

function ResumeAnalysis({
  candidate,
  resumeText,
  aiAnalysis,
  atsScore,
}) {

  const wordCount = resumeText.trim()
    ? resumeText.trim().split(/\s+/).length
    : 0;

  const characterCount = resumeText.length;

  const sections = [
    {
      title: "Summary",
      found:
        resumeText.toLowerCase().includes("summary") ||
        resumeText.toLowerCase().includes("objective"),
    },
    {
      title: "Education",
      found: resumeText.toLowerCase().includes("education"),
    },
    {
      title: "Projects",
      found: resumeText.toLowerCase().includes("project"),
    },
    {
      title: "Skills",
      found: resumeText.toLowerCase().includes("skill"),
    },
    {
      title: "Experience",
      found:
        resumeText.toLowerCase().includes("experience") ||
        resumeText.toLowerCase().includes("internship"),
    },
    {
      title: "Certifications",
      found:
        resumeText.toLowerCase().includes("certificate") ||
        resumeText.toLowerCase().includes("certification"),
    },
  ];

  const availableSections = sections.filter(
    (item) => item.found
  ).length;

  const rating = Math.round(
    (availableSections / sections.length) * 100
  );

  return (
    <div
      className="card shadow-lg border-0"
      style={{
        borderRadius: "20px",
      }}
    >
      <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">

        <h4 className="mb-0">
          📋 Resume Analysis Report
        </h4>

        <button
          className="btn btn-light"
          onClick={() =>
            downloadReport({
              candidate,
              resumeText,
              atsScore,
              aiAnalysis,
            })
          }
        >
          📥 Download PDF
        </button>

      </div>

      <div className="card-body">

        <div className="row">

          {/* Candidate */}

          <div className="col-lg-4 mb-4">

            <div
              className="card h-100 shadow-sm border-0"
              style={{
                borderRadius: "15px",
              }}
            >

              <div className="card-body">

                <h5 className="fw-bold mb-3">
                  👤 Candidate Details
                </h5>

                <hr />

                <p>
                  <strong>Name</strong>
                  <br />
                  {candidate.name}
                </p>

                <p>
                  <strong>Email</strong>
                  <br />
                  {candidate.email}
                </p>

                <p>
                  <strong>Phone</strong>
                  <br />
                  {candidate.phone}
                </p>

              </div>

            </div>

          </div>

          {/* Resume Statistics */}

          <div className="col-lg-4 mb-4">

            <div
              className="card h-100 shadow-sm border-0"
              style={{
                borderRadius: "15px",
              }}
            >

              <div className="card-body">

                <h5 className="fw-bold mb-3">
                  📄 Resume Statistics
                </h5>

                <hr />

                <p>
                  <strong>Total Words</strong>
                  <br />
                  {wordCount}
                </p>

                <p>
                  <strong>Total Characters</strong>
                  <br />
                  {characterCount}
                </p>

                <p>
                  <strong>ATS Score</strong>
                  <br />
                  <span className="badge bg-success fs-6">
                    {atsScore}%
                  </span>
                </p>

                <p>
                  <strong>Resume Rating</strong>
                  <br />
                  <span className="badge bg-primary fs-6">
                    {rating}%
                  </span>
                </p>

              </div>

            </div>

          </div>

          {/* AI Analysis */}

          <div className="col-lg-4 mb-4">

            <div
              className="card h-100 shadow-sm border-0"
              style={{
                borderRadius: "15px",
              }}
            >

              <div className="card-body">

                <h5 className="fw-bold mb-3">
                  🤖 AI Analysis
                </h5>

                <hr />

                <div
                  style={{
                    maxHeight: "250px",
                    overflowY: "auto",
                    whiteSpace: "pre-wrap",
                    fontSize: "14px",
                  }}
                >
                  {aiAnalysis || "Upload a resume first."}
                </div>

              </div>

            </div>

          </div>

        </div>

        <hr />

        <div className="row">

          <div className="col-lg-6">

            <div className="card shadow-sm">

              <div className="card-body">

                <h5>✅ Resume Sections</h5>

                <hr />

                {sections.map((item, index) => (

                  <p key={index}>
                    {item.found ? "✅" : "❌"} {item.title}
                  </p>

                ))}

              </div>

            </div>

          </div>

          <div className="col-lg-6">

            <div className="card shadow-sm">

              <div className="card-body text-center">

                <h5>
                  ⭐ Overall Resume Rating
                </h5>

                <hr />

                <div className="display-4 fw-bold text-success">
                  {rating}%
                </div>

                <p className="mt-3 text-muted">
                  Your resume contains{" "}
                  <strong>{availableSections}</strong> out of{" "}
                  <strong>{sections.length}</strong> ATS sections.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ResumeAnalysis;