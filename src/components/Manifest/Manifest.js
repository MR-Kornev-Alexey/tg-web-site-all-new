import React from 'react';
import {
    Box,
    Container,
    Typography,
    Paper,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    useTheme,
    useMediaQuery,
    Grid
} from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ScienceIcon from '@mui/icons-material/Science';
import SchoolIcon from '@mui/icons-material/School';
import LayersIcon from '@mui/icons-material/Layers';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TimelineIcon from '@mui/icons-material/Timeline';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export default function Manifesto() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const notWorkingWith = [
        {
            icon: <CancelIcon />,
            text: "Вы ищете «ремонт» ребенка. Я не переделываю детей под шаблон и не исправляю «неудобное» поведение ради комфорта взрослых."
        },
        {
            icon: <CancelIcon />,
            text: "Вам нужна «волшебная таблетка». Моя система требует включенности. Если вы ждете, что изменения произойдут без вашего участия — это не ко мне."
        },
        {
            icon: <CancelIcon />,
            text: "Вы живете в горизонте одного дня. Моя экспертиза — для тех, кто готов инвестировать усилия сегодня, чтобы получить плоды через 5, 10 и 20 лет."
        },
        {
            icon: <CancelIcon />,
            text: "Вы ищете упрощений. Я не адаптирую научные данные под «массовый вкус». Родительство уровня ВУЗа требует интеллектуального усилия."
        }
    ];

    const foundationPrinciples = [
        {
            icon: <EmojiObjectsIcon />,
            title: "Гениальность как данность",
            text: "Я убеждена: каждый ребенок талантлив, если среда не блокирует его потенциал."
        },
        {
            icon: <PsychologyIcon />,
            title: "Биологическая синхронность",
            text: "Мы учитываем нейрофизиологическую связь: состояние родителя напрямую проектирует состояние ребенка."
        },
        {
            icon: <ScienceIcon />,
            title: "Научный фундамент",
            text: "В основе системы — доказательная медицина, нейропсихология и глубокое понимание пластичности мозга."
        },
        {
            icon: <SchoolIcon />,
            title: "Интеллект как рычаг",
            text: "Мы используем осознанность и логику как главные инструменты развития семейной системы."
        }
    ];

    const architectureLevels = [
        {
            level: "1",
            title: "БАЗИС",
            subtitle: "Навыки и нейродинамика",
            description: "То, что видно снаружи. Координация, стрессоустойчивость и трансформация родителя: переход от «владения» ребенком к принятию его как отдельной личности.",
            color: "rgba(166, 124, 82, 0.2)" // Saddle Tan
        },
        {
            level: "2",
            title: "МЕТАНАВЫКИ",
            subtitle: "Взаимодействие с миром",
            description: "Саморегуляция и внимание. Здесь решается: станет ли кризис точкой роста или застрянет в хронической истерике.",
            color: "rgba(166, 124, 82, 0.3)" // Saddle Tan более насыщенный
        },
        {
            level: "3",
            title: "ХАРАКТЕР",
            subtitle: "Воля",
            description: "Формирование стержня через дозированный стресс и реальный опыт. То, кем ребенок становится в сложные моменты.",
            color: "rgba(217, 93, 43, 0.2)" // Signature Orange
        },
        {
            level: "4",
            title: "ЛИЧНОСТЬ",
            subtitle: "Автономия",
            description: "Ценностные ориентиры и самоидентификация. То, что остается в человеке, когда над ним больше нет вашего контроля.",
            color: "rgba(217, 93, 43, 0.3)" // Signature Orange более насыщенный
        }
    ];

    return (
        <Box sx={{
            backgroundColor: '#FCF9F3', // Silk Parchment
            py: { xs: 8, md: 12 },
            minHeight: '100vh',
            position: 'relative'
        }}>
            {/* Декоративные элементы */}
            <Box sx={{
                position: 'absolute',
                top: 100,
                right: 100,
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(217,93,43,0.03) 0%, transparent 70%)',
                zIndex: 0,
                [theme.breakpoints.down('md')]: {
                    display: 'none'
                }
            }} />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Главный заголовок */}
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2.2rem', md: '3rem' },
                            fontWeight: 300,
                            color: '#3E2F28', // Bitter Chocolate
                            mb: 2,
                            lineHeight: 1.1
                        }}
                    >
                        Манифест осознанной позиции
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '1.2rem', md: '1.5rem' },
                            fontWeight: 400,
                            color: '#A67C52', // Saddle Tan
                            fontStyle: 'italic',
                            mb: 4
                        }}
                    >
                        О развитии детей и взрослых, которые рядом
                    </Typography>

                    <Divider sx={{
                        width: '80px',
                        height: '2px',
                        backgroundColor: '#D95D2B',
                        mx: 'auto'
                    }} />
                </Box>

                {/* Вступление */}
                <Paper
                    elevation={0}
                    sx={{
                        backgroundColor: 'transparent',
                        p: 0,
                        mb: 8,
                        maxWidth: '800px',
                        mx: 'auto'
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: '1.1rem', md: '1.2rem' },
                            color: '#3E2F28', // Bitter Chocolate
                            lineHeight: 1.7,
                            mb: 4,
                            textAlign: 'center'
                        }}
                    >
                        Я не верю в «идеальное родительство». Идеал статичен, а жизнь — это движение. Я работаю с теми,
                        кто готов быть не идеальным, а опорным.
                    </Typography>

                    <Paper
                        elevation={0}
                        sx={{
                            backgroundColor: 'rgba(166, 124, 82, 0.05)',
                            borderRadius: 2,
                            p: 4,
                            borderLeft: '4px solid #D95D2B',
                            textAlign: 'center'
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: '1.1rem',
                                color: '#3E2F28',
                                lineHeight: 1.7,
                                fontStyle: 'italic'
                            }}
                        >
                            Этот манифест — мой способ сонастройки. Пожалуйста, прочтите его прежде,
                            чем доверить мне стратегию вашей семьи.
                        </Typography>
                    </Paper>
                </Paper>

                {/* С чем я не работаю */}
                <Box sx={{ mb: 10 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                        <Box sx={{
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            backgroundColor: 'rgba(166, 124, 82, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 2
                        }}>
                            <CancelIcon sx={{ color: '#A67C52', fontSize: 24 }} />
                        </Box>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: '1.5rem', md: '2rem' },
                                fontWeight: 400,
                                color: '#3E2F28'
                            }}
                        >
                            С чем я не работаю (Принципы избирательности)
                        </Typography>
                    </Box>

                    <Paper
                        elevation={0}
                        sx={{
                            backgroundColor: 'rgba(166, 124, 82, 0.03)',
                            borderRadius: 2,
                            p: 4,
                            border: '1px solid rgba(166, 124, 82, 0.1)',
                            mb: 4
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#A67C52',
                                fontSize: '1rem',
                                lineHeight: 1.6,
                                mb: 3,
                                fontStyle: 'italic'
                            }}
                        >
                            Я дорожу результатом каждой семьи, поэтому вхожу в проект только тогда,
                            когда мы совпадаем в базе. Нам не по пути, если:
                        </Typography>

                        <List sx={{ p: 0 }}>
                            {notWorkingWith.map((item, index) => (
                                <ListItem
                                    key={index}
                                    disablePadding
                                    sx={{
                                        mb: 2,
                                        alignItems: 'flex-start'
                                    }}
                                >
                                    <ListItemIcon sx={{ minWidth: 40, mt: 0.5 }}>
                                        <Box sx={{ color: '#A67C52' }}>
                                            {item.icon}
                                        </Box>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.text}
                                        primaryTypographyProps={{
                                            fontSize: '1rem',
                                            color: '#3E2F28',
                                            lineHeight: 1.6
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Box>

                {/* Фундамент моей веры */}
                <Box sx={{ mb: 10 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                        <Box sx={{
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            backgroundColor: 'rgba(217, 93, 43, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 2
                        }}>
                            <CheckCircleIcon sx={{ color: '#D95D2B', fontSize: 24 }} />
                        </Box>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: '1.5rem', md: '2rem' },
                                fontWeight: 400,
                                color: '#3E2F28'
                            }}
                        >
                            Фундамент моей веры (Принципы созидания)
                        </Typography>
                    </Box>

                    <Grid container spacing={3}>
                        {foundationPrinciples.map((item, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        height: '100%',
                                        backgroundColor: 'rgba(217, 93, 43, 0.03)',
                                        borderRadius: 2,
                                        p: 3,
                                        border: '1px solid rgba(217, 93, 43, 0.1)',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)'
                                        }
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                                        <Box sx={{
                                            color: '#D95D2B',
                                            mr: 2,
                                            mt: 0.5
                                        }}>
                                            {item.icon}
                                        </Box>
                                        <Box>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 500,
                                                    color: '#3E2F28',
                                                    fontSize: '1.1rem',
                                                    mb: 1
                                                }}
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    color: '#3E2F28',
                                                    fontSize: '0.95rem',
                                                    lineHeight: 1.6
                                                }}
                                            >
                                                {item.text}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Архитектура развития */}
                <Box sx={{ mb: 10 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                        <Box sx={{
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            backgroundColor: 'rgba(166, 124, 82, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 2
                        }}>
                            <LayersIcon sx={{ color: '#A67C52', fontSize: 24 }} />
                        </Box>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: '1.5rem', md: '2rem' },
                                fontWeight: 400,
                                color: '#3E2F28'
                            }}
                        >
                            Архитектура развития: 4 уровня системы
                        </Typography>
                    </Box>

                    <Paper
                        elevation={0}
                        sx={{
                            backgroundColor: 'transparent',
                            p: 0,
                            mb: 3
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#A67C52',
                                fontSize: '1rem',
                                lineHeight: 1.6,
                                mb: 4,
                                textAlign: 'center',
                                maxWidth: '800px',
                                mx: 'auto'
                            }}
                        >
                            Большинство подходов буксуют, пытаясь привить навыки (Level 1), игнорируя фундамент.
                            Моя методика охватывает все уровни, которые невозможно перепрыгнуть:
                        </Typography>
                    </Paper>

                    <Grid container spacing={3}>
                        {architectureLevels.map((level) => (
                            <Grid item xs={12} md={6} key={level.level}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        height: '100%',
                                        backgroundColor: level.color,
                                        borderRadius: 2,
                                        p: 4,
                                        border: '1px solid',
                                        borderColor: level.level <= '2' ? 'rgba(166, 124, 82, 0.3)' : 'rgba(217, 93, 43, 0.3)',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                >
                                    <Box sx={{
                                        position: 'absolute',
                                        top: 16,
                                        right: 16,
                                        width: 40,
                                        height: 40,
                                        borderRadius: '50%',
                                        backgroundColor: level.level <= '2' ? '#A67C52' : '#D95D2B',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#FCF9F3',
                                        fontSize: '1.2rem',
                                        fontWeight: 700
                                    }}>
                                        {level.level}
                                    </Box>

                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontWeight: 600,
                                            color: '#3E2F28',
                                            fontSize: '1.3rem',
                                            mb: 1,
                                            pr: 6
                                        }}
                                    >
                                        {level.title}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: level.level <= '2' ? '#A67C52' : '#D95D2B',
                                            fontSize: '0.95rem',
                                            fontWeight: 500,
                                            mb: 2
                                        }}
                                    >
                                        {level.subtitle}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: '#3E2F28',
                                            fontSize: '0.95rem',
                                            lineHeight: 1.6
                                        }}
                                    >
                                        {level.description}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Моя миссия */}
                <Paper
                    elevation={0}
                    sx={{
                        backgroundColor: 'rgba(217, 93, 43, 0.05)',
                        borderRadius: 2,
                        p: { xs: 4, md: 6 },
                        borderLeft: '4px solid #D95D2B'
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Box sx={{
                            width: 50,
                            height: 50,
                            borderRadius: '50%',
                            backgroundColor: 'rgba(217, 93, 43, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 3
                        }}>
                            <TimelineIcon sx={{ color: '#D95D2B', fontSize: 28 }} />
                        </Box>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: '1.5rem', md: '2rem' },
                                fontWeight: 400,
                                color: '#3E2F28'
                            }}
                        >
                            Моя миссия
                        </Typography>
                    </Box>

                    <Typography
                        sx={{
                            color: '#3E2F28',
                            fontSize: { xs: '1.1rem', md: '1.2rem' },
                            lineHeight: 1.7,
                            mb: 3
                        }}
                    >
                        Моя работа — это Школа Родительства уровня высшего образования. Я не даю советов «на завтрак».
                        Я помогаю вам занять позицию, которая требует такого же глубокого изучения, как любая серьезная профессия.
                    </Typography>

                    <Box sx={{
                        p: 3,
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        borderRadius: 1,
                        border: '1px solid rgba(217, 93, 43, 0.2)',
                        textAlign: 'center'
                    }}>
                        <Typography
                            sx={{
                                color: '#D95D2B',
                                fontSize: { xs: '1.2rem', md: '1.4rem' },
                                fontWeight: 500,
                                fontStyle: 'italic',
                                lineHeight: 1.4
                            }}
                        >
                            Родительство — это не роль. Это ваша главная жизненная стратегия.
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}