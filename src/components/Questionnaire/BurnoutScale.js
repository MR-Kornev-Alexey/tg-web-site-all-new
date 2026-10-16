// components/BurnoutScale.jsx
import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Avatar,
    Paper,
    Slider,
    alpha,
    Tooltip
} from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';

const marks = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' },
    { value: 9, label: '9' },
    { value: 10, label: '10' }
];

const getBurnoutDescription = (value) => {
    if (value <= 2) return 'Всё под контролем, вы отлично справляетесь';
    if (value <= 4) return 'Есть небольшая усталость, но вы держите баланс';
    if (value <= 6) return 'Чувствуете напряжение, пора обратить внимание на себя';
    if (value <= 8) return 'Сильное истощение, нужна поддержка и передышка';
    return 'Критический уровень, вы на грани. Пора действовать прямо сейчас';
};

const getBurnoutColor = (value, colors) => {
    if (value <= 3) return '#4CAF50';
    if (value <= 6) return '#FFC107';
    if (value <= 8) return '#FF9800';
    return colors.accent.primary;
};

export default function BurnoutScale({ formData, handleSliderChange, colors, textFieldStyles }) {
    const value = formData.burnoutLevel || 5;

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
                    5
                </Avatar>
                <Typography variant="h5" sx={{ color: colors.text.primary }}>
                    Оцените ваш уровень родительского выгорания
                </Typography>
            </Box>

            <Typography variant="body2" sx={{ color: colors.text.light, mb: 4, ml: 7 }}>
                <WhatshotIcon sx={{ fontSize: 16, mr: 0.5, verticalAlign: 'middle' }} />
                Где 1 — «всё под контролем», 10 — «я на грани взрыва/апатии»
            </Typography>

            <Box sx={{ px: { xs: 1, md: 4 }, mb: 3 }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sx={{ textAlign: 'center' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                            <Tooltip title="Всё под контролем">
                                <SentimentSatisfiedIcon sx={{ color: '#4CAF50', fontSize: 28 }} />
                            </Tooltip>
                            <Typography variant="h3" sx={{
                                fontWeight: 'bold',
                                color: getBurnoutColor(value, colors),
                                textAlign: 'center'
                            }}>
                                {value}
                            </Typography>
                            <Tooltip title="На грани взрыва">
                                <SentimentVeryDissatisfiedIcon sx={{ color: colors.accent.primary, fontSize: 28 }} />
                            </Tooltip>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Slider
                            value={value}
                            onChange={(e, newValue) => handleSliderChange('burnoutLevel', newValue)}
                            min={1}
                            max={10}
                            step={1}
                            marks={marks}
                            valueLabelDisplay="auto"
                            sx={{
                                '& .MuiSlider-track': {
                                    background: `linear-gradient(90deg, #4CAF50, ${colors.accent.primary})`,
                                    border: 'none'
                                },
                                '& .MuiSlider-rail': {
                                    backgroundColor: alpha(colors.text.light, 0.2)
                                },
                                '& .MuiSlider-thumb': {
                                    backgroundColor: getBurnoutColor(value, colors),
                                    width: 24,
                                    height: 24,
                                    '&:hover': {
                                        boxShadow: `0 0 0 8px ${alpha(getBurnoutColor(value, colors), 0.2)}`
                                    }
                                },
                                '& .MuiSlider-mark': {
                                    backgroundColor: colors.text.light,
                                    height: 8,
                                    width: 2
                                },
                                '& .MuiSlider-markLabel': {
                                    color: colors.text.light,
                                    fontSize: '0.75rem'
                                }
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{
                            mt: 3,
                            p: 2,
                            borderRadius: 2,
                            backgroundColor: alpha(getBurnoutColor(value, colors), 0.1),
                            border: `1px solid ${alpha(getBurnoutColor(value, colors), 0.2)}`,
                            textAlign: 'center'
                        }}>
                            <Typography sx={{ color: getBurnoutColor(value, colors), fontWeight: 500 }}>
                                {getBurnoutDescription(value)}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Typography variant="caption" sx={{ color: colors.text.light, display: 'block', mt: 2, ml: 7 }}>
                🔥 Честность здесь — ключ к точной диагностике. Нет «плохих» или «хороших» цифр, есть точка, от которой строить маршрут.
            </Typography>
        </Paper>
    );
}