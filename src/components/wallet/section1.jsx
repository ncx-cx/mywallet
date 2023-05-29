import React, {useState} from "react";
import Button from '@mui/material/Button';
import Svg from "../Svg";

function WalletSectionOne()
{
    const [showText, setShowText] = useState(false);
    
    return(
        <div className="yrqf">
            <div className="row">
                <div className="col">
                    <div className="rtwfg">
                        <p>Total Asset Value</p>
                        <button className="btn btn-outline-primary" onClick={() => setShowText(!showText)}>
                            {!showText && <img src={Svg.eyeon} alt="ncx" />}{showText && <img src={Svg.eyeoff} alt="ncx" />}
                        </button>
                    </div>
                    <div className="tereg">
                        {!showText && <h1 className="wedc">0.00</h1>}{showText && <h1 className="wedc">***</h1>}
                        {!showText && <p className="vbegv"> <span className="crncy">USD</span> ≈0.00000000 <span className="crpt">BTC</span></p>}{showText && <p className="vbegv">**********</p>}
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