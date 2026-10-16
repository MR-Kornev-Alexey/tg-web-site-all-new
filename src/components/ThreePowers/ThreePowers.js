import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import { alpha } from '@mui/material/styles';

export default function ThreePowers() {
    const powers = [
        {
            icon: <ChildCareIcon sx={{ fontSize: 32 }} />,
            title: 'Элита с пеленок',
            description: [
                'Формирование **нейронной архитектуры лидера** с первых месяцев жизни.',
                'Учу мозг ребенка выдерживать нагрузку, не истерить от стресса, ставить цели и достигать их. Через практики, ритуалы, через правильную реакцию на его «хочу» и «не буду».',
                '«Элита с пеленок» - фундамент, на котором вырастает характер, воля, способность быть первым. Без неврозов, без сломанной психики, без выгорания в 20 лет.'
            ],
            color: '#D95D2B',
            bgColor: 'rgba(217, 93, 43, 0.03)',
            gradient: 'linear-gradient(135deg, rgba(217,93,43,0.05) 0%, rgba(217,93,43,0.01) 100%)',
            accent: ''
        },
        {
            icon: <PsychologyIcon sx={{ fontSize: 32 }} />,
            title: 'Метод китайской мамы',
            description: [
                '**Золотой баланс между жёсткостью и любовью**.',
                'Система, где дисциплина не травмирует. Где уважение к старшим формирует характер. Где ребёнок учится справляться с отказами, не впадая в истерику, чувствуя себя любимым.',
                'Восточная система границ + западная эмпатия = ребёнок, который умеет и подчиняться, и вести, и чувствовать, и побеждать.'
            ],
            color: '#3E2F28',
            bgColor: 'rgba(62, 47, 40, 0.02)',
            gradient: 'linear-gradient(135deg, rgba(62,47,40,0.04) 0%, rgba(62,47,40,0.01) 100%)',
            accent: ''
        },
        {
            icon: <FitnessCenterIcon sx={{ fontSize: 32 }} />,
            title: 'Нейроуборка',
            description: [
                'Это скорая помощь для мамы на грани.',
                'Когда вы на пределе, когда кажется, что сейчас взорвётесь — проблема не в вас. Мозг забит тысячью мамских тревог, как оперативная память компьютера. Техника, которая за **5 минут очищает эту память**. Через простые действия, через работу с телом и вниманием я возвращаю вас в состояние, где вы снова способны думать и чувствовать.',
                'Это не медитация. Это помощь  без чувства вины, без долгих практик.'
            ],
            color: '#A67C52',
            bgColor: 'rgba(166, 124, 82, 0.03)',
            gradient: 'linear-gradient(135deg, rgba(166,124,82,0.05) 0%, rgba(166,124,82,0.01) 100%)',
            accent: ''
        }
    ];

    // Функция для форматирования текста с жирным шрифтом
    const formatText = (text) => {
        if (text.includes('**')) {
            const parts = text.split(/\*\*(.*?)\*\*/g);
            return parts.map((part, i) =>
                i % 2 === 1 ?
                    <strong key={i} style={{ color: '#3E2F28', fontWeight: 700 }}>{part}</strong> :
                    <span key={i}>{part}</span>
            );
        }
        return text;
    };

    return (
        <Box sx={{
            backgroundColor: '#FCF9F3',
            py: { xs: 8, md: 12 },
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Декоративные элементы */}
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
                {/* ЗАГОЛОВОК */}
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
                        АВТОРСКИЕ МЕТОДИКИ
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
                        Три системы воспитания
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '1.2rem',
                            color: '#6B5A4E',
                            maxWidth: '700px',
                            mx: 'auto'
                        }}
                    >
                        Каждая методика закрывает свою задачу. Вместе они создают целостную личность
                    </Typography>
                </Box>

                {/* БЛОКИ МЕТОДИК */}
                <Grid container spacing={4}>
                    {powers.map((power, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    background: power.gradient,
                                    border: '1px solid',
                                    borderColor: alpha(power.color, 0.15),
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        borderColor: alpha(power.color, 0.3),
                                        boxShadow: `0 20px 40px ${alpha(power.color, 0.1)}`
                                    }
                                }}
                            >
                                {/* Верхняя полоска с акцентом */}
                                <Box sx={{
                                    height: '6px',
                                    background: `linear-gradient(90deg, ${power.color}, ${alpha(power.color, 0.3)})`
                                }} />

                                {/* Контент */}
                                <Box sx={{ p: 4 }}>
                                    {/* Заголовок с иконкой */}
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 2,
                                        mb: 3
                                    }}>
                                        <Avatar sx={{
                                            bgcolor: power.color,
                                            width: 56,
                                            height: 56,
                                            color: '#FFFFFF',
                                            boxShadow: `0 8px 16px ${alpha(power.color, 0.2)}`
                                        }}>
                                            {power.icon}
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
                                                {power.title}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: '0.85rem',
                                                    fontWeight: 500,
                                                    color: power.color,
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1px'
                                                }}
                                            >
                                                {power.accent}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* Описание с параграфами */}
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 2,
                                        mb: 'auto'
                                    }}>
                                        {power.description.map((paragraph, i) => (
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
                                                {formatText(paragraph)}
                                            </Typography>
                                        ))}
                                    </Box>

                                    {/* Декоративная точка внизу */}
                                    <Box sx={{
                                        mt: 4,
                                        pt: 2,
                                        borderTop: '1px dashed',
                                        borderColor: alpha(power.color, 0.2),
                                        display: 'flex',
                                        justifyContent: 'flex-end'
                                    }}>
                                        <Box sx={{
                                            width: 30,
                                            height: 2,
                                            background: `linear-gradient(90deg, ${alpha(power.color, 0.2)}, ${power.color})`,
                                            borderRadius: 1
                                        }} />
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {/* Нижний текст о комплексном подходе */}
                <Paper
                    elevation={0}
                    sx={{
                        mt: 6,
                        p: 4,
                        backgroundColor: alpha('#3E2F28', 0.02),
                        borderRadius: 4,
                        border: '1px solid',
                        borderColor: alpha('#A67C52', 0.15),
                        textAlign: 'center'
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '1.1rem',
                            color: '#3E2F28',
                            maxWidth: '800px',
                            mx: 'auto',
                            fontStyle: 'italic'
                        }}
                    >
                        «Каждая методика — как отдельный инструмент. Вместе они создают систему,
                        где ребёнок растёт здоровым, мыслящим и сильным духом. Без давления,
                        без страха, без потери контакта с родителями»
                    </Typography>
                    <Typography
                        sx={{
                            mt: 2,
                            fontSize: '0.95rem',
                            color: '#A67C52',
                            fontWeight: 500
                        }}
                    >
                        — Елена Корнева
                    </Typography>
                </Paper>
            </Container>
        </Box>
    );
}