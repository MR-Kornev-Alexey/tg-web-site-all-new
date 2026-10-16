import React from 'react';
import { Container, Typography, Grid, Box, Link } from '@mui/material';

// ============ ОБНОВЛЕННАЯ МЯГКАЯ ПАЛИТРА ============
const COLORS = {
    primary: '#D4845A',
    primaryDark: '#B8704A',
    primaryLight: 'rgba(212, 132, 90, 0.12)',
    secondary: '#A67C52',
    background: '#FCF9F3',
    text: '#3E2F28',
    textLight: '#6B5A4E',
    paperBg: '#FFFFFF',
    border: 'rgba(166, 124, 82, 0.2)',
};

const sectionSx = {
    pt: 8,
    backgroundColor: COLORS.background
};
const sectionLabelSx = {
    fontSize: 14,
    color: COLORS.secondary,
    textAlign: 'center',
    mb: 1,
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase'
};
const sectionTitleSx = {
    fontSize: { xs: 24, md: 32 },
    fontWeight: 700,
    mb: 4,
    color: COLORS.text,
    letterSpacing: '-0.01em'
};

// ============ ССЫЛКИ НА ОПЛАТУ ============
const PAYMENT_LINKS = {
    base: 'https://payform.ru/a4cB9VA/',
    optimal: 'https://payform.ru/dlcB9Xs/',
    premium: 'https://payform.ru/hbcB9Zq/',
};

const PRICING = [
    {
        id: 'plan-base',
        type: 'Базовый',
        title: 'Рассылка (1 месяц)',
        price: '1 500 ₽',
        features: ['Поддерживающие письма', 'Практические задания', 'Доступ к библиотеке'],
        buttonText: 'Выбрать',
        recommended: false,
        paymentLink: PAYMENT_LINKS.base,
    },
    {
        id: 'plan-optimal',
        type: 'Оптимальный',
        title: 'Рассылка (3 месяца)',
        price: '3 500 ₽',
        features: ['Поддерживающие письма', 'Практические задания', 'Экономия в долгосрок', '1 вебинар в подарок'],
        buttonText: 'Выбрать оптимальный',
        recommended: true,
        paymentLink: PAYMENT_LINKS.optimal,
    },
    {
        id: 'plan-premium',
        type: 'Премиум',
        title: 'Семинары и рассылка (1 год)',
        price: '12 000 ₽',
        features: ['Рассылка на весь год', 'Участие в живых семинарах', 'Ответы на ваши вопросы', 'Доступ ко всем записям'],
        buttonText: 'Выбрать',
        recommended: false,
        paymentLink: PAYMENT_LINKS.premium,
    }
];

export default function HwPricingSection() {
    return (
        <Container component="section" sx={{ ...sectionSx, pb: { xs: 6, md: 10 } }} id="pricing">
            <Typography sx={sectionLabelSx}>Тарифы</Typography>
            <Typography component="h2" sx={{ ...sectionTitleSx, textAlign: 'center' }}>
                Выберите подходящий формат
            </Typography>

            <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mt: 1, justifyContent: 'center' }}>
                {PRICING.map((plan) => (
                    <Grid item xs={12} sm={6} md={4} key={plan.id}>
                        <Box
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: plan.recommended ? COLORS.primary : COLORS.paperBg,
                                border: `2px solid ${plan.recommended ? COLORS.primary : COLORS.border}`,
                                borderRadius: 2,
                                p: { xs: 2.5, md: 3 },
                                transition: 'all .25s ease',
                                position: 'relative',
                                '&:hover': {
                                    transform: 'translateY(-6px)',
                                    boxShadow: plan.recommended
                                        ? '0 16px 40px rgba(212, 132, 90, 0.3)'
                                        : '0 12px 32px rgba(166, 124, 82, 0.15)',
                                },
                            }}
                        >
                            {plan.recommended && (
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: -14,
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        backgroundColor: COLORS.secondary,
                                        color: '#fff',
                                        fontSize: 11,
                                        fontWeight: 700,
                                        px: 2.5,
                                        py: 0.75,
                                        borderRadius: 1,
                                        letterSpacing: '0.08em',
                                        whiteSpace: 'nowrap',
                                        boxShadow: '0 4px 12px rgba(166, 124, 82, 0.3)',
                                    }}
                                >
                                    РЕКОМЕНДУЕМ
                                </Box>
                            )}

                            <Typography
                                sx={{
                                    fontSize: 12,
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    color: plan.recommended ? 'rgba(255,255,255,0.85)' : COLORS.secondary,
                                    mb: 1,
                                    textAlign: 'center',
                                }}
                            >
                                {plan.type}
                            </Typography>

                            <Typography
                                component="h3"
                                sx={{
                                    fontSize: { xs: 18, md: 20 },
                                    fontWeight: 700,
                                    color: plan.recommended ? '#FFFFFF' : COLORS.text,
                                    mb: 1.5,
                                    textAlign: 'center',
                                    lineHeight: 1.3,
                                }}
                            >
                                {plan.title}
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: { xs: 32, md: 36 },
                                    fontWeight: 800,
                                    color: plan.recommended ? '#FFFFFF' : COLORS.primary,
                                    mb: 2.5,
                                    textAlign: 'center',
                                }}
                            >
                                {plan.price}
                            </Typography>

                            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, mb: 'auto' }}>
                                {plan.features.map((feature, idx) => (
                                    <Box
                                        component="li"
                                        key={`feature-${idx}`}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: 1.5,
                                            mb: 1.5,
                                            fontSize: { xs: 14, md: 15 },
                                            lineHeight: 1.4,
                                            color: plan.recommended ? 'rgba(255,255,255,0.95)' : COLORS.textLight,
                                            '&::before': {
                                                content: '"✓"',
                                                color: plan.recommended ? '#FFFFFF' : COLORS.secondary,
                                                fontWeight: 700,
                                                fontSize: 16,
                                                flexShrink: 0,
                                                mt: '-2px',
                                            },
                                        }}
                                    >
                                        {feature}
                                    </Box>
                                ))}
                            </Box>

                            <Link
                                href={plan.paymentLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                underline="none"
                                sx={{
                                    width: '100%',
                                    height: 48,
                                    mt: 3,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: plan.recommended ? '#FFFFFF' : COLORS.primary,
                                    // ИСПРАВЛЕНО: добавлен !important для принудительного белого цвета
                                    color: plan.recommended ? `${COLORS.primary} !important` : '#FFFFFF !important',
                                    border: plan.recommended ? 'none' : `1px solid ${COLORS.primary}`,
                                    fontSize: 13,
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    borderRadius: 1,
                                    transition: 'all .2s ease',
                                    // ИСПРАВЛЕНО: добавлены стили для всех состояний ссылки
                                    '&:hover': {
                                        backgroundColor: plan.recommended ? '#F5F5F5' : COLORS.primaryDark,
                                        color: plan.recommended ? `${COLORS.primary} !important` : '#FFFFFF !important',
                                        transform: 'translateY(-2px)',
                                        boxShadow: plan.recommended
                                            ? '0 4px 12px rgba(0,0,0,0.08)'
                                            : '0 8px 20px rgba(212, 132, 90, 0.25)',
                                    },
                                    '&:visited': {
                                        color: plan.recommended ? `${COLORS.primary} !important` : '#FFFFFF !important',
                                    },
                                    '&:active': {
                                        color: plan.recommended ? `${COLORS.primary} !important` : '#FFFFFF !important',
                                    },
                                }}
                            >
                                {plan.buttonText}
                            </Link>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}