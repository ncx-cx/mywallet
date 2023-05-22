import React, { useState } from 'react';
import Myheader from '../../components/header/header';
import WithdrawalAddress from '../../components/profile/device-manager/withdraw-address-management';

function WithdrawalAddressManagement()
{
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return(
        <div className="profile-page">
            <Myheader />

            <div className='profile'>
                <div className="container">
                    <div className="buttons">
                        <button
                            className={toggleState === 1 ? "pf_btn active" : "pf_btn"}
                            onClick={() => toggleTab(1)}
                        >
                        Profile/Settings
                        </button>
                        <button
                            className={toggleState === 2 ? "pf_btn active" : "pf_btn"}
                            onClick={() => toggleTab(2)}
                        >
                        Verification
                        </button>
                        <button
                            className={toggleState === 3 ? "pf_btn active" : "pf_btn"}
                            onClick={() => toggleTab(3)}
                        >
                        Security
                        </button>
                    </div>
                    <div className="ind__cont_tabs">
                        <div className={toggleState === 1 ? "tab__cont  active" : "tab__cont"}>
                            <WithdrawalAddress />
                        </div>
                        <div className={toggleState === 2 ? "tab__cont  active" : "tab__cont"}>
                            <h1>Tab 2</h1>
                        </div>
                        <div className={toggleState === 3 ? "tab__cont  active" : "tab__cont"}>
                            <h1>Tab 3</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WithdrawalAddressManagement;