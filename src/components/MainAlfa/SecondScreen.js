import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from "../Typography/Typography";
import { Paper, Divider, useTheme } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

export default function SecondScreen() {
    const theme = useTheme();

    return (
        <Box sx={{
            backgroundColor: '#FFFFFF',
            py: { xs: 8, md: 12 },
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Декоративный элемент слева */}
            <Box sx={{
                position: 'absolute',
                top: 50,
                left: -100,
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(217,93,43,0.05) 0%, transparent 70%)',
                zIndex: 0,
                [theme.breakpoints.down('md')]: {
                    display: 'none'
                }
            }} />

            {/* Декоративный элемент справа */}
            <Box sx={{
                position: 'absolute',
                bottom: 50,
                right: -100,
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(166,124,82,0.05) 0%, transparent 70%)',
                zIndex: 0,
                [theme.breakpoints.down('md')]: {
                    display: 'none'
                }
            }} />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Заголовок */}
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography
                        component="h2"
                        sx={{
                            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                            fontWeight: 300,
                            lineHeight: 1.1,
                            color: '#3E2F28', // Bitter Chocolate
                            mb: 3,
                            letterSpacing: '-0.5px'
                        }}
                    >
                        Школа — это зеркало,
                        <Box component="span" sx={{
                            display: 'block',
                            fontWeight: 400,
                            color: '#D95D2B', // Signature Orange
                            mt: 1
                        }}>
                            а не поле боя
                        </Box>
                    </Typography>

                    {/* Разделитель */}
                    <Divider sx={{
                        mx: 'auto',
                        borderColor: '#D95D2B', // Signature Orange
                        width: '80px',
                        borderWidth: '2px',
                        mb: 4
                    }} />
                </Box>

                <Grid container spacing={6} alignItems="center">
                    {/* ТЕКСТОВАЯ ЧАСТЬ */}
                    <Grid item xs={12} md={6}>
                        <Typography
                            component="p"
                            sx={{
                                fontSize: { xs: '1.1rem', sm: '1.2rem' },
                                lineHeight: 1.7,
                                color: '#3E2F28', // Bitter Chocolate
                                mb: 5,
                                fontWeight: 400
                            }}
                        >
                            Многие думают, что школа — это джунгли. Но на самом деле это среда,
                            которая моментально считывает внутреннее состояние ребенка.
                            Если он «удобный», тихий или боится проявиться — он уже проигрывает социальную конкуренцию.
                        </Typography>

                        {/* Блок с акцентом */}
                        <Paper
                            elevation={0}
                            sx={{
                                backgroundColor: 'rgba(217, 93, 43, 0.05)', // Signature Orange с прозрачностью
                                borderRadius: 2,
                                p: 4,
                                borderLeft: '4px solid #D95D2B', // Signature Orange
                                mb: 5
                            }}
                        >
                            <Typography
                                component="h3"
                                sx={{
                                    fontSize: '1.2rem',
                                    fontWeight: 500,
                                    color: '#3E2F28', // Bitter Chocolate
                                    mb: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1.5
                                }}
                            >
                                <PsychologyAltIcon sx={{ color: '#D95D2B', fontSize: 24 }} />
                                Почему обычные тренинги лидерства не работают?
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '1rem',
                                    lineHeight: 1.6,
                                    color: '#3E2F28' // Bitter Chocolate
                                }}
                            >
                                Потому что они учат ребенка «казаться», а не «быть».
                            </Typography>
                        </Paper>

                        <Typography
                            component="p"
                            sx={{
                                fontSize: '1.1rem',
                                lineHeight: 1.7,
                                color: '#3E2F28', // Bitter Chocolate
                                fontWeight: 500,
                                mb: 4
                            }}
                        >
                            Мы же работаем через трансформацию семьи:
                        </Typography>
                    </Grid>

                    {/* БЛОК ПРЕИМУЩЕСТВ */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 4
                        }}>
                            {/* Пункт 1 */}
                            <Box sx={{
                                display: 'flex',
                                gap: 3,
                                p: 3,
                                backgroundColor: '#FCF9F3', // Silk Parchment
                                borderRadius: 2,
                                border: '1px solid rgba(166, 124, 82, 0.2)', // Saddle Tan с прозрачностью
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    borderColor: '#D95D2B',
                                    boxShadow: '0 4px 20px rgba(217, 93, 43, 0.1)'
                                }
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minWidth: 48,
                                    height: 48,
                                    backgroundColor: 'rgba(217, 93, 43, 0.1)',
                                    borderRadius: '50%',
                                    color: '#D95D2B'
                                }}>
                                    <FamilyRestroomIcon />
                                </Box>
                                <Box>
                                    <Typography
                                        component="h4"
                                        sx={{
                                            fontSize: '1.1rem',
                                            fontWeight: 500,
                                            color: '#3E2F28', // Bitter Chocolate
                                            mb: 1
                                        }}
                                    >
                                        Убираем родительские установки
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '0.95rem',
                                            lineHeight: 1.5,
                                            color: '#A67C52' // Saddle Tan
                                        }}
                                    >
                                        Которые «гасят» естественную энергию ребенка и мешают ему проявляться
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Пункт 2 */}
                            <Box sx={{
                                display: 'flex',
                                gap: 3,
                                p: 3,
                                backgroundColor: '#FCF9F3', // Silk Parchment
                                borderRadius: 2,
                                border: '1px solid rgba(166, 124, 82, 0.2)', // Saddle Tan с прозрачностью
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    borderColor: '#D95D2B',
                                    boxShadow: '0 4px 20px rgba(217, 93, 43, 0.1)'
                                }
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minWidth: 48,
                                    height: 48,
                                    backgroundColor: 'rgba(217, 93, 43, 0.1)',
                                    borderRadius: '50%',
                                    color: '#D95D2B'
                                }}>
                                    <SelfImprovementIcon />
                                </Box>
                                <Box>
                                    <Typography
                                        component="h4"
                                        sx={{
                                            fontSize: '1.1rem',
                                            fontWeight: 500,
                                            color: '#3E2F28', // Bitter Chocolate
                                            mb: 1
                                        }}
                                    >
                                        Даем инструменты влияния
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '0.95rem',
                                            lineHeight: 1.5,
                                            color: '#A67C52' // Saddle Tan
                                        }}
                                    >
                                        Которые работают на уровне психофизики, а не поверхностных техник
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Пункт 3 */}
                            <Box sx={{
                                display: 'flex',
                                gap: 3,
                                p: 3,
                                backgroundColor: '#FCF9F3', // Silk Parchment
                                borderRadius: 2,
                                border: '1px solid rgba(166, 124, 82, 0.2)', // Saddle Tan с прозрачностью
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    borderColor: '#D95D2B',
                                    boxShadow: '0 4px 20px rgba(217, 93, 43, 0.1)'
                                }
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minWidth: 48,
                                    height: 48,
                                    backgroundColor: 'rgba(217, 93, 43, 0.1)',
                                    borderRadius: '50%',
                                    color: '#D95D2B'
                                }}>
                                    <CheckCircleOutlineIcon />
                                </Box>
                                <Box>
                                    <Typography
                                        component="h4"
                                        sx={{
                                            fontSize: '1.1rem',
                                            fontWeight: 500,
                                            color: '#3E2F28', // Bitter Chocolate
                                            mb: 1
                                        }}
                                    >
                                        Создаем среду для лидерства
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '0.95rem',
                                            lineHeight: 1.5,
                                            color: '#A67C52' // Saddle Tan
                                        }}
                                    >
                                        Где лидерство — это естественное состояние, а не маска для общества
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        {/* Дополнительный акцентный текст */}
                        <Paper
                            elevation={0}
                            sx={{
                                backgroundColor: 'rgba(62, 47, 40, 0.03)', // Bitter Chocolate с прозрачностью
                                borderRadius: 2,
                                p: 3,
                                mt: 4,
                                border: '1px solid rgba(166, 124, 82, 0.2)'
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: '0.9rem',
                                    fontStyle: 'italic',
                                    lineHeight: 1.6,
                                    color: '#A67C52', // Saddle Tan
                                    textAlign: 'center'
                                }}
                            >
                                Настоящее лидерство рождается из глубинной уверенности,
                                которая формируется в безопасной семейной среде
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>

                {/* Дополнительные преимущества внизу */}
                <Box sx={{ mt: 10 }}>
                    <Typography
                        component="h3"
                        sx={{
                            fontSize: '1.3rem',
                            fontWeight: 500,
                            color: '#3E2F28', // Bitter Chocolate
                            mb: 4,
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}
                    >
                        Что отличает наш подход от обычных тренингов:
                    </Typography>

                    <Grid container spacing={3}>
                        {[
                            {
                                title: "Работа с причиной, а не симптомом",
                                description: "Не просто учим давать сдачи, а убираем причину уязвимости"
                            },
                            {
                                title: "Системный подход",
                                description: "Меняем всю семейную систему, а не только поведение ребенка"
                            },
                            {
                                title: "Научная база",
                                description: "Методика основана на нейропсихологии и доказательной психологии"
                            },
                            {
                                title: "Естественные результаты",
                                description: "Ребенок не играет роль, а становится лидером по своей сути"
                            }
                        ].map((item, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Box sx={{
                                    height: '100%',
                                    p: 3,
                                    textAlign: 'center',
                                    backgroundColor: '#FCF9F3',
                                    borderRadius: 2,
                                    border: '1px solid rgba(166, 124, 82, 0.1)'
                                }}>
                                    <Box sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 40,
                                        height: 40,
                                        backgroundColor: 'rgba(217, 93, 43, 0.1)',
                                        borderRadius: '50%',
                                        color: '#D95D2B',
                                        mb: 2
                                    }}>
                                        <Typography sx={{ fontWeight: 600 }}>{index + 1}</Typography>
                                    </Box>
                                    <Typography
                                        component="h4"
                                        sx={{
                                            fontSize: '1rem',
                                            fontWeight: 500,
                                            color: '#3E2F28',
                                            mb: 1
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '0.85rem',
                                            lineHeight: 1.5,
                                            color: '#A67C52'
                                        }}
                                    >
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}