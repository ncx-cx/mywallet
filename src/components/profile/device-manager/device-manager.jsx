import React from "react";
import Svg from "../../Svg";
import Button from '@mui/material/Button';


function SecurityDevice()
{
    return(
        <div className="device-maanger">
            <div className="head">
                <a href="/" className="back-to-home">
                    <img src={Svg.backarrow} alt="ncx"/>
                    <h1>Security Device Manager</h1>
                </a>
                <Button className="add_key"><img src={Svg.plus} alt="ncx"/> Add New Key</Button>
            </div>
            <div className="secure-table">
                <div className="head-er">
                    <ul>
                        <li>Name</li>
                        <li>Register At</li>
                        <li>Last use At</li>
                        <li>Withdraw & Whitelist
                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </li>
                        <li>Login
                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </li>
                        <li>Action</li>
                    </ul>
                </div>
                <div className="content-dd">
                    <div className="no-found">
                        <img src={Svg.empty} alt="ncx"/>
                        <p>No Security Device</p>
                    </div>
                </div>
                <div className="message_dis">
                    <p>* When multiple security devices are attached, you can use any attached security device key for the verification.</p>
                    <p>* NCX currently supports up to 5 security keys.</p>
                </div>
            </div>
        </div>
    )
}
export default SecurityDevice;