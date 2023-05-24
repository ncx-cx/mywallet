import React from "react";
import Png from "../../../Png";
import Svg from "../../../Svg";

const PageOne = ({ onButtonClick}) => {

  return (
    <main className="main-page">
      <form className="measure">
        <h2>Save this Backup Key in a secure location</h2>
        <div className="qr_code">
          <div className="wert"><img src={Png.backupKey} alt="ncx"/></div>
          <div className="copy_tvt">
            <p>FQOGJ7ZFEMZV3L6BCELMAUIBWLUWHYB2</p>
            <img src={Svg.copy} alt="ncx"/>
          </div>
          <span className="fsd_fd">This Key will allow you to recover your Authenticator should you lose your phone. Otherwise, resetting NCX/Google Authenticator will take at least 7 days.</span>
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
            onClick={() => onButtonClick("pagetwo")}
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
            onClick={() => onButtonClick("pagefour")}
          />
        </div>
      </form>
    </main>
  );
};

export default PageOne;
