import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Paper,
    Avatar,
    FormHelperText,
} from '@mui/material';
import BatteryAlertIcon from '@mui/icons-material/BatteryAlert';



// Функция проверки небезопасного содержимого
const hasUnsafeContent = (text) => {
    if (!text) return false;

    // Паттерны опасного содержимого
    const unsafePatterns = [
        /<script\b/i,                // <script> теги
        /<\/?[a-z][\s\S]*>/i,        // любые HTML-теги
        /javascript:/i,              // javascript: протокол
        /on\w+\s*=/i,                // onerror, onclick и т.д.
        /&#/i,                       // HTML entities
        /\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|ALTER)\b/i, // SQL инъекции
    ];

    return unsafePatterns.some(pattern => pattern.test(text));
};

export default function ReactionToNo({
                                         formData,
                                         handleInputChange,
                                         colors,
                                         textFieldStyles,
                                         onValidationChange, // callback для передачи статуса валидности в родительский компонент
                                     }) {
    const [error, setError] = useState('');
    const [charCount, setCharCount] = useState(
        formData.reactionToNo_4?.length || 0
    );

    const handleChange = (e) => {
        const { value } = e.target;
        setCharCount(value.length);

        // Проверка безопасности
        if (hasUnsafeContent(value)) {
            setError('Текст содержит недопустимые символы или код. Пожалуйста, используйте только обычный текст.');
            onValidationChange?.(false);
        } else {
            setError('');
            onValidationChange?.(true);
        }

        // Передаём изменение родителю
        handleInputChange(e);
    };

    return (
        <Paper
            elevation={0}
            sx={{
                backgroundColor: colors.paper,
                borderRadius: 4,
                p: { xs: 3, md: 4 },
                mb: 4,
                border: '1px solid',
                borderColor: colors.border,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '100%',
                    background: `linear-gradient(180deg, ${colors.accent.primary}, ${colors.accent.secondary})`,
                }}
            />

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar
                    sx={{
                        bgcolor: colors.accent.primary,
                        width: 40,
                        height: 40,
                        color: '#FFFFFF',
                        mr: 2,
                        fontSize: '1.2rem',
                    }}
                >
                    4
                </Avatar>
                <Typography variant="h5" sx={{ color: colors.text.primary }}>
                    Что происходит, когда ребёнок слышит от вас категоричное «Нет»?
                </Typography>
            </Box>

            <Typography variant="body2" sx={{ color: colors.text.light, mb: 3 }}>
                <BatteryAlertIcon sx={{ fontSize: 16, mr: 0.5, verticalAlign: 'middle' }} />
                Опишите ситуацию, которая истощает вас больше всего.
            </Typography>

            <TextField
                fullWidth
                multiline
                rows={5}
                name="reactionToNo_4"
                value={formData.reactionToNo_4 || ''}
                onChange={handleChange}
                placeholder="Опишите типичную ситуацию и ваши чувства..."
                variant="outlined"
                inputProps={{ maxLength: 2000 }}
                error={!!error}
                sx={textFieldStyles}
            />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                <FormHelperText error={!!error}>
                    {error || ' '}
                </FormHelperText>
                <FormHelperText sx={{ color: charCount >= 2000 ? 'error.main' : colors.text.light }}>
                    {charCount}/2000
                </FormHelperText>
            </Box>

            {charCount > 0 && !error && (
                <Typography variant="caption" sx={{ color: 'success.main', display: 'block', mt: 1 }}>
                    ✓ Текст прошёл проверку безопасности
                </Typography>
            )}
        </Paper>
    );
}