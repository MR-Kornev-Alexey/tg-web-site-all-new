// components/WhatDrainsEnergy.jsx
import React, { useState } from 'react';
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
import WhatshotIcon from '@mui/icons-material/Whatshot';

const energyOptions = [
    { value: 'whining', label: 'Постоянное нытьё, крики и «эмоциональный шантаж»' },
    { value: 'disobedience', label: 'Открытое неповиновение и игнорирование правил' },
    { value: 'aggression', label: 'Агрессия (в сторону взрослых, младших детей или себя)' },
    { value: 'withdrawal', label: 'Замкнутость, отсутствие интереса и инициативы («ничего не хочу»)' },
    { value: 'gadgetAddiction', label: 'Гаджетозависимость (виртуальный побег от реальности)' },
    { value: 'health', label: 'Проблемы со сном/едой/здоровьем' }
];

export default function WhatDrainsEnergy({ formData, handleInputChange, handleCheckboxGroupChange, colors, textFieldStyles }) {
    const [otherText, setOtherText] = useState('');

    const handleOtherChange = (e) => {
        const value = e.target.value;
        setOtherText(value);
        // Передаём в родительскую форму
        handleInputChange({
            target: {
                name: 'energyOther',
                value: value
            }
        });
    };

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
                    3
                </Avatar>
                <Typography variant="h5" sx={{ color: colors.text.primary }}>
                    Что прямо сейчас отнимает больше всего ваших сил?
                </Typography>
            </Box>

            <Typography variant="body2" sx={{ color: colors.text.light, mb: 3, ml: 7 }}>
                <WhatshotIcon sx={{ fontSize: 16, mr: 0.5, verticalAlign: 'middle' }} />
                Выберите 1–3 самых острых пункта
            </Typography>

            <Grid container spacing={1.5} sx={{ mb: 2 }}>
                {energyOptions.map((option) => (
                    <Grid item xs={12} md={6} key={option.value}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.energyOptions?.includes(option.value) || false}
                                    onChange={(e) => {
                                        const current = formData.energyOptions || [];
                                        let newValue;
                                        if (e.target.checked) {
                                            newValue = [...current, option.value];
                                        } else {
                                            newValue = current.filter(v => v !== option.value);
                                        }
                                        handleCheckboxGroupChange('energyOptions', newValue);
                                    }}
                                    sx={{
                                        color: colors.accent.secondary,
                                        '&.Mui-checked': { color: colors.accent.primary }
                                    }}
                                />
                            }
                            label={
                                <Typography sx={{ color: colors.text.primary, fontSize: '0.95rem' }}>
                                    {option.label}
                                </Typography>
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
                                    checked={formData.energyOptions?.includes('other') || false}
                                    onChange={(e) => {
                                        const current = formData.energyOptions || [];
                                        let newValue;
                                        if (e.target.checked) {
                                            newValue = [...current, 'other'];
                                        } else {
                                            newValue = current.filter(v => v !== 'other');
                                        }
                                        handleCheckboxGroupChange('energyOptions', newValue);
                                    }}
                                    sx={{
                                        color: colors.accent.secondary,
                                        '&.Mui-checked': { color: colors.accent.primary }
                                    }}
                                />
                            }
                            label="Другое:"
                        />
                        <TextField
                            size="small"
                            placeholder="Опишите словами"
                            name="energyOther"
                            value={formData.energyOther || ''}
                            onChange={handleOtherChange}
                            disabled={!formData.energyOptions?.includes('other')}
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

            <Typography variant="caption" sx={{ color: colors.text.light, display: 'block', mt: 1, ml: 7 }}>
                ⚡ Чем точнее вы определите источник усталости, тем быстрее найдём точку приложения силы
            </Typography>
        </Paper>
    );
}