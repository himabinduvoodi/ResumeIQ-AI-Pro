import jsPDF from "jspdf";

export const generatePDF = ({
  candidate,
  atsScore,
  aiAnalysis,
}) => {

  const doc = new jsPDF();

  doc.setFontSize(22);
  doc.setTextColor(41, 98, 255);
  doc.text("ResumeIQ AI Pro", 20, 20);

  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);
  doc.text("AI Resume Analysis Report", 20, 32);

  doc.line(20, 36, 190, 36);

  doc.setFontSize(13);

  doc.text(`Name : ${candidate.name}`, 20, 50);
  doc.text(`Email : ${candidate.email}`, 20, 60);
  doc.text(`Phone : ${candidate.phone}`, 20, 70);

  doc.text(`ATS Score : ${atsScore}%`, 20, 85);

  doc.text("AI Analysis", 20, 100);

  const lines = doc.splitTextToSize(
    aiAnalysis || "No Analysis",
    170
  );

  doc.text(lines, 20, 110);

  doc.setFontSize(11);

  doc.setTextColor(120);

  doc.text(
    `Generated on ${new Date().toLocaleString()}`,
    20,
    275
  );

  doc.save("ResumeIQ_AI_Report.pdf");

};