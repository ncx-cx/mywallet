import {React, useState} from 'react';
import Modal from 'react-modal';
import './modal.css';
import Svg from '../components/Svg';
import AvatarPicker from "../components/profile/forms/avatarpicker";
import Button from '@mui/material/Button';

const SupportTicketForm = props => {
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

    const [avatarImage, setAvatarImage] = useState();

    const handleImageChange = (imageFile) => {
        setAvatarImage(imageFile);
    };

   return(
        <div>
            <Button className="add_key" onClick={openModal}><img src={Svg.plus} alt="ncx"/> Add New Ticket</Button>
            <Modal
                id="support-ticket"
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
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add New Ticket</h2>
                    </div>

                    <div class="container settings">
                        <form>
                            <div className='profile-photo'>
                                <div id="upload">
                                    <AvatarPicker
                                        handleChangeImage={handleImageChange}
                                        avatarImage={avatarImage}
                                    />
                                </div>
                                <p className='upload_prof'>Upload Proof <span>(Not to be exceeded above 2mb)</span></p>
                            </div>
                            <div className="flex">
                                <label>
                                    Username
                                    <input name="username" type="text" placeholder="Username*"  label="Username*" required/>
                                </label>
                                <label>
                                    Email Address
                                    <input name="emailaddress" type="email" placeholder="Email Address*"  label="Email address*" required pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"/>
                                </label>
                            </div>
                            <div className='slect-cate'>
                                <label>
                                    Category
                                    <select placeholder='Select Category'>
                                        <option>Select Category</option>
                                        <option>Category 1</option>
                                        <option>Category 2</option>
                                        <option>Category 3</option>
                                        <option>Category 4</option>
                                        <option>Category 5</option>
                                    </select>
                                </label>
                            </div>
                            <div className='subject'>
                                <label>
                                    Subject
                                    <input type='text' placeholder='Send to: bil***@ncx.cx' />
                                </label>
                            </div>
                            <div className='textarea'>
                                <label>
                                    Message
                                    <textarea type='text' placeholder='Message' />
                                </label>
                            </div>
                            <button type="submit" class="form-submit">Submit</button>
                        </form>
                    </div>  
                </div>
                
            </Modal>
        </div>
   ) 
}
export default SupportTicketForm;