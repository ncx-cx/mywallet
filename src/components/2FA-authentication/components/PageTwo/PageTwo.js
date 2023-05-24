import React from "react";
import Png from "../../../Png";
import Svg from "../../../Svg";

const PageOne = ({ onButtonClick}) => {

  return (
    <main className="main-page">
      <form className="measure">
        <h2>Scan the QR code in the Authenticator App</h2>
        <div className="qr_code">
          <div className="gbnds"><img src={Png.qrCode} alt="ncx"/></div>
          <div className="copy_tvt">
            <p>FQOGJ7ZFEMZV3L6BCELMAUIBWLUWHYB2</p>
            <img src={Svg.copy} alt="ncx"/>
          </div>
          <span className="fsd_fd">If you are unable to scan the QR code, please enter this code manually into the app.</span>
        </div>
        <div className="bvedfc">
          <input
            className="back"
            style={{
              borderStyle: "none",
              width: "100%",
              backgroundColor: "#5ED3F0",
            }}
            type="submit"
            value="Back"
            onClick={() => onButtonClick("pageone")}
          />
          <input
            className=""
            style={{
              borderStyle: "none",
              width: "100%",
              backgroundColor: "#5ED3F0",
            }}
            type="submit"
            value="Next"
            onClick={() => onButtonClick("pagethree")}
          />
        </div>
      </form>
    </main>
  );
};

export default PageOne;
