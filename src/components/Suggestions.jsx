function Suggestions({ resumeText }) {
  const text = resumeText.toLowerCase();

  const suggestions = [];

  if (!text.includes("summary") && !text.includes("objective")) {
    suggestions.push({
      icon: "📝",
      title: "Professional Summary",
      message: "Add a professional summary to highlight your career goals."
    });
  }

  if (!text.includes("linkedin")) {
    suggestions.push({
      icon: "💼",
      title: "LinkedIn Profile",
      message: "Include your LinkedIn profile URL."
    });
  }

  if (!text.includes("github")) {
    suggestions.push({
      icon: "💻",
      title: "GitHub Profile",
      message: "Add your GitHub profile to showcase projects."
    });
  }

  if (
    !text.includes("internship") &&
    !text.includes("experience")
  ) {
    suggestions.push({
      icon: "🏢",
      title: "Experience",
      message: "Mention internships or work experience."
    });
  }

  if (
    !text.includes("certificate") &&
    !text.includes("certification")
  ) {
    suggestions.push({
      icon: "🏆",
      title: "Certifications",
      message: "Add certifications to strengthen your resume."
    });
  }

  if (
    !text.includes("achievement") &&
    !text.includes("achievements")
  ) {
    suggestions.push({
      icon: "🎯",
      title: "Achievements",
      message: "Include measurable achievements and coding contest results."
    });
  }

  if (!text.includes("project")) {
    suggestions.push({
      icon: "📂",
      title: "Projects",
      message: "Add at least 2 strong academic or personal projects."
    });
  }

  if (!text.includes("skill")) {
    suggestions.push({
      icon: "⚙️",
      title: "Technical Skills",
      message: "Mention all programming languages and tools clearly."
    });
  }

  if (
    !/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(
      resumeText
    )
  ) {
    suggestions.push({
      icon: "📧",
      title: "Email",
      message: "Provide a valid email address."
    });
  }

  if (
    !/(\+91[\s-]?)?[6-9]\d{9}/.test(
      resumeText
    )
  ) {
    suggestions.push({
      icon: "📱",
      title: "Phone Number",
      message: "Provide a valid mobile number."
    });
  }

  if (suggestions.length === 0) {
    suggestions.push({
      icon: "🎉",
      title: "Excellent Resume",
      message: "Your resume looks ATS friendly. Keep it updated regularly."
    });
  }

  return (
    <div
      className="card shadow-lg border-0"
      style={{
        borderRadius: "20px",
      }}
    >
      <div className="card-body">

        <h3 className="fw-bold mb-4 text-center">
          🤖 AI Resume Insights
        </h3>

        {suggestions.map((item, index) => (
          <div
            key={index}
            className="card mb-3 border-0 shadow-sm"
            style={{
              borderRadius: "15px",
              background: "#f8f9fa",
            }}
          >
            <div className="card-body">

              <h5 className="fw-bold">
                {item.icon} {item.title}
              </h5>

              <p className="text-muted mb-0">
                {item.message}
              </p>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Suggestions;