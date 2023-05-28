import {React, useState} from 'react';
import Modal from 'react-modal';
import './modal.css';
import Svg from '../components/Svg';


const ChangeAccountModal = props => {
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
            <span onClick={openModal}>Change</span>
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
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Change Deposit Account</h2>
                    </div>

                    <div class="container">
                        <form>
                            <div className='vervcd'>
                                <div className='select_acount active'>
                                    <input type='radio' />
                                    <label>Unified Account</label>
                                </div>
                                <div className='select_acount'>
                                    <input type='radio' />
                                    <label>Matrixport Balance</label>
                                </div>
            
                            </div>
                            <div id="csdve" className='subm_bt fef'>
                                <button type="submit" class="form-submit">Confirm</button>
                            </div>
                        </form>
                    </div>  
                </div>
                
            </Modal>
        </div>
   ) 
}
export default ChangeAccountModal;