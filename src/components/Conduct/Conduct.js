import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import TimelineIcon from '@mui/icons-material/Timeline';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BuildIcon from '@mui/icons-material/Build';
import SupportIcon from '@mui/icons-material/Support';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TelegramIcon from '@mui/icons-material/Telegram';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SectionHeader from "../SectionHeader/SectionHeader";

export default function SystematicSupport() {
    const stages = [
        {
            step: "1",
            title: "Глубокая диагностика",
            description: "Полный аудит психотипа ребенка и анализ среды обитания. Мы находим скрытые барьеры, которые мешают развитию.",
            icon: <PsychologyIcon />,
            color: "rgba(166, 124, 82, 0.1)"
        },
        {
            step: "2",
            title: "Стратегический вектор",
            description: "Формирование личного плана развития с фокусом на 2–3 ключевых навыка (саморегуляция, воля, мышление).",
            icon: <TimelineIcon />,
            color: "rgba(166, 124, 82, 0.15)"
        },
        {
            step: "3",
            title: "Системная реализация",
            description: "Регулярные сессии, на которых мы корректируем курс. Я даю практические инструменты, которые вы внедряете в реальную жизнь.",
            icon: <BuildIcon />,
            color: "rgba(217, 93, 43, 0.1)"
        },
        {
            step: "4",
            title: "Непрерывная поддержка",
            description: "Я на связи в чате между встречами, чтобы вы не оставались один на один с возникающими вопросами.",
            icon: <SupportIcon />,
            color: "rgba(217, 93, 43, 0.15)"
        }
    ];

    const firstMonthResults = [
        {
            icon: <LightbulbIcon />,
            title: "Снятие напряжения",
            description: "Исчезает фоновая тревога «что я делаю не так?». Вы получаете ясность."
        },
        {
            icon: <AutorenewIcon />,
            title: "Обретение опоры",
            description: "У вас появляется четкий алгоритм действий для любой кризисной ситуации."
        },
        {
            icon: <CheckCircleIcon />,
            title: "Первые шаги к автономии",
            description: "Ребенок начинает проявлять осознанность, так как среда вокруг него перестает быть хаотичной."
        }
    ];

    const approachPrinciples = [
        {
            icon: <PsychologyIcon />,
            title: "Семья как система",
            description: "Я не работаю с ребенком в изоляции. Мы настраиваем всю систему отношений, где каждый участник — важная часть механизма."
        },
        {
            icon: <BuildIcon />,
            title: "Индивидуальные технологии",
            description: "Никаких шаблонов. Мы используем инструменты, которые подходят именно под биологические и психические особенности вашего ребенка."
        },
        {
            icon: <SupportIcon />,
            title: "Сопровождение, а не контроль",
            description: "Я даю вам опору и навигацию, чтобы вы сами стали уверенным лидером в своем доме."
        }
    ];

    return (
        <Box sx={{ py: { xs: 8, md: 12 } }}>
            <Container maxWidth="lg">
                <SectionHeader
                    title="Личное системное сопровождение: Архитектура будущего"
                    subtitle="Минимальный цикл трансформации — 90 дней"
                    align="center"
                />

                {/* Основное описание */}
                <Paper
                    elevation={0}
                    sx={{
                        p: 4,
                        mb: 6,
                        backgroundColor: 'rgba(166, 124, 82, 0.03)',
                        borderRadius: 2,
                        border: '1px solid rgba(166, 124, 82, 0.1)'
                    }}
                >
                    <Typography
                        sx={{
                            color: '#3E2F28',
                            fontSize: '1.1rem',
                            lineHeight: 1.7,
                            mb: 3
                        }}
                    >
                        Фундаментальные изменения в семейной системе не происходят за неделю. Нам нужно время,
                        чтобы перестроить нейронные связи, привычки и саму среду, в которой растет ребенок.
                    </Typography>

                    <Box sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 2,
                        p: 2,
                        backgroundColor: 'rgba(217, 93, 43, 0.05)',
                        borderRadius: 1,
                        border: '1px dashed rgba(217, 93, 43, 0.2)'
                    }}>
                        <Typography
                            sx={{
                                color: '#D95D2B',
                                fontSize: '1.2rem',
                                fontWeight: 600
                            }}
                        >
                            Первые ощутимые результаты через 30 дней
                        </Typography>
                        <Typography
                            sx={{
                                color: '#A67C52',
                                fontSize: '0.9rem',
                                fontStyle: 'italic'
                            }}
                        >
                            — «точка невозврата» к старому хаосу
                        </Typography>
                    </Box>
                </Paper>

                {/* Почему большинство усилий не дают результата */}
                <Box sx={{ mb: 8 }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: '1.8rem',
                            fontWeight: 500,
                            color: '#3E2F28',
                            mb: 3,
                            textAlign: 'center'
                        }}
                    >
                        Почему большинство усилий не дают результата?
                    </Typography>

                    <Paper
                        elevation={0}
                        sx={{
                            p: 4,
                            backgroundColor: 'rgba(217, 93, 43, 0.05)',
                            borderRadius: 2,
                            borderLeft: '4px solid #D95D2B'
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#3E2F28',
                                fontSize: '1.2rem',
                                lineHeight: 1.6,
                                fontStyle: 'italic',
                                mb: 2
                            }}
                        >
                            Потому что интуиция — это работа «вслепую». Без понимания психофизиологического профиля
                            ребенка и аудита домашней среды любая попытка воспитания превращается в набор случайных действий.
                        </Typography>
                    </Paper>
                </Box>

                {/* Мой подход */}
                <Box sx={{ mb: 10 }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: '1.8rem',
                            fontWeight: 500,
                            color: '#3E2F28',
                            mb: 4,
                            textAlign: 'center'
                        }}
                    >
                        Мой подход — это точность данных вместо догадок
                    </Typography>

                    <Grid container spacing={4}>
                        {approachPrinciples.map((principle, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        height: '100%',
                                        p: 4,
                                        backgroundColor: 'rgba(166, 124, 82, 0.03)',
                                        borderRadius: 2,
                                        border: '1px solid rgba(166, 124, 82, 0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            borderColor: 'rgba(217, 93, 43, 0.2)'
                                        }
                                    }}
                                >
                                    <Box sx={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: '50%',
                                        backgroundColor: 'rgba(217, 93, 43, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mb: 3
                                    }}>
                                        <Box sx={{ color: '#D95D2B', fontSize: 28 }}>
                                            {principle.icon}
                                        </Box>
                                    </Box>

                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontSize: '1.3rem',
                                            fontWeight: 600,
                                            color: '#3E2F28',
                                            mb: 2
                                        }}
                                    >
                                        {principle.title}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: '#3E2F28',
                                            fontSize: '1rem',
                                            lineHeight: 1.6
                                        }}
                                    >
                                        {principle.description}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Первые 30 дней */}
                <Box sx={{ mb: 10 }}>
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: '2rem',
                                fontWeight: 300,
                                color: '#3E2F28',
                                mb: 2
                            }}
                        >
                            Первые 30 дней:
                            <Box component="span" sx={{ display: 'block', fontWeight: 500, color: '#D95D2B' }}>
                                Перезагрузка системы
                            </Box>
                        </Typography>

                        <Typography
                            sx={{
                                color: '#A67C52',
                                fontSize: '1.1rem',
                                fontStyle: 'italic',
                                maxWidth: '600px',
                                mx: 'auto'
                            }}
                        >
                            Уже в первый месяц работы фокус внимания смещается с «проблем» на «решения»
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {firstMonthResults.map((result, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        height: '100%',
                                        p: 4,
                                        backgroundColor: 'rgba(217, 93, 43, 0.03)',
                                        borderRadius: 2,
                                        border: '1px solid rgba(217, 93, 43, 0.2)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: '3px',
                                            backgroundColor: '#D95D2B'
                                        }
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                        <Box sx={{ color: '#D95D2B', mr: 2 }}>
                                            {result.icon}
                                        </Box>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontSize: '1.3rem',
                                                fontWeight: 600,
                                                color: '#3E2F28'
                                            }}
                                        >
                                            {result.title}
                                        </Typography>
                                    </Box>

                                    <Typography
                                        sx={{
                                            color: '#3E2F28',
                                            fontSize: '1rem',
                                            lineHeight: 1.6
                                        }}
                                    >
                                        {result.description}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Как выстроена работа */}
                <Box sx={{ mb: 8 }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: '1.8rem',
                            fontWeight: 500,
                            color: '#3E2F28',
                            mb: 6,
                            textAlign: 'center'
                        }}
                    >
                        Как выстроена работа (Этапы стратегии)
                    </Typography>

                    <Grid container spacing={4}>
                        {stages.map((stage) => (
                            <Grid item xs={12} md={6} key={stage.step}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        height: '100%',
                                        p: 4,
                                        backgroundColor: stage.color,
                                        borderRadius: 2,
                                        border: '1px solid',
                                        borderColor: stage.step <= '2'
                                            ? 'rgba(166, 124, 82, 0.2)'
                                            : 'rgba(217, 93, 43, 0.2)',
                                        position: 'relative'
                                    }}
                                >
                                    <Box sx={{
                                        position: 'absolute',
                                        top: -12,
                                        left: -12,
                                        width: 36,
                                        height: 36,
                                        borderRadius: '50%',
                                        backgroundColor: stage.step <= '2' ? '#A67C52' : '#D95D2B',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#FCF9F3',
                                        fontSize: '1.1rem',
                                        fontWeight: 700
                                    }}>
                                        {stage.step}
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, pl: 2 }}>
                                        <Box sx={{
                                            color: stage.step <= '2' ? '#A67C52' : '#D95D2B',
                                            mr: 2
                                        }}>
                                            {stage.icon}
                                        </Box>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontSize: '1.3rem',
                                                fontWeight: 600,
                                                color: '#3E2F28'
                                            }}
                                        >
                                            {stage.title}
                                        </Typography>
                                    </Box>

                                    <Typography
                                        sx={{
                                            color: '#3E2F28',
                                            fontSize: '1rem',
                                            lineHeight: 1.6
                                        }}
                                    >
                                        {stage.description}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Кнопка CTA */}
                <Box sx={{ textAlign: 'center' }}>
                    <Paper
                        elevation={0}
                        sx={{
                            p: 5,
                            backgroundColor: 'rgba(217, 93, 43, 0.05)',
                            borderRadius: 2,
                            border: '1px solid rgba(217, 93, 43, 0.2)',
                            maxWidth: '600px',
                            mx: 'auto'
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                fontSize: '1.5rem',
                                fontWeight: 500,
                                color: '#3E2F28',
                                mb: 3
                            }}
                        >
                            Готовы построить архитектуру будущего вашей семьи?
                        </Typography>

                        <Typography
                            sx={{
                                color: '#A67C52',
                                fontSize: '1rem',
                                lineHeight: 1.6,
                                mb: 4,
                                fontStyle: 'italic'
                            }}
                        >
                            90 дней — минимальный цикл для фундаментальных изменений
                        </Typography>

                        <Button
                            component={Link}
                            href="https://t.me/MrkDigital?text=Запрос на личное системное сопровождение"
                            target="_blank"
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                backgroundColor: 'transparent',
                                color: '#3E2F28', // Bitter Chocolate
                                border: '1px solid #A67C52', // Saddle Tan
                                py: 2,
                                px: 6,
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                borderRadius: '50px',
                                textTransform: 'none',
                                minWidth: '300px',
                                '&:hover': {
                                    backgroundColor: 'rgba(166, 124, 82, 0.05)',
                                    borderColor: '#D95D2B', // Signature Orange
                                    transform: 'translateY(-2px)'
                                }
                            }}
                        >
                            <TelegramIcon sx={{ mr: 1, fontSize: 24 }} />
                            Обсудить сопровождение
                        </Button>
                    </Paper>
                </Box>
            </Container>
        </Box>
    );
}