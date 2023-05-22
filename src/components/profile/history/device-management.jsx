import React from "react";
import Svg from '../../Svg';

function DeviceManagement()
{
    return(
        <div className="login-history security__fsd">
            <div className="table">
                <div className="table-head">
                    <ul>
                        <li>Device(0/3)</li>
                        <li>Platform</li>
                        <li>Recent Activity</li>
                        <li>Action</li>
                    </ul>
                </div>
                <div className="table-body">
                    <p className="message">No Record Found</p>
                </div>
            </div>
        </div>
    )
}
export default DeviceManagement;