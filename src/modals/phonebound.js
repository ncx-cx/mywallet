import {React, useState} from 'react';
import Modal from 'react-modal';
import './modal.css';
import Svg from '../components/Svg';


const ApplyNowModal = props => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
    };
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

   return(
        <div>
            <button className='open-modal' onClick={openModal}>Bound</button>
            <Modal
                id="applynow_form"
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                closeTimeoutMS={1000}
                contentLabel="Example Modal"
            >
                <div className="heading_corss">
                    <div className='hed'>
                        <button onClick={closeModal}><img src={Svg.close} alt="ncx"/></button>
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Bind Mobile Phone</h2>
                    </div>

                    <div class="container">
                        <form>
                            <div class="form-group">
                                <label>Mobile Number</label>
                                <input type="text" id="mobile_code" class="form-control" placeholder="Phone Number" name="name" required/>
                            </div>
                            <div class="form-group">
                                <label>Phone Code</label>
                                <div className='field'>
                                    <input type="number" placeholder="Please enter the SMS verification code" name="name" required/>
                                    <button type="submit" class="get-code disabled">Get Code</button>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Email code</label>
                                <div className='field'>
                                    <input type="text" class="form-control" placeholder="Send to: bil***@ncx.cx" name="name" required/>
                                    <button type="submit" class="get-code">Get Code</button>
                                </div>
                            </div>
                            <button type="submit" class="form-submit disabled">Submit</button>
                        </form>
                    </div>  
                </div>
                
            </Modal>
        </div>
   ) 
}
export default ApplyNowModal;