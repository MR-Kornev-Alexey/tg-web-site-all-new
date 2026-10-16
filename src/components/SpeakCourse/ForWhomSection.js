import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from "../Typography/Typography";
import { keyframes } from '@mui/system';

// ============ ЦВЕТА ============
const COLORS = {
    primary: '#D95D2B',
    secondary: '#A67C52',
    background: '#FCF9F3',
    text: '#3E2F28',
    textLight: '#6B5A4E',
    paperBg: '#FFFFFF',
    border: 'rgba(166, 124, 82, 0.2)',
};

// ============ АНИМАЦИИ ============
const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(24px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

// ============ ДАННЫЕ ============
const FOR_WHOM = [
    {
        icon: '📚',
        title: 'Устали от противоречивой информации',
        text: 'В интернете полно неполных советов — вы хотите чётких рекомендаций.',
    },
    {
        icon: '⏳',
        title: 'Не готовы «ждать до 3 лет»',
        text: 'Чтобы потом исправлять уже укоренившиеся проблемы с речью.',
    },
    {
        icon: '🤔',
        title: 'Сомневаетесь в развитии ребёнка',
        text: 'Не понимаете, какие конкретно шаги предпринимать прямо сейчас.',
    },
    {
        icon: '🔍',
        title: 'Хотите разобраться в речи',
        text: 'Понять, как устроена речь малыша, и работать с ней эффективно.',
    },
    {
        icon: '👶',
        title: 'Ребёнок родился раньше срока',
        text: 'Или в процессе беременности и родов возникали сложности.',
    },
    {
        icon: '🌍',
        title: 'Малыш растёт в двуязычной среде',
        text: 'В семье используют два и более языка — нужен особый подход.',
    },
];

// ==================================================================
// БЛОК 2. ДЛЯ КОГО — карточки с анимацией
// ==================================================================
export function ForWhomSectionNew() {
    return (
        <Container
            component="section"
            sx={{
                px: { xs: 2, sm: 3 },
                py: { xs: 5, md: 8 },
                backgroundColor: COLORS.background,
            }}
        >
            <Typography
                sx={{
                    display: 'inline-block',
                    fontSize: { xs: 12, sm: 13 },
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: COLORS.secondary,
                    mb: 1.5,
                }}
            >
                Для кого
            </Typography>

            <Typography
                component="h2"
                sx={{
                    fontSize: { xs: 20, sm: 24, md: 28 },
                    fontWeight: 700,
                    lineHeight: 1.3,
                    letterSpacing: '-0.01em',
                    color: COLORS.text,
                    mb: { xs: 3, md: 5 },
                }}
            >
                Этот курс станет для вас спасением, если:
            </Typography>

            <Grid container spacing={{ xs: 2, md: 2.5 }}>
                {FOR_WHOM.map((item, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                        <Box
                            sx={{
                                position: 'relative',
                                height: '100%',
                                backgroundColor: COLORS.paperBg,
                                border: `1px solid ${COLORS.border}`,
                                borderRadius: 2,
                                p: { xs: 2.5, md: 3 },
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1.5,
                                overflow: 'hidden',
                                cursor: 'default',

                                // каскадное появление
                                opacity: 0,
                                animation: `${fadeInUp} 0.6s ease-out forwards`,
                                animationDelay: `${i * 0.1}s`,

                                transition: 'transform .3s ease, border-color .3s ease, box-shadow .3s ease',

                                // декоративная полоса сверху
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: 3,
                                    backgroundColor: COLORS.primary,
                                    transform: 'scaleX(0)',
                                    transformOrigin: 'left',
                                    transition: 'transform .35s ease',
                                },

                                '&:hover': {
                                    transform: 'translateY(-6px)',
                                    borderColor: 'rgba(166, 124, 82, 0.5)',
                                    boxShadow: '0 12px 32px rgba(62, 47, 40, 0.08)',
                                    '&::before': {
                                        transform: 'scaleX(1)',
                                    },
                                    '& .card-icon': {
                                        transform: 'scale(1.15) rotate(-6deg)',
                                        backgroundColor: COLORS.primary,
                                    },
                                },
                            }}
                        >
                            {/* Иконка */}
                            <Box
                                className="card-icon"
                                sx={{
                                    width: 48,
                                    height: 48,
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(217, 93, 43, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 22,
                                    transition: 'transform .35s ease, background-color .35s ease',
                                    flexShrink: 0,
                                }}
                            >
                                {item.icon}
                            </Box>

                            {/* Заголовок */}
                            <Typography
                                component="h3"
                                sx={{
                                    fontSize: { xs: 15, md: 16 },
                                    fontWeight: 600,
                                    color: COLORS.text,
                                    lineHeight: 1.35,
                                }}
                            >
                                {item.title}
                            </Typography>

                            {/* Текст */}
                            <Typography
                                sx={{
                                    fontSize: { xs: 13.5, md: 14.5 },
                                    lineHeight: 1.55,
                                    color: COLORS.textLight,
                                }}
                            >
                                {item.text}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default ForWhomSectionNew;