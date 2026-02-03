import React from 'react';
import {
    Container,
    Typography,
    Box,
    Paper,
    Grid,
    Card,
    CardContent,
    Divider,
    Button,
} from '@mui/material';

export default function ParentingInsights() {
    return (
        <Box sx={{
            backgroundColor: '#E9DECE', // Desert Dunes - базовый фон
            minHeight: '100vh',
            py: 6
        }}>
            <Container maxWidth="md">
                <Paper
                    elevation={0}
                    sx={{
                        p: { xs: 3, md: 6 },
                        mb: 6,
                        backgroundColor: '#FDF1DB', // Ivory - контентный фон
                        borderRadius: 2,
                    }}
                >
                    <Box sx={{ mb: 8 }}>
                        <Typography
                            variant="h1"
                            gutterBottom
                            sx={{
                                fontWeight: 700,
                                letterSpacing: -0.5,
                                color: '#082434', // Deep Navy
                                fontSize: { xs: '2.5rem', md: '3.5rem' }
                            }}
                        >
                            Ваша интуиция работает против вас
                        </Typography>

                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{
                                fontWeight: 400,
                                mb: 4,
                                color: '#254B5A', // Slate
                                fontSize: { xs: '1.25rem', md: '1.5rem' }
                            }}
                        >
                            Почему «хорошего отношения» уже недостаточно?
                        </Typography>

                        <Box sx={{
                            p: 4,
                            mb: 4,
                            backgroundColor: '#F2D2C2', // Soft Blush - текстурный
                            borderRadius: 1,
                            borderLeft: '4px solid #C86D39' // Muted Copper акцент
                        }}>
                            <Typography
                                variant="body1"
                                paragraph
                                sx={{
                                    fontSize: '1.1rem',
                                    lineHeight: 1.7,
                                    color: '#082434' // Deep Navy
                                }}
                            >
                                Большинство родителей попадают в одну и ту же ловушку. Они строят отношения
                                на любви и интуиции, забывая, что воспитание — это стратегия, а не импровизация.
                            </Typography>
                        </Box>

                        <Box sx={{
                            p: 3,
                            backgroundColor: '#E9DECE', // Desert Dunes
                            borderRadius: 1,
                            border: '1px solid #B1A185' // Soft Gold
                        }}>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: '1.1rem',
                                    lineHeight: 1.7,
                                    color: '#082434' // Deep Navy
                                }}
                            >
                                <Box
                                    component="span"
                                    sx={{
                                        fontWeight: 600,
                                        color: '#6C3C0C', // Chocolate
                                    }}
                                >
                                    Когда ребенку 5 лет, интуиция помогает.
                                </Box>{' '}
                                Когда 12, 15 или 20 — она начинает давать сбои, которые обходятся слишком дорого.
                            </Typography>
                        </Box>
                    </Box>

                    <Typography
                        variant="h2"
                        gutterBottom
                        sx={{
                            mb: 6,
                            fontWeight: 700,
                            color: '#082434', // Deep Navy
                            fontSize: { xs: '2rem', md: '2.5rem' },
                            position: 'relative',
                            '&:after': {
                                content: '""',
                                position: 'absolute',
                                bottom: -12,
                                left: 0,
                                width: 80,
                                height: 4,
                                backgroundColor: '#C86D39' // Muted Copper
                            }
                        }}
                    >
                        4 признака того, что вы теряете управление
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Card
                                elevation={0}
                                sx={{
                                    backgroundColor: '#082434', // Deep Navy
                                    color: '#FDF1DB', // Ivory
                                    borderRadius: 2,
                                    transition: 'transform 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-4px)'
                                    }
                                }}
                            >
                                <CardContent sx={{ p: 4 }}>
                                    <Typography
                                        variant="h5"
                                        gutterBottom
                                        sx={{
                                            fontWeight: 600,
                                            color: '#F2D2C2', // Soft Blush
                                            mb: 3
                                        }}
                                    >
                                        1. Режим «Пожарного»
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            lineHeight: 1.7,
                                            color: '#FDF1DB', // Ivory
                                            fontSize: '1.1rem'
                                        }}
                                    >
                                        Вы не управляете развитием ребенка, а только устраняете последствия
                                        (крики, двойки, закрытые двери).
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12}>
                            <Card
                                elevation={0}
                                sx={{
                                    backgroundColor: '#254B5A', // Slate
                                    color: '#FDF1DB', // Ivory
                                    borderRadius: 2,
                                    transition: 'transform 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-4px)'
                                    }
                                }}
                            >
                                <CardContent sx={{ p: 4 }}>
                                    <Typography
                                        variant="h5"
                                        gutterBottom
                                        sx={{
                                            fontWeight: 600,
                                            color: '#F2D2C2', // Soft Blush
                                            mb: 3
                                        }}
                                    >
                                        2. Страх конфликта
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            lineHeight: 1.7,
                                            color: '#FDF1DB', // Ivory
                                            fontSize: '1.1rem'
                                        }}
                                    >
                                        Вы уступаете там, где нужно проявить твердость, потому что боитесь
                                        испортить отношения. В итоге — теряете и границы, и авторитет.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12}>
                            <Card
                                elevation={0}
                                sx={{
                                    backgroundColor: '#082434', // Deep Navy
                                    color: '#FDF1DB', // Ivory
                                    borderRadius: 2,
                                    transition: 'transform 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-4px)'
                                    }
                                }}
                            >
                                <CardContent sx={{ p: 4 }}>
                                    <Typography
                                        variant="h5"
                                        gutterBottom
                                        sx={{
                                            fontWeight: 600,
                                            color: '#F2D2C2', // Soft Blush
                                            mb: 3
                                        }}
                                    >
                                        3. Иллюзия контакта
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            lineHeight: 1.7,
                                            color: '#FDF1DB', // Ivory
                                            fontSize: '1.1rem'
                                        }}
                                    >
                                        Вам кажется, что всё под контролем, но ребенок просто перестал
                                        с вами делиться важным.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12}>
                            <Card
                                elevation={0}
                                sx={{
                                    backgroundColor: '#254B5A', // Slate
                                    color: '#FDF1DB', // Ivory
                                    borderRadius: 2,
                                    transition: 'transform 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-4px)'
                                    }
                                }}
                            >
                                <CardContent sx={{ p: 4 }}>
                                    <Typography
                                        variant="h5"
                                        gutterBottom
                                        sx={{
                                            fontWeight: 600,
                                            color: '#F2D2C2', // Soft Blush
                                            mb: 3
                                        }}
                                    >
                                        4. Размытые роли
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            lineHeight: 1.7,
                                            color: '#FDF1DB', // Ivory
                                            fontSize: '1.1rem'
                                        }}
                                    >
                                        Вы превращаетесь в «обслуживающий персонал» или «удобного родителя»,
                                        лишая ребенка опоры в лице сильного взрослого.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    <Box sx={{ mt: 10, mb: 6 }}>
                        <Divider sx={{ my: 6, borderColor: '#B1A185' }} /> {/* Soft Gold */}

                        <Box sx={{ mb: 6 }}>
                            <Typography
                                variant="h3"
                                gutterBottom
                                sx={{
                                    fontWeight: 700,
                                    color: '#082434', // Deep Navy
                                    mb: 4
                                }}
                            >
                                Ошибка не в нехватке любви
                            </Typography>

                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 400,
                                    lineHeight: 1.6,
                                    pl: 3,
                                    borderLeft: '4px solid',
                                    borderColor: '#C86D39', // Muted Copper
                                    color: '#254B5A', // Slate
                                    fontStyle: 'italic'
                                }}
                            >
                                Ошибка в переоценке чувств там, где нужна система.
                            </Typography>
                        </Box>

                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 4, md: 6 },
                                backgroundColor: '#B1A185', // Soft Gold
                                color: '#082434', // Deep Navy
                                borderRadius: 2,
                                mb: 5,
                                border: '2px solid #C86D39' // Muted Copper
                            }}
                        >
                            <Typography
                                variant="h4"
                                align="center"
                                sx={{
                                    fontWeight: 600,
                                    lineHeight: 1.4,
                                    fontStyle: 'italic',
                                    fontSize: { xs: '1.75rem', md: '2rem' }
                                }}
                            >
                                Любовь — это топливо, но без навигатора и правил движения она не приведет вас к цели.
                            </Typography>
                        </Paper>

                        <Box sx={{
                            p: 5,
                            backgroundColor: '#F2D2C2', // Soft Blush
                            borderRadius: 2,
                            border: '1px solid #6C3C0C' // Chocolate
                        }}>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: '1.2rem',
                                    lineHeight: 1.8,
                                    color: '#082434', // Deep Navy
                                    mb: 4
                                }}
                            >
                                <Box
                                    component="span"
                                    sx={{
                                        display: 'block',
                                        fontWeight: 700,
                                        color: '#C86D39', // Muted Copper
                                        fontSize: '1.3rem',
                                        mb: 2
                                    }}
                                >
                                    Решение:
                                </Box>
                                Сочетайте эмоциональную связь с четкой воспитательной стратегией,
                                установите границы и последовательно их соблюдайте, сохраняя при этом открытость для диалога.
                            </Typography>

                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    backgroundColor: '#C86D39', // Muted Copper
                                    color: '#FDF1DB', // Ivory
                                    py: 1.5,
                                    px: 4,
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    borderRadius: 2,
                                    '&:hover': {
                                        backgroundColor: '#B1592D'
                                    }
                                }}
                            >
                                Начать изменения
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}