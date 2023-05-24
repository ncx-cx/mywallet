import React, {useState} from "react";
import DepositHistory from "./history/deposit";
import ExchangeHistory from './history/exchange';
import Intertransfer from './history/inter-transfer';
import LoginHistory from './history/login';
import WithdrawalHistory from './history/withdraw';

function AssetsHistory()
{
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return(
        <div className="hit-gsf">
            <div className="unitf">
                <div className="fsdg">
                    <div className="dtwe">
                        <button
                            className={toggleState === 1 ? "teeww active" : "teeww"}
                            onClick={() => toggleTab(1)}
                        >
                        Deposit
                        </button>
                        <button
                            className={toggleState === 2 ? "teeww active" : "teeww"}
                            onClick={() => toggleTab(2)}
                        >
                        Withdraw
                        </button>
                        <button
                            className={toggleState === 3 ? "teeww active" : "teeww"}
                            onClick={() => toggleTab(3)}
                        >
                        Exchange
                        </button>
                        <button
                            className={toggleState === 4 ? "teeww active" : "teeww"}
                            onClick={() => toggleTab(4)}
                        >
                        Inter Transfer
                        </button>
                        <button
                            className={toggleState === 5 ? "teeww active" : "teeww"}
                            onClick={() => toggleTab(5)}
                        >
                        Login
                        </button>
                    </div>
                </div>
                <div className="hdfdb">
                    <div className={toggleState === 1 ? "uikw  active" : "uikw"}>
                    <DepositHistory />
                    </div>
                    <div className={toggleState === 2 ? "uikw  active" : "uikw"}>
                        <WithdrawalHistory />
                    </div>
                    <div className={toggleState === 3 ? "uikw  active" : "uikw"}>
                        <ExchangeHistory />
                    </div>
                    <div className={toggleState === 4 ? "uikw  active" : "uikw"}>
                        <Intertransfer />
                    </div>
                    <div className={toggleState === 5 ? "uikw  active" : "uikw"}>
                        <LoginHistory />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AssetsHistory;