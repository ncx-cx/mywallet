import React from "react";
import Svg from "../Svg";
import Button from '@mui/material/Button';

function WithdrawalScreen()
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
                                    <select>
                                        <option>BTC</option>
                                        <option>ETH</option>
                                        <option>LTC</option>
                                        <option>Doge</option>
                                        <option>Dash</option>
                                        <option>BNB</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className="qwe__bd sdf">
                            <div className="col">
                                <p>Withdrawal Info</p>
                            </div>
                            <div className="plkm">
                                <label className="dfgbn">
                                    Network
                                    <input type="text" value="APT" disabled/>
                                </label>

                                <div className="ewrthg">
                                    <div className="aszz">
                                        <p>Address</p>
                                        <p>Withdrawal Address</p>
                                    </div>
                                    <input type="text" placeholder="Enter or paster address" />
                                    <p className="ssv">
                                        Please enter withdrawal address
                                    </p>
                                </div>

                                <div className="ewrthg">
                                    <div className="aszz">
                                        <p>Amount</p>
                                        <p>24h withdrawal limit: 1,000,000 USD (0 USD used)</p>
                                    </div>
                                    <input type="text" placeholder="Minimum 0.000055 BTC" />
                                </div>

                                <div className="code-q">
                                    <p>Fees: 0.001 BTC</p>
                                </div>

                                <div className="vervcd">
                                    <div className='select_acount active'>
                                        <input type='radio' />
                                        <label>Unified Account</label>
                                    </div>
                                    <div className='select_acount'>
                                        <input type='radio' />
                                        <label>Matrixport Balance</label>
                                    </div>
                                </div>

                                <div className="insetus">
                                    <ul>
                                        <li>Ensure the deposit token USDT and network TRC20</li>
                                        <li>Depositing with any other tokens or networks will not be credited or refunded</li>
                                        <li>Any deposits less than the minimum will not be credited or refunded</li>
                                    </ul>
                                </div>

                                <div className="aS__v">
                                    <Button href="#">Withdraw</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col faqqdcc">
                        <div className="vsbn">
                            <h1>FAQ</h1>
                            <a href="#"><img src={Svg.FAQicon} alt="ncx"/>How to Withdraw Cryptocurrency from BIT?</a>
                            <a href="#"><img src={Svg.FAQicon} alt="ncx"/>How to check / increase my withdrawal limit?</a>
                            <a href="#"><img src={Svg.FAQicon} alt="ncx"/>What is withdrawal address whitelist protection?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WithdrawalScreen;