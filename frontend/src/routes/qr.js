import React, { useEffect } from "react";

const QRCodePage = () => {
  useEffect(() => {
    const printIT = () => {
      window.print();
    };
    let url = "https://mobilemenugenerator.netlify.app/";
    let qrcodeRequest = `https://chart.apis.google.com/chart?cht=qr&chl=${url}&chs=220`;

    for (let i = 0; i < 12; i++) {
      let qrImage = new Image();
      qrImage.src = qrcodeRequest;
      let qrDOMImage = document.getElementsByClassName("qrimage");
      qrDOMImage[i].appendChild(qrImage);
    }
  }, []);

  return (
    <div>
      <button onClick={() => window.print()} className="qrImagePagePrintButton">
        PRINT QR CODES!
      </button>
      <button
        onClick={() => window.print()}
        className="btn btn-primary qrPrintBtn"
      >
        PRINT
      </button>
      <div className="qrImagePage">
        <div className="qrImagePageColumn">
          <div className="qrimage"></div>
          <div className="qrimage"></div>
          <div className="qrimage"></div>
          <div className="qrimage"></div>
        </div>

        <div className="qrImagePageColumn">
          <div className="qrimage"></div>
          <div className="qrimage"></div>
          <div className="qrimage"></div>
          <div className="qrimage"></div>
        </div>

        <div className="qrImagePageColumn">
          <div className="qrimage"></div>
          <div className="qrimage"></div>
          <div className="qrimage"></div>
          <div className="qrimage"></div>
        </div>
      </div>
    </div>
  );
};

export default QRCodePage;
