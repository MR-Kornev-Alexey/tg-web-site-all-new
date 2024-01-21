import React, { useEffect, useState } from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ImageMove from "../../img/cover-1-600.jpg";
import ImageSpeak from "../../img/cover-2-600.jpg";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import ModalVideo from "../Modal/ModalVideo"

export default function NewExamples({}) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [videoLink, setVideoLink] = useState('');
    const closeModal = () => {
        setModalIsOpen(false);
    };
    const showVideo = (link) => {
        setModalIsOpen(true);
        setVideoLink(link);
    }
    return (
        <Container >

            <Grid container spacing={2} sx={{flexWrap: 'wrap'}}>
                <Grid item className={'cardImageGrid'} md={6} sm={12} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingX: 2,
                    margin: 'auto'
                }}>
                    <Box
                        component="img"
                        src={ImageSpeak}
                        alt="Речь"
                        className={"example-image"}
                    />
                    <Button variant="contained" className="btn-pay" sx={{ marginTop: 2 }} onClick={() => showVideo("m117ktEcq8o")}>
                        Смотреть
                    </Button>
                </Grid>
                <Grid item className={'cardImageGrid'} md={6} sm={12} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingX: 2,
                    margin: 'auto'
                }}>
                    <Box
                        component="img"
                        src={ImageMove}
                        alt="Движение"
                        className={"example-image"}
                    />
                    <Button variant="contained" className="btn-pay" sx={{ marginTop: 2 }} onClick={() => showVideo("E5TQV2JQIIM")}>
                        Смотреть
                    </Button>
                </Grid>
            </Grid>
            <ModalVideo isOpen={modalIsOpen} closeModal={closeModal} videoLink={videoLink} />
        </Container>
    );
}
