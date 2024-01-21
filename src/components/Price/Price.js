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


const tiers = [
    {
        id: 0,
        title: 'Я сама',
        price: '8800',
        old: '12700',
        offer: '',
        linkInvoice: "https://payform.ru/gm3lvUi/",
        description: [
            [2, 'Участие в шестинедельном интенсиве', true, <DoneAllIcon fontSize={"small"}/>],
            [1, 'Участие в еженедельных семинарах Zoom', true, <DoneAllIcon fontSize={"small"}/>],
            [6, 'Рестарт рассылки по окончании курса', true, <DoneAllIcon fontSize={"small"}/>],
            [7, 'Вечный доступ к материалам курса', true, <DoneAllIcon fontSize={"small"}/>],
            [3, 'Не входит обратная связь с куратором', false, <RemoveDoneIcon fontSize={"small"}/>],
            [4, 'Телеграм чат с куратором не предусмотрен', false, <RemoveDoneIcon fontSize={"small"}/>],
            [5, 'Отсутствует работа в мини-группах', false, <RemoveDoneIcon fontSize={"small"}/>]
        ],
        buttonText: 'Купить',
        buttonVariant: 'outlined',
        link: 'dream_bot'
    },
    {
        id: 1,
        title: 'Экспертный',
        price: '19900',
        old: '24600',
        offer: '25 мест',
        linkInvoice: "https://payform.ru/kw3lvWA/",
        description: [
            [2, 'Участие в шестинедельном интенсиве', true, <DoneAllIcon fontSize={"small"}/>],
            [1, 'Участие в еженедельных семинарах Zoom', true, <DoneAllIcon fontSize={"small"}/>],
            [3, 'Обратная связь по выполненным заданиям', true, <DoneAllIcon fontSize={"small"}/>],
            [4, 'Телеграм чат с куратором ', true, <DoneAllIcon fontSize={"small"}/>],
            [5, 'Работа в мини-группах по отработке навыков', true, <DoneAllIcon fontSize={"small"}/>],
            [6, 'Рестарт рассылки по окончании курса', true, <DoneAllIcon fontSize={"small"}/>],
            [7, 'Вечный доступ к материалам курса', true, <DoneAllIcon fontSize={"small"}/>]
        ],
        buttonText: 'Купить',
        buttonVariant: 'outlined',
        link: 'dream_bot'
    }
];
const tiersNext = [
    {
        id: 0,
        title: 'VIP',
        price: '46000',
        old: '',
        offer: '5 мест',
        linkInvoice: "https://payform.ru/oa3l5Xs/",
        description: [
            [2, 'Первичная  часовая консультация от автора с индивидуальным разбором ситуций',<DoneAllIcon fontSize={"small"}/>],
            [1, 'Личное сопровождение от автора курса', <DoneAllIcon fontSize={"small"}/>],
            [3, 'Персональный чат с автором  с выдачей рекомендаций',<DoneAllIcon fontSize={"small"}/>],
            [4, 'Обратная связь от автоа по выполненным домашним заданиям', <DoneAllIcon fontSize={"small"}/>],
            [6, 'Финальная консультация от автора + стратегия разития на следующие 3 месяца', <DoneAllIcon fontSize={"small"}/>],
            [7, 'Участие в шестинедельном интенсиве', <DoneAllIcon fontSize={"small"}/>],
            [8, 'Работа в мини-группах по отработке навыков', <DoneAllIcon fontSize={"small"}/>],
            [9, 'Вечный доступ к материалам курса', <DoneAllIcon fontSize={"small"}/>]
        ],
        buttonText: 'Купить',
        buttonVariant: 'outlined',
        link: 'dream_bot'
    },
];

const invoice = [
    {
        id: 0,
        number: "02-12-23/HW-001"

    }
]


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
];

const defaultTheme = createTheme();

export default function Pricing() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [bfIsOpen, setBfIsOpen] = useState(false);
    const [link, setLink] = useState({});
    const closeModal = () => {
        setModalIsOpen(false);
    };
    const openPayment = (link) => {
        setModalIsOpen(true);
        setLink(link);
    }
    const closeBF = () => {
        setBfIsOpen(false);
    };
    const openBF = () => {
        setBfIsOpen(true);
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline/>
            <Container maxWidth="md" component="main" id={"price"}>
                <Grid container spacing={4} alignItems="flex-start" justifyContent="center">
                    {tiers.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid
                            item
                            key={tier.id}
                            xs={11}
                            sm={tier.title === 'Enterprise' ? 12 : 6}
                            md={6}
                        >
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{align: 'center'}}
                                    action={tier.title === 'Pro' ? <StarIcon/> : null}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    sx={{
                                        backgroundColor: "#5180d3",
                                        color: "#ffffff",
                                        textTransform: "uppercase"
                                    }}
                                />
                                <CardContent>
                                    <Typography component="h2"
                                                variant="h2"
                                                align="center"
                                                className={"line-offer"}>
                                        {tier.offer}
                                    </Typography>
                                    <Grid container>
                                        <Grid item md={12} sm={12} xs={12} container>
                                            {tier.description.map((line) => (
                                                <Grid item md={12} sm={12} xs={12} container>
                                                    <Grid item md={2} sm={2} xs={2}
                                                        sx={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}>
                                                        {line[3]}
                                                    </Grid>
                                                    <Grid item md={10} sm={10} xs={10}>
                                                        <Typography
                                                            variant="subtitle1"
                                                            align="left"
                                                            key={line[0]}
                                                            sx={{
                                                                display: 'flex',
                                                                justifyContent: 'flex-start',
                                                                alignItems: 'center'
                                                            }}
                                                            className={line[2] ? 'li-price size-common-price' : 'li-price-none size-common-price'}
                                                        >
                                                            {line[1]}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Grid>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2
                                        }}
                                    >
                                        <Typography component="h2"
                                                    variant="h2"
                                                    align="center"
                                                    className={"line-block-old"}>
                                            ₽{tier.old}
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2
                                        }}
                                    >
                                        <Typography component="h2"
                                                    variant="h2"
                                                    align="center"
                                                    className={"line-block"}>
                                            ₽{tier.price}
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2
                                        }}
                                    >

                                    </Box>

                                </CardContent>


                                <CardActions >
                                    <Grid container display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                        <Grid item xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"} className={"em-price"} sx={{ marginY: 1}}>доступна рассрочка </Grid>
                                        <Grid item xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                            <a href={tier.linkInvoice} className={"a-price"} target={"_blank"}>
                                                Купить
                                            </a>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Container maxWidth="md" component="main" sx={{marginTop: 3}}>
                <Grid container spacing={5} alignItems="center" justifyContent="center">
                    {tiersNext.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid
                            item
                            key={tier.id}
                            xs={11}
                            sm={tier.title === 'Enterprise' ? 12 : 6}
                            md={6}

                        >
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{align: 'center'}}
                                    action={tier.title === 'Pro' ? <StarIcon/> : null}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    sx={{
                                        backgroundColor: "#5180d3",
                                        color: "#ffffff",
                                        textTransform: "uppercase"
                                    }}
                                />
                                <CardContent>
                                    <Typography component="h2"
                                                variant="h2"
                                                align="center"
                                                className={"line-offer"}
                                                sx={{marginY: 2}}
                                                 >
                                        {tier.offer}
                                    </Typography>
                                    <Grid container>
                                        <Grid item md={12} sm={12} xs={12} container>
                                            {tier.description.map((line) => (
                                                <Grid item md={12} sm={12} xs={12} container>
                                                    <Grid item md={2} sm={2} xs={2}
                                                          sx={{
                                                              display: 'flex',
                                                              justifyContent: 'center',
                                                              alignItems: 'center'
                                                          }}>
                                                        <DoneAllIcon fontSize={"small"}/>
                                                    </Grid>
                                                    <Grid item md={10} sm={10} xs={10}>
                                                        <Typography
                                                            variant="subtitle1"
                                                            align="left"
                                                            key={line[0]}
                                                            sx={{
                                                                display: 'flex',
                                                                justifyContent: 'flex-start',
                                                                alignItems: 'center'
                                                            }}
                                                            className={line[2] ? 'li-price size-common-price' : 'li-price-none size-common-price'}
                                                        >
                                                            {line[1]}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Grid>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2
                                        }}
                                    >
                                        <Typography component="h2"
                                                    variant="h2"
                                                    align="center"
                                                    className={"line-block"}>
                                            ₽{tier.price}
                                        </Typography>
                                    </Box>
                                </CardContent>

                                <CardActions className={"box-center"}>
                                    <Grid container display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                        <Grid item xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"} className={"em-price"} sx={{ marginY: 1}}>доступна рассрочка </Grid>
                                        <Grid item xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                            <a href={tier.linkInvoice} className={"a-price"} target={"_blank"}>
                                                Купить
                                            </a>
                                        </Grid>
                                    </Grid>

                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            {/* Footer */}
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
                <ModalPayment isOpen={modalIsOpen} closeModal={closeModal} link={link}/>
                <ModalBF bfIsOpen={bfIsOpen} closeModal={closeBF}/>
            </Container>
            {/* End footer */}
        </ThemeProvider>
    );
}
