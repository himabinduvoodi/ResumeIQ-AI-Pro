function ATSCard({ resumeText }) {
  const text = resumeText.toLowerCase();

  let score = 0;

  // Skills
  const skills = [
    "java",
    "python",
    "react",
    "javascript",
    "html",
    "css",
    "sql",
    "mysql",
    "mongodb",
    "node",
    "git",
    "github",
    "c",
    "c++",
  ];

  let skillFound = 0;

  skills.forEach((skill) => {
    if (text.includes(skill)) {
      skillFound++;
    }
  });

  score += Math.min(skillFound * 4, 30);

  // Education
  if (
    text.includes("b.tech") ||
    text.includes("btech") ||
    text.includes("computer science") ||
    text.includes("engineering")
  ) {
    score += 15;
  }

  // Projects
  if (
    text.includes("project") ||
    text.includes("projects")
  ) {
    score += 15;
  }

  // Certifications
  if (
    text.includes("certificate") ||
    text.includes("certification") ||
    text.includes("aws")
  ) {
    score += 10;
  }

  // Internship / Experience
  if (
    text.includes("internship") ||
    text.includes("experience")
  ) {
    score += 10;
  }

  // Professional Summary / Objective
  if (
    text.includes("objective") ||
    text.includes("summary")
  ) {
    score += 5;
  }

  // Email
  if (
    /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(
      resumeText
    )
  ) {
    score += 5;
  }

  // Phone
  if (
    /(\+91[\s-]?)?[6-9]\d{9}/.test(resumeText)
  ) {
    score += 5;
  }

  // Limit
  if (score > 100) {
    score = 100;
  }

  let status = "";
  let color = "";

  if (score >= 90) {
    status = "Excellent";
    color = "success";
  } else if (score >= 75) {
    status = "Good";
    color = "primary";
  } else if (score >= 60) {
    status = "Average";
    color = "warning";
  } else {
    status = "Needs Improvement";
    color = "danger";
  }

  return (
    <div
      className="card shadow-lg border-0"
      style={{
        borderRadius: "20px",
      }}
    >
      <div className="card-body">

        <h3 className="text-center fw-bold mb-4">
          📊 ATS Score
        </h3>

        <div className="text-center">

          <div
            className={`display-2 fw-bold text-${color}`}
          >
            {score}%
          </div>

          <h4 className={`text-${color}`}>
            {status}
          </h4>

        </div>

        <hr />

        <h6 className="fw-bold">
          ATS Checklist
        </h6>

        <div className="mt-3">

          <p>
            {skillFound > 0 ? "✅" : "❌"} Technical Skills
          </p>

          <p>
            {text.includes("project") ? "✅" : "❌"} Projects
          </p>

          <p>
            {text.includes("certificate") ||
            text.includes("certification")
              ? "✅"
              : "❌"}{" "}
            Certifications
          </p>

          <p>
            {text.includes("internship") ||
            text.includes("experience")
              ? "✅"
              : "❌"}{" "}
            Experience
          </p>

          <p>
            {text.includes("objective") ||
            text.includes("summary")
              ? "✅"
              : "❌"}{" "}
            Professional Summary
          </p>

          <p>
            {/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(
              resumeText
            )
              ? "✅"
              : "❌"}{" "}
            Email
          </p>

          <p>
            {/(\+91[\s-]?)?[6-9]\d{9}/.test(
              resumeText
            )
              ? "✅"
              : "❌"}{" "}
            Phone
          </p>

        </div>

      </div>
    </div>
  );
}

export default ATSCard;