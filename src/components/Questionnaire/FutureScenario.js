// components/FutureScenario.jsx
import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Avatar,
    Paper,
    Checkbox,
    FormControlLabel,
    TextField,
    alpha
} from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import WarningIcon from '@mui/icons-material/Warning';

const scenarioOptions = [
    {
        value: 'consumer',
        label: 'Станет «потребителем», не способным ценить ресурсы семьи',
        icon: '🛍️'
    },
    {
        value: 'competition',
        label: 'Не выдержит конкуренции, не сможет управлять своей жизнью/бизнесом',
        icon: '🏆'
    },
    {
        value: 'dependency',
        label: 'Останется в эмоциональной зависимости от родителей (инфантилизм)',
        icon: '🪢'
    },
    {
        value: 'loseWill',
        label: 'Потеряет волю и внутренний стержень под влиянием окружения',
        icon: '🍃'
    }
];

export default function FutureScenario({ formData, handleInputChange, handleCheckboxGroupChange, colors, textFieldStyles }) {
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
                    6
                </Avatar>
                <Typography variant="h5" sx={{ color: colors.text.primary }}>
                    Какой сценарий будущего вашего ребёнка пугает вас больше всего?
                </Typography>
            </Box>

            <Typography variant="body2" sx={{ color: colors.text.light, mb: 3, ml: 7 }}>
                <VisibilityOffIcon sx={{ fontSize: 16, mr: 0.5, verticalAlign: 'middle' }} />
                Честный ответ на этот вопрос покажет, куда направлена ваша тревога
            </Typography>

            <Grid container spacing={1.5} sx={{ mb: 2 }}>
                {scenarioOptions.map((option) => (
                    <Grid item xs={12} md={6} key={option.value}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.futureScenarios?.includes(option.value) || false}
                                    onChange={(e) => {
                                        const current = formData.futureScenarios || [];
                                        let newValue;
                                        if (e.target.checked) {
                                            newValue = [...current, option.value];
                                        } else {
                                            newValue = current.filter(v => v !== option.value);
                                        }
                                        handleCheckboxGroupChange('futureScenarios', newValue);
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
                                    <Typography sx={{ color: colors.text.primary, fontSize: '0.95rem' }}>
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

                {/* Другое */}
                <Grid item xs={12}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: 2,
                        backgroundColor: alpha(colors.accent.light, 0.2),
                        borderRadius: 2,
                        px: 2,
                        py: 1,
                        border: `1px solid ${alpha(colors.border, 0.5)}`
                    }}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.futureScenarios?.includes('other') || false}
                                    onChange={(e) => {
                                        const current = formData.futureScenarios || [];
                                        let newValue;
                                        if (e.target.checked) {
                                            newValue = [...current, 'other'];
                                        } else {
                                            newValue = current.filter(v => v !== 'other');
                                        }
                                        handleCheckboxGroupChange('futureScenarios', newValue);
                                    }}
                                    sx={{
                                        color: colors.accent.secondary,
                                        '&.Mui-checked': { color: colors.accent.primary }
                                    }}
                                />
                            }
                            label={
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                    <WarningIcon sx={{ fontSize: 18 }} />
                                    <Typography>Другое:</Typography>
                                </Box>
                            }
                        />
                        <TextField
                            size="small"
                            placeholder="Опишите словами"
                            name="futureScenarioOther"
                            value={formData.futureScenarioOther || ''}
                            onChange={handleInputChange}
                            disabled={!formData.futureScenarios?.includes('other')}
                            sx={{
                                flex: 1,
                                minWidth: 200,
                                '& .MuiOutlinedInput-root': {
                                    backgroundColor: '#FFFFFF',
                                    '& fieldset': { borderColor: colors.border },
                                    '&:hover fieldset': { borderColor: colors.accent.primary },
                                    '&.Mui-focused fieldset': { borderColor: colors.accent.primary }
                                }
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>

            <Typography variant="caption" sx={{ color: colors.text.light, display: 'block', mt: 2, ml: 7 }}>
                🎯 То, чего вы боитесь — это и есть ваш истинный родительский приоритет.
                Именно здесь скрыта ваша глубинная мотивация.
            </Typography>
        </Paper>
    );
}