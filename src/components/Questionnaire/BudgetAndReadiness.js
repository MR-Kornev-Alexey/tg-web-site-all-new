// components/BudgetAndReadiness.jsx
import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Avatar,
    Paper,
    Radio,
    RadioGroup,
    FormControlLabel,
    alpha,
    Divider
} from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const budgetOptions = [
    { value: 'up_15', label: 'до 15 000 ₽' },
    { value: '15_30', label: '15 000 ₽ – 30 000 ₽' },
    { value: '30_50', label: '30 000 ₽ – 50 000 ₽' },
    { value: '50_100', label: '50 000 ₽ – 100 000 ₽' },
    { value: 'over_100', label: 'Свыше 100 000 ₽' }
];

const readinessOptions = [
    { value: 'now', label: 'Готов(а) прямо сейчас, ситуация критическая', icon: '🚨', color: '#D95D2B' },
    { value: 'withinWeek', label: 'В течение недели, нужно подготовиться', icon: '📅', color: '#FF9800' },
    { value: 'nextMonth', label: 'В следующем месяце', icon: '📆', color: '#A67C52' },
    { value: 'looking', label: 'Присматриваюсь, собираю информацию', icon: '👀', color: '#5A4A3E' }
];

export default function BudgetAndReadiness({ formData, handleInputChange, colors }) {
    return (
        <Paper elevation={0} sx={{
            backgroundColor: colors.paper,
            borderRadius: 4,
            p: { xs: 3, md: 4 },
            mb: 4,
            border: '1px solid',
            borderColor: colors.border,
            position: 'relative',
            overflow: 'hidden'
        }}>
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '4px',
                height: '100%',
                background: `linear-gradient(180deg, ${colors.accent.primary}, ${colors.accent.secondary})`
            }} />

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{
                    bgcolor: colors.accent.primary,
                    width: 40,
                    height: 40,
                    color: '#FFFFFF',
                    mr: 2,
                    fontSize: '1.2rem'
                }}>
                    10
                </Avatar>
                <Typography variant="h5" sx={{ color: colors.text.primary }}>
                    Инвестиции и готовность
                </Typography>
            </Box>

            <Typography variant="body2" sx={{ color: colors.text.light, mb: 4, ml: 7 }}>
                <AttachMoneyIcon sx={{ fontSize: 16, mr: 0.5, verticalAlign: 'middle' }} />
                Честность здесь позволяет предложить наилучший формат
            </Typography>

            <Grid container spacing={4}>
                {/* Бюджет */}
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        p: 2,
                        borderRadius: 2,
                        backgroundColor: alpha(colors.accent.light, 0.15),
                        height: '100%'
                    }}>
                        <Typography variant="subtitle1" sx={{ color: colors.text.primary, fontWeight: 500, mb: 2 }}>
                            💰 Какой бюджет в месяц вы готовы инвестировать в создание фундамента личности вашего ребёнка?
                        </Typography>
                        <RadioGroup
                            name="budget"
                            value={formData.budget || ''}
                            onChange={handleInputChange}
                        >
                            {budgetOptions.map((option) => (
                                <FormControlLabel
                                    key={option.value}
                                    value={option.value}
                                    control={<Radio sx={{
                                        color: colors.accent.secondary,
                                        '&.Mui-checked': { color: colors.accent.primary }
                                    }} />}
                                    label={option.label}
                                    sx={{
                                        mb: 1,
                                        '& .MuiFormControlLabel-label': { color: colors.text.primary }
                                    }}
                                />
                            ))}
                        </RadioGroup>
                    </Box>
                </Grid>

                {/* Готовность */}
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        p: 2,
                        borderRadius: 2,
                        backgroundColor: alpha(colors.accent.light, 0.15),
                        height: '100%'
                    }}>
                        <Typography variant="subtitle1" sx={{ color: colors.text.primary, fontWeight: 500, mb: 2 }}>
                            🚀 Насколько оперативно вы готовы приступить к внедрению системы?
                        </Typography>
                        <RadioGroup
                            name="readiness"
                            value={formData.readiness || ''}
                            onChange={handleInputChange}
                        >
                            {readinessOptions.map((option) => (
                                <FormControlLabel
                                    key={option.value}
                                    value={option.value}
                                    control={<Radio sx={{
                                        color: colors.accent.secondary,
                                        '&.Mui-checked': { color: option.color || colors.accent.primary }
                                    }} />}
                                    label={
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Typography component="span" sx={{ fontSize: '1.1rem' }}>
                                                {option.icon}
                                            </Typography>
                                            <Typography sx={{ color: colors.text.primary }}>
                                                {option.label}
                                            </Typography>
                                        </Box>
                                    }
                                    sx={{
                                        mb: 1,
                                        '& .MuiFormControlLabel-label': { color: colors.text.primary }
                                    }}
                                />
                            ))}
                        </RadioGroup>
                    </Box>
                </Grid>
            </Grid>

            <Divider sx={{ my: 2, borderColor: colors.border }} />

            <Typography variant="caption" sx={{ color: colors.text.light, display: 'block', textAlign: 'center' }}>
                💎 Инвестиции в фундамент личности — это не расход, а вклад, который окупается всю жизнь.
            </Typography>
        </Paper>
    );
}