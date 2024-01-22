import React, {useEffect, useState} from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import ModalPayment from "../Modal/ModalPayment";
import ModalBF from "../Modal/ModalBF"
import ImageBF from "../../img/black-friday.png";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import TelegramIcon from "@mui/icons-material/Telegram";
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mrk.digital/">
                Mrk.Digital
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const defaultTheme = createTheme();
const footers = [
    {
        title: 'Контакты',
        description: [
            {
                id: 0,
                text: 'WhatsApp',
                link: 'https://wa.me/4917625187846?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5...'
            },
            {
                id: 1,
                text: 'Telegram',
                link: 'https://t.me/korneva_elena'
            },
            {
                id: 2,
                text: 'info@mrk.digital',
                link: 'mailto:info@mrk.digital'
            },

        ],
    },
    {
        title: 'Положения',
        description: [
            {
                id: 0,
                text: 'Политика конфидициальности',
                link: '/privacy'
            },
            {
                id: 2,
                text: 'Пользовательское соглашение',
                link: '/terms'
            },

        ],
    },
]
export default function Footer() {

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline/>
            <Container
                maxWidth="md"
                component="footer"
                sx={{
                    borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                    mt: 4,
                    paddingLeft: 4,
                    paddingRight: 4
                }}
            >
                <Grid container spacing={4} justifyContent="space-evenly" sx={{
                    fontSize: 13
                }}>
                    {footers.map((footer) => (
                        <Grid item xs={6} sm={3} key={footer.title}>
                            <Typography variant="h6" color="text.primary" gutterBottom sx={{
                                fontSize: 13
                            }}>
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer.description.map((item) => (
                                    <li key={item.id}>
                                        <Link href={item.link} variant="subtitle1" color="text.secondary" sx={{
                                            fontSize: 13
                                        }}>
                                            {item.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
                <Copyright sx={{mt: 5, fontSize: 13}}/>
            </Container>
        </ThemeProvider>
    )
}
