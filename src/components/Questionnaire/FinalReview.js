import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Paper,
    Avatar,
    FormHelperText,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Проверка на небезопасное содержимое
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
    return unsafePatterns.some((pattern) => pattern.test(text));
};

export default function FinalReview({
                                        formData,
                                        handleInputChange,
                                        colors,
                                        textFieldStyles,
                                        onValidationChange,
                                    }) {
    const [error, setError] = useState('');
    const [charCount, setCharCount] = useState(
        formData.finalNotes_14?.length || 0
    );

    const handleChange = (e) => {
        const { value } = e.target;
        setCharCount(value.length);

        if (hasUnsafeContent(value)) {
            setError('Текст содержит недопустимые символы или код. Используйте обычный текст.');
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
                    14
                </Avatar>
                <Typography variant="h5" sx={{ color: colors.text.primary }}>
                    Если есть что-то важное, что не вошло в анкету, напишите здесь
                </Typography>
            </Box>

            <TextField
                fullWidth
                multiline
                rows={4}
                name="finalNotes_14"
                value={formData.finalNotes_14 || ''}
                onChange={handleChange}
                placeholder="Здесь можно добавить то, что осталось за кадром..."
                variant="outlined"
                inputProps={{ maxLength: 2000 }}
                error={!!error}
                helperText={error}
                sx={textFieldStyles}
            />

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                <FormHelperText sx={{ color: charCount >= 2000 ? 'error.main' : colors.text.light }}>
                    {charCount}/2000
                </FormHelperText>
            </Box>
        </Paper>
    );
}