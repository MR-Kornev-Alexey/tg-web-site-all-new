// components/DailyTimeBudget.jsx
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
    alpha
} from '@mui/material';
import ScheduleIcon from '@mui/icons-material/Schedule';

const timeOptions = [
    { value: '10-15', label: '10-15 минут', icon: '⏱️' },
    { value: '15-30', label: '15-30 минут', icon: '⏲️' },
    { value: '1-2', label: '1-2 часа', icon: '📚' },
    { value: 'more2', label: 'Больше 2 часов', icon: '🌙' }
];

export default function DailyTimeBudget({ formData, handleInputChange, colors }) {
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
                    9
                </Avatar>
                <Typography variant="h5" sx={{ color: colors.text.primary }}>
                    Сколько времени в день вы готовы уделять работе с ребёнком?
                </Typography>
            </Box>

            <Typography variant="body2" sx={{ color: colors.text.light, mb: 3, ml: 7 }}>
                <ScheduleIcon sx={{ fontSize: 16, mr: 0.5, verticalAlign: 'middle' }} />
                Реалистичная оценка поможет подобрать комфортный темп
            </Typography>

            <RadioGroup
                name="dailyTimeBudget"
                value={formData.dailyTimeBudget || ''}
                onChange={handleInputChange}
                sx={{ pl: { xs: 0, md: 2 } }}
            >
                <Grid container spacing={1.5}>
                    {timeOptions.map((option) => (
                        <Grid item xs={12} sm={6} key={option.value}>
                            <FormControlLabel
                                value={option.value}
                                control={<Radio sx={{
                                    color: colors.accent.secondary,
                                    '&.Mui-checked': { color: colors.accent.primary }
                                }} />}
                                label={
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Typography component="span" sx={{ fontSize: '1.2rem' }}>
                                            {option.icon}
                                        </Typography>
                                        <Typography sx={{ color: colors.text.primary }}>
                                            {option.label}
                                        </Typography>
                                    </Box>
                                }
                                sx={{
                                    backgroundColor: alpha(colors.accent.light, 0.2),
                                    borderRadius: 2,
                                    px: 1.5,
                                    py: 0.5,
                                    m: 0,
                                    width: '100%',
                                    border: `1px solid ${alpha(colors.border, 0.5)}`
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </RadioGroup>

            <Typography variant="caption" sx={{ color: colors.text.light, display: 'block', mt: 2, ml: 7 }}>
                ⏰ Даже 10-15 минут в день при правильной системе дают результат. Важна не длительность, а последовательность.
            </Typography>
        </Paper>
    );
}