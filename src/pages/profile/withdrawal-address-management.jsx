import React from 'react';
import Myheader from '../../components/header/header';
import Button from '@mui/material/Button';
import WithdrawalAddress from '../../components/profile/device-manager/withdraw-address-management';

function WithdrawalAddressManagement()
{
    return(
        <div className="address-book">
            <Myheader />
            <div className="basicc">
                <div className="container">
                    <div className="head_btnss">
                        <Button href="/profile_settings" className="mml-w">Profile</Button>
                        <Button href="/identification" className="mml-w ogds">Verification</Button>
                        <Button href="/security" className="mml-w">Security</Button>
                    </div>
                    <WithdrawalAddress />
                </div>
            </div>
        </div>
    )
}
export default WithdrawalAddressManagement;