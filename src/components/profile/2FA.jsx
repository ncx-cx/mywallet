import React from "react";
import Svg from "../Svg";
import Png from '../Png';
import PhoneBound from "../../modals/phonebound";

function TwoFactorAuthentication()
{

    return(
        <div className="authentication">
            <h1>Two Factor Authentication (2FA)</h1>
            <div className="row">
                <div className="col first">
                    <div className="row inner">
                        <div className="col img">
                            <img src={Png.email} alt="ncx" />
                        </div>
                        <div className="col txt">
                            <h3>Email<img src={Svg.checked} alt="ncx"/></h3>
                            <p>For account login, withdrawal, password retrieval, and change of security settings.</p>
                        </div>
                    </div>
                </div>
                <div className="col second">
                    <p>bil***@ncx.cx</p>
                </div>
            </div>
            <div className="row">
                <div className="col first">
                    <div className="row inner">
                        <div className="col img">
                            <img src={Png.phone} alt="ncx" />
                        </div>
                        <div className="col txt">
                            <h3>Mobile Phone<img src={Svg.info} alt="ncx"/></h3>
                            <p>For account login, withdrawal, password retrieval, and change of security settings.</p>
                        </div>
                    </div>
                </div>
                <div className="col second">
                    <div className="inner">
                        <p>Not Bound</p>
                        <PhoneBound />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col first">
                    <div className="row inner">
                        <div className="col img">
                            <img src={Png.googleauthenticator} alt="ncx" />
                        </div>
                        <div className="col txt">
                            <h3>Google Authenticator<img src={Svg.info} alt="ncx"/></h3>
                            <p>For account login, withdrawal, password retrieval, and change of security settings.</p>
                        </div>
                    </div>
                </div>
                <div className="col second">
                    <a href="/">Enable</a>
                </div>
            </div>
            <div className="row last">
                <div className="col first">
                    <div className="row inner">
                        <div className="col img">
                            <img src={Png.key} alt="ncx" />
                        </div>
                        <div className="col txt">
                            <h3>Security Key<img src={Svg.info} alt="ncx"/></h3>
                            <p>Protect you account with security keys(e.g. Yubikey).</p>
                        </div>
                    </div>
                </div>
                <div className="col second">
                    <a href="/security-device-manager">Enable</a>
                </div>
            </div>
        </div>
    )
}

export default TwoFactorAuthentication;