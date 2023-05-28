import React, {useState} from "react";
import Button from '@mui/material/Button';
import Svg from "../Svg";

function WalletSectionOne()
{
    const [balanceType, setbalanceType] = useState("text");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }

    const togglePassword =()=>{
        if(balanceType==="text")
        {
            setbalanceType("password")
            return;
        }
        setbalanceType("text")
    }
    return(
        <div className="yrqf">
            <div className="row">
                <div className="col">
                    <div className="rtwfg">
                        <p>Total Asset Value</p>
                        <button className="btn btn-outline-primary" onClick={togglePassword}>
                            { balanceType==="password"? <img src={Svg.eyeoff} alt="ncx" /> : <img src={Svg.eyeon} alt="ncx" /> }
                        </button>
                    </div>
                    <div className="tereg">
                        <input style={{ width: "auto"}} size='5' type={balanceType} onChange={handlePasswordChange} class="form-control" value="0.00" disabled />
                        <div className="tew">
                            <h3>USD</h3>
                            <div className="wrg">
                                <input style={{ width: "auto"}} type={balanceType} onChange={handlePasswordChange} value="≈0.00000000" disabled />
                                <span>BTC</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="thsq">
                        <Button href="/withdraw" className="treg">Withdraw</Button>
                        <Button href="/deposit" className="uuy">Deposit</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WalletSectionOne;