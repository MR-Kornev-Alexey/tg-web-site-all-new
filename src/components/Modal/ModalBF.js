import React, {useState} from 'react';
import Modal from 'react-modal';
import {Box} from "@mui/system";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ImageBF from "../../img/black-friday.png";


Modal.setAppElement('#root');

function ModalBF({ bfIsOpen, closeModal }) {
    const modalStyles = {
        content: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 56
        },
    };
    return (
        <Modal
            isOpen={bfIsOpen}
            onRequestClose={closeModal}
            style={modalStyles}
        >
            <Box >
                <Grid container sx={{pt: 4, pb: 2}} >
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box
                            component="img"
                            src={ImageBF}
                            alt="Черная пятница"
                            sx={{
                                width: '100%',
                                maxWidth: 400,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography gutterBottom variant="h6" component="div" className={"help-description"} sx={{color: 'white', textAlign: 'left', paddingLeft:3}}>
                            <ul>
                                <li>акция проводится с 23 по 30 ноября</li>
                                <li>распрострянятся на все продукты эксперта</li>
                                <li>промокод "blackfriday25" дает 25 процентов скидки</li>
                                <li>не забудьте ввести данный промокод при покупке</li>
                            </ul>
                        </Typography>
                    </Grid>
                    <button className={'btn-close'} onClick={closeModal}>Закрыть</button>
                </Grid>

            </Box>
        </Modal>
    );
}

export default ModalBF;
