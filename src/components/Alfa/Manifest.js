import React from 'react';
import {
    Container, Box, Typography, Grid, Paper,
    List, ListItem, ListItemIcon, ListItemText,
    useTheme, useMediaQuery
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyIcon from '@mui/icons-material/Psychology';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PersonIcon from '@mui/icons-material/Person';

export default function DevelopmentPhilosophy() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const notDoingList = [
        "Не переделываю детей под шаблон",
        "Не работаю «для всех» — только для осознанных родителей",
        "Не беру тех, кто не готов смотреть в будущее",
        "Не работаю с родителями, которые ждут «волшебную таблетку»",
        "Не пугаю страшными последствиями ради мотивации",
        "Не упрощаю ради массового понимания",
        "Не использую шаблонные методики и «тренды» воспитания"
    ];

    const beliefList = [
        "Любой ребёнок в чём-то гениален",
        "Синхронизацию физиологическую: мать = ребёнок",
        "Начать можно в любом возрасте",
        "В науку и доказательные методы",
        "В интеллект как инструмент развития",
        "В пластичность мозга на протяжении всей жизни"
    ];

    const systemLevels = [
        {
            level: 1,
            title: "НАВЫКИ",
            subtitle: "То, что видно снаружи",
            items: [
                "Нейродинамика и нейрокоординация",
                "Стрессоустойчивость",
                "Считывание эмоций",
                "Управление стрессом",
                "Нестандартное мышление и креативность",
                "Расширение градации восприятия"
            ],
            parentTransform: "Трансформация родителя: принятие ребёнка как отдельной личности и себя в роли родителя",
            icon: <SchoolIcon />
        },
        {
            level: 2,
            title: "МЕТАНАВЫКИ",
            subtitle: "То, как ребёнок справляется с миром",
            items: [
                "Саморегуляция",
                "Внимание и концентрация",
                "Гибкость мышления",
                "Способность выдерживать фрустрацию"
            ],
            parentTransform: "Формируются не упражнениями, а средой. Здесь решается: переходит ли истерика в рост или застревает на месте",
            icon: <PsychologyIcon />
        },
        {
            level: 3,
            title: "ХАРАКТЕР",
            subtitle: "То, кем ребёнок становится в сложных моментах",
            items: [
                "Тренировка в реальных ситуациях",
                "Развитие в состоянии дозированного стресса",
                "Формирование волевых качеств"
            ],
            parentTransform: "",
            icon: <EmojiEmotionsIcon />
        },
        {
            level: 4,
            title: "ЛИЧНОСТЬ",
            subtitle: "То, что остаётся, когда нет контроля",
            items: [
                "Тренировка в социуме",
                "Автономия и самоидентификация",
                "Ценностные ориентиры"
            ],
            parentTransform: "",
            icon: <PersonIcon />
        }
    ];

    return (
        <Container component="section" sx={{
            py: { xs: 6, md: 10 },
            backgroundColor: '#fafafa'
        }}>
            {/* Основной заголовок */}
            <Box sx={{
                maxWidth: 800,
                mx: 'auto',
                mb: 6,
                textAlign: 'center',
                px: { xs: 2, md: 0 }
            }}>
                <Typography
                    component="h2"
                    sx={{
                        fontSize: { xs: 28, md: 36 },
                        fontWeight: 600,
                        lineHeight: 1.2,
                        mb: 3,
                        textTransform: 'uppercase',
                        letterSpacing: '-0.02em'
                    }}
                >
                    О развитии детей<br/>и взрослых, которые рядом
                </Typography>

                <Typography
                    sx={{
                        fontSize: { xs: 16, md: 18 },
                        lineHeight: 1.7,
                        color: '#444',
                        fontStyle: 'italic',
                        mb: 4
                    }}
                >
                    Я не верю в идеальных родителей.<br/>
                    И не работаю с теми, кто хочет «исправить ребёнка».<br/>
                    Я работаю с теми, кто готов стать опорой.
                </Typography>

                <Typography
                    sx={{
                        fontSize: { xs: 15, md: 17 },
                        lineHeight: 1.6,
                        color: '#555'
                    }}
                >
                    Потому что развитие — это не чек-лист.<br/>
                    И воспитание — не набор приёмов.<br/>
                    Это система. И она всегда начинается со взрослого.
                </Typography>
            </Box>

            {/* Сетка: Что не делаю vs Во что верю */}
            <Grid container spacing={4} sx={{ mb: 8 }}>
                {/* Левая колонка: Что я НЕ делаю */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={0} sx={{
                        p: { xs: 3, md: 4 },
                        height: '100%',
                        border: '1px solid #ffebee',
                        backgroundColor: '#fff5f5'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 3,
                            color: '#d32f2f'
                        }}>
                            <HighlightOffIcon sx={{ mr: 1.5, fontSize: 28 }} />
                            <Typography
                                component="h3"
                                sx={{
                                    fontSize: 20,
                                    fontWeight: 600,
                                    textTransform: 'uppercase'
                                }}
                            >
                                Что я НЕ делаю
                            </Typography>
                        </Box>

                        <List dense>
                            {notDoingList.map((item, index) => (
                                <ListItem
                                    key={index}
                                    sx={{
                                        py: 1,
                                        borderBottom: '1px solid #ffeaea',
                                        '&:last-child': { borderBottom: 0 }
                                    }}
                                >
                                    <ListItemIcon sx={{ minWidth: 36 }}>
                                        <Box sx={{
                                            width: 20,
                                            height: 20,
                                            borderRadius: '50%',
                                            backgroundColor: '#ffebee',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <HighlightOffIcon sx={{ fontSize: 14, color: '#d32f2f' }} />
                                        </Box>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item}
                                        primaryTypographyProps={{
                                            fontSize: 15,
                                            color: '#5d4037'
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>

                {/* Правая колонка: Во что я верю */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={0} sx={{
                        p: { xs: 3, md: 4 },
                        height: '100%',
                        border: '1px solid #e8f5e9',
                        backgroundColor: '#f1f8e9'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 3,
                            color: '#388e3c'
                        }}>
                            <CheckCircleOutlineIcon sx={{ mr: 1.5, fontSize: 28 }} />
                            <Typography
                                component="h3"
                                sx={{
                                    fontSize: 20,
                                    fontWeight: 600,
                                    textTransform: 'uppercase'
                                }}
                            >
                                Во что я верю
                            </Typography>
                        </Box>

                        <List dense>
                            {beliefList.map((item, index) => (
                                <ListItem
                                    key={index}
                                    sx={{
                                        py: 1,
                                        borderBottom: '1px solid #e8f5e9',
                                        '&:last-child': { borderBottom: 0 }
                                    }}
                                >
                                    <ListItemIcon sx={{ minWidth: 36 }}>
                                        <Box sx={{
                                            width: 20,
                                            height: 20,
                                            borderRadius: '50%',
                                            backgroundColor: '#e8f5e9',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <CheckCircleOutlineIcon sx={{ fontSize: 14, color: '#388e3c' }} />
                                        </Box>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item}
                                        primaryTypographyProps={{
                                            fontSize: 15,
                                            color: '#33691e'
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
            </Grid>

            {/* Система развития */}
            <Box sx={{ mb: 10 }}>
                <Box sx={{
                    maxWidth: 800,
                    mx: 'auto',
                    mb: 5,
                    textAlign: 'center',
                    px: { xs: 2, md: 0 }
                }}>
                    <Typography
                        component="h2"
                        sx={{
                            fontSize: { xs: 28, md: 32 },
                            fontWeight: 600,
                            lineHeight: 1.2,
                            mb: 2,
                            textTransform: 'uppercase',
                            letterSpacing: '-0.02em'
                        }}
                    >
                        МОЯ СИСТЕМА РАЗВИТИЯ
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: 16, md: 18 },
                            lineHeight: 1.6,
                            color: '#444',
                            mb: 1
                        }}
                    >
                        4 уровня, которые нельзя перескакивать
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: 15,
                            lineHeight: 1.6,
                            color: '#666',
                            fontStyle: 'italic'
                        }}
                    >
                        Большинство родителей застревают на первом уровне.<br/>
                        Я работаю со всеми четырьмя.
                    </Typography>
                </Box>

                {/* Уровни системы */}
                <Grid container spacing={3}>
                    {systemLevels.map((level) => (
                        <Grid item xs={12} md={6} lg={3} key={level.level}>
                            <Paper elevation={0} sx={{
                                p: 3,
                                height: '100%',
                                border: '1px solid #e0e0e0',
                                backgroundColor: '#fff',
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                '&:hover': {
                                    borderColor: '#000',
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.08)'
                                }
                            }}>
                                {/* Номер уровня */}
                                <Box sx={{
                                    position: 'absolute',
                                    top: -20,
                                    left: 20,
                                    width: 40,
                                    height: 40,
                                    borderRadius: '50%',
                                    backgroundColor: '#000',
                                    color: '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 18,
                                    fontWeight: 600
                                }}>
                                    {level.level}
                                </Box>

                                {/* Иконка и заголовок */}
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    mb: 2,
                                    mt: 2
                                }}>
                                    <Box sx={{
                                        mr: 2,
                                        color: '#000'
                                    }}>
                                        {level.icon}
                                    </Box>
                                    <Box>
                                        <Typography
                                            component="h3"
                                            sx={{
                                                fontSize: 18,
                                                fontWeight: 600,
                                                textTransform: 'uppercase',
                                                lineHeight: 1.2
                                            }}
                                        >
                                            {level.title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: 13,
                                                color: '#666',
                                                fontStyle: 'italic'
                                            }}
                                        >
                                            {level.subtitle}
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Пункты */}
                                <List dense sx={{ mb: 2, flexGrow: 1 }}>
                                    {level.items.map((item, index) => (
                                        <ListItem
                                            key={index}
                                            sx={{
                                                py: 0.5,
                                                px: 0
                                            }}
                                        >
                                            <ListItemIcon sx={{ minWidth: 28 }}>
                                                <Box sx={{
                                                    width: 6,
                                                    height: 6,
                                                    borderRadius: '50%',
                                                    backgroundColor: '#000'
                                                }} />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={item}
                                                primaryTypographyProps={{
                                                    fontSize: 14,
                                                    lineHeight: 1.4,
                                                    color: '#444'
                                                }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>

                                {/* Трансформация родителя (если есть) */}
                                {level.parentTransform && (
                                    <Box sx={{
                                        mt: 2,
                                        pt: 2,
                                        borderTop: '1px dashed #e0e0e0'
                                    }}>
                                        <Typography
                                            sx={{
                                                fontSize: 13,
                                                lineHeight: 1.5,
                                                color: '#666',
                                                fontStyle: 'italic'
                                            }}
                                        >
                                            {level.parentTransform}
                                        </Typography>
                                    </Box>
                                )}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Зачем веду блог */}
            <Paper elevation={0} sx={{
                p: { xs: 4, md: 6 },
                border: '1px solid #000',
                backgroundColor: '#000',
                color: '#fff',
                textAlign: 'center'
            }}>
                <Typography
                    component="h3"
                    sx={{
                        fontSize: { xs: 22, md: 26 },
                        fontWeight: 600,
                        mb: 3,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}
                >
                    ЗАЧЕМ Я ВЕДУ БЛОГ
                </Typography>

                <Typography
                    sx={{
                        fontSize: { xs: 16, md: 18 },
                        lineHeight: 1.7,
                        mb: 4,
                        maxWidth: 800,
                        mx: 'auto'
                    }}
                >
                    Это Школа Родительства уровня вуза. Я встраиваю систему формирования родителей,
                    которая не ограничивается советами, а создаёт фундамент для многолетней осознанной практики.
                </Typography>

                <Typography
                    sx={{
                        fontSize: 15,
                        lineHeight: 1.6,
                        color: '#ddd',
                        fontStyle: 'italic',
                        maxWidth: 600,
                        mx: 'auto'
                    }}
                >
                    Потому что быть родителем — это не роль, а позиция.
                    И эта позиция требует такого же глубокого изучения, как любая серьёзная профессия.
                </Typography>
            </Paper>
        </Container>
    );
}