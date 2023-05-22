import React from "react";
import Svg from "../Svg";
import '../../assets/style/main.css';
import Button from '@mui/material/Button';
import SupportTicketForm from "../../modals/support-ticket";


function SupportMainPage()
{
    return(
        <div className="device-maanger">
            <div className="head">
                <a href="/" className="back-to-home">
                    <img src={Svg.backarrow} alt="ncx"/>
                    <h1>Support Ticket</h1>
                </a>
                <SupportTicketForm />
                {/* <Button className="add_key"><img src={Svg.plus} alt="ncx"/> Add New Ticket</Button> */}
            </div>
            <div className="secure-table">
                <div className="head-er">
                    <ul>
                        <li>S,No</li>
                        <li>Ticket ID</li>
                        <li>Subject</li>
                        <li>Status</li>
                        <li>Date & Time</li>
                        <li>Action</li>
                    </ul>
                </div>
                <div className="content-dd">
                    <div className="no-found">
                        <img src={Svg.empty} alt="ncx"/>
                        <p>No Records Found</p>
                    </div>
                </div>
                <div className="message_dis">
                    <p>* When multiple security devices are attached, you can use any attached security device key for the verification.</p>
                    <p>* NCX currently supports up to 5 security keys.</p>
                </div>
            </div>
        </div>
    )
}
export default SupportMainPage;