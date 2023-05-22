import React, {useState} from "react";
import Svg from "../../Svg";

function ShowAndHidePassword(){

    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
    return(

        <div className="row">
            <div className="col-sm-3">
                    <div className="input-group my-4 mx-4">
                        <lable>Withdraw Password</lable>
                        <div className="password_field">
                            <input type={passwordType} onChange={handlePasswordChange} name="password" class="form-control" placeholder="Password" />
                            <div className="input-group-btn">
                                <button className="btn btn-outline-primary" onClick={togglePassword}>
                                { passwordType==="password"? <img src={Svg.eyeoff} alt="ncx" /> : <img src={Svg.eyeon} alt="ncx" /> }
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="input-group my-4 mx-4">
                        <lable> Confirm Withdraw Password</lable>
                        <div className="password_field">
                            <input type={passwordType} onChange={handlePasswordChange} name="password" class="form-control" placeholder="Password" />
                            <div className="input-group-btn">
                                <button className="btn btn-outline-primary" onClick={togglePassword}>
                                { passwordType==="password"? <img src={Svg.eyeoff} alt="ncx" /> : <img src={Svg.eyeon} alt="ncx" /> }
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="submti_btn">
                        <input type="submit" />
                    </div>
            </div>
      </div>
      
    )

}
export default ShowAndHidePassword;