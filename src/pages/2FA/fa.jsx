import React from "react";
import Button from '@mui/material/Button';
import Header from '../../components/header/header';
import Authentication from '../../components/2FA-authentication/authentication';
import Svg from "../../components/Svg";
import './fa.css';

function BasicVerification()
{
    return(
        <div className="basic-verify">
            <Header />
            <div className="basicc">
                <div className="container">
                    <div className="head_btnss">
                        <Button href="/profile_settings" className="mml-w">Profile/Settings</Button>
                        <Button href="/identification" className="mml-w ogds">Verification</Button>
                        <Button href="/security" className="mml-w">Security</Button>
                    </div>
                    <div className="hfsf">
                        <a className="hwegb" href="/profile-settings"><img src={Svg.backarrow} alt="ncx"/>Security</a>
                        <h1 className="enable-2fa">Enable Google Authenticator</h1>
                        <Authentication />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BasicVerification;