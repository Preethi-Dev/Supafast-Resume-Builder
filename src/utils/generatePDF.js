import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function generatePDF(resumeElementId) {
  const pdf = new jsPDF(); // Initialize jsPDF

  const addPageToPDF = (elementId, callback) => {
    const element = document.getElementById(elementId); // Get the element by ID

    html2canvas(element, {
      scale: 2,
      useCORS: true, // Enable cross-origin loading for images
      allowTaint: false, // Allow tainted canvas (cross-origin images)
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png"); // Convert canvas to image data
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight); // Add image to PDF
        callback(); // Execute callback
      })
      .catch((error) => {
        console.error("Error generating PDF:", error);
      });
  };

  addPageToPDF(resumeElementId, () => {
    pdf.save("resume.pdf"); // Save PDF after rendering the first page
  });
}
