function ResumePreview({ resume }) {
  return (
    <div
      className="card shadow-lg border-0"
      style={{ borderRadius: "20px" }}
    >
      <div className="card-body p-4">

        <h3 className="fw-bold mb-4">
          📄 Resume Preview
        </h3>

        {!resume ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              height: "500px",
              background: "#f8f9fa",
              borderRadius: "15px",
            }}
          >
            <div className="text-center">

              <h5 className="text-secondary">
                No Resume Uploaded
              </h5>

              <p className="text-muted">
                Upload a PDF resume to preview it.
              </p>

            </div>
          </div>
        ) : (
          <>
            <div className="mb-3">

              <strong>📁 File Name:</strong>

              <p className="text-primary">
                {resume.name}
              </p>

              <strong>📦 File Size:</strong>

              <p>
                {(resume.size / 1024).toFixed(2)} KB
              </p>

            </div>

            <iframe
              src={URL.createObjectURL(resume)}
              title="Resume Preview"
              width="100%"
              height="600"
              style={{
                border: "1px solid #ddd",
                borderRadius: "15px",
              }}
            />
          </>
        )}

      </div>
    </div>
  );
}

export default ResumePreview;