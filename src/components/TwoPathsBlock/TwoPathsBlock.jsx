import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function TwoPathsBlock() {
    return (
        <Container component="section" >
            <Box sx={{ my: { xs: 2, sm: 3 } }}>

                {/* Заголовок */}
                <Typography
                    component="h2"
                    sx={{
                        fontSize: { xs: 24, sm: 28, md: 32 },
                        fontWeight: 600,
                        lineHeight: 1.3,
                        textAlign: 'center',
                        mb: 3,
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                    }}
                >
                    Я вхожу в процесс до того,<br/>как ошибка становится нормой
                </Typography>

                {/* Суть */}
                <Typography
                    component="p"
                    sx={{
                        fontSize: { xs: 16, md: 18 },
                        lineHeight: 1.6,
                        color: '#444',
                        textAlign: 'center',
                        mb: 5,
                        maxWidth: 680,
                        mx: 'auto',
                    }}
                >
                    Моя работа — не успокоить вас и не дать совет. Моя задача — помочь вам занять{' '}
                    <Box component="span" sx={{ fontWeight: 600, color: '#000' }}>
                        устойчивую взрослую позицию
                    </Box>
                    , с которой все остальные решения становятся очевидными и последовательными.
                    <br/><br/>
                    Я не работаю с «симптомами» поведения ребёнка. Я анализирую и корректирую{' '}
                    <Box component="span" sx={{ fontWeight: 600, color: '#000' }}>
                        систему
                    </Box>
                    : ваши решения, границы, среду и вашу собственную позицию.
                </Typography>

                {/* Принципы работы */}
                <Grid container spacing={3} sx={{ mb: { xs: 4, md: 6 } }}>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{
                            height: '100%',
                            p: 3,
                            border: '1px solid #f0f0f0',
                            borderRadius: 1,
                            backgroundColor: '#fafafa',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: '#fff',
                                borderColor: '#e0e0e0',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                            }
                        }}>
                            <Typography
                                sx={{
                                    fontSize: 18,
                                    fontWeight: 600,
                                    color: '#000',
                                    mb: 1.5,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1.5,
                                }}
                            >
                                <Box
                                    component="span"
                                    sx={{
                                        width: 24,
                                        height: 24,
                                        borderRadius: '50%',
                                        backgroundColor: '#000',
                                        color: '#fff',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: 14,
                                        fontWeight: 500,
                                    }}
                                >
                                    1
                                </Box>
                                Фокус на последствия
                            </Typography>
                            <Typography sx={{ fontSize: 15, lineHeight: 1.5, color: '#555' }}>
                                Каждое решение разбирается с точки зрения «что это сформирует через 3-5 лет?»
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box sx={{
                            height: '100%',
                            p: 3,
                            border: '1px solid #f0f0f0',
                            borderRadius: 1,
                            backgroundColor: '#fafafa',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: '#fff',
                                borderColor: '#e0e0e0',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                            }
                        }}>
                            <Typography
                                sx={{
                                    fontSize: 18,
                                    fontWeight: 600,
                                    color: '#000',
                                    mb: 1.5,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1.5,
                                }}
                            >
                                <Box
                                    component="span"
                                    sx={{
                                        width: 24,
                                        height: 24,
                                        borderRadius: '50%',
                                        backgroundColor: '#000',
                                        color: '#fff',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: 14,
                                        fontWeight: 500,
                                    }}
                                >
                                    2
                                </Box>
                                Коррекция до закрепления
                            </Typography>
                            <Typography sx={{ fontSize: 15, lineHeight: 1.5, color: '#555' }}>
                                Работа начинается в момент возникновения модели, а не когда она стала чертой характера
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box sx={{
                            height: '100%',
                            p: 3,
                            border: '1px solid #f0f0f0',
                            borderRadius: 1,
                            backgroundColor: '#fafafa',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: '#fff',
                                borderColor: '#e0e0e0',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                            }
                        }}>
                            <Typography
                                sx={{
                                    fontSize: 18,
                                    fontWeight: 600,
                                    color: '#000',
                                    mb: 1.5,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1.5,
                                }}
                            >
                                <Box
                                    component="span"
                                    sx={{
                                        width: 24,
                                        height: 24,
                                        borderRadius: '50%',
                                        backgroundColor: '#000',
                                        color: '#fff',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: 14,
                                        fontWeight: 500,
                                    }}
                                >
                                    3
                                </Box>
                                Среда, а не ребёнок
                            </Typography>
                            <Typography sx={{ fontSize: 15, lineHeight: 1.5, color: '#555' }}>
                                Мы меняем не ребенка, а контекст, который провоцирует нежелательное поведение
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box sx={{
                            height: '100%',
                            p: 3,
                            border: '1px solid #f0f0f0',
                            borderRadius: 1,
                            backgroundColor: '#fafafa',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: '#fff',
                                borderColor: '#e0e0e0',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                            }
                        }}>
                            <Typography
                                sx={{
                                    fontSize: 18,
                                    fontWeight: 600,
                                    color: '#000',
                                    mb: 1.5,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1.5,
                                }}
                            >
                                <Box
                                    component="span"
                                    sx={{
                                        width: 24,
                                        height: 24,
                                        borderRadius: '50%',
                                        backgroundColor: '#000',
                                        color: '#fff',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: 14,
                                        fontWeight: 500,
                                    }}
                                >
                                    4
                                </Box>
                                Устойчивость, а не удобство
                            </Typography>
                            <Typography sx={{ fontSize: 15, lineHeight: 1.5, color: '#555' }}>
                                Цель — не сделать сегодня тихо, а построить систему, которая будет работать и завтра, и через год
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
