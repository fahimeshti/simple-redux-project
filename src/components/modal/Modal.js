import './Modal.css';
import { useSelector } from "react-redux";
import { useState } from 'react';

const Modal = (props) => {
    const name = useSelector((state) => state.user.userInfo.name);
    const email = useSelector((state) => state.user.userInfo.email);
    const password = useSelector((state) => state.user.userInfo.password);
    return (
        props.isModal && (<section className="modal-container">
            <div 
            className="overlay" 
            onClick={props.modalCloseHandler}
            ></div>
            <div className="my-modal">
                <div className="main-modal">
                    <div className="heading">
                        <h1>Settings</h1>
                        <span onClick={props.modalCloseHandler} className="close">&times;</span>
                    </div>
                    <div className="modal-body">
                        <span><b>Name:</b> {name}</span>
                        <span><b>Email:</b> {email}</span>
                        <span><b>Password:</b> {password}</span>
                    </div>
                </div>
            </div>
        </section>)
    );
};

export default Modal;