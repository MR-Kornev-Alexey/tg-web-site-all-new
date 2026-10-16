// components/PreviousExperience.jsx
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
    TextField,
    alpha,
    Divider
} from '@mui/material';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';

export default function PreviousExperience({ formData, handleInputChange, colors, textFieldStyles }) {
    // Показываем поле для описания, только если хотя бы на один вопрос ответили "Да"
    const showResultsField = formData.prevSpecialist === 'yes' || formData.prevMethods === 'yes';

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
                    4
                </Avatar>
                <Typography variant="h5" sx={{ color: colors.text.primary }}>
                    Ваш предыдущий опыт
                </Typography>
            </Box>

            <Typography variant="body2" sx={{ color: colors.text.light, mb: 4, ml: 7 }}>
                <HistoryEduIcon sx={{ fontSize: 16, mr: 0.5, verticalAlign: 'middle' }} />
                Это поможет не повторять то, что уже не сработало
            </Typography>

            <Grid container spacing={4}>
                {/* Вопрос 1: Обращение к специалистам */}
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        p: 2,
                        borderRadius: 2,
                        backgroundColor: alpha(colors.accent.light, 0.15),
                        height: '100%'
                    }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <PsychologyAltIcon sx={{ color: colors.accent.primary, mr: 1, fontSize: 20 }} />
                            <Typography variant="subtitle1" sx={{ color: colors.text.primary, fontWeight: 500 }}>
                                Обращались ли вы к специалистам?
                            </Typography>
                        </Box>
                        <Typography variant="caption" sx={{ color: colors.text.light, display: 'block', mb: 2 }}>
                            (психолог, невролог, педагог, дефектолог)
                        </Typography>
                        <RadioGroup
                            row
                            name="prevSpecialist"
                            value={formData.prevSpecialist || ''}
                            onChange={handleInputChange}
                        >
                            <FormControlLabel
                                value="yes"
                                control={<Radio sx={{
                                    color: colors.accent.secondary,
                                    '&.Mui-checked': { color: colors.accent.primary }
                                }} />}
                                label="Да"
                                sx={{ mr: 3 }}
                            />
                            <FormControlLabel
                                value="no"
                                control={<Radio sx={{
                                    color: colors.accent.secondary,
                                    '&.Mui-checked': { color: colors.accent.primary }
                                }} />}
                                label="Нет"
                            />
                        </RadioGroup>
                    </Box>
                </Grid>

                {/* Вопрос 2: Применение методик */}
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        p: 2,
                        borderRadius: 2,
                        backgroundColor: alpha(colors.accent.light, 0.15),
                        height: '100%'
                    }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <HistoryEduIcon sx={{ color: colors.accent.primary, mr: 1, fontSize: 20 }} />
                            <Typography variant="subtitle1" sx={{ color: colors.text.primary, fontWeight: 500 }}>
                                Пробовали ли применять методики воспитания?
                            </Typography>
                        </Box>
                        <Typography variant="caption" sx={{ color: colors.text.light, display: 'block', mb: 2 }}>
                            (Монтессори, система, книги, курсы и т.д.)
                        </Typography>
                        <RadioGroup
                            row
                            name="prevMethods"
                            value={formData.prevMethods || ''}
                            onChange={handleInputChange}
                        >
                            <FormControlLabel
                                value="yes"
                                control={<Radio sx={{
                                    color: colors.accent.secondary,
                                    '&.Mui-checked': { color: colors.accent.primary }
                                }} />}
                                label="Да"
                                sx={{ mr: 3 }}
                            />
                            <FormControlLabel
                                value="no"
                                control={<Radio sx={{
                                    color: colors.accent.secondary,
                                    '&.Mui-checked': { color: colors.accent.primary }
                                }} />}
                                label="Нет"
                            />
                        </RadioGroup>
                    </Box>
                </Grid>

                {/* Дополнительное поле для описания (показывается при "Да" на любой вопрос) */}
                {showResultsField && (
                    <Grid item xs={12}>
                        <Divider sx={{ my: 1, borderColor: colors.border }} />
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="subtitle2" sx={{ color: colors.text.primary, mb: 1 }}>
                                📝 Расскажите подробнее:
                            </Typography>
                            <TextField
                                fullWidth
                                multiline
                                rows={3}
                                name="prevExperienceDetails"
                                value={formData.prevExperienceDetails || ''}
                                onChange={handleInputChange}
                                placeholder="К кому обращались? Какие методики пробовали? Что получилось? Почему не помогло? (любые детали, которые считаете важными)"
                                variant="outlined"
                                sx={textFieldStyles}
                            />
                            <Typography variant="caption" sx={{ color: colors.text.light, display: 'block', mt: 1 }}>
                                💡 Даже негативный опыт — это ценные данные. Чем подробнее, тем точнее будет разбор.
                            </Typography>
                        </Box>
                    </Grid>
                )}
            </Grid>

            <Typography variant="caption" sx={{ color: colors.text.light, display: 'block', mt: 3, ml: 7 }}>
                🧠 Важно не то, что вы пробовали, а почему это не сработало именно в вашей системе.
            </Typography>
        </Paper>
    );
}