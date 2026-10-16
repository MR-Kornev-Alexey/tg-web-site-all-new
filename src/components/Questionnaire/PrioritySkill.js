// components/PrioritySkill.jsx
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
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TargetIcon from '@mui/icons-material/TrackChanges';

const skillOptions = [
    {
        value: 'selfControl',
        label: 'Самоконтроль (ответственность за свои поступки без надзора)',
        icon: '🧠',
        description: 'Способность делать выбор и отвечать за последствия'
    },
    {
        value: 'stressResistance',
        label: 'Стрессоустойчивость (умение принимать отказ без истерик)',
        icon: '💪',
        description: 'Спокойно переживать фрустрацию и несогласие'
    },
    {
        value: 'diligence',
        label: 'Трудолюбие (способность доводить начатое до конца)',
        icon: '🏁',
        description: 'Удерживать фокус и завершать задачи'
    },
    {
        value: 'respect',
        label: 'Уважение к старшим (признание авторитета взрослого)',
        icon: '🙏',
        description: 'Понимание иерархии и следование правилам'
    },
    {
        value: 'emotionalIntelligence',
        label: 'Эмоциональный интеллект (понимание своих и чужих чувств)',
        icon: '💖',
        description: 'Распознавать эмоции и управлять ими'
    }
];

export default function PrioritySkill({ formData, handleInputChange, handleCheckboxGroupChange, colors, textFieldStyles }) {
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
                    7
                </Avatar>
                <Typography variant="h5" sx={{ color: colors.text.primary }}>
                    Какой главный навык вы хотите внедрить в характер ребёнка?
                </Typography>
            </Box>

            <Typography variant="body2" sx={{ color: colors.text.light, mb: 3, ml: 7 }}>
                <TargetIcon sx={{ fontSize: 16, mr: 0.5, verticalAlign: 'middle' }} />
                В ближайшие 3 месяца. Выберите 1–2 приоритетных направления
            </Typography>

            <Grid container spacing={1.5} sx={{ mb: 2 }}>
                {skillOptions.map((option) => (
                    <Grid item xs={12} md={6} key={option.value}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.prioritySkills?.includes(option.value) || false}
                                    onChange={(e) => {
                                        const current = formData.prioritySkills || [];
                                        let newValue;
                                        if (e.target.checked) {
                                            newValue = [...current, option.value];
                                        } else {
                                            newValue = current.filter(v => v !== option.value);
                                        }
                                        handleCheckboxGroupChange('prioritySkills', newValue);
                                    }}
                                    sx={{
                                        color: colors.accent.secondary,
                                        '&.Mui-checked': { color: colors.accent.primary }
                                    }}
                                />
                            }
                            label={
                                <Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                                        <Typography component="span" sx={{ fontSize: '1.2rem' }}>
                                            {option.icon}
                                        </Typography>
                                        <Typography sx={{ color: colors.text.primary, fontWeight: 500, fontSize: '0.95rem' }}>
                                            {option.label}
                                        </Typography>
                                    </Box>
                                    <Typography variant="caption" sx={{ color: colors.text.light, ml: 3.5, display: 'block' }}>
                                        {option.description}
                                    </Typography>
                                </Box>
                            }
                            sx={{
                                backgroundColor: alpha(colors.accent.light, 0.2),
                                borderRadius: 2,
                                px: 1.5,
                                py: 1,
                                m: 0,
                                width: '100%',
                                border: `1px solid ${alpha(colors.border, 0.5)}`,
                                alignItems: 'flex-start'
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
                                    checked={formData.prioritySkills?.includes('other') || false}
                                    onChange={(e) => {
                                        const current = formData.prioritySkills || [];
                                        let newValue;
                                        if (e.target.checked) {
                                            newValue = [...current, 'other'];
                                        } else {
                                            newValue = current.filter(v => v !== 'other');
                                        }
                                        handleCheckboxGroupChange('prioritySkills', newValue);
                                    }}
                                    sx={{
                                        color: colors.accent.secondary,
                                        '&.Mui-checked': { color: colors.accent.primary }
                                    }}
                                />
                            }
                            label={
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                    <EmojiEventsIcon sx={{ fontSize: 18 }} />
                                    <Typography>Другое:</Typography>
                                </Box>
                            }
                        />
                        <TextField
                            size="small"
                            placeholder="Опишите словами, какой навык хотите развить"
                            name="prioritySkillOther"
                            value={formData.prioritySkillOther || ''}
                            onChange={handleInputChange}
                            disabled={!formData.prioritySkills?.includes('other')}
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
                🎯 Чёткая цель на 3 месяца — это половина успеха. Остальное — правильная система и ваше спокойствие.
            </Typography>
        </Paper>
    );
}