import React from "react";
import Header from '../../components/header/header';
import SupportMainSection from '../../components/support/support-main';

function SupportPage()
{
    return(
        <div className="support_page">
            <Header />

            <div className="support_bdy">
                <div className="container">
                    <h1 className="sprt">Support Ticket</h1>
                    <SupportMainSection />
                </div>
            </div>
        </div>
    )
}

export default SupportPage;