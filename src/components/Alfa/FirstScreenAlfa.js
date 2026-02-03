import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import '../main/Main.css'
import Typography from "../Typography/Typography";
import ImageLeft from "../../img/boy-main.png";
import ImageSquare from "../../img/photo-elena-square.png";
import Link from "@mui/material/Link";

export default function FirstScreenAlfa() {
    return (
        <Container component="section" sx={{ px: { xs: 2, sm: 3 } }}>
            <Grid container sx={{ my: { xs: 2, sm: 3 } }}>
                {/* ТЕКСТ */}
                <Grid
                    item
                    xs={12}
                    md={7}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: { xs: 'center', md: 'flex-start' },
                        mt: { xs: 2, sm: 3, md: 0 },
                        textAlign: { xs: 'center', md: 'left' },
                        px: { xs: 0, sm: 1 },
                    }}
                >
                    {/* Заголовок */}
                    <Typography
                        component="h1"
                        sx={{
                            fontSize: { xs: 22, sm: 26, md: 32, lg: 36 },
                            fontWeight: 600,
                            lineHeight: 1.2,
                            width: '100%',
                            textTransform: 'uppercase',
                            wordBreak: 'break-word',
                        }}
                    >
                        Дети с внутренней опорой чувствуют себя уверенно в любом классе
                    </Typography>

                    {/* Подзаголовок */}
                    <Typography
                        component="h2"
                        sx={{
                            mt: { xs: 1.5, sm: 2 },
                            fontSize: { xs: 14, sm: 15, md: 17, lg: 18 },
                            lineHeight: 1.5,
                            color: '#555',
                            fontWeight: 400,
                            width: '100%',
                        }}
                    >
                        21-дневный психологический интенсив для детей 6–14 лет,
                        который помогает ребёнку спокойно отстаивать себя и находить своё место среди сверстников
                    </Typography>

                    {/* ПОРТРЕТ ЕЛЕНЫ ДЛЯ МОБИЛЬНОЙ ВЕРСИИ */}
                    <Box
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            justifyContent: 'center',
                            my: { xs: 2, sm: 3 },
                            width: '100%',
                        }}
                    >
                        <Box
                            component="img"
                            src={ImageLeft}
                            alt="Елена Корнева"
                            sx={{
                                width: '80%',
                                maxWidth: { xs: 200, sm: 240 },
                                objectFit: 'cover',
                            }}
                        />
                    </Box>

                    {/* КНОПКИ */}
                    <Box
                        sx={{
                            mt: { xs: 2, sm: 3 },
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            gap: { xs: 1.5, sm: 2, md: 3 },
                            width: '100%',
                            justifyContent: { xs: 'center', sm: 'flex-start' },
                        }}
                    >
                        {/* Кнопка 1 */}
                        <Link
                            href="#"
                            underline="none"
                            sx={{
                                height: { xs: 44, sm: 48 },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#f5f5f5',
                                color: '#444',
                                fontSize: { xs: 13, sm: 14 },
                                fontWeight: 500,
                                textTransform: 'uppercase',
                                letterSpacing: '0.03em',
                                transition: 'all .2s ease',
                                width: { xs: '100%', sm: 'auto' },
                                flex: { xs: 'none', sm: 1 },
                                px: { xs: 2, sm: 3 },
                                minWidth: { sm: 160 },
                                borderRadius: 0,
                                '&:hover': {
                                    backgroundColor: '#eaeaea',
                                    transform: 'translateY(-1px)',
                                },
                            }}
                        >
                            Узнать программу
                        </Link>

                        {/* Кнопка 2 */}
                        <Link
                            href="#"
                            underline="none"
                            sx={{
                                height: { xs: 44, sm: 48 },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#f5f5f5',
                                color: '#444',
                                fontSize: { xs: 13, sm: 14 },
                                fontWeight: 500,
                                textTransform: 'uppercase',
                                letterSpacing: '0.03em',
                                transition: 'all .2s ease',
                                width: { xs: '100%', sm: 'auto' },
                                flex: { xs: 'none', sm: 1 },
                                px: { xs: 2, sm: 3 },
                                minWidth: { sm: 160 },
                                borderRadius: 0,
                                '&:hover': {
                                    backgroundColor: '#eaeaea',
                                    transform: 'translateY(-1px)',
                                },
                            }}
                        >
                            Купить
                        </Link>
                    </Box>

                    {/* Описание автора */}
                    <Typography
                        component="h2"
                        sx={{
                            mt: { xs: 1.5, sm: 2 },
                            fontSize: { xs: 13, sm: 14, md: 15, lg: 16 },
                            lineHeight: 1.5,
                            color: '#555',
                            fontWeight: 400,
                            width: '100%',
                        }}
                    >
                        Автор программы — Елена Корнева, психолог, эксперт системы «родитель–ребёнок»
                    </Typography>
                </Grid>

                {/* КАРТИНКА ДЛЯ ДЕСКТОПА */}
                <Grid
                    item
                    xs={12}
                    md={5}
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'center',
                        flexDirection: "column",
                        alignItems: 'center',
                        mt: { xs: 3, md: 0 },
                        pl: { md: 2, lg: 3 },
                    }}
                >
                    <Box
                        component="img"
                        src={ImageLeft}
                        alt="Елена Корнева"
                        sx={{
                            width: '100%',
                            maxWidth: { md: 320, lg: 360 },
                            height: 'auto',
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}