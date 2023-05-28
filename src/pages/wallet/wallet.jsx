import React, {useState} from "react";
import './wallet.css';
import Header from '../../components/header/header';
import Sectionone from '../../components/wallet/section1';
// import UnifiedAccount from "../../components/wallet/account";
import AssetsTable from "../../components/wallet/assets";
import AssetsHistory from "../../components/wallet/history";

function WalletPage()
{
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return(
        <div className="wallet-page">

            <Header />

            <div className="Wallet-section">
                <div className="container">

                    <Sectionone />

                    <div className="unitf">
                        <div className="fsdg">
                            <div className="dtwe">
                                <button
                                    className={toggleState === 1 ? "teeww active" : "teeww"}
                                    onClick={() => toggleTab(1)}
                                >
                                Unified Account
                                </button>
                                <button
                                    className={toggleState === 2 ? "teeww active" : "teeww"}
                                    onClick={() => toggleTab(2)}
                                >
                                Assets History
                                </button>
                            </div>
                            {/* <a href="/withdraw-address-management">Withdrawal Address</a> */}
                        </div>
                        <div className="hdfdb">
                            <div className={toggleState === 1 ? "uikw  active" : "uikw"}>
                                {/* <UnifiedAccount /> */}
                                <AssetsTable />
                            </div>
                            <div className={toggleState === 2 ? "uikw  active" : "uikw"}>
                                <AssetsHistory />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WalletPage;