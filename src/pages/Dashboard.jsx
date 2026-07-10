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

import { useTheme } from "../context/ThemeContext";

function Dashboard() {

  const { darkMode } = useTheme();

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

    if (text.toLowerCase().includes("skills"))
      score += 20;

    if (text.toLowerCase().includes("project"))
      score += 20;

    if (text.toLowerCase().includes("education"))
      score += 20;

    if (
      text.toLowerCase().includes("certificate") ||
      text.toLowerCase().includes("certification")
    )
      score += 15;

    if (
      text.toLowerCase().includes("experience") ||
      text.toLowerCase().includes("internship")
    )
      score += 15;

    if (
      /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(text)
    )
      score += 5;

    if (
      /(\+91[\s-]?)?[6-9]\d{9}/.test(text)
    )
      score += 5;

    if (score > 100)
      score = 100;

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
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

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

    // Skills

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
        text.toLowerCase().includes(skill.toLowerCase())
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

    // Save History

    const history =

      JSON.parse(

        localStorage.getItem("resumeHistory")

      ) || [];

    history.unshift({

      name: file.name,

      score,

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
        background: darkMode ? "#111827" : "#f4f7fc",
        minHeight: "100vh",
      }}
    >

      <Sidebar />

      <div
        className="flex-grow-1"
        style={{
          marginLeft: "260px",
          padding: "30px",
          color: darkMode ? "white" : "black",
        }}
      >

        <Topbar />

        {/* Row 1 */}

        <div className="row mt-4">

          <div className="col-lg-6 mb-4">

            <div
              className="card border-0 shadow"
              style={{
                background: darkMode
                  ? "#1f2937"
                  : "white",
                borderRadius: "20px",
              }}
            >

              <div className="card-body">

                <UploadCard
                  setResume={handleResumeUpload}
                />

              </div>

            </div>

          </div>

          <div className="col-lg-6 mb-4">

            <div
              className="card border-0 shadow"
              style={{
                background: darkMode
                  ? "#1f2937"
                  : "white",
                borderRadius: "20px",
              }}
            >

              <div className="card-body">

                <ATSCard
                  resumeText={resumeText}
                />

              </div>

            </div>

          </div>

        </div>
                {/* Row 2 */}

        <div className="row">

          <div className="col-lg-6 mb-4">

            <div
              className="card border-0 shadow"
              style={{
                background: darkMode ? "#1f2937" : "white",
                borderRadius: "20px",
              }}
            >
              <div className="card-body">

                <ResumePreview
                  resume={resume}
                />

              </div>

            </div>

          </div>

          <div className="col-lg-6 mb-4">

            <div
              className="card border-0 shadow"
              style={{
                background: darkMode ? "#1f2937" : "white",
                borderRadius: "20px",
              }}
            >
              <div className="card-body">

                <Suggestions
                  resumeText={resumeText}
                />

              </div>

            </div>

          </div>

        </div>

        {/* Row 3 */}

        <div className="row">

          <div className="col-12 mb-4">

            <div
              className="card border-0 shadow"
              style={{
                background: darkMode ? "#1f2937" : "white",
                borderRadius: "20px",
              }}
            >
              <div className="card-body">

                <ResumeAnalysis
                  candidate={candidate}
                  resumeText={resumeText}
                  aiAnalysis={aiAnalysis}
                  atsScore={atsScore}
                />

              </div>

            </div>

          </div>

        </div>

        {/* Row 4 */}

        <div className="row">

          <div className="col-12">

            <div
              className="card border-0 shadow"
              style={{
                background: darkMode ? "#1f2937" : "white",
                borderRadius: "20px",
              }}
            >
              <div className="card-body">

                <JobMatcher
                  resumeText={resumeText}
                />

              </div>

            </div>

          </div>

        </div>
                {/* Dashboard Summary */}

        <div className="row mt-4">

          <div className="col-md-3 mb-3">

            <div
              className="card border-0 shadow text-center"
              style={{
                background: darkMode ? "#1f2937" : "white",
                color: darkMode ? "white" : "black",
              }}
            >

              <div className="card-body">

                <h6>ATS Score</h6>

                <h2 className="text-success">

                  {atsScore}%

                </h2>

              </div>

            </div>

          </div>

          <div className="col-md-3 mb-3">

            <div
              className="card border-0 shadow text-center"
              style={{
                background: darkMode ? "#1f2937" : "white",
                color: darkMode ? "white" : "black",
              }}
            >

              <div className="card-body">

                <h6>Resume Status</h6>

                <h5 className="text-primary">

                  {resume
                    ? "Uploaded"
                    : "Not Uploaded"}

                </h5>

              </div>

            </div>

          </div>

          <div className="col-md-3 mb-3">

            <div
              className="card border-0 shadow text-center"
              style={{
                background: darkMode ? "#1f2937" : "white",
                color: darkMode ? "white" : "black",
              }}
            >

              <div className="card-body">

                <h6>Total Words</h6>

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

            <div
              className="card border-0 shadow text-center"
              style={{
                background: darkMode ? "#1f2937" : "white",
                color: darkMode ? "white" : "black",
              }}
            >

              <div className="card-body">

                <h6>AI Status</h6>

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

        <div className="text-center mt-5">

          <hr />

          <p
            style={{
              color: darkMode
                ? "#d1d5db"
                : "#6b7280",
            }}
          >

            © 2025 ResumeIQ AI Pro ❤️

          </p>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;