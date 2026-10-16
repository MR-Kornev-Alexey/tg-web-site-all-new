import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    Divider,
    Button,
    useTheme,
    useMediaQuery
} from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from "@mui/material/Link";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function SecondScreenNew() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const warningSigns = [
        {
            id: 1,
            title: "Режим «Пожарного»",
            description: "Не управляете развитием, а лишь тушите пожары. Инциденты завтра повторятся.",
            icon: <LocalFireDepartmentIcon />,
        },
        {
            id: 2,
            title: "Страх конфликта",
            description: "Выбираете «тишину» вместо авторитета. Сегодня покой, завтра — потеря контроля.",
            icon: <VolumeOffIcon />,
        },
        {
            id: 3,
            title: "Размытые границы",
            description: "Превращаетесь в обслуживающий персонал в собственном доме.",
            icon: <PersonOutlineIcon />,
        },
        {
            id: 4,
            title: "Потеря контакта",
            description: "Чем больше давите, тем дальше становится ребёнок эмоционально.",
            icon: <SentimentDissatisfiedIcon />,
        }
    ];

    const ageConsequences = [
        {
            age: "12 лет",
            title: "Глухой протест",
            description: "Отрицание ценностей, потеря влияния",
        },
        {
            age: "15 лет",
            title: "Опасный отрыв",
            description: "Поиск авторитетов на стороне",
        },
        {
            age: "20 лет",
            title: "Кризис субъектности",
            description: "Несамостоятельность или полный разрыв",
        }
    ];

    return (
        <Box sx={{
            backgroundColor: '#FCF9F3', // Silk Parchment
            py: { xs: 6, md: 10 },
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(217,93,43,0.08) 0%, transparent 70%)',
                zIndex: 0,
            }
        }}>
            <Container maxWidth="md">
                {/* Главный заголовок */}
                <Box sx={{ textAlign: 'center', mb: 8, position: 'relative', zIndex: 1 }}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '1.5rem', md: '2.5rem' },
                            fontWeight: 300,
                            color: '#3E2F28', // Bitter Chocolate
                            mb: 3,
                            lineHeight: 1.1,
                            letterSpacing: '-0.5px'
                        }}
                    >
                        Любить ребенка — это интуитивно<br/>
                        Но понимать, что происходит в его голове, когда он закрывается или протестует — это уже навык
                    </Typography>

                    <Typography
                        variant="h5"
                        sx={{
                            fontSize: { xs: '1.1rem', md: '1.3rem' },
                            fontWeight: 400,
                            color: '#A67C52', // Saddle Tan
                            lineHeight: 1.6,
                            maxWidth: '800px',
                            mx: 'auto',
                            fontStyle: 'italic'
                        }}
                    >
                        Мы часто действуем на ощупь, просто потому что нас самих так растили. Но когда старые методы не срабатывают, мы начинаем тревожиться. Я здесь для того, чтобы заменить эту тревогу на спокойную уверенность. Мой опыт врача и мамы — это не список правил, а ваша опора.
                    </Typography>
                </Box>

                {/* Карточки с признаками - минималистичные */}
                <Box sx={{ mb: 10 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontSize: '1.5rem',
                            fontWeight: 400,
                            color: '#3E2F28', // Bitter Chocolate
                            textAlign: 'center',
                            mb: 6,
                            fontStyle: 'italic',
                            position: 'relative',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: -12,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '100px',
                                height: '1px',
                                backgroundColor: '#A67C52',
                                opacity: 0.5
                            }
                        }}
                    >
                        Проверьте, не находитесь ли вы в ловушке:
                    </Typography>

                    <Grid container spacing={3}>
                        {warningSigns.map((item) => (
                            <Grid item xs={12} md={6} key={item.id}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        height: '100%',
                                        backgroundColor: 'transparent',
                                        border: '1px solid',
                                        borderColor: '#A67C52', // Saddle Tan
                                        borderRadius: 2,
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            borderColor: '#D95D2B', // Signature Orange
                                        },
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '4px',
                                            height: '100%',
                                            backgroundColor: '#D95D2B', // Signature Orange
                                            transform: 'scaleY(0)',
                                            transition: 'transform 0.3s ease',
                                        },
                                        '&:hover::before': {
                                            transform: 'scaleY(1)',
                                        }
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                                        <Box sx={{
                                            color: '#A67C52', // Saddle Tan
                                            fontSize: '2rem',
                                            lineHeight: 1
                                        }}>
                                            {item.icon}
                                        </Box>
                                        <Box>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 600,
                                                    color: '#3E2F28', // Bitter Chocolate
                                                    mb: 1,
                                                    fontSize: '1.2rem'
                                                }}
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    color: '#A67C52', // Saddle Tan
                                                    lineHeight: 1.6,
                                                    fontSize: '0.95rem'
                                                }}
                                            >
                                                {item.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Разделитель */}
                <Divider sx={{
                    my: 10,
                    borderColor: '#A67C52', // Saddle Tan
                    opacity: 0.3,
                    width: '100px',
                    mx: 'auto'
                }} />

                {/* Цена ошибок */}
                <Box sx={{ mb: 10 }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: '1.8rem', md: '2.2rem' },
                            fontWeight: 300,
                            color: '#3E2F28', // Bitter Chocolate
                            textAlign: 'center',
                            mb: 2,
                            lineHeight: 1.2
                        }}
                    >
                        Счёт приходит с задержкой
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: '1.1rem',
                            fontWeight: 400,
                            color: '#A67C52', // Saddle Tan
                            textAlign: 'center',
                            mb: 6,
                            lineHeight: 1.6,
                            fontStyle: 'italic',
                            maxWidth: '600px',
                            mx: 'auto'
                        }}
                    >
                        Цена «ощупью» становится понятна слишком поздно
                    </Typography>

                    {/* Возрастные последствия */}
                    <Box sx={{ maxWidth: '700px', mx: 'auto' }}>
                        {ageConsequences.map((item, index) => (
                            <Box
                                key={item.age}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    mb: 4,
                                    p: 3,
                                    borderBottom: '1px solid',
                                    borderColor: 'rgba(166, 124, 82, 0.2)', // Saddle Tan с прозрачностью
                                    position: 'relative',
                                    '&:last-child': {
                                        borderBottom: 'none',
                                        mb: 0
                                    }
                                }}
                            >
                                <Box sx={{
                                    minWidth: '100px',
                                    mr: 4
                                }}>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontWeight: 700,
                                            color: '#D95D2B', // Signature Orange
                                            fontSize: '2rem',
                                            lineHeight: 1
                                        }}
                                    >
                                        {item.age}
                                    </Typography>
                                </Box>
                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 500,
                                            color: '#3E2F28', // Bitter Chocolate
                                            mb: 1,
                                            fontSize: '1.1rem'
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: '#A67C52', // Saddle Tan
                                            fontSize: '0.95rem',
                                            lineHeight: 1.5
                                        }}
                                    >
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Заключительная часть */}
                <Paper
                    elevation={0}
                    sx={{
                        backgroundColor: 'transparent',
                        p: 0,
                        textAlign: 'center',
                        borderTop: '1px solid',
                        borderBottom: '1px solid',
                        borderColor: 'rgba(166, 124, 82, 0.2)', // Saddle Tan с прозрачностью
                        py: 6
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontSize: { xs: '1.5rem', md: '2rem' },
                            fontWeight: 300,
                            color: '#3E2F28', // Bitter Chocolate
                            mb: 4,
                            lineHeight: 1.3,
                            fontStyle: 'italic'
                        }}
                    >
                        Любовь без системы — это дар без инструкции
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: '1.1rem',
                            fontWeight: 400,
                            color: '#A67C52', // Saddle Tan
                            lineHeight: 1.6,
                            maxWidth: '600px',
                            mx: 'auto',
                            mb: 6
                        }}
                    >
                        Интуиция важна, но она должна быть частью системы, а не заменой ей.
                    </Typography>

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
                </Paper>
            </Container>
        </Box>
    );
}