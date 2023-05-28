import React from "react";
import './withdraw.css';
import MyHeader from '../../components/header/header';
import DepositScreen from "../../components/withdraw/main";

function WithdrawPage()
{
    return(
        <div className="withdraw-page">
            
            <MyHeader />

            <div className="sdfv">
                <div className="container">
                    <DepositScreen />
                </div>
            </div>
        </div>
    )
}
export default WithdrawPage;