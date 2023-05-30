import React from "react";
import Svg from "../Svg";
import Png from "../Png";
import ChangeAccount from '../../modals/change-account';
import MAbarbs from '../withdraw/dropdown';

function DepositScreen()
{

    return(
        <div className="mnbvcc">
            <div className="cvasd">
                <a href="/"><img src={Svg.backarrow} alt="ncx"/>Deposit</a>
            </div>
            <div className="qwerg">
                <div className="row">
                    <div className="col">
                        <div className="qwe__bd">
                            <div className="col">
                                <p>Select Token</p>
                            </div>
                            <div className="plkm">
                                <label>
                                    Token
                                    <MAbarbs />
                                </label>
                            </div>
                        </div>
                        <div className="qwe__bd sdf">
                            <div className="col">
                                <p>Network</p>
                            </div>
                            <div className="plkm">
                                <label className="dfgbn">
                                    Network
                                    <input type="text" value="APT" disabled/>
                                </label>

                                <div className="code-q">
                                    <p>Address</p>
                                    <img src={Png.qrCode} alt="NCX Mobile App"/>
                                </div>

                                <div className="bvsd">
                                    <p>TUGLBDZMusEZ5EyR3uDEiqDUUXqDyeQzWg</p>
                                    <img src={Svg.copy} alt="ncx"/>
                                </div>

                                <div className="infos">
                                    <div className="col">
                                        <p>Expected Arrival</p>
                                        <span>1 network confirmation</span>
                                    </div>
                                    <div className="col">
                                        <p>Withdrawal Unlock</p>
                                        <span>1 network confirmation</span>
                                    </div>
                                </div>

                                <div className="infos">
                                    <div className="col">
                                        <p>Minimum Deposit</p>
                                        <span>1 USDT</span>
                                    </div>
                                    <div className="col">
                                        <p>Deposit Account</p>
                                        <div className="asdfvwe">
                                            <p>Unified Account</p>
                                            <ChangeAccount />
                                        </div>
                                    </div>
                                </div>

                                <div className="insetus">
                                    <ul>
                                        <li>Ensure the deposit token USDT and network TRC20</li>
                                        <li>Depositing with any other tokens or networks will not be credited or refunded</li>
                                        <li>Any deposits less than the minimum will not be credited or refunded</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col faqqdcc">
                        <div className="vsbn">
                            <h1>FAQ</h1>
                            <a href="#"><img src={Svg.FAQicon} alt="ncx"/>How to deposit cryptocurrency to NCX?</a>
                            <a href="#"><img src={Svg.FAQicon} alt="ncx"/>What is Block Confirmation?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DepositScreen;