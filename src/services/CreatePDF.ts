import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

type CreatePDF = {
  id: string;
  filename: string;
  mode: "p" | "portrait" | "l" | "landscape" | undefined;
};

const CreatePDF = async ({ id, filename, mode }: CreatePDF) => {
  const pdf = new jsPDF(mode, "pt", "a4");
  // @ts-ignore
  const data = await html2canvas(document.querySelector(`#${id}`));
  const img = data.toDataURL("image/png");
  const imgProperties = pdf.getImageProperties(img);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
  pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save(`${filename}.pdf`);
};

export default CreatePDF;
