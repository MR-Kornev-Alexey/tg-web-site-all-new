import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Paper,
    Avatar,
    FormHelperText,
} from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

// Та же функция проверки небезопасного содержимого
const hasUnsafeContent = (text) => {
    if (!text) return false;
    const unsafePatterns = [
        /<script\b/i,
        /<\/?[a-z][\s\S]*>/i,
        /javascript:/i,
        /on\w+\s*=/i,
        /&#/i,
        /\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|ALTER)\b/i,
    ];
    return unsafePatterns.some(pattern => pattern.test(text));
};

export default function PreviousExperienceText({
                                                   formData,
                                                   handleInputChange,
                                                   colors,
                                                   textFieldStyles,
                                                   onValidationChange,
                                               }) {
    const [error, setError] = useState('');
    const [charCount, setCharCount] = useState(
        formData.previousExperienceText_6?.length || 0
    );

    const handleChange = (e) => {
        const { value } = e.target;
        setCharCount(value.length);

        if (hasUnsafeContent(value)) {
            setError('Текст содержит недопустимые символы или код. Используйте только обычный текст.');
            onValidationChange?.(false);
        } else {
            setError('');
            onValidationChange?.(true);
        }

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
                    6
                </Avatar>
                <Typography variant="h5" sx={{ color: colors.text.primary }}>
                    6. К кому вы уже обращались? Что, на ваш взгляд, не сработало в том подходе?
                </Typography>
            </Box>

            <Typography variant="body2" sx={{ color: colors.text.light, mb: 3 }}>
                <WaterDropIcon sx={{ fontSize: 16, mr: 0.5, verticalAlign: 'middle' }} />
                Что стало последней каплей, после которой вы решили обратиться за системной помощью?
            </Typography>

            <TextField
                fullWidth
                multiline
                rows={5}
                name="previousExperienceText_6"
                value={formData.previousExperienceText_6 || ''}
                onChange={handleChange}
                placeholder="Например: обращались к неврологу, нейропсихологу, но эффект был кратковременным..."
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