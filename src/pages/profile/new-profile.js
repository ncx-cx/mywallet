import React, {useEffect} from 'react';
import Myheader from '../../components/header/header';
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import {useParams, useNavigate} from "react-router-dom";
import ProfileTab from '../../components/profile/main';
import SecurityDevice from '../../components/profile/device-manager/device-manager';
import CustomerVerification from '../../components/verification/verify';

function TestTabs() {
    const DEFAULT_ACTIVE_TAB = "profile_settings";
    const tabs = {
        "profile_settings": {
            title: "Profile",
            content: (
                <ProfileTab />
            )
        },
        "identification": {
            title: "Verification",
            content: (
                <CustomerVerification />
            )
        },
        "security": {
            title: "Security",
            content: (
                <SecurityDevice />
            )
        }
    }

    const {profile_settings} = useParams();
    const history = useNavigate();
    
    useEffect(() => {
        if(!profile_settings){
            history(`/${DEFAULT_ACTIVE_TAB}`);
        }
    }, []);

    const toggle = tab => {
       if (profile_settings !== tab) {
            history(`/${tab}`);
       }
    }

    return (
        <div className="profile-page">
            <Myheader />
            <div className="profile">
                <div className="container">
                    <Nav tabs>
                        {
                            Object.entries(tabs).map((tab) => (
                                <NavItem key={tab[0]}>
                                    <NavLink
                                        className={profile_settings === tab[0] ? "active" : ""}
                                        onClick={() => {
                                            toggle(tab[0]);
                                        }}
                                        role="button"
                                    >
                                        {tab[1].title}
                                    </NavLink>
                                </NavItem>
                            ))
                        }
                    </Nav>

                    <TabContent activeTab={profile_settings}>
                        {
                            Object.entries(tabs).map((tab) => (
                                <TabPane key={tab[0]} tabId={tab[0]}>
                                    {tab[1].content}
                                </TabPane>
                            ))
                        }
                    </TabContent>
                </div>
            </div>
        </div>
    );
}
export default TestTabs;