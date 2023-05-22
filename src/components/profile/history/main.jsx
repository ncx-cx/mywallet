import React, {useState} from "react";
import LoginHistory from './login-history';
import DeviceManagement from './device-management';
import SecurityActivity from './security-activity';

function HistoryTabs()
{
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };


    return(
        <div className="history">
            <div className="buttons">
                <button
                    className={toggleState === 1 ? "hist_btn active" : "hist_btn"}
                    onClick={() => toggleTab(1)}
                >
                Login History
                </button>
                <button
                    className={toggleState === 2 ? "hist_btn active" : "hist_btn"}
                    onClick={() => toggleTab(2)}
                >
                Security Activity
                </button>
                <button
                    className={toggleState === 3 ? "hist_btn active" : "hist_btn"}
                    onClick={() => toggleTab(3)}
                >
                Device Management
                </button>
            </div>
            <div className="hist__cont_tabs">
                <div className={toggleState === 1 ? "hist__cont  active" : "hist__cont"}>
                   <LoginHistory />
                </div>
                <div className={toggleState === 2 ? "hist__cont  active" : "hist__cont"}>
                    <SecurityActivity />
                </div>
                <div className={toggleState === 3 ? "hist__cont  active" : "hist__cont"}>
                    <DeviceManagement />
                </div>
            </div>
        </div>
    )
}
export default HistoryTabs;