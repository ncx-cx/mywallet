import React from "react";
import Png from "../../../Png";

const PageOne = ({ onButtonClick}) => {

  return (
    <main className="main-page">
      <form className="measure">
        <h2>Download and install the Authenticator App</h2>
        <div className="app_stor">
          <div className="col">
            <img src={Png.apple} alt="ncx"/>
            <p>Download From</p>
            <span>App Store</span>
          </div>
          <div className="col">
          <img src={Png.googlePlay} alt="ncx"/>
            <p>Download From</p>
            <span>App Store</span>
          </div>
        </div>
        <div className="bvedfc">
          <input
            className=""
            style={{
              borderStyle: "none",
              width: "100%",
              backgroundColor: "#5ED3F0",
            }}
            type="submit"
            value="Next"
            onClick={() => onButtonClick("pagetwo")}
          />
        </div>
      </form>
    </main>
  );
};

export default PageOne;
