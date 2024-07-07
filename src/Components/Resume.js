import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from '../assets/files/ShobanResume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
    const [width, setWidth] = useState(900);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    const onButtonClick = async () => {
        try{
           await fetch(pdf).then((response) => {
                response.blob().then((blob) => {
                    const fileURL =
                        window.URL.createObjectURL(blob);    
                    let alink = document.createElement("a");
                    alink.href = fileURL;
                    alink.download = "ShobanResume.pdf";
                    alink.click();
                });
            });
        }catch(err){
            console.error(err);
        }
    };
    return (
        <React.Fragment>
            <section className="resume-section">
                <div className="container">
                    <h3 className="text-center mb-4">My <span className="primary-color">Resume</span></h3>
                    <div className="d-flex justify-content-center">
                        <Document file={pdf} className="resume-container d-flex justify-content-center">
                             <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                        </Document>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <button className="download-btn" onClick={onButtonClick}>Download CV</button>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Resume;