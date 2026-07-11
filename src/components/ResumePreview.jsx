import { useEffect, useState } from "react";

function ResumePreview({ file }) {
  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPdfUrl(url);

      return () => URL.revokeObjectURL(url);
    }
  }, [file]);

  return (
    <div className="card shadow-lg border-0" style={{ borderRadius: "20px" }}>
      <div className="card-body p-4">

        <h3 className="fw-bold mb-4">
          📄 Resume Preview
        </h3>

        {!file ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              height: "600px",
              background: "#f8f9fa",
              borderRadius: "15px",
            }}
          >
            <div className="text-center">
              <h5>No Resume Uploaded</h5>
              <p className="text-muted">
                Upload a PDF resume to preview it.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-3">
              <strong>File Name:</strong> {file.name}
              <br />
              <strong>Size:</strong>{" "}
              {(file.size / 1024).toFixed(2)} KB
            </div>

            <iframe
              src={pdfUrl}
              title="Resume"
              width="100%"
              height="700"
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
              }}
            />
          </>
        )}

      </div>
    </div>
  );
}

export default ResumePreview;