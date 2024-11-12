import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function Pdfpage() {
	const sectionRef = useRef();

	const handleDownloadPdf = async () => {
		const section = sectionRef.current;

		const canvas = await html2canvas(section, { scale: 2 });
		const imgData = canvas.toDataURL("image/png");

		const pdf = new jsPDF();
		const imgWidth = pdf.internal.pageSize.getWidth();
		const imgHeight = (canvas.height * imgWidth) / canvas.width;

		pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
		pdf.save("download.pdf");
	};

	return (
		<div>
			<h1>My React App</h1>
			<button onClick={handleDownloadPdf}>Download Section as PDF</button>

			{/* The section you want to download */}
			<div
				ref={sectionRef}
				style={{ padding: "20px", border: "1px solid #ccc" }}>
				<h2>Downloadable Content</h2>
				<p>This section will be downloaded as a PDF.</p>
				<p>
					You can add any content here, including images, tables, and lists.
				</p>
			</div>
		</div>
	);
}

export default Pdfpage;
