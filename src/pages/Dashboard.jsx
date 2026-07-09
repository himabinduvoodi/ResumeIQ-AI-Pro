import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import UploadCard from "../components/UploadCard";
import ATSCard from "../components/ATSCard";
import ResumePreview from "../components/ResumePreview";
import ResumeAnalysis from "../components/ResumeAnalysis";
import Suggestions from "../components/Suggestions";
import JobMatcher from "../components/JobMatcher";

import { extractTextFromPDF } from "../utils/extractText";
import { analyzeResume } from "../services/groq";

function Dashboard() {

  const [resume, setResume] = useState(null);

  const [resumeText, setResumeText] = useState("");

  const [aiAnalysis, setAiAnalysis] = useState("");

  const [atsScore, setAtsScore] = useState(0);

  const [candidate, setCandidate] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleResumeUpload = async (file) => {

    setResume(file);

    const text = await extractTextFromPDF(file);

    setResumeText(text);

    // ATS Score

    let score = 0;

    if (text.toLowerCase().includes("skills")) score += 20;

    if (text.toLowerCase().includes("project")) score += 20;

    if (text.toLowerCase().includes("education")) score += 20;

    if (
      text.toLowerCase().includes("certificate") ||
      text.toLowerCase().includes("certification")
    ) {
      score += 15;
    }

    if (
      text.toLowerCase().includes("experience") ||
      text.toLowerCase().includes("internship")
    ) {
      score += 15;
    }

    if (
      /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(text)
    ) {
      score += 5;
    }

    if (
      /(\+91[\s-]?)?[6-9]\d{9}/.test(text)
    ) {
      score += 5;
    }

    if (score > 100) {
      score = 100;
    }

    setAtsScore(score);

    // AI Analysis

    const aiResult = await analyzeResume(text);

    setAiAnalysis(aiResult);
        // Email

    const email =
      text.match(
        /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/
      )?.[0] || "Not Detected";

    // Phone

    const phone =
      text.match(
        /(\+91[\s-]?)?[6-9]\d{9}/
      )?.[0] || "Not Detected";

    // Name Detection

    let name = "Not Detected";

    const lines = text
      .split("\n")
      .map(line => line.trim())
      .filter(line => line.length > 0);

    for (const line of lines) {

      if (
        /^[A-Za-z ]+$/.test(line) &&
        line.split(" ").length >= 2 &&
        line.split(" ").length <= 4 &&
        line.length < 35
      ) {

        name = line;

        break;

      }

    }

    // Skill Detection

    const skills = [];

    const skillList = [

      "Java",
      "Python",
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "SQL",
      "MySQL",
      "MongoDB",
      "Node.js",
      "Git",
      "GitHub",
      "Bootstrap",
      "C",
      "C++"

    ];

    skillList.forEach((skill) => {

      if (
        text.toLowerCase().includes(
          skill.toLowerCase()
        )
      ) {

        skills.push(skill);

      }

    });

    setCandidate({

      name,

      email,

      phone,

    });

    // Save Profile

    localStorage.setItem(

      "profile",

      JSON.stringify({

        name,

        email,

        phone,

        college: "RMD Engineering College",

        skills: skills.join(", "),

        github: "",

        linkedin: "",

      })

    );

    // Save Upload History

    const history =

      JSON.parse(

        localStorage.getItem(
          "resumeHistory"
        )

      ) || [];

    history.unshift({

      name: file.name,

      score: score,

      date: new Date().toLocaleString(),

    });

    localStorage.setItem(

      "resumeHistory",

      JSON.stringify(history)

    );

  };

  return (

    <div
      className="d-flex"
      style={{
        background: "#f4f7fc",
        minHeight: "100vh",
      }}
    >

      <Sidebar />

      <div
        className="flex-grow-1"
        style={{
          marginLeft: "260px",
          padding: "30px",
        }}
      >

        <Topbar />
                {/* First Row */}

        <div className="row mt-4">

          <div className="col-lg-6 mb-4">

            <UploadCard
              setResume={handleResumeUpload}
            />

          </div>

          <div className="col-lg-6 mb-4">

            <ATSCard
              resumeText={resumeText}
            />

          </div>

        </div>

        {/* Second Row */}

        <div className="row">

          <div className="col-lg-6 mb-4">

            <ResumePreview
              resume={resume}
            />

          </div>

          <div className="col-lg-6 mb-4">

            <Suggestions
              resumeText={resumeText}
            />

          </div>

        </div>

        {/* Third Row */}

        <div className="row">

          <div className="col-12">

            <ResumeAnalysis
              candidate={candidate}
              resumeText={resumeText}
              aiAnalysis={aiAnalysis}
              atsScore={atsScore}
            />

          </div>

        </div>

        {/* Fourth Row */}

        <div className="row mt-4">

          <div className="col-12">

            <JobMatcher
              resumeText={resumeText}
            />

          </div>

        </div>
                {/* Dashboard Summary */}

        <div className="row mt-4">

          <div className="col-md-3 mb-3">

            <div className="card shadow-sm border-0 text-center">

              <div className="card-body">

                <h6 className="text-muted">
                  ATS Score
                </h6>

                <h2 className="text-success">
                  {atsScore}%
                </h2>

              </div>

            </div>

          </div>

          <div className="col-md-3 mb-3">

            <div className="card shadow-sm border-0 text-center">

              <div className="card-body">

                <h6 className="text-muted">
                  Resume Status
                </h6>

                <h5 className="text-primary">

                  {resume ? "Uploaded" : "Not Uploaded"}

                </h5>

              </div>

            </div>

          </div>

          <div className="col-md-3 mb-3">

            <div className="card shadow-sm border-0 text-center">

              <div className="card-body">

                <h6 className="text-muted">
                  Words
                </h6>

                <h2 className="text-warning">

                  {
                    resumeText.trim()
                      ? resumeText.trim().split(/\s+/).length
                      : 0
                  }

                </h2>

              </div>

            </div>

          </div>

          <div className="col-md-3 mb-3">

            <div className="card shadow-sm border-0 text-center">

              <div className="card-body">

                <h6 className="text-muted">
                  AI Status
                </h6>

                <h5 className="text-success">

                  {aiAnalysis
                    ? "Completed"
                    : "Waiting"}

                </h5>

              </div>

            </div>

          </div>

        </div>
                {/* Footer */}

        <div className="text-center mt-5 mb-3">

          <hr />

          <p className="text-muted">

            © 2025 ResumeIQ AI Pro | AI Powered Resume Analyzer

          </p>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;