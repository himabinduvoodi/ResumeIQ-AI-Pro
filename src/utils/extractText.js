import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export async function extractTextFromPDF(file) {

  const arrayBuffer = await file.arrayBuffer();

  const pdf = await pdfjsLib.getDocument({
    data: arrayBuffer,
  }).promise;

  let text = "";

  for (let i = 1; i <= pdf.numPages; i++) {

    const page = await pdf.getPage(i);

    const content = await page.getTextContent();

    let lastY = null;

    for (const item of content.items) {

      if (lastY !== null && item.transform[5] !== lastY) {
        text += "\n";
      }

      text += item.str + " ";

      lastY = item.transform[5];
    }

    text += "\n";
  }

  return text;
}