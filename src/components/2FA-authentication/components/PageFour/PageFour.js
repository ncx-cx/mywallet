import React, {useState} from "react";
import Png from "../../../Png";
import Svg from "../../../Svg";

const PageOne = ({ onButtonClick}) => {
  
  const [emailcode, setemailcode] = useState('')

  return (
    <main className="main-page">
      <form className="measure">
        <h2>Enable Authenticator by verifying your account</h2>
        <div className="gwrgb">
          <div className="dsdf one">
            <label>
                QA Code
                <input type="number" placeholder="Enter QA Code" required />
            </label>
            <p>Enter the 6-digit code from Google Authenticator</p>
          </div>
          <h3 className="nbvc">Security verification unavailable?</h3>
          <div className="dsdf">
            <label>
                Email Verification Code
                <div className="qr__bb">
                <input onChange={event => setemailcode(event.target.value)} type="number" placeholder="Please enter the email verification code" required />
                <button disabled={!emailcode} type="submit">Get Code</button>
                </div>
            </label>
            <p>Send to: bil***@ncx.cx</p>
          </div>
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
            onClick={() => onButtonClick("pagethree")}
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
            onClick={() => onButtonClick("pagefive")}
          />
        </div>
      </form>
    </main>
  );
};

export default PageOne;
