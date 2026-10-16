// components/WorkPriorities.jsx
import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Avatar,
    Paper,
    Checkbox,
    FormControlLabel,
    alpha
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const priorityOptions = [
    { value: 'fastResult', label: 'Быстрый результат', icon: '⚡' },
    { value: 'deepUnderstanding', label: 'Глубокое понимание причин', icon: '🔍' },
    { value: 'practicalTools', label: 'Практические инструменты "здесь и сейчас"', icon: '🛠️' },
    { value: 'longTermSystem', label: 'Долгосрочная система воспитания', icon: '🌳' }
];

export default function WorkPriorities({ formData, handleCheckboxGroupChange, colors }) {
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
                    8
                </Avatar>
                <Typography variant="h5" sx={{ color: colors.text.primary }}>
                    Что для вас важнее всего в работе со мной?
                </Typography>
            </Box>

            <Typography variant="body2" sx={{ color: colors.text.light, mb: 3, ml: 7 }}>
                <StarIcon sx={{ fontSize: 16, mr: 0.5, verticalAlign: 'middle' }} />
                Выберите то, что действительно имеет значение (можно несколько вариантов)
            </Typography>

            <Grid container spacing={1.5}>
                {priorityOptions.map((option) => (
                    <Grid item xs={12} sm={6} key={option.value}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.workPriorities?.includes(option.value) || false}
                                    onChange={(e) => {
                                        const current = formData.workPriorities || [];
                                        let newValue;
                                        if (e.target.checked) {
                                            newValue = [...current, option.value];
                                        } else {
                                            newValue = current.filter(v => v !== option.value);
                                        }
                                        handleCheckboxGroupChange('workPriorities', newValue);
                                    }}
                                    sx={{
                                        color: colors.accent.secondary,
                                        '&.Mui-checked': { color: colors.accent.primary }
                                    }}
                                />
                            }
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

            <Typography variant="caption" sx={{ color: colors.text.light, display: 'block', mt: 2, ml: 7 }}>
                🎯 Честный ответ помогает настроить работу под ваш темп и ожидания.
            </Typography>
        </Paper>
    );
}