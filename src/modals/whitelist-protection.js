import {React, useState} from 'react';
import Modal from 'react-modal';
import './modal.css';
import Svg from '../components/Svg';


const WhitelistProtection = props => {
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
            <label onClick={openModal} class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
            </label>
            {/* <button className='open-modal' onClick={openModal}>Set Immediately</button> */}
            <Modal
                id="withdrawal_protection"
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
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Whitelist Protection</h2>
                    </div>

                    <div class="container">
                        <form>
                            <div className='whitelist-time'>
                                <p>Whitelist Effective time</p>
                                <div className='checktime-list'>
                                    <div className='checktime active'>
                                        <input type='radio' checked />
                                        <label>Immediately</label>
                                    </div>
                                    <div className='checktime'>
                                        <input type='radio' />
                                        <label>24 Hours</label>
                                    </div>
                                    <div className='checktime'>
                                        <input type='radio' />
                                        <label>2 Days</label>
                                    </div>
                                    <div className='checktime'>
                                        <input type='radio' />
                                        <label>5 Days</label>
                                    </div>
                                    <div className='checktime'>
                                        <input type='radio' />
                                        <label>7 Days</label>
                                    </div>
                                </div>

                                <div className='instruction'>
                                    <ol>
                                        <li>Only allow withdrawing to whitelisted addresses after enabling</li>
                                        <li>Such as 2 days for Whitelist Effective Time means an address will be whitelisted after 2 days</li>
                                        <li>Disabling or adjusting whitelisted to immediately will be effective after 24 hours</li>
                                        <li>Whitelist Protection is in effect for WEB, APP, and API</li>
                                    </ol>
                                </div>
                            </div>
                            <div className='subm_bt'>
                                <button onClick={closeModal} className='cancel'>Cancel</button>
                                <button type="submit" class="form-submit">Enable</button>
                            </div>
                        </form>
                    </div>  
                </div>
                
            </Modal>
        </div>
   ) 
}
export default WhitelistProtection;