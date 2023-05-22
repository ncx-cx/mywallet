import React from "react";
import Svg from "../../Svg";
import Button from '@mui/material/Button';
import WhitelistProtection from "../../../modals/whitelist-protection";


function WithdrawalAddress()
{
    return(
        <div className="device-maanger whiteaddress">
            <a href="/" className="back-to-home">
                <img src={Svg.backarrow} alt="ncx"/>
                <h1>Withdraw Address Book</h1>
            </a>
            <p className="qwe-fsdf">Withdraw & Whitelist
                <WhitelistProtection />
            </p>
            <div className="filter-dat">
                <div className="select_ff">
                    <div className="alltoken">
                        <select>
                            <option>All Tokens</option>
                            <option>BTC</option>
                            <option>ETH</option>
                            <option>DOGE</option>
                            <option>BNB</option>
                        </select>
                    </div>
                    <div className="alltoken">
                        <select>
                            <option>All Addresses</option>
                            <option>BTC</option>
                            <option>ETH</option>
                            <option>DOGE</option>
                            <option>BNB</option>
                        </select>
                    </div>
                </div>
                <Button className="add_key"><img src={Svg.pluswhite} alt="ncx"/> Add Address</Button>
            </div>
            <div className="secure-table">
                <div className="head-er">
                    <ul>
                        <li>Token</li>
                        <li>Whitelisted</li>
                        <li>Address</li>
                        <li>Tag</li>
                        <li>Network</li>
                        <li>Note</li>
                        <li>Action</li>
                    </ul>
                </div>
                <div className="content-dd">
                    <div className="no-found">
                        <img src={Svg.empty} alt="ncx"/>
                        <p>No Doata Found</p>
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
export default WithdrawalAddress;