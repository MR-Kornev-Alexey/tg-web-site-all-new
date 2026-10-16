import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from "../Typography/Typography";
import ImageLeft from "../../img/avatar-900.png";
import ImageSquare from "../../img/avatar-900-square.png";;
import Link from "@mui/material/Link";
import { Paper, Divider, useTheme } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function FirstScreen() {
    const theme = useTheme();

    return (
        <Box sx={{
            backgroundColor: '#FCF9F3', // Silk Parchment
            py: { xs: 6, md: 10 },
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Декоративный элемент */}
            <Box sx={{
                position: 'absolute',
                top: -100,
                right: -100,
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(217,93,43,0.05) 0%, transparent 70%)',
                zIndex: 0,
                [theme.breakpoints.down('md')]: {
                    display: 'none'
                }
            }} />

            <Container maxWidth="lg">
                <Grid container spacing={6} sx={{ position: 'relative', zIndex: 1 }}>
                    {/* ТЕКСТОВАЯ ЧАСТЬ */}
                    <Grid
                        item
                        xs={12}
                        md={7}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        {/* Надзаголовок */}
                        <Typography
                            component="span"
                            sx={{
                                display: 'block',
                                fontSize: { xs: '0.9rem', sm: '1rem' },
                                fontWeight: 400,
                                color: '#A67C52', // Saddle Tan
                                mb: 2,
                                textTransform: 'uppercase',
                                letterSpacing: '2px'
                            }}
                        >
                            Авторская методика Елены Корневой
                        </Typography>

                        {/* Заголовок */}
                        <Typography
                            component="h1"
                            sx={{
                                fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem' },
                                fontWeight: 300,
                                lineHeight: 1.1,
                                color: '#3E2F28', // Bitter Chocolate
                                mb: 3,
                                letterSpacing: '-0.5px'
                            }}
                        >
                            Из «тени» — в лидеры:
                            <Box component="span" sx={{
                                display: 'block',
                                fontWeight: 400,
                                color: '#D95D2B', // Signature Orange
                                mt: 1
                            }}>
                                Сформируйте внутренний стержень ребенка за 21 день
                            </Box>
                        </Typography>

                        {/* Подзаголовок */}
                        <Typography
                            component="h2"
                            sx={{
                                fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                                lineHeight: 1.6,
                                color: '#A67C52', // Saddle Tan
                                mb: 5,
                                fontWeight: 400,
                                maxWidth: '95%'
                            }}
                        >
                            Программа для родителей детей 5–12 лет, где мы не просто учим «давать сдачи»,
                            а меняем ДНК отношений в семье, чтобы ваш ребенок стал естественным лидером в любом коллективе
                        </Typography>

                        {/* Блок-акцент */}
                        <Paper
                            elevation={0}
                            sx={{
                                backgroundColor: 'rgba(217, 93, 43, 0.05)', // Signature Orange с прозрачностью
                                borderRadius: 2,
                                p: 3,
                                borderLeft: '4px solid #D95D2B', // Signature Orange
                                mb: 6,
                                maxWidth: '600px'
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: '1.1rem',
                                    fontStyle: 'italic',
                                    lineHeight: 1.5,
                                    color: '#3E2F28', // Bitter Chocolate
                                    fontWeight: 400
                                }}
                            >
                                «Лидерство начинается не в классе, а в том, как ребенок чувствует себя рядом с вами»
                            </Typography>
                        </Paper>

                        {/* КНОПКА */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                gap: 3,
                                mb: 2,
                                flexWrap: 'wrap'
                            }}
                        >
                            {/* Вторая кнопка (опционально) */}
                            <Link
                                href="#pricing"
                                underline="none"
                                sx={{
                                    height: 56,
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 2,
                                    backgroundColor: 'transparent',
                                    color: '#3E2F28', // Bitter Chocolate
                                    fontSize: '0.95rem',
                                    fontWeight: 500,
                                    letterSpacing: '0.02em',
                                    transition: 'all 0.3s ease',
                                    borderRadius: '50px',
                                    px: 4,
                                    minWidth: { sm: 220 },
                                    textTransform: 'none',
                                    border: '1px solid #A67C52', // Saddle Tan
                                    '&:hover': {
                                        backgroundColor: 'rgba(166, 124, 82, 0.05)',
                                        borderColor: '#D95D2B', // Signature Orange
                                        transform: 'translateY(-2px)'
                                    }
                                }}
                            >
                                Купить программу
                            </Link>
                        </Box>

                        {/* Подпись под кнопкой */}
                        <Typography
                            component="p"
                            sx={{
                                fontSize: '0.9rem',
                                lineHeight: 1.5,
                                color: '#A67C52', // Saddle Tan
                                fontStyle: 'italic',
                                maxWidth: '400px',
                                mb: 1
                            }}
                        >
                            Начало уже на следующий день после покупки
                        </Typography>

                        {/* Разделитель */}
                        <Divider sx={{
                            my: 4,
                            borderColor: 'rgba(166, 124, 82, 0.2)', // Saddle Tan с прозрачностью
                            width: '100px'
                        }} />

                    </Grid>

                    {/* ИЗОБРАЖЕНИЕ И БЛОК ЭКСПЕРТИЗЫ */}
                    <Grid
                        item
                        xs={12}
                        md={5}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        {/* Фото */}
                        <Box sx={{
                            mb: 5,
                            position: 'relative',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: -20,
                                right: -20,
                                width: '100%',
                                height: '100%',
                                zIndex: -1
                            }
                        }}>
                            {/* ПОРТРЕТ ДЛЯ МОБИЛЬНОЙ ВЕРСИИ */}
                            <Box
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <Box
                                    component="img"
                                    src={ImageSquare}
                                    alt="Елена Корнева"
                                    sx={{
                                        width: '100%',
                                        maxWidth: 280,
                                        display: 'block',
                                        margin: '0 auto',
                                        borderRadius: '2px',
                                        boxShadow: '0 4px 20px rgba(62, 47, 40, 0.1)'
                                    }}
                                />
                            </Box>

                            {/* ПОРТРЕТ ДЛЯ ДЕСКТОПА */}
                            <Box
                                sx={{
                                    display: { xs: 'none', md: 'block' },
                                }}
                            >
                                <Box
                                    component="img"
                                    src={ImageLeft}
                                    alt="Елена Корнева"
                                    sx={{
                                        width: '90%',
                                        borderRadius: '2px',
                                        boxShadow: '0 8px 30px rgba(62, 47, 40, 0.15)'
                                    }}
                                />
                            </Box>
                        </Box>

                        {/* БЛОК "ЧТО МЕНЯЕТСЯ ЗА 21 ДЕНЬ" */}
                        <Paper
                            elevation={0}
                            sx={{
                                backgroundColor: 'transparent',
                                borderRadius: 2,
                                p: 4,
                                border: '1px solid #A67C52', // Saddle Tan
                                position: 'relative',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: -1,
                                    left: -1,
                                    right: -1,
                                    height: '3px',
                                    backgroundColor: '#D95D2B', // Signature Orange
                                    borderTopLeftRadius: '2px',
                                    borderTopRightRadius: '2px'
                                }
                            }}
                        >
                            <Typography
                                component="h3"
                                sx={{
                                    fontSize: '1.2rem',
                                    fontWeight: 500,
                                    color: '#3E2F28', // Bitter Chocolate
                                    mb: 3,
                                    textAlign: 'center'
                                }}
                            >
                                Что меняется за 21 день:
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2.5
                            }}>
                                {[
                                    "Ребенок сам отстаивает границы",
                                    "Исчезает страх перед коллективом",
                                    "Появляется уверенность в себе",
                                    "Семейные отношения укрепляются",
                                    "Лидерские качества проявляются естественно"
                                ].map((text, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: 2
                                        }}
                                    >
                                        <CheckCircleOutlineIcon
                                            sx={{
                                                fontSize: 18,
                                                color: '#A67C52', // Saddle Tan
                                                flexShrink: 0,
                                                mt: 0.25
                                            }}
                                        />
                                        <Typography
                                            sx={{
                                                fontSize: '0.95rem',
                                                lineHeight: 1.5,
                                                color: '#3E2F28' // Bitter Chocolate
                                            }}
                                        >
                                            {text}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Paper>

                        {/* Дополнительный блок с цифрами */}
                        <Box sx={{ mt: 4 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Typography
                                            sx={{
                                                fontSize: '2rem',
                                                fontWeight: 300,
                                                color: '#D95D2B', // Signature Orange
                                                lineHeight: 1
                                            }}
                                        >
                                            21
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: '0.8rem',
                                                color: '#A67C52', // Saddle Tan
                                                mt: 1
                                            }}
                                        >
                                            день программы
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Typography
                                            sx={{
                                                fontSize: '2rem',
                                                fontWeight: 300,
                                                color: '#D95D2B', // Signature Orange
                                                lineHeight: 1
                                            }}
                                        >
                                            5-12
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: '0.8rem',
                                                color: '#A67C52', // Saddle Tan
                                                mt: 1
                                            }}
                                        >
                                            лет возраст детей
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Typography
                                            sx={{
                                                fontSize: '2rem',
                                                fontWeight: 300,
                                                color: '#D95D2B', // Signature Orange
                                                lineHeight: 1
                                            }}
                                        >
                                            100%
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: '0.8rem',
                                                color: '#A67C52', // Saddle Tan
                                                mt: 1
                                            }}
                                        >
                                            практики
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}