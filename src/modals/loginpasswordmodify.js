import {React, useState} from 'react';
import Modal from 'react-modal';
import './modal.css';
import Svg from '../components/Svg';


const LoginPasswordModify = props => {
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
            <button className='open-modal' onClick={openModal}>Modify</button>
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
                        <div className='tctpp'>
                            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Modify</h2>
                            <div className='ino'>
                                <img src={Svg.info} alt="ncx" />
                                <p>Safety Reminder: Please note that you will be unable to withdraw from this account for 24 hours after changing your password.</p>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <form>
                            <div class="form-group">
                                <label>Current Password</label>
                                <input type="password" id="password" class="form-control" placeholder="Enter Current Password" name="name" required/>
                            </div>
                            <div class="form-group">
                                <label>New Password</label>
                                <input type="password" id="password" class="form-control" placeholder="Enter Current Password" name="name" required/>
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
export default LoginPasswordModify;