import {
  FaRobot,
  FaFileAlt,
  FaDownload,
  FaUpload,
} from "react-icons/fa";

function QuickActions() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const downloadReport = () => {
    window.print();
  };

  const actions = [
    {
      title: "AI Resume Analysis",
      icon: <FaRobot size={28} />,
      color: "primary",
      action: () => scrollToSection("analysis"),
    },
    {
      title: "Resume Upload",
      icon: <FaUpload size={28} />,
      color: "success",
      action: () => scrollToSection("upload"),
    },
    {
      title: "Cover Letter",
      icon: <FaFileAlt size={28} />,
      color: "warning",
      action: () => window.location.href = "/cover-letter",
    },
    {
      title: "Download Report",
      icon: <FaDownload size={28} />,
      color: "info",
      action: downloadReport,
    },
  ];

  return (
    <>
      <h5 className="fw-bold mt-4 mb-3">
        ⚡ Quick Actions
      </h5>

      <div className="row">
        {actions.map((item, index) => (
          <div className="col-md-3 mb-3" key={index}>
            <div
              className="card shadow-sm border-0 h-100"
              style={{
                borderRadius: "18px",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onClick={item.action}
            >
              <div className="card-body text-center">

                <div
                  className={`text-${item.color} mb-3`}
                >
                  {item.icon}
                </div>

                <h6 className="fw-bold">
                  {item.title}
                </h6>

              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default QuickActions;