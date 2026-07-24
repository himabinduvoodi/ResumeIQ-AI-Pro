import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatsCards from "../components/dashboard/StatsCards";
import QuickActions from "../components/dashboard/QuickActions";

import UploadCard from "../components/UploadCard";
import ResumePreview from "../components/ResumePreview";
import ATSCard from "../components/ATSCard";
import ResumeAnalysis from "../components/ResumeAnalysis";
import Suggestions from "../components/Suggestions";

import CareerCoach from "../components/ai/CareerCoach";


import ATSTrendChart from "../components/charts/ATSTrendChart";
import SkillsChart from "../components/charts/SkillsChart";
import RadarSkillsChart from "../components/charts/RadarSkillsChart";
import ResumePieChart from "../components/charts/ResumePieChart";

import { extractTextFromPDF } from "../utils/extractText";
import { analyzeResume } from "../services/groq";

function Dashboard() {

  const [resume, setResume] = useState(null);

  const [resumeText, setResumeText] = useState("");

  const [analysis, setAnalysis] = useState("");

  const [loading, setLoading] = useState(false);

  const [atsScore, setAtsScore] = useState(0);

  const handleResume = async (file) => {

    setResume(file);

    setLoading(true);

    try {

      const text = await extractTextFromPDF(file);

      setResumeText(text);

      let score = 40;

      if (/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(text))
        score += 10;

      if (/(\+91[\s-]?)?[6-9]\d{9}/.test(text))
        score += 10;

      if (/python|java|javascript|react|node|express|html|css|sql|mysql|mongodb|aws|docker|firebase|git|github|c\+\+/i.test(text))
        score += 20;

      if (/project/i.test(text))
        score += 10;

      if (/education/i.test(text))
        score += 10;

      if (/experience|internship/i.test(text))
        score += 10;

      if (score > 100)
        score = 100;

      setAtsScore(score);

      const ai = await analyzeResume(text);

      setAnalysis(ai);

    } catch (err) {

      console.log(err);

      setAnalysis("AI Analysis Failed");

    }

    setLoading(false);

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

        <WelcomeCard atsScore={atsScore} />

        <StatsCards atsScore={atsScore} />

        <QuickActions />

        <div className="row mt-4">

          <div className="col-lg-6 mb-4">

            <ATSTrendChart atsScore={atsScore} />

          </div>

          <div className="col-lg-6 mb-4">

            <SkillsChart resumeText={resumeText} />

          </div>

        </div>

        <div className="row">

          <div className="col-lg-6 mb-4">

            <RadarSkillsChart resumeText={resumeText} />

          </div>

          <div className="col-lg-6 mb-4">

            <ResumePieChart resumeText={resumeText} />

          </div>

        </div>

        <div className="row mt-3"></div>
                  {/* LEFT SECTION */}

          <div className="col-lg-8">

            <UploadCard
              setResume={handleResume}
            />

            <div className="mt-4">

              <ResumePreview
                file={resume}
              />

            </div>

            {/* Resume Statistics */}

            <div className="row mt-4">

              <div className="col-md-4 mb-3">

                <div
                  className="card shadow border-0"
                  style={{
                    borderRadius: "18px",
                  }}
                >

                  <div className="card-body text-center">

                    <h6 className="text-muted">

                      Total Words

                    </h6>

                    <h2 className="fw-bold text-primary">

                      {
                        resumeText
                          ? resumeText
                              .split(/\s+/)
                              .filter(Boolean)
                              .length
                          : 0
                      }

                    </h2>

                  </div>

                </div>

              </div>

              <div className="col-md-4 mb-3">

                <div
                  className="card shadow border-0"
                  style={{
                    borderRadius: "18px",
                  }}
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
                  style={{
                    borderRadius: "18px",
                  }}
                >

                  <div className="card-body text-center">

                    <h6 className="text-muted">

                      Resume Uploaded

                    </h6>

                    <h2 className="fw-bold text-danger">

                      {
                        resume
                          ? "Yes"
                          : "No"
                      }

                    </h2>

                  </div>

                </div>

              </div>

            </div>

            {/* Extracted Resume */}

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
                    background: "#f8fafc",
                    padding: "20px",
                    borderRadius: "15px",
                    lineHeight: "1.7",
                    fontSize: "15px",
                  }}
                >

                  {

                    resumeText

                      ?

                      resumeText

                      :

                      <div className="text-center py-5">

                        <h5 className="text-muted">

                          Upload a resume to view extracted text

                        </h5>

                      </div>

                  }

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SECTION */}

          <div
            className="col-lg-4"
            style={{
              position: "sticky",
              top: "20px",
              height: "fit-content",
            }}
          >
                      <ATSCard
              score={atsScore}
            />

            <div className="mt-4">

              <ResumeAnalysis
                resumeText={resumeText}
                analysis={analysis}
                loading={loading}
              />

            </div>

            <div className="mt-4">

              <Suggestions
                resumeText={resumeText}
                analysis={analysis}
              />

            </div>

            <div className="mt-4">

              <CareerCoach
                atsScore={atsScore}
              />

            </div>

            <div className="mt-4">

              

            </div>

            <div className="mt-4">

             

            </div>

          </div>

        </div>
              </div>

    

  );

}

export default Dashboard;