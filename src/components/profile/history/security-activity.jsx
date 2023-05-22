import React from "react";
import Svg from '../../Svg';

function SecurityActivity()
{
    return(
        <div className="login-history security__fsd">
            <div className="table">
                <div className="table-head">
                    <ul>
                        <li>Time</li>
                        <li>Action</li>
                        <li>IP Address</li>
                        <li>Location</li>
                    </ul>
                </div>
                <div className="table-body">
                    <ul>
                        <li>2023/05/18 11:16</li>
                        <li>Register</li>
                        <li>87.200.209.71</li>
                        <li>Dubai Dubai United Arab Emirates</li>
                    </ul>
                </div>
            </div>
            <ul class="pagination">
                <li><a href="/"><img src={Svg.left} alt="ncx"/></a></li>
                <li><a href="/">1</a></li>
                <li><a href="/"><img src={Svg.right} alt="ncx"/></a></li>
            </ul>
        </div>
    )
}
export default SecurityActivity;