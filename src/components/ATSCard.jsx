import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ATSCard({ score = 0 }) {
  let status = "Needs Improvement";
  let color = "#ef4444";

  if (score >= 80) {
    status = "Excellent Resume";
    color = "#22c55e";
  } else if (score >= 60) {
    status = "Good Resume";
    color = "#3b82f6";
  } else if (score >= 40) {
    status = "Average Resume";
    color = "#f59e0b";
  }

  return (
    <div
      className="card shadow-lg border-0"
      style={{ borderRadius: "20px" }}
    >
      <div className="card-body text-center">

        <h3 className="fw-bold mb-4">
          🎯 ATS Score
        </h3>

        <div
          style={{
            width: "180px",
            height: "180px",
            margin: "auto",
          }}
        >
          <CircularProgressbar
            value={score}
            text={`${score}%`}
            styles={buildStyles({
              pathColor: color,
              textColor: color,
              trailColor: "#e5e7eb",
              textSize: "18px",
            })}
          />
        </div>

        <h4
          className="fw-bold mt-4"
          style={{ color }}
        >
          {status}
        </h4>

        <p className="text-muted">
          ATS Compatibility Score
        </p>

      </div>
    </div>
  );
}

export default ATSCard;