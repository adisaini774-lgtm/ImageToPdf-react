// ImageConverter.jsx
import React, { useState } from "react";
import jsPDF from "jspdf";
import "./index.css";

function ImageToPdf() {
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState("");

  const loadFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageURL(url);
      setImage(file);
    }
  };

  const pdfDown = () => {
    if (!image) {
      alert("Please upload an image first!");
      return;
    }

    const doc = new jsPDF();
    const img = new Image();
    img.src = imageURL;

    img.onload = () => {
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const imgWidth = pageWidth - 20;
      const imgHeight = (img.height * imgWidth) / img.width;

      doc.addImage(img, "JPEG", 10, 10, imgWidth, Math.min(imgHeight, pageHeight - 20));
      doc.save("ImageToPDF.pdf");
    };
  };

  return (
    <div className="page">
      <div className="pdfImage">
        <div className="pdf-container">
          {imageURL ? <img className="showImg" src={imageURL} alt="Uploaded" /> : <p>No image uploaded</p>}
          <div className="button">
            <label className="upload">
              <input type="file" onChange={loadFile} accept=".png,.jpg,.jpeg" />
              Upload Image
            </label>
            <button onClick={pdfDown}>Download To PDF</button>
          </div>
        </div>
      </div>

	<div> 
	  <button> pipeline testing project </button>
	</div>
    </div>
  );
}

export default ImageToPdf;
