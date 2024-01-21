import React, {useState} from 'react';
import Modal from 'react-modal';
import {Box} from "@mui/system";


Modal.setAppElement('#root');

function ModalVideo({ isOpen, closeModal, videoLink }) {
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
        },
    };
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="YouTube Video Modal"
            style={modalStyles}
        >
            <Box className={'modal-box'}>
                <iframe
                    width="315"
                    height="560"
                    src={`https://www.youtube.com/embed/${videoLink}`}
                    title="YouTube Video"
                ></iframe>

                <button className={'btn-close'} onClick={closeModal}>Закрыть</button>
            </Box>
        </Modal>
    );
}

export default ModalVideo;
