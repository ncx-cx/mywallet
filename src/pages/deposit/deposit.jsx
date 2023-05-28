import React from "react";
import './deposit.css';
import MyHeader from '../../components/header/header';
import DepositScreen from "../../components/deposit/main";

function DepositPage()
{
    return(
        <di className="deposit-page">
            <MyHeader />

            <div className="sdfv">
                <div className="container">
                    <DepositScreen />
                </div>
            </div>
        </di>
    )
}

export default DepositPage;