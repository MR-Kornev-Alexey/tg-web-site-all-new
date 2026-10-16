import * as React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import ImageSquare from "../../img/second-screen.png";

export default function MethodologySlide() {
    return (
        <Box sx={{
            backgroundColor: '#F5F2ED', // Светлый фон как на слайде
            minHeight: '100vh',
            py: { xs: 6, md: 10 },
            display: 'flex',
            alignItems: 'center'
        }}>
            <Container maxWidth="lg">
                {/* 1. Верхний заголовок (Аристократ) */}
                <Typography sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontStyle: 'italic',
                    fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.5rem' },
                    color: '#3E2F28',
                    mb: { xs: 3, md: 4 },
                    maxWidth: '600px',
                    lineHeight: 1.2,
                    textAlign: { xs: 'left', md: 'left' }
                }}>
                    «Моя методика — не для тех, кто хочет вырастить “аристократа”».
                </Typography>

                <Grid container spacing={0} sx={{ position: 'relative' }}>
                    {/* ЛЕВАЯ ЧАСТЬ (пустая для центрирования) - только на десктопе */}
                    <Grid item xs={0} md={1.5} sx={{ display: { xs: 'none', md: 'block' } }} />

                    {/* ЦЕНТРАЛЬНАЯ ЧАСТЬ: Изображение и перекрывающий блок */}
                    <Grid item xs={12} md={6} sx={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Box sx={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '500px',
                            margin: '0 auto'
                        }}>
                            {/* Основное фото */}
                            <Box
                                component="img"
                                src={ImageSquare}
                                alt="Работа с глиной"
                                sx={{
                                    width: '100%',
                                    display: 'block',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                                }}
                            />

                            {/* 2. Оранжевый блок (Эмпатия) - Перекрывает фото */}
                            <Box sx={{
                                position: { xs: 'relative', md: 'absolute' },
                                bottom: { md: -30 },
                                left: { md: -20 },
                                mt: { xs: -10, md: 0 }, // Поднимаем блок на мобильных, чтобы перекрывал фото
                                ml: { xs: 2, md: 0 }, // Отступ слева на мобильных
                                backgroundColor: '#BC7356', // Терракотовый цвет
                                color: '#fff',
                                p: { xs: 2.5, md: 4 },
                                maxWidth: { xs: '90%', md: '400px' },
                                zIndex: 2,
                                boxShadow: { xs: '0 10px 20px rgba(0,0,0,0.15)', md: 'none' }
                            }}>
                                <Typography sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: '1rem', md: '1.1rem' },
                                    mb: 1,
                                    letterSpacing: '0.05em'
                                }}>
                                    И ДА — ЭТО ВОЗМОЖНО.
                                </Typography>
                                <Typography sx={{
                                    fontSize: { xs: '0.9rem', md: '0.95rem' },
                                    lineHeight: 1.5,
                                    opacity: 0.9
                                }}>
                                    Даже если вы начинаете с коммуналки, усталости и 15 минут вашего времени.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* 3. Правый текстовый блок (Список) */}
                    <Grid item xs={12} md={3} sx={{
                        pl: { md: 4 },
                        pt: { xs: 2, md: 0 }, // Уменьшен отступ сверху на мобильных
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        order: { xs: 3, md: 3 } // Порядок на мобильных: после изображения
                    }}>
                        <Typography sx={{
                            fontSize: { xs: '0.9rem', md: '0.95rem' },
                            color: '#3E2F28',
                            mb: 3,
                            lineHeight: 1.4,
                            mt: { xs: 8, md: 0 } // Добавляем отступ сверху на мобильных, чтобы не налезать на оранжевый блок
                        }}>
                            Для тех, кто готовит ребенка к Новому Миру. Миру, где побеждает тот, кто:
                        </Typography>

                        <Box component="ul" sx={{
                            p: 0,
                            m: 0,
                            listStyle: 'none',
                            '& li': {
                                position: 'relative',
                                pl: 2,
                                mb: 1.5,
                                fontSize: { xs: '0.9rem', md: '0.95rem' },
                                color: '#3E2F28',
                                '&::before': {
                                    content: '"•"',
                                    position: 'absolute',
                                    left: 0,
                                    color: '#BC7356',
                                    fontWeight: 'bold',
                                    fontSize: '1.2rem'
                                }
                            }
                        }}>
                            <li>Не боится ошибок</li>
                            <li>Не ждет одобрения</li>
                            <li>Не зависит от обстоятельств</li>
                        </Box>
                    </Grid>

                    {/* ПРАВАЯ ЧАСТЬ (пустая для центрирования) - только на десктопе */}
                    <Grid item xs={0} md={1.5} sx={{ display: { xs: 'none', md: 'block' } }} />
                </Grid>

                {/* 4. Кнопка внизу по центру */}
                <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 10 } }}>
                    <Button
                        variant="outlined"
                        sx={{
                            color: '#3E2F28',
                            borderColor: 'rgba(62, 47, 40, 0.3)',
                            borderRadius: 0,
                            px: { xs: 3, md: 4 },
                            py: { xs: 1, md: 1.5 },
                            textTransform: 'none',
                            fontSize: { xs: '0.85rem', md: '0.9rem' },
                            backgroundColor: 'rgba(255,255,255,0.5)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                borderColor: '#3E2F28',
                                backgroundColor: '#fff',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                            }
                        }}
                    >
                        Подробнее ->
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}