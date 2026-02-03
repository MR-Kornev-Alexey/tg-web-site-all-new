import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from "../Typography/Typography";
import ImageLeft from "../../img/photo-elena.png";
import ImageSquare from "../../img/photo-elena-square.png";
import TelegramIcon from "@mui/icons-material/Telegram";
import Link from "@mui/material/Link";
import { Paper, Divider, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function FirstScreen() {
    const theme = useTheme(); // Добавлен хук useTheme

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
                [theme.breakpoints.down('md')]: { // Теперь theme доступна
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
                        {/* Заголовок */}
                        <Typography
                            component="h1"
                            sx={{
                                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.2rem' },
                                fontWeight: 300,
                                lineHeight: 1.1,
                                color: '#3E2F28', // Bitter Chocolate
                                mb: 4,
                                letterSpacing: '-0.5px'
                            }}
                        >
                            Я не решаю сиюминутные проблемы
                            <Box component="span" sx={{
                                display: 'block',
                                fontWeight: 400,
                                color: '#D95D2B', // Signature Orange
                                mt: 1
                            }}>
                                Я формирую будущее ребёнка
                            </Box>
                        </Typography>

                        {/* Подзаголовок */}
                        <Typography
                            component="h2"
                            sx={{
                                fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                                lineHeight: 1.6,
                                color: '#A67C52', // Saddle Tan
                                mb: 6,
                                fontWeight: 400,
                                maxWidth: '90%'
                            }}
                        >
                            Большинство ошибок воспитания становятся заметными, когда поведение уже закрепилось<br/>
                            Я сопровождаю семьи в точках, где цена ошибки — годы исправлений.
                        </Typography>

                        {/* КНОПКИ */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                gap: 3,
                                mb: 5,
                                flexWrap: 'wrap'
                            }}
                        >
                            {/* Кнопка 1 - Акцентная */}
                            <Link
                                href="https://t.me/MrkDigital?text=запрос на стратегическую сессию"
                                target="_blank"
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
                                <TelegramIcon sx={{ fontSize: 20 }} />
                                Решить критическую задачу
                                <ArrowForwardIcon sx={{ fontSize: 18, ml: 1 }} />
                            </Link>

                            {/* Кнопка 2 */}
                            <Link
                                href="https://t.me/MrkDigital?text=запрос на персональное сопровождение"
                                target="_blank"
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
                                <TelegramIcon sx={{ fontSize: 20 }} />
                                Подать заявку на личное ведение
                            </Link>
                        </Box>

                        {/* Подпись под кнопками */}
                        <Typography
                            component="p"
                            sx={{
                                fontSize: '0.9rem',
                                lineHeight: 1.5,
                                color: '#A67C52', // Saddle Tan
                                fontStyle: 'italic',
                                maxWidth: '400px'
                            }}
                        >
                            Личное ведение | Ограниченный круг семей
                            <Box component="span" sx={{ display: 'block', mt: 0.5 }}>
                                Работа там, где второго шанса не будет
                            </Box>
                        </Typography>

                        {/* Разделитель */}
                        <Divider sx={{
                            my: 6,
                            borderColor: 'rgba(166, 124, 82, 0.2)', // Saddle Tan с прозрачностью
                            width: '100px'
                        }} />

                        {/* Мини-экспертиза */}
                        <Box>
                            <Typography
                                component="h3"
                                sx={{
                                    fontSize: '1.1rem',
                                    fontWeight: 500,
                                    color: '#3E2F28', // Bitter Chocolate
                                    mb: 3,
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}
                            >
                                Экспертиза в цифрах
                            </Typography>

                            <Grid container spacing={3}>
                                <Grid item xs={6} sm={4}>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Typography
                                            sx={{
                                                fontSize: '2.5rem',
                                                fontWeight: 300,
                                                color: '#D95D2B', // Signature Orange
                                                lineHeight: 1
                                            }}
                                        >
                                            1000+
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: '0.85rem',
                                                color: '#A67C52', // Saddle Tan
                                                mt: 1
                                            }}
                                        >
                                            успешных кейсов
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={6} sm={4}>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Typography
                                            sx={{
                                                fontSize: '2.5rem',
                                                fontWeight: 300,
                                                color: '#D95D2B', // Signature Orange
                                                lineHeight: 1
                                            }}
                                        >
                                            700K+
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: '0.85rem',
                                                color: '#A67C52', // Saddle Tan
                                                mt: 1
                                            }}
                                        >
                                            родителей - подписчиков
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={6} sm={4}>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Typography
                                            sx={{
                                                fontSize: '2.5rem',
                                                fontWeight: 300,
                                                color: '#D95D2B', // Signature Orange
                                                lineHeight: 1
                                            }}
                                        >
                                            3×
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: '0.85rem',
                                                color: '#A67C52', // Saddle Tan
                                                mt: 1
                                            }}
                                        >
                                            экспертная квалификация
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
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
                                border: '1px solid #A67C52', // Saddle Tan
                                borderRadius: '2px',
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
                                        width: '100%',
                                        borderRadius: '2px',
                                        boxShadow: '0 8px 30px rgba(62, 47, 40, 0.15)'
                                    }}
                                />
                            </Box>
                        </Box>

                        {/* БЛОК ЭКСПЕРТИЗЫ */}
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
                                Тройная экспертиза
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2
                            }}>
                                {[
                                    { text: "Врач-педиатр + семейный психолог" },
                                    { text: "Сертифицированный нейроспециалист (MIT)" },
                                    { text: "Создатель методики 'Элитное развитие с пелёнок'" },
                                    { text: "Бизнес-подход (MBA) к развитию ребёнка" },
                                    { text: "Мама 3 сыновей, бабушка 2 внуков" }
                                ].map((item, index) => (
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
                                                lineHeight: 1.4,
                                                color: '#3E2F28' // Bitter Chocolate
                                            }}
                                        >
                                            {item.text}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}