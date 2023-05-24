import React from "react";
import Svg from '../Svg';
import Png from '../Png';
import Button from '@mui/material/Button';
import Header from '../header/header';
import BasicUpload from '../verification/upload';
// import NewUpload from '../verification/new-upload';

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
                                    <BasicUpload />
                                </div>
                                <div className="col">
                                    <BasicUpload />
                                </div>
                                <div className="col">
                                    <BasicUpload />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BasicVerification;