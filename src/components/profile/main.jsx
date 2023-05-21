import React, {useState} from "react";
import Svg from "../Svg";
import AvatarPicker from "./avatarpicker";
import Form from "./funds_pass";
import NewForm from './new';

function ProfileTab()
{
    const [avatarImage, setAvatarImage] = useState();

    const handleImageChange = (imageFile) => {
        setAvatarImage(imageFile);
    };

    return(
        <div className="settings">
            <div className="rre-ds">
                <div className="res">
                    <h1>B</h1>
                </div>
                <div className="res-2">
                    <div className="wlcm">
                        <p>Hi Bil***@ncx.cx</p>
                        <span><img src={Svg.profile} alt="ncx"/>Personal</span>
                    </div>
                    <div className="wlcm-2">
                        <p>bil***@ncx.cx</p>
                        <a href="/">Advance Verification < img src={Svg.bluearrow} alt="ncx" /></a>
                        <p className="uid">
                            UID:3001791 
                            <span>Last login time: 2023-05-18 11:16:54IP Address：87.200.209.71</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="profile_form">
                <div className="rtty">
                    <div className="dqwq">
                        <h1>Profile</h1>
                        <div id="upload">
                            <AvatarPicker
                                handleChangeImage={handleImageChange}
                                avatarImage={avatarImage}
                            />
                        </div>
                        <NewForm />
                    </div>
                    <div className="rwq">
                        <h1>Withdraw Password</h1>
                        <p>Withdraw password status: <span>Disabled</span></p>
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileTab;