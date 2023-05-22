import React from "react";
import Svg from "../Svg";
import Png from '../Png';

function WithdrawPassword()
{
    return(
        <div className="authentication">
            <h1>Password & Withdraw</h1>
            <div className="row">
                <div className="col first">
                    <div className="row inner">
                        <div className="col img">
                            <img src={Png.password} alt="ncx" />
                        </div>
                        <div className="col txt">
                            <h3>Login Password</h3>
                            <p>For account security.</p>
                        </div>
                    </div>
                </div>
                <div className="col second">
                    <a href="/">Modify</a>
                </div>
            </div>
            <div className="row">
                <div className="col first">
                    <div className="row inner">
                        <div className="col img">
                            <img src={Png.lock} alt="ncx" />
                        </div>
                        <div className="col txt">
                            <h3>Fund Password</h3>
                            <p>For trading, withdrawal and making payment.</p>
                        </div>
                    </div>
                </div>
                <div className="col second">
                    <a href="/">Set immediately</a>
                </div>
            </div>
            <div className="row last">
                <div className="col first">
                    <div className="row inner">
                        <div className="col img">
                            <img src={Png.location} alt="ncx" />
                        </div>
                        <div className="col txt">
                            <h3>Withdraw Address Management</h3>
                            <p>Whitelist can protect your account safety when the Withdrawal Address Management feature is turned on.</p>
                        </div>
                    </div>
                </div>
                <div className="col second">
                    <div className="inner">
                        <div className="fsrr">
                            <p>Withdrawal Whitelist <img src={Svg.info} alt="ncx" /></p>
                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </div>
                        <a href="/">Set</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WithdrawPassword;