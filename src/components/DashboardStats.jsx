function DashboardStats({
  atsScore,
  resumeText,
  aiAnalysis,
}) {
  const words = resumeText
    ? resumeText.trim().split(/\s+/).length
    : 0;

  const characters = resumeText
    ? resumeText.length
    : 0;

  return (
    <div className="row mt-4">

      {/* ATS Score */}

      <div className="col-lg-3 col-md-6 mb-4">

        <div
          className="card border-0 shadow-sm h-100"
          style={{ borderRadius: "18px" }}
        >

          <div className="card-body text-center">

            <h6 className="text-muted mb-3">
              📊 ATS Score
            </h6>

            <h1 className="fw-bold text-success">
              {atsScore}%
            </h1>

            <div className="progress mt-3">
              <div
                className="progress-bar bg-success"
                style={{
                  width: `${atsScore}%`,
                }}
              ></div>
            </div>

          </div>

        </div>

      </div>

      {/* Resume Status */}

      <div className="col-lg-3 col-md-6 mb-4">

        <div
          className="card border-0 shadow-sm h-100"
          style={{ borderRadius: "18px" }}
        >

          <div className="card-body text-center">

            <h6 className="text-muted mb-3">
              📄 Resume Status
            </h6>

            <h5
              className={
                resumeText
                  ? "text-success"
                  : "text-danger"
              }
            >
              {resumeText
                ? "Uploaded"
                : "Not Uploaded"}
            </h5>

          </div>

        </div>

      </div>

      {/* Word Count */}

      <div className="col-lg-3 col-md-6 mb-4">

        <div
          className="card border-0 shadow-sm h-100"
          style={{ borderRadius: "18px" }}
        >

          <div className="card-body text-center">

            <h6 className="text-muted mb-3">
              📝 Word Count
            </h6>

            <h2 className="text-warning fw-bold">
              {words}
            </h2>

            <small className="text-muted">
              Characters : {characters}
            </small>

          </div>

        </div>

      </div>

      {/* AI Status */}

      <div className="col-lg-3 col-md-6 mb-4">

        <div
          className="card border-0 shadow-sm h-100"
          style={{ borderRadius: "18px" }}
        >

          <div className="card-body text-center">

            <h6 className="text-muted mb-3">
              🤖 AI Status
            </h6>

            <h5
              className={
                aiAnalysis
                  ? "text-success"
                  : "text-secondary"
              }
            >
              {aiAnalysis
                ? "Completed"
                : "Waiting"}
            </h5>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DashboardStats;