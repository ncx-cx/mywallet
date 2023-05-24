import React from "react";
import Svg from '../Svg';
import Png from '../Png';
import Button from '@mui/material/Button';
import Header from '../header/header';
import FrontID from './fronid';
import BackId from './backid';
import Selfie from './selfie';

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
                    <div className="basic_upload">
                        <a href="/identification" className="titl">
                            <img src={Svg.backarrow} alt="ncx" />
                            <h1>Basic Verification</h1>
                        </a>
                        <div className="imsss">
                            <p>Please kindly read the following instruction before starting the verification</p>
                        </div>
                        <div className="row ulo">
                                <div className="col">
                                    <FrontID />
                                </div>
                                <div className="col">
                                    <BackId />
                                </div>
                                <div className="col">
                                    <Selfie />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BasicVerification;