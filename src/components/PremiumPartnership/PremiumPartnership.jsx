import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Button,
    useTheme,
    useMediaQuery
} from '@mui/material';
import DiamondIcon from '@mui/icons-material/Diamond';
import TimelineIcon from '@mui/icons-material/Timeline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Link from "@mui/material/Link";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function PremiumPartnership() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const benefits = [
        {
            id: 1,
            title: "Стратегический сценарий развития семьи",
            description: "Ваша персональная карта на 5–10 лет. Мы проектируем будущее ребенка, учитывая его психотип, образовательные цели и ценности вашего рода.",
            icon: <TimelineIcon />,
            features: ["Карта развития на 5-10 лет", "Анализ психотипа ребенка", "Учет ценностей рода", "Образовательная стратегия"]
        },
        {
            id: 2,
            title: "Приоритетное экспертное присутствие",
            description: "Прямая линия связи для решения критических вопросов в режиме реального времени. Я рядом в моменты, когда решение нужно принять «здесь и сейчас».",
            icon: <PhoneInTalkIcon />,
            features: ["Прямая связь 24/7", "Экстренные консультации", "Мгновенные решения", "Персональный куратор"]
        },
        {
            id: 3,
            title: "Системный аудит окружения",
            description: "Глубокая работа со всеми, кто влияет на воспитание: няни, учителя, наставники. Мы синхронизируем действия внешнего круга, чтобы они работали на вашу стратегию, а не против неё.",
            icon: <PeopleAltIcon />,
            features: ["Аудит нянь и учителей", "Синхронизация окружения", "Обучение помощников", "Единая стратегия"]
        }
    ];

    return (
        <Box sx={{
            backgroundColor: '#FCF9F3', // Silk Parchment
            py: { xs: 8, md: 12 },
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(217, 93, 43, 0.3), transparent)'
            }
        }}>
            {/* Декоративные элементы */}
            <Box sx={{
                position: 'absolute',
                top: 50,
                right: 50,
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(217,93,43,0.05) 0%, transparent 70%)',
                zIndex: 0,
                [theme.breakpoints.down('md')]: {
                    display: 'none'
                }
            }} />

            <Box sx={{
                position: 'absolute',
                bottom: 100,
                left: -100,
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(166,124,82,0.03) 0%, transparent 70%)',
                zIndex: 0
            }} />

            <Container maxWidth="lg">
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                    {/* Заголовок с иконкой */}
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Box sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            backgroundColor: 'rgba(217, 93, 43, 0.1)',
                            mb: 3
                        }}>
                            <DiamondIcon sx={{ fontSize: 40, color: '#D95D2B' }} />
                        </Box>

                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '2.5rem', md: '3.5rem' },
                                fontWeight: 300,
                                color: '#3E2F28', // Bitter Chocolate
                                mb: 3,
                                lineHeight: 1.1,
                                letterSpacing: '-0.5px',
                                position: 'relative',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: -12,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '100px',
                                    height: '2px',
                                    backgroundColor: '#D95D2B', // Signature Orange
                                }
                            }}
                        >
                            Премиальное стратегическое сопровождение
                        </Typography>
                    </Box>

                    {/* Основной текст */}
                    <Paper
                        elevation={0}
                        sx={{
                            backgroundColor: 'transparent',
                            p: 0,
                            mb: 8,
                            maxWidth: '900px',
                            mx: 'auto'
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                fontSize: { xs: '1.25rem', md: '1.5rem' },
                                fontWeight: 400,
                                color: '#A67C52', // Saddle Tan
                                lineHeight: 1.6,
                                textAlign: 'center',
                                fontStyle: 'italic',
                                mb: 4
                            }}
                        >
                            Работа там, где нет места экспериментам.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: '1.1rem', md: '1.25rem' },
                                color: '#3E2F28', // Bitter Chocolate
                                lineHeight: 1.7,
                                textAlign: 'center'
                            }}
                        >
                            Я открываю доступ к своему ресурсу лишь для ограниченного круга — не более 5 семей в год.
                            Это не просто цикл консультаций. Это полное интеллектуальное погружение в архитектуру вашей семьи,
                            где мой опыт становится вашей страховкой от системных ошибок.
                        </Typography>
                    </Paper>

                    {/* Разделитель */}
                    <Divider sx={{
                        my: 8,
                        borderColor: 'rgba(166, 124, 82, 0.2)', // Saddle Tan с прозрачностью
                        width: '100px',
                        mx: 'auto',
                        borderWidth: 1
                    }} />

                    {/* Заголовок раздела */}
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2rem', md: '2.5rem' },
                            fontWeight: 300,
                            color: '#3E2F28', // Bitter Chocolate
                            textAlign: 'center',
                            mb: 6,
                            position: 'relative'
                        }}
                    >
                        Что входит в сопровождение
                    </Typography>

                    {/* Преимущества */}
                    <Grid container spacing={4} sx={{ mb: 10 }}>
                        {benefits.map((benefit) => (
                            <Grid item xs={12} md={4} key={benefit.id}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        height: '100%',
                                        backgroundColor: '#FCF9F3', // Silk Parchment
                                        borderRadius: 2,
                                        p: 4,
                                        border: '1px solid rgba(166, 124, 82, 0.2)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            borderColor: '#D95D2B', // Signature Orange
                                            '& .benefit-icon': {
                                                transform: 'scale(1.1)'
                                            }
                                        },
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: '3px',
                                            backgroundColor: '#D95D2B', // Signature Orange
                                            transform: 'scaleX(0)',
                                            transition: 'transform 0.3s ease'
                                        },
                                        '&:hover::before': {
                                            transform: 'scaleX(1)'
                                        }
                                    }}
                                >
                                    {/* Иконка */}
                                    <Box
                                        className="benefit-icon"
                                        sx={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: '50%',
                                            backgroundColor: 'rgba(217, 93, 43, 0.1)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mb: 3,
                                            transition: 'transform 0.3s ease'
                                        }}
                                    >
                                        <Box sx={{ color: '#D95D2B', fontSize: 28 }}>
                                            {benefit.icon}
                                        </Box>
                                    </Box>

                                    {/* Заголовок */}
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 500,
                                            color: '#3E2F28', // Bitter Chocolate
                                            mb: 2,
                                            fontSize: '1.3rem',
                                            minHeight: '3.5rem'
                                        }}
                                    >
                                        {benefit.title}
                                    </Typography>

                                    {/* Описание */}
                                    <Typography
                                        sx={{
                                            color: '#A67C52', // Saddle Tan
                                            lineHeight: 1.6,
                                            mb: 3,
                                            fontSize: '0.95rem',
                                            minHeight: '4.5rem'
                                        }}
                                    >
                                        {benefit.description}
                                    </Typography>

                                    {/* Особенности */}
                                    <List sx={{ p: 0 }}>
                                        {benefit.features.map((feature, index) => (
                                            <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                                                <ListItemIcon sx={{ minWidth: 30 }}>
                                                    <CheckCircleOutlineIcon
                                                        sx={{
                                                            fontSize: 16,
                                                            color: '#D95D2B' // Signature Orange
                                                        }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={feature}
                                                    primaryTypographyProps={{
                                                        fontSize: '0.9rem',
                                                        color: '#3E2F28' // Bitter Chocolate
                                                    }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Кнопка CTA */}
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
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

                        <Typography
                            sx={{
                                mt: 3,
                                color: '#A67C52', // Saddle Tan
                                fontSize: '0.9rem',
                                fontStyle: 'italic'
                            }}
                        >
                            Предварительное собеседование — обязательный этап
                        </Typography>
                    </Box>

                    {/* Финальный акцент */}
                    <Paper
                        elevation={0}
                        sx={{
                            backgroundColor: 'rgba(166, 124, 82, 0.05)', // Saddle Tan с прозрачностью
                            borderRadius: 2,
                            p: { xs: 4, md: 6 },
                            border: '1px solid rgba(217, 93, 43, 0.2)', // Signature Orange с прозрачностью
                            maxWidth: '800px',
                            mx: 'auto',
                            textAlign: 'center'
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 400,
                                color: '#3E2F28', // Bitter Chocolate
                                mb: 3,
                                fontSize: '1.3rem',
                                fontStyle: 'italic',
                                lineHeight: 1.4
                            }}
                        >
                            "Стратегия — это не просто план. Это способ мышления, который превращает сложность в ясность, а неопределенность — в уверенность."
                        </Typography>

                        <Typography
                            sx={{
                                color: '#A67C52', // Saddle Tan
                                fontSize: '0.95rem'
                            }}
                        >
                            — Елена Корнева
                        </Typography>
                    </Paper>
                </Box>
            </Container>
        </Box>
    );
}