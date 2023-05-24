import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import Svg from "../../Svg";
import Button from '@mui/material/Button';

import "react-datepicker/dist/react-datepicker.css";

const DepositHistory = () => {
  // define check-in and check-out state
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  // define handler change function on check-in date
  const handleCheckInDate = (date) => {
    setCheckInDate(date);
    setCheckOutDate(null);
  };

  // define handler change function on check-out date
  const handleCheckOutDate = (date) => {
    setCheckOutDate(date);
  };

  return (
    <div className="njbu">
      <div className="gqwr">
        <div className="input-container">
          <div className="uhgh">
            <label>From Date</label>
            <div className="pcikre">
              <DatePicker
                selected={checkInDate}
                // minDate={new Date()}
                onChange={handleCheckInDate}
                placeholderText="DD-MM-YYY"
              />
              <div className="gdgdw">
                <img src={Svg.calendar} alt="ncx"/>
              </div>
            </div>
          </div>
          <div className="uhgh">
            <label>To Date</label>
            <div className="pcikre">
              <DatePicker
                selected={checkOutDate}
                minDate={checkInDate}
                onChange={handleCheckOutDate}
                placeholderText="DD-MM-YYY"
              />
              <div className="gdgdw">
                <img src={Svg.calendar} alt="ncx"/>
              </div>
            </div>
          </div>
        </div>
        <div className="srch-g">
          <div className="gdcvb">
            <img src={Svg.search} alt="ncx"/>
            <input type="search" placeholder="Search Token" className="srcgd" />
          </div>
          <Button href="#" className="dwnld">Download<img src={Svg.download} alt="ncx"/></Button>
        </div>
      </div>
      <div className="secure-table">
          <div className="head-er">
              <ul>
                  <li>S,No</li>
                  <li>Amount</li>
                  <li>Currency</li>
                  <li>Payment Type</li>
                  <li>Transaction ID</li>
                  <li>Status</li>
                  <li>Date & Time</li>
              </ul>
          </div>
          <div className="content-dd">
              <div className="no-found">
                  <img src={Svg.empty} alt="ncx"/>
                  <p>No Records Found</p>
                  <div className="output-container">
                  {checkInDate && checkOutDate && (
                      <div className="summary">
                        <p>
                          No Record Found {moment(checkInDate).format("MMMM Do YYYY")}{" "}
                          to {moment(checkOutDate).format("MMMM Do YYYY")}.
                        </p>
                      </div>
                    )}
                </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default DepositHistory;
