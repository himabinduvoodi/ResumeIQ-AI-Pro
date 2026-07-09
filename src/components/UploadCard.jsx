import { useRef } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

function UploadCard({ setResume }) {
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please upload PDF files only.");
      return;
    }

    setResume(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please upload PDF files only.");
      return;
    }

    setResume(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="card shadow-lg border-0"
      style={{ borderRadius: "20px" }}
    >
      <div className="card-body p-4">

        <h3 className="fw-bold mb-4">
          📄 Upload Resume
        </h3>

        <div
          onClick={() => inputRef.current.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="d-flex flex-column justify-content-center align-items-center"
          style={{
            border: "3px dashed #0d6efd",
            borderRadius: "20px",
            height: "320px",
            cursor: "pointer",
            background: "#f8fbff",
            transition: "0.3s",
          }}
        >
          <FaCloudUploadAlt
            size={70}
            color="#0d6efd"
          />

          <h4 className="mt-3">
            Drag & Drop Resume
          </h4>

          <p className="text-muted">
            or click to browse your PDF
          </p>

          <button
            type="button"
            className="btn btn-primary btn-lg mt-2"
            onClick={(e) => {
              e.stopPropagation();
              inputRef.current.click();
            }}
          >
            Browse Resume
          </button>
        </div>

        <input
          ref={inputRef}
          type="file"
          accept=".pdf"
          hidden
          onChange={handleFileChange}
        />

      </div>
    </div>
  );
}

export default UploadCard;