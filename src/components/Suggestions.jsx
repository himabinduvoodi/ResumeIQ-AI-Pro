function Suggestions() {

  const suggestions = [
    {
      icon: "📄",
      title: "Improve Resume Summary",
      message: "Write a strong professional summary highlighting your skills."
    },
    {
      icon: "💼",
      title: "Add More Projects",
      message: "Include 2-3 real-world projects with technologies used."
    },
    {
      icon: "🛠️",
      title: "Include Technical Skills",
      message: "Mention React, Node.js, MySQL, JavaScript and other skills."
    },
    {
      icon: "🏆",
      title: "Add Certifications",
      message: "Include certifications from Coursera, Udemy or NPTEL."
    },
    {
      icon: "📈",
      title: "Increase ATS Score",
      message: "Use job-related keywords to improve ATS compatibility."
    }
  ];

  return (
    <div
      className="card shadow-lg border-0 h-100"
      style={{ borderRadius: "20px" }}
    >
      <div className="card-body">

        <h4 className="fw-bold text-primary mb-4">
          🤖 AI Resume Suggestions
        </h4>

        {suggestions.map((item, index) => (
          <div
            key={index}
            className="d-flex align-items-start mb-3 p-3"
            style={{
              background: "#f8f9fa",
              borderLeft: "5px solid #0d6efd",
              borderRadius: "12px",
            }}
          >
            <div
              style={{
                fontSize: "28px",
                marginRight: "15px",
              }}
            >
              {item.icon}
            </div>

            <div>
              <h6 className="fw-bold mb-1">
                {item.title}
              </h6>

              <p
                className="text-muted mb-0"
                style={{ fontSize: "15px" }}
              >
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