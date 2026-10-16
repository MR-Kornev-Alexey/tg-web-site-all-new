import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import PsychologyIcon from '@mui/icons-material/Psychology';
import GroupsIcon from '@mui/icons-material/Groups';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { alpha } from '@mui/material/styles';

export default function ThreePowersSystem() {
    // Данные для детских методик
    const childMethods = [
        {
            icon: <PsychologyIcon sx={{ fontSize: 32 }} />,
            title: 'Элита с пеленок',
            subtitle: '',
            tag: 'Вектор ребенка',
            description: [
                'Формирование **нейронной архитектуры лидера** с первых месяцев жизни.',
                'Учу мозг ребенка выдерживать нагрузку, не истерить от стресса, ставить цели и достигать их. Через практики, ритуалы, через правильную реакцию на его «хочу» и «не буду».',
                '«Элита с пеленок» - фундамент, на котором вырастает характер, воля, способность быть первым. Без неврозов, без сломанной психики, без выгорания в 20 лет.'
            ],
            color: '#D95D2B',
            gradient: 'linear-gradient(135deg, rgba(217,93,43,0.05) 0%, rgba(217,93,43,0.01) 100%)',
            accent: 'Интеллект'
        },
        {
            icon: <GroupsIcon sx={{ fontSize: 32 }} />,
            title: 'Метод китайской мамы',
            subtitle: '',
            tag: 'Вектор ребенка',
            description: [
                '**Золотой баланс между жёсткостью и любовью**.',
                'Система, где дисциплина не травмирует. Где уважение к старшим формирует характер. Где ребёнок учится справляться с отказами, не впадая в истерику, чувствуя себя любимым.',
                'Восточная система границ + западная эмпатия = ребёнок, который умеет и подчиняться, и вести, и чувствовать, и побеждать.'
            ],
            color: '#3E2F28',
            gradient: 'linear-gradient(135deg, rgba(62,47,40,0.04) 0%, rgba(62,47,40,0.01) 100%)',
            accent: 'Характер'
        }
    ];

    // Данные для методики мамы
    const momMethod = {
        icon: <SelfImprovementIcon sx={{ fontSize: 36 }} />,
        title: 'Нейроуборка',
        subtitle: '',
        tag: 'Вектор мамы',
        description: [
            'Это скорая помощь для мамы на грани.',
            'Когда вы на пределе, когда кажется, что сейчас взорвётесь — проблема не в вас. Мозг забит тысячью мамских тревог, как оперативная память компьютера. Техника, которая за 5 минут очищает эту память. Через простые действия, через работу с телом и вниманием я возвращаю вас в состояние, где вы снова способны думать и чувствовать.',
            'Это не медитация. Это помощь  без чувства вины, без долгих практик.'
        ],
        color: '#A67C52',
        bgColor: '#FCF9F3',
        accent: 'Ресурс'
    };

    // Хелпер для жирного текста
    const formatText = (text) => {
        const parts = text.split(/\*\*(.*?)\*\*/g);
        return parts.map((part, i) =>
            i % 2 === 1 ?
                <Box component="span" key={i} sx={{ fontWeight: 700, color: '#3E2F28' }}>{part}</Box> :
                <span key={i}>{part}</span>
        );
    };

    return (
        <Box sx={{
            backgroundColor: '#FCF9F3',
            py: { xs: 8, md: 12 },
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Фоновый декор */}
            <Box sx={{
                position: 'absolute',
                bottom: -100,
                left: -100,
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(217,93,43,0.03) 0%, transparent 70%)',
                zIndex: 0
            }} />
            <Box sx={{
                position: 'absolute',
                top: -50,
                right: -50,
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(166,124,82,0.03) 0%, transparent 70%)',
                zIndex: 0
            }} />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                {/* 1. ЗАГОЛОВОК СЕКЦИИ - стиль как в ThreePowers */}
                <Box sx={{ mb: 8, textAlign: 'center' }}>
                    <Typography
                        component="span"
                        sx={{
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            letterSpacing: '4px',
                            textTransform: 'uppercase',
                            color: '#A67C52',
                            mb: 2,
                            display: 'block'
                        }}
                    >
                        СИСТЕМНЫЙ ПОДХОД
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2rem', md: '2.8rem' },
                            fontWeight: 300,
                            color: '#3E2F28',
                            mb: 3,
                            letterSpacing: '-0.5px'
                        }}
                    >
                        Каждая методика — отдельный инструмент
                    </Typography>
                </Box>

                {/* 2. ЗОНА РЕБЕНКА (2 колонки) - стиль карточек как в ThreePowers */}
                <Grid container spacing={4} sx={{ mb: 3 }}>
                    {childMethods.map((method, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    background: method.gradient,
                                    border: '1px solid',
                                    borderColor: alpha(method.color, 0.15),
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        borderColor: alpha(method.color, 0.3),
                                        boxShadow: `0 20px 40px ${alpha(method.color, 0.1)}`
                                    }
                                }}
                            >
                                {/* Верхняя полоска с акцентом */}
                                <Box sx={{
                                    height: '6px',
                                    background: `linear-gradient(90deg, ${method.color}, ${alpha(method.color, 0.3)})`
                                }} />

                                <Box sx={{ p: 4 }}>
                                    {/* Заголовок с иконкой */}
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 2,
                                        mb: 3
                                    }}>
                                        <Avatar sx={{
                                            bgcolor: method.color,
                                            width: 56,
                                            height: 56,
                                            color: '#FFFFFF',
                                            boxShadow: `0 8px 16px ${alpha(method.color, 0.2)}`
                                        }}>
                                            {method.icon}
                                        </Avatar>
                                        <Box>
                                            <Typography
                                                sx={{
                                                    fontSize: '1.3rem',
                                                    fontWeight: 600,
                                                    color: '#3E2F28',
                                                    lineHeight: 1.2,
                                                    mb: 0.5
                                                }}
                                            >
                                                {method.title}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: '0.85rem',
                                                    fontWeight: 500,
                                                    color: method.color,
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1px'
                                                }}
                                            >
                                                {method.accent}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* Теги */}
                                    <Chip
                                        label={method.tag}
                                        size="small"
                                        sx={{
                                            mb: 3,
                                            bgcolor: alpha(method.color, 0.1),
                                            color: method.color,
                                            fontWeight: 600,
                                            fontSize: '0.75rem',
                                            border: '1px solid',
                                            borderColor: alpha(method.color, 0.2)
                                        }}
                                    />

                                    {/* Описание */}
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                        {method.description.map((text, i) => (
                                            <Typography
                                                key={i}
                                                sx={{
                                                    fontSize: '0.95rem',
                                                    lineHeight: 1.7,
                                                    color: i === 0 ? '#3E2F28' : '#5A4A3E',
                                                    fontWeight: i === 0 ? 500 : 400,
                                                    opacity: i === 0 ? 1 : 0.9
                                                }}
                                            >
                                                {formatText(text)}
                                            </Typography>
                                        ))}
                                    </Box>

                                    {/* Декоративная точка */}
                                    <Box sx={{
                                        mt: 4,
                                        pt: 2,
                                        borderTop: '1px dashed',
                                        borderColor: alpha(method.color, 0.2),
                                        display: 'flex',
                                        justifyContent: 'flex-end'
                                    }}>
                                        <Box sx={{
                                            width: 30,
                                            height: 2,
                                            background: `linear-gradient(90deg, ${alpha(method.color, 0.2)}, ${method.color})`,
                                            borderRadius: 1
                                        }} />
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {/* Связующая стрелка */}
                <Box sx={{ display: 'flex', justifyContent: 'center', my: -1, position: 'relative', zIndex: 2 }}>
                    <Box sx={{
                        bgcolor: '#FFFFFF',
                        border: '1px solid rgba(166, 124, 82, 0.2)',
                        borderRadius: '50%',
                        p: 1,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                    }}>
                        <ArrowDownwardIcon sx={{ color: '#A67C52', fontSize: 20 }} />
                    </Box>
                </Box>

                {/* 3. ЗОНА МАМЫ - в стиле карточек ThreePowers */}
                <Paper
                    elevation={0}
                    sx={{
                        mt: 0,
                        p: { xs: 4, md: 5 },
                        borderRadius: 4,
                        background: `linear-gradient(135deg, ${alpha(momMethod.color, 0.05)} 0%, ${alpha(momMethod.color, 0.01)} 100%)`,
                        border: '1px solid',
                        borderColor: alpha(momMethod.color, 0.15),
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                            transform: 'translateY(-4px)',
                            borderColor: alpha(momMethod.color, 0.3)
                        }
                    }}
                >
                    {/* Верхняя полоска */}
                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: `linear-gradient(90deg, ${momMethod.color}, ${alpha(momMethod.color, 0.3)})`
                    }} />

                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                        {/* Тег */}
                        <Chip
                            label={momMethod.tag}
                            size="small"
                            sx={{
                                mb: 3,
                                bgcolor: momMethod.color,
                                color: '#FFF',
                                fontWeight: 600,
                                fontSize: '0.75rem'
                            }}
                        />

                        {/* Контент */}
                        <Grid container spacing={4} alignItems="center">
                            <Grid item xs={12} md={4}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Avatar sx={{
                                        bgcolor: momMethod.color,
                                        width: 64,
                                        height: 64,
                                        color: '#FFFFFF',
                                        boxShadow: `0 8px 16px ${alpha(momMethod.color, 0.2)}`
                                    }}>
                                        {momMethod.icon}
                                    </Avatar>
                                    <Box>
                                        <Typography
                                            sx={{
                                                fontSize: '1.5rem',
                                                fontWeight: 600,
                                                color: '#3E2F28',
                                                lineHeight: 1.2,
                                                mb: 0.5
                                            }}
                                        >
                                            {momMethod.title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: '0.9rem',
                                                fontWeight: 500,
                                                color: momMethod.color,
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px'
                                            }}
                                        >
                                            {momMethod.accent}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={8}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    {momMethod.description.map((text, i) => (
                                        <Typography
                                            key={i}
                                            sx={{
                                                fontSize: '1rem',
                                                lineHeight: 1.7,
                                                color: i === 0 ? '#3E2F28' : '#5A4A3E',
                                                fontWeight: i === 0 ? 500 : 400
                                            }}
                                        >
                                            {formatText(text)}
                                        </Typography>
                                    ))}
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}