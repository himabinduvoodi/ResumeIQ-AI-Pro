import jsPDF from "jspdf";

export const downloadReport = ({
  candidate,
  resumeText,
  atsScore,
  aiAnalysis,
}) => {
  const doc = new jsPDF();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("ResumeIQ AI Report", 20, 20);

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");

  doc.text(`Name : ${candidate.name}`, 20, 40);
  doc.text(`Email : ${candidate.email}`, 20, 50);
  doc.text(`Phone : ${candidate.phone}`, 20, 60);

  doc.text(`ATS Score : ${atsScore}%`, 20, 80);

  doc.text(
    `Characters : ${resumeText.length}`,
    20,
    90
  );

  doc.text(
    `Words : ${
      resumeText.trim()
        ? resumeText.trim().split(/\s+/).length
        : 0
    }`,
    20,
    100
  );

  doc.setFont("helvetica", "bold");
  doc.text("AI Analysis", 20, 120);

  doc.setFont("helvetica", "normal");

  const lines = doc.splitTextToSize(aiAnalysis, 170);

  doc.text(lines, 20, 130);

  doc.save("Resume_Report.pdf");
};