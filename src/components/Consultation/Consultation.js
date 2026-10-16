import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Link from "@mui/material/Link";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ChecklistIcon from '@mui/icons-material/Checklist';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TelegramIcon from '@mui/icons-material/Telegram';
import SectionHeader from "../SectionHeader/SectionHeader";

export default function Consultation() {
    const stages = [
        {
            step: "1",
            title: "Подготовка",
            duration: "2–3 часа моего анализа до встречи",
            description: "Вы предоставляете видеоматериалы, заключения специалистов и историю развития ребенка. Я изучаю паттерны поведения и нейродинамику, чтобы прийти на встречу уже с видением ситуации.",
            icon: <ChecklistIcon />
        },
        {
            step: "2",
            title: "Персональная консультация",
            duration: "до 1,5 часов личной работы",
            description: "Мы не ищем причины — мы обсуждаем решения. Благодаря подготовке я уже вижу «узкие места» и предлагаю вам конкретную стратегию действий, отвечаю на все вопросы.",
            icon: <PsychologyIcon />
        },
        {
            step: "3",
            title: "Результат",
            duration: "Ясность и вектор развития",
            description: "Вы получаете чёткое понимание, что делать дальше, и персональную «дорожную карту», которая сэкономит вам месяцы (а иногда и годы) хождения по кругу.",
            icon: <MedicalServicesIcon />
        }
    ];

    return (
        <Box sx={{ py: { xs: 8, md: 12 } }}>
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">
                    {/* Текстовая часть */}
                    <Grid item xs={12} md={7}>
                        <SectionHeader
                            title="Персональная консультация"
                            subtitle="Разбор вашей ситуации. Без шаблонов. С конкретными рекомендациями."
                            align="left"
                        />

                        <Typography
                            sx={{
                                color: '#3E2F28',
                                fontSize: '1.1rem',
                                lineHeight: 1.7,
                                mb: 4
                            }}
                        >
                            Я не провожу консультации «с чистого листа». Моя работа начинается задолго до нашей встречи.
                            Чтобы наш разговор был максимально эффективным, я применяю метод глубокого предварительного анализа.
                        </Typography>

                        {/* Как это происходит */}
                        <Box sx={{ mb: 6 }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontSize: '1.4rem',
                                    fontWeight: 500,
                                    color: '#3E2F28',
                                    mb: 3,
                                    position: 'relative',
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: -8,
                                        left: 0,
                                        width: '60px',
                                        height: '2px',
                                        backgroundColor: '#D95D2B'
                                    }
                                }}
                            >
                                Как проходит консультация
                            </Typography>

                            <Grid container spacing={3}>
                                {stages.map((stage) => (
                                    <Grid item xs={12} md={4} key={stage.step}>
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                height: '100%',
                                                p: 3,
                                                backgroundColor: 'rgba(166, 124, 82, 0.03)',
                                                borderRadius: 2,
                                                border: '1px solid rgba(166, 124, 82, 0.1)',
                                                transition: 'transform 0.3s ease',
                                                '&:hover': {
                                                    transform: 'translateY(-4px)',
                                                    borderColor: 'rgba(217, 93, 43, 0.2)'
                                                }
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                                <Box
                                                    sx={{
                                                        width: 36,
                                                        height: 36,
                                                        borderRadius: '50%',
                                                        backgroundColor: 'rgba(217, 93, 43, 0.1)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        mr: 2
                                                    }}
                                                >
                                                    <Box sx={{ color: '#D95D2B' }}>
                                                        {stage.icon}
                                                    </Box>
                                                </Box>
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        fontSize: '1.1rem',
                                                        fontWeight: 600,
                                                        color: '#3E2F28'
                                                    }}
                                                >
                                                    {stage.title}
                                                </Typography>
                                            </Box>

                                            <Typography
                                                sx={{
                                                    color: '#D95D2B',
                                                    fontSize: '0.9rem',
                                                    fontWeight: 500,
                                                    mb: 1
                                                }}
                                            >
                                                {stage.duration}
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    color: '#3E2F28',
                                                    fontSize: '0.95rem',
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
                    </Grid>

                    {/* Правая часть с ценой и акцентом */}
                    <Grid item xs={12} md={5}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: 5,
                                backgroundColor: 'rgba(217, 93, 43, 0.05)',
                                borderRadius: 2,
                                border: '1px solid rgba(217, 93, 43, 0.2)',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Box>
                                {/* Цена */}
                                <Box sx={{ textAlign: 'center', mb: 4 }}>
                                    <Typography
                                        sx={{
                                            color: '#A67C52',
                                            fontSize: '0.95rem',
                                            fontWeight: 500,
                                            mb: 1,
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px'
                                        }}
                                    >
                                        Стоимость
                                    </Typography>

                                    <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', mb: 1 }}>
                                        <Typography
                                            sx={{
                                                fontSize: '3.5rem',
                                                fontWeight: 300,
                                                color: '#D95D2B',
                                                lineHeight: 1
                                            }}
                                        >
                                            30
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: '1.5rem',
                                                fontWeight: 400,
                                                color: '#3E2F28',
                                                ml: 0.5
                                            }}
                                        >
                                            000
                                        </Typography>
                                        <CurrencyRubleIcon
                                            sx={{
                                                color: '#3E2F28',
                                                fontSize: '1.8rem',
                                                ml: 0.5
                                            }}
                                        />
                                    </Box>

                                    <Typography
                                        sx={{
                                            color: '#A67C52',
                                            fontSize: '0.9rem',
                                            fontStyle: 'italic'
                                        }}
                                    >
                                        за персональную консультацию
                                    </Typography>
                                </Box>

                                <Divider sx={{
                                    my: 4,
                                    borderColor: 'rgba(217, 93, 43, 0.2)',
                                    opacity: 0.5
                                }} />

                                {/* Что включено */}
                                <Box sx={{ mb: 4 }}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontSize: '1.1rem',
                                            fontWeight: 600,
                                            color: '#3E2F28',
                                            mb: 3
                                        }}
                                    >
                                        Включено:
                                    </Typography>

                                    <List sx={{ p: 0 }}>
                                        <ListItem sx={{ px: 0, py: 1 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <AccessTimeIcon sx={{ color: '#D95D2B', fontSize: 20 }} />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Предварительный анализ материалов (2-3 часа)"
                                                primaryTypographyProps={{
                                                    fontSize: '0.95rem',
                                                    color: '#3E2F28'
                                                }}
                                            />
                                        </ListItem>
                                        <ListItem sx={{ px: 0, py: 1 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <PsychologyIcon sx={{ color: '#D95D2B', fontSize: 20 }} />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Персональная консультация (1,5 часа)"
                                                primaryTypographyProps={{
                                                    fontSize: '0.95rem',
                                                    color: '#3E2F28'
                                                }}
                                            />
                                        </ListItem>
                                        <ListItem sx={{ px: 0, py: 1 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <ChecklistIcon sx={{ color: '#D95D2B', fontSize: 20 }} />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Персональная дорожная карта развития"
                                                primaryTypographyProps={{
                                                    fontSize: '0.95rem',
                                                    color: '#3E2F28'
                                                }}
                                            />
                                        </ListItem>
                                    </List>
                                </Box>

                                {/* Цитата */}
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 3,
                                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                        borderRadius: 2,
                                        borderLeft: '3px solid #D95D2B',
                                        mb: 4
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: '#3E2F28',
                                            fontSize: '1rem',
                                            fontStyle: 'italic',
                                            lineHeight: 1.6
                                        }}
                                    >
                                        «Вы платите не за время нашего разговора, а за точность решения, которое меняет будущее вашей семьи».
                                    </Typography>
                                </Paper>
                            </Box>

                            {/* Кнопка */}
                            <Box sx={{ textAlign: 'center' }}>
                                <Button
                                    component={Link}
                                    href="https://payform.ru/qhaCZVx/"
                                    target="_blank"
                                    variant="contained"
                                    endIcon={<ArrowForwardIcon />}
                                    sx={{
                                        backgroundColor: 'transparent',
                                        color: '#3E2F28',
                                        border: '1px solid #A67C52',
                                        py: 2,
                                        px: 4,
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        borderRadius: '50px',
                                        textTransform: 'none',
                                        width: '100%',
                                        '&:hover': {
                                            backgroundColor: 'rgba(166, 124, 82, 0.05)',
                                            borderColor: '#D95D2B',
                                            transform: 'translateY(-2px)'
                                        }
                                    }}
                                >
                                    Оплатить консультацию
                                </Button>

                                <Typography
                                    sx={{
                                        color: '#A67C52',
                                        fontSize: '0.85rem',
                                        fontStyle: 'italic',
                                        mt: 2
                                    }}
                                >
                                    Ограниченное количество консультаций в месяц
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>

                {/* Пояснение формата */}
                <Box sx={{ mt: 8 }}>
                    <Paper
                        elevation={0}
                        sx={{
                            p: 4,
                            backgroundColor: 'rgba(166, 124, 82, 0.03)',
                            borderRadius: 2,
                            border: '1px solid rgba(166, 124, 82, 0.1)'
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                fontSize: '1.3rem',
                                fontWeight: 500,
                                color: '#3E2F28',
                                mb: 3
                            }}
                        >
                            Почему такой формат?
                        </Typography>

                        <Typography
                            sx={{
                                color: '#3E2F28',
                                fontSize: '1.1rem',
                                lineHeight: 1.7
                            }}
                        >
                            Я дорожу результатом каждой семьи. Глубокое погружение в документы и видео позволяет мне увидеть то,
                            что часто ускользает при обычном общении. Это работа на стыке нейропсихологии и персонального консультирования,
                            где нет места экспериментам над вашим ребенком.
                        </Typography>
                    </Paper>
                </Box>
            </Container>
        </Box>
    );
}