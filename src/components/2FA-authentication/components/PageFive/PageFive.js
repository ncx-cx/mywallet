import React from "react";
import Svg from "../../../Svg";
import Button from '@mui/material/Button';

const PageOne = ({ onButtonClick}) => {

  return (
    <main className="main-page">
      <form className="measure">
        <div className="jnhbv">
            <img src={Svg.authenticationenables} alt="ncx"/>
            <h2>Authenticator Enable</h2>
            <p>You have successfully enabled Authenticator to protect your account.</p>
        </div>
        <div className="bvedfc">
        {/* <input
            className=""
            style={{
              borderStyle: "none",
              width: "100%",
              backgroundColor: "#5ED3F0",
            }}
            type="submit"
            value="Next"
            onClick={() => onButtonClick("pagefour")}
          /> */}
          <Button className="lkjh" href="/profile_settings">Back to Security</Button>
        </div>
      </form>
    </main>
  );
};

export default PageOne;
