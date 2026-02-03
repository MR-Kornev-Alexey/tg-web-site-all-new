import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SchoolIcon from '@mui/icons-material/School';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const agePoints = [
    {
        age: "3–6 лет",
        title: "Кризис авторитета vs «Удобный родитель»",
        description: "В этом возрасте интуиция шепчет: «уступи, он еще маленький». Но именно здесь строится иерахия. Если вы не научитесь быть «добрым, но твердым лидером» сейчас, к 12 годам вы столкнетесь с бытовым тиранизмом, где ваше мнение не будет значить ничего.",
        result: "Ребенок, который чувствует безопасность в ваших границах, а не борется с вами за власть.",
        icon: <PsychologyIcon />,
        color: "#ff9800"
    },
    {
        age: "7–10 лет",
        title: "Переход от контроля к саморегуляции",
        description: "Школа — это не про оценки, это про формирование субъектности. Ошибка на этом этапе — превратиться в «надзирателя» с уроками. Это убивает внутреннюю мотивацию на десятилетия. Мы выстраиваем систему, в которой ребенок учится нести ответственность за свои действия, а не за ваш гнев.",
        result: "Подросток, который умеет принимать решения и справляться с трудностями без вашего ежеминутного участия.",
        icon: <SchoolIcon />,
        color: "#2196f3"
    },
    {
        age: "11–14 лет",
        title: "Смена дистанции и сохранение связи",
        description: "Самая дорогая точка ошибки. Попытка удержать контроль старыми методами приводит к «закрытым дверям» — и физическим, и эмоциональным. Моя методика помогает перестроить формат общения так, чтобы в период бури вы остались для ребенка главным доверенным лицом, а не врагом.",
        result: "Глубокая близость, основанная на уважении, а не на страхе или манипуляциях.",
        icon: <FamilyRestroomIcon />,
        color: "#9c27b0"
    }
];

export default function DevelopmentPoints() {
    return (
        <Container component="section" sx={{ py: { xs: 4, md: 6 } }}>
            {/* Заголовок секции */}
            <Typography
                component="h2"
                sx={{
                    fontSize: { xs: 24, md: 32 },
                    fontWeight: 700,
                    textAlign: 'center',
                    mb: 1,
                    textTransform: 'uppercase',
                }}
            >
                Точки, где закладывается будущее
            </Typography>

            <Typography
                component="p"
                sx={{
                    fontSize: { xs: 16, md: 18 },
                    textAlign: 'center',
                    color: '#555',
                    mb: { xs: 3, md: 5 },
                    maxWidth: 800,
                    mx: 'auto',
                    px: 2
                }}
            >
                Не упустите ключевые моменты развития вашего ребенка.
                Каждый этап требует особого подхода и правильных стратегий.
            </Typography>

            {/* Desktop версия - Карточки в ряд */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Grid container spacing={3}>
                    {agePoints.map((point, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: 2,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                                    }
                                }}
                            >
                                {/* Верхняя часть с возрастом и иконкой */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        mb: 2,
                                        pb: 2,
                                        borderBottom: '1px solid #f0f0f0'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: 50,
                                            height: 50,
                                            borderRadius: '50%',
                                            backgroundColor: `${point.color}15`,
                                            color: point.color,
                                            mr: 2
                                        }}
                                    >
                                        {point.icon}
                                    </Box>
                                    <Typography
                                        sx={{
                                            fontSize: 20,
                                            fontWeight: 700,
                                            color: point.color
                                        }}
                                    >
                                        {point.age}
                                    </Typography>
                                </Box>

                                {/* Заголовок этапа */}
                                <Typography
                                    component="h3"
                                    sx={{
                                        fontSize: 18,
                                        fontWeight: 600,
                                        mb: 2,
                                        lineHeight: 1.3
                                    }}
                                >
                                    {point.title}
                                </Typography>

                                {/* Описание */}
                                <Typography
                                    sx={{
                                        fontSize: 14,
                                        color: '#555',
                                        lineHeight: 1.6,
                                        mb: 2,
                                        flexGrow: 1
                                    }}
                                >
                                    {point.description}
                                </Typography>

                                {/* Результат */}
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 2,
                                        backgroundColor: '#f9f9f9',
                                        borderRadius: 1,
                                        borderLeft: `4px solid ${point.color}`
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: 14,
                                            fontWeight: 500,
                                            color: '#333'
                                        }}
                                    >
                                        <Box component="span" sx={{ fontWeight: 700, color: point.color }}>
                                            Результат системы:
                                        </Box>
                                        {' '}{point.result}
                                    </Typography>
                                </Paper>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Mobile версия - Timeline */}
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <Timeline position="alternate">
                    {agePoints.map((point, index) => (
                        <TimelineItem key={index}>
                            <TimelineOppositeContent
                                sx={{
                                    m: 'auto 0',
                                    flex: 0.2
                                }}
                                align="right"
                                variant="body2"
                                color="text.secondary"
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: 16,
                                        color: point.color
                                    }}
                                >
                                    {point.age}
                                </Typography>
                            </TimelineOppositeContent>

                            <TimelineSeparator>
                                <TimelineDot
                                    sx={{
                                        backgroundColor: `${point.color}15`,
                                        color: point.color
                                    }}
                                >
                                    {point.icon}
                                </TimelineDot>
                                {index < agePoints.length - 1 && (
                                    <TimelineConnector />
                                )}
                            </TimelineSeparator>

                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Paper
                                    elevation={2}
                                    sx={{
                                        p: 2,
                                        borderRadius: 2
                                    }}
                                >
                                    <Typography
                                        component="h3"
                                        sx={{
                                            fontWeight: 600,
                                            fontSize: 15,
                                            mb: 1
                                        }}
                                    >
                                        {point.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontSize: 13,
                                            color: '#555',
                                            mb: 1
                                        }}
                                    >
                                        {point.description}
                                    </Typography>
                                    <Box
                                        sx={{
                                            p: 1.5,
                                            backgroundColor: '#f5f5f5',
                                            borderRadius: 1,
                                            borderLeft: `3px solid ${point.color}`
                                        }}
                                    >
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontSize: 12,
                                                fontWeight: 500
                                            }}
                                        >
                                            {point.result}
                                        </Typography>
                                    </Box>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Box>

            {/* CTA секция */}
            <Box
                sx={{
                    mt: { xs: 4, md: 6 },
                    textAlign: 'center'
                }}
            >
                <Typography
                    sx={{
                        fontSize: { xs: 16, md: 18 },
                        fontWeight: 500,
                        mb: 3,
                        color: '#333'
                    }}
                >
                    Не ждите, пока проблемы станут критическими.
                    Начните формировать здоровые отношения с ребенком уже сегодня.
                </Typography>

                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                >
                    <IconButton
                        href="https://t.me/MrkDigital?text=консультация по возрастным кризисам"
                        target="_blank"
                        sx={{
                            px: 4,
                            py: 1.5,
                            backgroundColor: '#d3eafc',
                            color: 'white',
                            borderRadius: 2,
                            fontSize: 14,
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            '&:hover': {
                                backgroundColor: '#6ba0d5',
                            }
                        }}
                    >
                        Получить консультацию
                        <ArrowForwardIcon sx={{ ml: 1 }} />
                    </IconButton>

                    <IconButton
                        href="https://t.me/MrkDigital?text=запрос на программу сопровождения"
                        target="_blank"
                        variant="outlined"
                        sx={{
                            px: 4,
                            py: 1.5,
                            borderColor: '#2196f3',
                            color: '#2196f3',
                            borderRadius: 2,
                            fontSize: 14,
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            '&:hover': {
                                borderColor: '#1976d2',
                                backgroundColor: '#2196f315'
                            }
                        }}
                    >
                        Программа сопровождения
                    </IconButton>
                </Stack>
            </Box>
        </Container>
    );
}