import React, { useState, useEffect } from 'react';
import {
    Box,
    Paper,
    Typography,
    TextField,
    RadioGroup,
    FormControlLabel,
    Radio,
    Grid,
    Avatar,
    alpha,
    MenuItem,
} from '@mui/material';

const ContactInfo = ({
                         formData,
                         handleInputChange,
                         colors,
                         textFieldStyles,
                         setFormData
                     }) => {
    const [emailError, setEmailError] = useState('');
    const [emailConfirmError, setEmailConfirmError] = useState('');

    // Валидация email
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) return 'Email обязателен';
        if (!re.test(email)) return 'Введите корректный email';
        return '';
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'email') {
            setEmailError(validateEmail(value));
        }

        if (name === 'emailConfirm') {
            setEmailConfirmError(value !== formData.email ? 'Email не совпадает' : '');
        }

        if (name === 'messenger') {
            // При смене мессенджера сбрасываем поле аккаунта
            setFormData(prev => ({ ...prev, messengerAccount: '' }));
        }

        handleInputChange(e);
    };

    useEffect(() => {
        if (formData.emailConfirm && formData.emailConfirm !== formData.email) {
            setEmailConfirmError('Email не совпадает');
        } else {
            setEmailConfirmError('');
        }
    }, [formData.email, formData.emailConfirm]);

    const showMessengerAccount = Boolean(formData.messenger && formData.messenger.trim() !== '');
    const isTelegram = formData.messenger === 'Telegram';

    // Предопределённые варианты мессенджеров
    const messengerOptions = [
        { value: 'WhatsApp', label: 'WhatsApp' },
        { value: 'Telegram', label: 'Telegram' },
        { value: 'Max', label: 'Max' },
        { value: 'VK', label: 'VK' },
        { value: 'Imo', label: 'Imo' },
        { value: 'Phone', label: 'Сотовый (звонок/смс)' },
    ];

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

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar sx={{
                    bgcolor: colors.accent.primary,
                    width: 40,
                    height: 40,
                    color: '#FFFFFF',
                    mr: 2,
                    fontSize: '1.2rem'
                }}>
                    1
                </Avatar>
                <Typography variant="h5" sx={{ color: colors.text.primary }}>
                    Контактные данные
                </Typography>
            </Box>

            <Grid container spacing={3}>
                {/* Имя */}
                <Grid item xs={12} md={4}>
                    <TextField
                        fullWidth
                        label="Ваше имя *"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Имя"
                        variant="outlined"
                        required
                        sx={textFieldStyles}
                    />
                </Grid>

                {/* Email */}
                <Grid item xs={12} md={4}>
                    <TextField
                        fullWidth
                        label="Email *"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        variant="outlined"
                        required
                        error={!!emailError}
                        helperText={emailError}
                        sx={textFieldStyles}
                    />
                </Grid>

                {/* Подтверждение Email */}
                <Grid item xs={12} md={4}>
                    <TextField
                        fullWidth
                        label="Подтвердите Email *"
                        name="emailConfirm"
                        type="email"
                        value={formData.emailConfirm}
                        onChange={handleChange}
                        placeholder="повторите email"
                        variant="outlined"
                        required
                        error={!!emailConfirmError}
                        helperText={emailConfirmError}
                        sx={textFieldStyles}
                    />
                </Grid>

                {/* Мессенджер (выпадающий список) */}
                <Grid item xs={12} md={showMessengerAccount ? 4 : 6}>
                    <TextField
                        select
                        fullWidth
                        label="Удобный мессенджер *"
                        name="messenger"
                        value={formData.messenger}
                        onChange={handleChange}
                        required
                        sx={textFieldStyles}
                    >
                        {messengerOptions.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>

                {/* Поле аккаунта (условное) */}
                {showMessengerAccount && (
                    <Grid item xs={12} md={4}>
                        <TextField
                            fullWidth
                            label={isTelegram ? 'Ваш аккаунт Telegram *' : 'Ваш номер телефона *'}
                            name="messengerAccount"
                            value={formData.messengerAccount || ''}
                            onChange={handleChange}
                            placeholder={isTelegram ? '@username' : '+7 999 123-45-67'}
                            variant="outlined"
                            required
                            sx={textFieldStyles}
                        />
                    </Grid>
                )}
            </Grid>

            {/* Время созвона */}
            <Box sx={{ mt: 3 }}>
                <Typography sx={{ color: colors.text.primary, mb: 1 }}>
                    В какое время вам удобно провести созвон? Время МСК
                </Typography>
                <RadioGroup
                    row
                    name="contactTime_1"
                    value={formData.contactTime_1}
                    onChange={handleChange}
                    sx={{ flexWrap: 'wrap', gap: 2 }}
                >
                    {[
                        { value: 'morning', label: '🌅 Утро (9:00–12:00)' },
                        { value: 'day', label: '☀️ День (12:00–18:00)' },
                        { value: 'evening', label: '🌙 Вечер (18:00–22:00)' }
                    ].map(option => (
                        <FormControlLabel
                            key={option.value}
                            value={option.value}
                            control={<Radio sx={{
                                color: colors.accent.secondary,
                                '&.Mui-checked': { color: colors.accent.primary }
                            }} />}
                            label={option.label}
                            sx={{
                                backgroundColor: alpha(colors.accent.light, 0.3),
                                borderRadius: 4,
                                px: 2,
                                py: 0.5,
                                m: 0,
                                border: '1px solid',
                                borderColor: colors.border,
                                '& .MuiFormControlLabel-label': { color: colors.text.primary }
                            }}
                        />
                    ))}
                </RadioGroup>
            </Box>
        </Paper>
    );
};

export default ContactInfo;