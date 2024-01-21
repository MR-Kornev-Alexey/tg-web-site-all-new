import React, {useState} from 'react';
import Modal from 'react-modal';
import {Box} from "@mui/system";
import ButtonNew from "../Button/Button";
import Typography from '../Typography/Typography';
import TextField from '../TextField/TextField';
import SignUp from "../SignUp/SignUp";



Modal.setAppElement('#root');

function ModalPayment({ isOpen, closeModal, link }) {
    const modalStyles = {
        content: {
            display: 'flex',
            inset: 9,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '96%', // Установите ширину по вашему желанию
            margin: 'auto',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 56
        },
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setOpen(true);
    };
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={modalStyles}
        >
            <Box >
               <SignUp  link={link} closeModal={closeModal}/>
            {/*<button className={'btn-close'} onClick={closeModal}>Закрыть</button>*/}
            </Box>
        </Modal>
    );
}

export default ModalPayment;
