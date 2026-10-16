import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TelegramIcon from '@mui/icons-material/Telegram';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import RouteIcon from '@mui/icons-material/Route';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SecurityIcon from '@mui/icons-material/Security';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function SystemicTransformation() {
    // Единый алгоритм из 4 шагов
    const steps = [
        {
            id: "01",
            title: "Глубокая диагностика",
            text: "Останавливаем хаос. Проводим полный аудит психотипа ребенка и домашней среды. Находим скрытые барьеры (дефициты, стресс, режим), которые мешают развитию.",
            icon: <AnalyticsIcon fontSize="large" />,
            color: "#A67C52"
        },
        {
            id: "02",
            title: "Стратегический вектор",
            text: "Создаем систему. Формируем личный план развития с фокусом на 2–3 ключевых навыка (воля, мышление, саморегуляция). Больше никаких случайных действий.",
            icon: <RouteIcon fontSize="large" />,
            color: "#D95D2B"
        },
        {
            id: "03",
            title: "Внедрение в жизнь",
            text: "Настраиваем процессы. Регулярные сессии, где мы внедряем новые инструменты в реальность. Не «в теории», а в вашей квартире, с вашим графиком.",
            icon: <EngineeringIcon fontSize="large" />,
            color: "#3E2F28"
        },
        {
            id: "04",
            title: "Стабилизация",
            text: "Закрепляем результат. Я на связи в чате, чтобы корректировать курс. Мы работаем до тех пор, пока система не начнет работать без сбоев.",
            icon: <SecurityIcon fontSize="large" />,
            color: "#A67C52"
        }
    ];

    return (
        <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#fff' }}>
            <Container maxWidth="lg">

                {/* 1. ЗАГОЛОВОК И СУТЬ */}
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography
                        sx={{
                            fontSize: '0.9rem',
                            fontWeight: 700,
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            color: '#A67C52',
                            mb: 2
                        }}
                    >
                        Персональное сопровождение
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2rem', md: '3rem' },
                            fontWeight: 300,
                            color: '#3E2F28',
                            lineHeight: 1.1,
                            mb: 3
                        }}
                    >
                        Превращаю родительский хаос в работающую систему
                    </Typography>
                    <Typography sx={{ fontSize: '1.2rem', color: '#3E2F28', maxWidth: '800px', mx: 'auto' }}>
                        Минимальный цикл трансформации — <b>90 дней</b>. <br/>
                        Это время нужно, чтобы перестроить нейронные связи ребенка и привычки родителей
                    </Typography>
                </Box>

                {/* 2. БЛОК "ПОЧЕМУ НЕ РАБОТАЕТ ИНТУИЦИЯ" */}
                <Paper
                    elevation={0}
                    sx={{
                        p: { xs: 3, md: 5 },
                        mb: 8,
                        backgroundColor: '#FCF9F3',
                        borderLeft: '4px solid #D95D2B',
                        borderRadius: '0 4px 4px 0'
                    }}
                >
                    <Typography variant="h5" sx={{ fontWeight: 600, color: '#3E2F28', mb: 2 }}>
                        Почему усилия «вслепую» не дают результата?
                    </Typography>
                    <Typography sx={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#3E2F28' }}>
                        Попытки воспитывать без понимания психофизиологии ребенка — это лотерея.
                        Я заменяю догадки на <b>точность данных</b>. Мы не гадаем, почему ребенок кричит или ленится.
                        Мы находим причину в «железе» (теле) или «софте» (психике) и устраняем её системно.
                    </Typography>
                </Paper>

                {/* 3. АЛГОРИТМ РАБОТЫ (4 ШАГА) */}
                <Box sx={{ mb: 10 }}>
                    <Typography variant="h4" sx={{ textAlign: 'center', mb: 6, color: '#3E2F28', fontWeight: 500 }}>
                        Алгоритм настройки системы
                    </Typography>

                    <Grid container spacing={4}>
                        {steps.map((step) => (
                            <Grid item xs={12} md={6} key={step.id}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        height: '100%',
                                        border: '1px solid rgba(166, 124, 82, 0.2)',
                                        borderRadius: 2,
                                        transition: '0.3s',
                                        '&:hover': { borderColor: step.color, boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                        <Box sx={{ color: step.color, mr: 2 }}>
                                            {step.icon}
                                        </Box>
                                        <Typography variant="h6" sx={{ fontWeight: 700, color: '#3E2F28' }}>
                                            {step.title}
                                        </Typography>
                                    </Box>
                                    <Typography sx={{ color: '#3E2F28', lineHeight: 1.6 }}>
                                        {step.text}
                                    </Typography>
                                    <Box sx={{
                                        mt: 2,
                                        fontSize: '3rem',
                                        fontWeight: 900,
                                        color: 'rgba(0,0,0,0.03)',
                                        position: 'absolute',
                                        right: 20,
                                        bottom: 10
                                    }}>
                                        {step.id}
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* 4. РЕЗУЛЬТАТ ЧЕРЕЗ 30 ДНЕЙ */}
                <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, mb: 3, color: '#D95D2B' }}>
                        <CheckCircleOutlineIcon />
                        <Typography sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Точка невозврата к хаосу
                        </Typography>
                    </Box>

                    <Typography variant="h4" sx={{ mb: 4, color: '#3E2F28', fontWeight: 500 }}>
                        Результаты первых 30 дней
                    </Typography>

                    <List sx={{ mb: 5 }}>
                        {[
                            "Исчезает фоновая тревога «что я делаю не так?» — появляется ясность.",
                            "Вы получаете алгоритм действий для любой кризисной ситуации.",
                            "Ребенок становится спокойнее, потому что среда перестала быть хаотичной."
                        ].map((text, index) => (
                            <ListItem key={index} sx={{ justifyContent: 'center' }}>
                                <Typography sx={{ fontSize: '1.1rem', textAlign: 'center', color: '#3E2F28' }}>
                                    {text}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>

                    <Button
                        href="https://t.me/MrkDigital?text=Подать заявку на ведение"
                        target="_blank"
                        variant="contained"
                        size="large"
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                            backgroundColor: 'transparent',
                            color: '#3E2F28',
                            border: '2px solid #D95D2B',
                            py: 2,
                            px: 6,
                            borderRadius: '50px',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            boxShadow: '0 4px 12px rgba(217, 93, 43, 0.25)',
                            '&:hover': {
                                backgroundColor: 'rgba(217, 93, 43, 0.05)',
                                borderColor: '#C04E26',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 8px 20px rgba(217, 93, 43, 0.15)'
                            }
                        }}
                    >
                        <TelegramIcon sx={{ mr: 1 }} />
                        Подать заявку на ведение
                    </Button>
                    <Typography sx={{ mt: 2, fontSize: '0.9rem', color: '#A67C52', fontStyle: 'italic' }}>
                        Работа только после личного собеседования
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}