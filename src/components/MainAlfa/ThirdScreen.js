import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from "../Typography/Typography";
import {
    Paper,
    useTheme,
    alpha,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SchoolIcon from '@mui/icons-material/School';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

export default function IntensiveProgram() {
    const theme = useTheme();
    const [expandedWeek, setExpandedWeek] = React.useState(null);

    const handleWeekExpand = (week) => {
        setExpandedWeek(expandedWeek === week ? null : week);
    };

    const weeksData = [
        {
            week: "1 неделя",
            title: "«Я = УВЕРЕННОСТЬ»",
            subtitle: "Учим видеть свои сильные стороны, управлять телом, голосом, эмоциями",
            color: '#D95D2B',
            icon: <PersonIcon />,
            days: [
                {
                    day: "1 день",
                    title: "Введение. Как работаем. Первые техники.",
                    description: "Знакомство с программой, основы методики, первые упражнения на самопознание"
                },
                {
                    day: "2 день",
                    title: "«Позвоночник лидера»",
                    description: "Как тело влияет на уверенность (осанка, походка, дыхание)",
                    details: "Практики работы с осанкой, дыхательные упражнения, ходьба уверенного человека"
                },
                {
                    day: "3 день",
                    title: "«Голос, который слышат»",
                    description: "Тренируем голос, темп, паузы",
                    details: "Упражнения на тембр, громкость, артикуляцию, использование пауз"
                },
                {
                    day: "4 день",
                    title: "Границы: как сказать 'НЕТ'",
                    description: "Без агрессии и вины. Скрипты и отработка фраз",
                    details: "Ролевые игры, готовые фразы для разных ситуаций, техника мягкого отказа"
                },
                {
                    day: "5 день",
                    title: "«Мои суперсилы»",
                    description: "Игра на выявление личных качеств",
                    details: "Диагностика сильных сторон, создание карты ресурсов ребенка"
                },
                {
                    day: "6 день",
                    title: "«Секретная кнопка уверенности»",
                    description: "Нейроякоря (жесты, фразы)",
                    details: "Создание личных якорей уверенности, техники самопрограммирования"
                },
                {
                    day: "7 день",
                    title: "Отработка пройденного и повторение",
                    description: "Закрепление навыков, обратная связь, домашние задания"
                }
            ]
        },
        {
            week: "2 неделя",
            title: "«СОЦИАЛЬНАЯ ГРАВИТАЦИЯ»",
            subtitle: "Коммуникация, харизма, вхождение в коллектив, искусство притягивать друзей и влияние",
            color: '#A67C52',
            icon: <GroupsIcon />,
            days: [
                {
                    day: "8 день",
                    title: "Как начать разговор и присоединиться к игре",
                    description: "Техника 'Социального атома'",
                    details: "Алгоритмы вхождения в коллектив, практика первых фраз"
                },
                {
                    day: "9 день",
                    title: "Язык тела уверенного человека",
                    description: "'Сильные позы' и контакт глазами",
                    details: "Позы уверенности, упражнения на зрительный контакт, анализ невербалики"
                },
                {
                    day: "10 день",
                    title: "Искусство задавать вопросы",
                    description: "Проявлять искренний интерес. Техника active listening",
                    details: "Открытые и закрытые вопросы, техника активного слушания"
                },
                {
                    day: "11 день",
                    title: "Как делиться, меняться и договариваться",
                    description: "Практика 'Выгодный обмен'",
                    details: "Навыки переговоров, понятие win-win, практика обмена"
                },
                {
                    day: "12 день",
                    title: "Решение мелких конфликтов",
                    description: "Техника 'Я-сообщения' вместо обвинений",
                    details: "Формула Я-сообщений, ролевые игры, анализ конфликтных ситуаций"
                },
                {
                    day: "13 день",
                    title: "«Мягкое НЕТ»",
                    description: "Техника отказа без агрессии",
                    details: "Продолжение темы границ, усложненные ситуации, защита своего мнения"
                },
                {
                    day: "14 день",
                    title: "Закрепление навыков",
                    description: "Интеграция пройденного материала",
                    details: "Комплексная отработка, подготовка к финальному этапу"
                }
            ]
        },
        {
            week: "3 неделя",
            title: "«Я — АЛЬФА = КОД ЛИДЕРА»",
            subtitle: "Закрепить навыки, создать 'якоря поведения', запустить АВТОНОМНОЕ лидерство",
            color: '#3E2F28',
            icon: <EmojiEventsIcon />,
            days: [
                {
                    day: "15 день",
                    title: "«Я веду за собой»",
                    description: "Что такое лидерство? Быть первым vs быть ответственным",
                    details: "Понятие ответственности, лидерские качества, как хвалить лидера"
                },
                {
                    day: "16 день",
                    title: "Как рождаются идеи?",
                    description: "Техника мозгового штурма для детей",
                    details: "Методы генерации идей, коллективное творчество, развитие креативности"
                },
                {
                    day: "17 день",
                    title: "«Я — организатор»",
                    description: "Как предложить игру и повести за собой",
                    details: "Практика 'Предводитель дня', навыки организации игр и активностей"
                },
                {
                    day: "18 день",
                    title: "Базовые переговоры",
                    description: "'Давай наоборот', 'Я уступлю, если ты...'",
                    details: "Элементарные переговорные техники, поиск компромиссов"
                },
                {
                    day: "19 день",
                    title: "Ответственность за свои поступки",
                    description: "Техника 'Восстановления ошибки'",
                    details: "Принятие ответственности, исправление ошибок, извинения"
                },
                {
                    day: "20 день",
                    title: "«Я - решаю проблемы»",
                    description: "Метод '5 пальцев решения'(SEL) — простой алгоритм",
                    details: "Пошаговый алгоритм решения проблем, практика на реальных ситуациях"
                },
                {
                    day: "21 день",
                    title: "Финальный созвон с автором Еленой Корневой",
                    description: "План дальнейшего развития",
                    details: "Подведение итогов, рекомендации для родителей, план поддержки"
                }
            ]
        }
    ];

    return (
        <Box sx={{
            backgroundColor: '#FFFFFF',
            py: { xs: 8, md: 12 },
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Декоративные элементы */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(252,249,243,0.5) 0%, transparent 50%)',
                zIndex: 0,
            }} />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Заголовок */}
                <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
                    <Typography
                        component="h2"
                        sx={{
                            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                            fontWeight: 300,
                            lineHeight: 1.1,
                            color: '#3E2F28',
                            mb: 3,
                            letterSpacing: '-0.5px'
                        }}
                    >
                        Программа интенсива
                        <Box component="span" sx={{
                            display: 'block',
                            fontWeight: 400,
                            color: '#D95D2B',
                            mt: 1,
                            fontSize: { xs: '1.5rem', md: '2rem' }
                        }}>
                            21 день трансформации
                        </Box>
                    </Typography>

                    {/* Подзаголовок */}
                    <Typography
                        sx={{
                            fontSize: { xs: '1.1rem', sm: '1.2rem' },
                            lineHeight: 1.6,
                            color: '#A67C52',
                            maxWidth: '800px',
                            mx: 'auto',
                            mb: 4
                        }}
                    >
                        Ежедневные практические занятия, которые шаг за шагом формируют
                        внутренний стержень и лидерские качества у ребенка
                    </Typography>

                    {/* Статистика */}
                    <Grid container spacing={3} sx={{ maxWidth: '600px', mx: 'auto', mb: 6 }}>
                        <Grid item xs={5}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography
                                    sx={{
                                        fontSize: '2.5rem',
                                        fontWeight: 300,
                                        color: '#D95D2B',
                                        lineHeight: 1
                                    }}
                                >
                                    21
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '0.9rem',
                                        color: '#A67C52'
                                    }}
                                >
                                    день практики
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={5}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography
                                    sx={{
                                        fontSize: '2.5rem',
                                        fontWeight: 300,
                                        color: '#D95D2B',
                                        lineHeight: 1
                                    }}
                                >
                                    60+
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '0.9rem',
                                        color: '#A67C52'
                                    }}
                                >
                                    упражнений
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                {/* Блоки недель с аккордеоном */}
                <Box sx={{ mb: 8 }}>
                    {weeksData.map((weekData, weekIndex) => (
                        <Accordion
                            key={weekIndex}
                            expanded={expandedWeek === weekIndex}
                            onChange={() => handleWeekExpand(weekIndex)}
                            sx={{
                                mb: 3,
                                borderRadius: '12px !important',
                                overflow: 'hidden',
                                border: `2px solid ${expandedWeek === weekIndex ? weekData.color : 'rgba(166, 124, 82, 0.2)'}`,
                                boxShadow: expandedWeek === weekIndex
                                    ? `0 8px 25px ${alpha(weekData.color, 0.15)}`
                                    : '0 2px 8px rgba(62, 47, 40, 0.08)',
                                transition: 'all 0.3s ease',
                                '&:before': { display: 'none' }
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: weekData.color, fontSize: 32 }} />}
                                sx={{
                                    backgroundColor: expandedWeek === weekIndex
                                        ? alpha(weekData.color, 0.05)
                                        : '#FCF9F3',
                                    p: { xs: 2, md: 3 },
                                    minHeight: 'auto !important',
                                    '& .MuiAccordionSummary-content': {
                                        m: 0,
                                        alignItems: 'center'
                                    }
                                }}
                            >
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: '100%',
                                    gap: 3
                                }}>
                                    {/* Номер недели */}
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        minWidth: 70,
                                        height: 70,
                                        backgroundColor: alpha(weekData.color, 0.1),
                                        borderRadius: '50%',
                                        color: weekData.color,
                                        border: `2px solid ${weekData.color}`
                                    }}>
                                        <Box sx={{ textAlign: 'center' }}>
                                            <Typography sx={{
                                                fontSize: '1.5rem',
                                                fontWeight: 700,
                                                lineHeight: 1
                                            }}>
                                                {weekIndex + 1}
                                            </Typography>
                                            <Typography sx={{
                                                fontSize: '0.8rem',
                                                fontWeight: 500,
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px'
                                            }}>
                                                неделя
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* Контент заголовка */}
                                    <Box sx={{ flex: 1 }}>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 2,
                                            mb: 1
                                        }}>
                                            <Box sx={{
                                                color: weekData.color,
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}>
                                                {weekData.icon}
                                            </Box>
                                            <Typography
                                                sx={{
                                                    fontSize: { xs: '1.2rem', md: '1.5rem' },
                                                    fontWeight: 600,
                                                    color: weekData.color
                                                }}
                                            >
                                                {weekData.title}
                                            </Typography>
                                        </Box>
                                        <Typography
                                            sx={{
                                                fontSize: { xs: '0.95rem', md: '1.1rem' },
                                                color: '#3E2F28',
                                                lineHeight: 1.4
                                            }}
                                        >
                                            {weekData.subtitle}
                                        </Typography>
                                    </Box>

                                    {/* Дней в неделе */}
                                    <Box sx={{
                                        textAlign: 'center',
                                        display: { xs: 'none', md: 'block' }
                                    }}>
                                        <Typography sx={{
                                            fontSize: '2rem',
                                            fontWeight: 300,
                                            color: weekData.color,
                                            lineHeight: 1
                                        }}>
                                            {weekData.days.length}
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: '0.8rem',
                                            color: '#A67C52',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px'
                                        }}>
                                            занятий
                                        </Typography>
                                    </Box>
                                </Box>
                            </AccordionSummary>

                            <AccordionDetails sx={{
                                p: 0,
                                backgroundColor: '#FFFFFF'
                            }}>
                                {/* Дни недели */}
                                <Grid container spacing={2} sx={{ p: 3 }}>
                                    {weekData.days.map((day, dayIndex) => (
                                        <Grid item xs={12} sm={6} md={4} key={dayIndex}>
                                            <Paper
                                                elevation={0}
                                                sx={{
                                                    height: '100%',
                                                    p: 3,
                                                    borderRadius: 2,
                                                    border: `1px solid ${alpha(weekData.color, 0.2)}`,
                                                    backgroundColor: alpha(weekData.color, 0.03),
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        borderColor: weekData.color,
                                                        transform: 'translateY(-4px)',
                                                        boxShadow: `0 6px 20px ${alpha(weekData.color, 0.1)}`
                                                    }
                                                }}
                                            >
                                                {/* Номер дня */}
                                                <Box sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1.5,
                                                    mb: 2
                                                }}>
                                                    <Box sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        width: 36,
                                                        height: 36,
                                                        backgroundColor: weekData.color,
                                                        color: '#FFFFFF',
                                                        borderRadius: '50%',
                                                        fontSize: '0.9rem',
                                                        fontWeight: 600
                                                    }}>
                                                        {dayIndex + 1 + (weekIndex * 7)}
                                                    </Box>
                                                    <Typography sx={{
                                                        fontSize: '0.9rem',
                                                        fontWeight: 600,
                                                        color: weekData.color,
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.5px'
                                                    }}>
                                                        {day.day}
                                                    </Typography>
                                                </Box>

                                                {/* Заголовок дня */}
                                                <Typography
                                                    sx={{
                                                        fontSize: '1.1rem',
                                                        fontWeight: 500,
                                                        color: '#3E2F28',
                                                        mb: 1.5,
                                                        lineHeight: 1.3
                                                    }}
                                                >
                                                    {day.title}
                                                </Typography>

                                                {/* Описание */}
                                                <Typography
                                                    sx={{
                                                        fontSize: '0.9rem',
                                                        color: '#A67C52',
                                                        mb: 2,
                                                        lineHeight: 1.5
                                                    }}
                                                >
                                                    {day.description}
                                                </Typography>

                                                {/* Детали (если есть) */}
                                                {day.details && (
                                                    <Box sx={{
                                                        mt: 2,
                                                        pt: 2,
                                                        borderTop: `1px dashed ${alpha(weekData.color, 0.2)}`
                                                    }}>
                                                        <Typography
                                                            sx={{
                                                                fontSize: '0.85rem',
                                                                color: '#3E2F28',
                                                                fontStyle: 'italic',
                                                                lineHeight: 1.5
                                                            }}
                                                        >
                                                            {day.details}
                                                        </Typography>
                                                    </Box>
                                                )}
                                            </Paper>
                                        </Grid>
                                    ))}
                                </Grid>

                                {/* Итог недели */}
                                <Box sx={{
                                    p: 3,
                                    backgroundColor: alpha(weekData.color, 0.05),
                                    borderTop: `1px solid ${alpha(weekData.color, 0.2)}`
                                }}>
                                    <Typography
                                        sx={{
                                            fontSize: '1rem',
                                            fontWeight: 500,
                                            color: weekData.color,
                                            mb: 1,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1
                                        }}
                                    >
                                        <CheckCircleOutlineIcon />
                                        Итог {weekIndex + 1} недели:
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '0.95rem',
                                            color: '#3E2F28',
                                            lineHeight: 1.6
                                        }}
                                    >
                                        {weekIndex === 0 && "Ребенок осваивает базовые техники уверенности, начинает лучше контролировать тело и голос, понимает свои границы."}
                                        {weekIndex === 1 && "Развиваются социальные навыки, появляется легкость в общении, формируется харизма, ребенок учится строить здоровые отношения."}
                                        {weekIndex === 2 && "Закрепляются лидерские качества, появляется автономность в принятии решений, ребенок готов вести за собой и решать проблемы."}
                                    </Typography>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>

                {/* Дополнительная информация */}
                <Paper
                    elevation={0}
                    sx={{
                        backgroundColor: alpha('#3E2F28', 0.05),
                        borderRadius: 3,
                        p: { xs: 3, md: 5 },
                        border: '1px solid rgba(166, 124, 82, 0.3)'
                    }}
                >
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography
                                sx={{
                                    fontSize: '1.3rem',
                                    fontWeight: 500,
                                    color: '#3E2F28',
                                    mb: 2
                                }}
                            >
                                Формат занятий:
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1.5
                            }}>
                                {[
                                    "Ежедневные видео-уроки (15-20 минут)",
                                    "Практические задания для выполнения",
                                    "Чек-листы и рабочие тетради",
                                    "Обратная связь от куратора (тариф ''АЛЬФА-ПРО'')",
                                ].map((item, index) => (
                                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                        <CheckCircleOutlineIcon sx={{
                                            fontSize: 18,
                                            color: '#D95D2B',
                                            flexShrink: 0
                                        }} />
                                        <Typography sx={{
                                            fontSize: '0.95rem',
                                            color: '#3E2F28'
                                        }}>
                                            {item}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper
                                elevation={0}
                                sx={{
                                    backgroundColor: '#FCF9F3',
                                    borderRadius: 2,
                                    p: 3,
                                    border: '2px solid #D95D2B'
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '1.1rem',
                                        fontWeight: 600,
                                        color: '#D95D2B',
                                        mb: 2,
                                        textAlign: 'center'
                                    }}
                                >
                                    Важно для родителей:
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '0.95rem',
                                        color: '#3E2F28',
                                        lineHeight: 1.6,
                                        textAlign: 'center'
                                    }}
                                >
                                    Программа построена так, что вы участвуете вместе с ребенком.
                                    Вы получаете отдельные материалы и рекомендации, как поддерживать
                                    изменения и закреплять результаты в повседневной жизни.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
}