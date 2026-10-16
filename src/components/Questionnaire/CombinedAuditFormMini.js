import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Paper,
    FormControlLabel,
    Checkbox,
    Button,
    Link,
    Alert,
    Snackbar,
    Avatar,
    alpha
} from '@mui/material';
import { CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PsychologyIcon from '@mui/icons-material/Psychology';

import ContactInfo from "./ContactInfo";
import ChildInfo from "./ChildInfo";
import WhatNext from "./WhatNext";
import CaregiversInfo from "./CaregiversInfo";
import ReactionToNo from "./ReactionToNo";
import LastWordDecision from "./LastWordDecision";
import PreviousExperienceText from "./PreviousExperienceText";
import ParentalFears from "./ParentalFears";
import CharacterTraits from "./CharacterTraits";
import BudgetSelection from "./BudgetSelection";
import ReadinessConfirmation from "./ReadinessConfirmation";
import DailyConnection from "./DailyConnection";
import InternalStateChange from "./InternalStateChange";
import ExpectedChanges from "./ExpectedChanges";
import FinalReview from "./FinalReview";
import RegionRestrictionBanner from "./RegionRestrictionBanner";

export default function CombinedAuditForm() {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [consentChecked, setConsentChecked] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [generatedPassword, setGeneratedPassword] = useState(null);
    const [usersEmail, setUsersEmail] = useState(null);
    const [showCredentials, setShowCredentials] = useState(false);
    const [isReactionToNoValid, setIsReactionToNoValid] = useState(true);
    const [isPrevExpTextValid, setIsPrevExpTextValid] = useState(true);
    const [isParentalFearsOtherValid, setIsParentalFearsOtherValid] = useState(true);
    const [isCaregiversOtherValid, setIsCaregiversOtherValid] = useState(true);
    const [isCharacterTraitsOtherValid, setIsCharacterTraitsOtherValid] = useState(true);
    const [isExpectedChangesValid, setIsExpectedChangesValid] = useState(true);
    const [isInternalStateChangeValid, setIsInternalStateChangeValid] = useState(true);
    const [isFinalNotesValid, setIsFinalNotesValid] = useState(true);
    // Цветовая схема
    const colors = {
        background: '#FCF9F3',
        paper: '#FFFFFF',
        text: {
            primary: '#3E2F28',
            secondary: '#5A4A3E',
            light: '#A67C52'
        },
        accent: {
            primary: '#D95D2B',
            secondary: '#A67C52',
            light: alpha('#D95D2B', 0.1)
        },
        border: alpha('#A67C52', 0.2)
    };

    // Состояние формы
    const [formData, setFormData] = useState({
        consent: false,
        name: '',
        email: '',
        emailConfirm: '',
        messenger: '',
        messengerAccount: '',
        contactTime_1: 'day',
        children_2: [],
        caregivers_3_1: [],              // массив выбранных опций
        caregiversOther_3_2: '',
        reactionToNo_4: '',
        lastWord_5: '',
        previousExperienceText_6: "",
        parentalFears_7: [],          // массив выбранных страхов
        parentalFearsOther_7: '',
        characterTraits_8: [],
        characterTraitsOther_8: '',// текст для "Другое"
        budget_9: '',
        readiness_10: '',
        dailyConnection_11: '',
        expectedChanges_12: '',
        internalStateChange_13: '',
    });


    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox' && name === 'consent') {
            setConsentChecked(checked);
            setFormData(prev => ({ ...prev, consent: checked }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleCheckboxGroupChange = (fieldName, value) => {
        setFormData(prev => ({
            ...prev,
            [fieldName]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // --- 1. Проверки (согласие, обязательные поля, email) ---
        if (!consentChecked) {
            alert('Пожалуйста, дайте согласие на обработку персональных данных');
            return;
        }

        const requiredFields = ['name', 'email', 'emailConfirm', 'messenger'];
        for (let field of requiredFields) {
            if (!formData[field]) {
                alert(`Поле "${field}" обязательно для заполнения`);
                return;
            }
        }

        if (formData.messenger && !formData.messengerAccount) {
            alert('Укажите ваш аккаунт / номер в мессенджере');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Введите корректный email');
            return;
        }
        if (formData.email !== formData.emailConfirm) {
            alert('Email и подтверждение не совпадают');
            return;
        }
        if (!isCaregiversOtherValid) {
            alert('Пожалуйста, исправьте ошибки в поле "Другое" раздела 3 о воспитателях');
            return;
        }
        if (!isReactionToNoValid) {
            alert('Пожалуйста, исправьте ошибки в поле "Реакция на отказ"');
            return;
        }
        if (!isPrevExpTextValid) {
            alert('Пожалуйста, исправьте ошибки в поле "Предыдущий опыт"');
            return;
        }
        if (!isParentalFearsOtherValid) {
            alert('Пожалуйста, исправьте ошибки в поле "Другое" раздела 7 о страхах');
            return;
        }
        if (!isCharacterTraitsOtherValid) {
            alert('Пожалуйста, исправьте ошибки в поле "Другое" раздела 8  о чертах характера');
            return;
        }
        if (!isExpectedChangesValid) {
            alert('Пожалуйста, исправьте ошибки в поле "Ожидаемые изменения" раздела 12');
            return;
        }
        if (!isInternalStateChangeValid) {
            alert('Пожалуйста, исправьте ошибки в поле "Ваше внутреннее состояние" раздела 13');
            return;
        }
        if (!isFinalNotesValid) {
            alert('Пожалуйста, исправьте ошибки в поле "Финальная проверка"');
            return;
        }
        setIsSubmitting(true);

        try {
            // --- 2. Регистрация / вход и получение токена ---
            const authResponse = await fetch('https://mrk.digital/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData.email,
                    name: formData.name
                })
            });

            if (!authResponse.ok) {
                const errorData = await authResponse.json();
                throw new Error(errorData.message || 'Ошибка авторизации');
            }

            const authData = await authResponse.json();
            const token = authData.token;
            // const token = "token";

            // Если бэкенд вернул сгенерированный пароль (новый пользователь), сохраняем
            if (authData.generatedPassword) {
                setGeneratedPassword(authData.generatedPassword);
                setUsersEmail(formData.email);
                setShowCredentials(true);
            } else {
                setGeneratedPassword(null);
                setShowCredentials(false);
            }

            // --- 3. Отправка анкеты с токеном ---
            const formResponse = await fetch('https://mrk.digital/api/form/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    // все данные анкеты, кроме email и name (они уже в аккаунте)
                    messenger: formData.messenger,
                    messengerAccount: formData.messengerAccount,
                    contactTime_1: formData.contactTime_1,
                    children_2: formData.children_2,
                    caregivers_3_1: formData.caregivers_3_1,
                    caregiversOther_3_2: formData.caregiversOther_3_2,
                    reactionToNo_4: formData.reactionToNo_4,
                    lastWord_5: formData.lastWord_5,
                    previousExperienceText_6: formData.previousExperienceText_6,
                    parentalFears_7: formData.parentalFears_7,          // массив выбранных страхов
                    parentalFearsOther_7: formData.parentalFearsOther_7,
                    characterTraits_8: formData.characterTraits_8,
                    characterTraitsOther_8: formData.characterTraitsOther_8,// текст для "Другое"
                    budget_9: formData.budget_9,
                    readiness_10: formData.readiness_10,
                    dailyConnection_11: formData.dailyConnection_11,
                    expectedChanges_12: formData.expectedChanges_12,
                    internalStateChange_13: formData.internalStateChange_13,
                    finalNotes_14: formData.finalNotes_14,
                })
            });

            if (!formResponse.ok) {
                const errorData = await formResponse.json();
                throw new Error(errorData.message || 'Ошибка отправки анкеты');
            }

            const result = await formResponse.json();
            console.log('Анкета отправлена:', result);

            // --- 4. Успех: показываем уведомление ---
            setOpenSnackbar(true);
            // Если пароль не генерировался, просто закрываем форму или оставляем как есть
            resetForm(); // по желанию

        } catch (error) {
            console.error('Ошибка:', error);
            alert(error.message || 'Произошла ошибка при отправке');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Функция сброса формы
    const resetForm = () => {
        setFormData({
            consent: false,
            name: '',
            email: '',
            emailConfirm: '',
            messenger: '',
            messengerAccount: '',
            contactTime_1: 'day',
            children_2: [],
            caregivers_3_1: [],
            caregiversOther_3_2: '',
            reactionToNo_4: '',
            lastWord_5: '',
            previousExperienceText_6: '',
            parentalFears_7: [],
            parentalFearsOther_7: '',
            characterTraits_8: [],
            characterTraitsOther_8: '',
            budget_9: '',
            readiness_10: '',
            dailyConnection_11: '',
            expectedChanges_12: '',
            internalStateChange_13: '',
            finalNotes_14: '',
        });

        setIsCharacterTraitsOtherValid(true);
        setConsentChecked(false);
        setIsReactionToNoValid(true);
        setIsCaregiversOtherValid(true);
        setIsPrevExpTextValid(true);
        setIsParentalFearsOtherValid(true);
        setIsExpectedChangesValid(true);
        setIsInternalStateChangeValid(true);
        setIsFinalNotesValid(true);
    };

    // Стили для текстовых полей
    const textFieldStyles = {
        '& .MuiOutlinedInput-root': {
            backgroundColor: '#FFFFFF',
            color: colors.text.primary,
            '& fieldset': { borderColor: colors.border },
            '&:hover fieldset': { borderColor: colors.accent.primary },
            '&.Mui-focused fieldset': { borderColor: colors.accent.primary }
        },
        '& .MuiInputLabel-root': { color: colors.text.light },
        '& .MuiInputLabel-root.Mui-focused': { color: colors.accent.primary }
    };

    return (
        <Box sx={{
            backgroundColor: colors.background,
            minHeight: '100vh',
            py: { xs: 4, md: 6 },
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Фоновый декор */}
            <Box sx={{
                position: 'absolute',
                bottom: -100,
                left: -100,
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(217,93,43,0.03) 0%, transparent 70%)',
                zIndex: 0
            }} />
            <Box sx={{
                position: 'absolute',
                top: -50,
                right: -50,
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(166,124,82,0.03) 0%, transparent 70%)',
                zIndex: 0
            }} />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Заголовок */}
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
                        right: 0,
                        height: '6px',
                        background: `linear-gradient(90deg, ${colors.accent.primary}, ${alpha(colors.accent.primary, 0.3)})`
                    }} />

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                        <Avatar sx={{
                            bgcolor: colors.accent.primary,
                            width: 60,
                            height: 60,
                            color: '#FFFFFF'
                        }}>
                            <PsychologyIcon />
                        </Avatar>
                        <Box>
                            <Typography variant="h3" sx={{
                                color: colors.text.primary,
                                fontWeight: 600,
                                fontSize: { xs: '1.8rem', md: '2.2rem' }
                            }}>
                                Анкета стратегического аудита
                            </Typography>
                            <Typography variant="body1" sx={{
                                color: colors.text.secondary,
                                mt: 2,
                                pt: 1,
                                borderTop: `1px dashed ${colors.border}`,
                                fontStyle: 'normal',
                                fontSize: '1rem',
                                lineHeight: 1.5
                            }}>
                                Эта анкета поможет мне оценить масштаб вашей ситуации и лучше подготовиться к разговору. Наша цель — не искать виноватых, а выявить системный сбой и найти алгоритм его исправления    </Typography>
                        </Box>
                    </Box>
                </Paper>
                <RegionRestrictionBanner colors={colors} />

                <form onSubmit={handleSubmit}>
                    {/* Согласие на обработку данных */}
                    <Paper elevation={0} sx={{
                        backgroundColor: colors.paper,
                        borderRadius: 4,
                        p: 3,
                        mb: 4,
                        border: '1px solid',
                        borderColor: colors.accent.secondary,
                        position: 'relative'
                    }}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={consentChecked}
                                    onChange={handleInputChange}
                                    name="consent"
                                    sx={{
                                        color: colors.accent.secondary,
                                        '&.Mui-checked': { color: colors.accent.primary }
                                    }}
                                />
                            }
                            label={
                                <Typography sx={{ color: colors.text.primary }}>
                                    Я даю согласие на обработку персональных данных в соответствии с{' '}
                                    <Link
                                        href="/privacy"
                                        sx={{
                                            color: '#A67C52 !important',
                                            textDecoration: 'underline',
                                            '&:hover': {
                                                color: 'rgba(166,124,82,0.45) !important',
                                            },
                                        }}
                                    >
                                        Политикой конфиденциальности
                                    </Link>
                                </Typography>
                            }
                        />
                    </Paper>

                    {/* БЛОК 1: Контактные данные */}
                    <ContactInfo
                        formData={formData}
                        handleInputChange={handleInputChange}
                        colors={colors}
                        textFieldStyles={textFieldStyles}
                        setFormData={setFormData}
                    />

                    {/* БЛОК 2: О РЕБЁНКЕ */}
                    <ChildInfo
                        formData={formData}
                        setFormData={setFormData}  // ← теперь передаём setFormData
                        colors={colors}
                        textFieldStyles={textFieldStyles}
                    />
                    {/* БЛОК 3 */}
                    <CaregiversInfo
                        formData={formData}
                        handleCheckboxGroupChange={handleCheckboxGroupChange}
                        handleInputChange={handleInputChange}
                        colors={colors}
                        textFieldStyles={textFieldStyles}
                        onValidationChange={setIsCaregiversOtherValid}
                    />
                    {/* БЛОК 4 */}
                    <ReactionToNo
                        formData={formData}
                        handleInputChange={handleInputChange}
                        colors={colors}
                        textFieldStyles={textFieldStyles}
                        onValidationChange={setIsReactionToNoValid}
                    />
                    {/* БЛОК 5 */}а
                    <LastWordDecision
                        formData={formData}
                        handleInputChange={handleInputChange}
                        colors={colors}
                    />
                    {/* БЛОК 6 */}
                    <PreviousExperienceText
                        formData={formData}
                        handleInputChange={handleInputChange}
                        colors={colors}
                        textFieldStyles={textFieldStyles}
                        onValidationChange={setIsPrevExpTextValid}
                    />

                    {/* БЛОК 7: страхи относительно будущего */}
                    <ParentalFears
                        formData={formData}
                        handleInputChange={handleInputChange}
                        handleCheckboxGroupChange={handleCheckboxGroupChange}
                        colors={colors}
                        textFieldStyles={textFieldStyles}
                        onValidationChange={setIsParentalFearsOtherValid}
                    />
                    {/* БЛОК 8 */}
                    <CharacterTraits
                        formData={formData}
                        handleInputChange={handleInputChange}
                        handleCheckboxGroupChange={handleCheckboxGroupChange}
                        colors={colors}
                        textFieldStyles={textFieldStyles}
                        onValidationChange={setIsCharacterTraitsOtherValid}
                    />
                    {/* БЛОК 9 */}
                    <BudgetSelection
                        formData={formData}
                        handleInputChange={handleInputChange}
                        colors={colors}
                    />
                    {/* БЛОК 10 */}
                    <ReadinessConfirmation
                        formData={formData}
                        handleInputChange={handleInputChange}
                        colors={colors}
                    />
                    {/* БЛОК 11 */}
                    <DailyConnection
                        formData={formData}
                        handleInputChange={handleInputChange}
                        colors={colors}
                    />
                    <ExpectedChanges
                        formData={formData}
                        handleInputChange={handleInputChange}
                        colors={colors}
                        textFieldStyles={textFieldStyles}
                        onValidationChange={setIsExpectedChangesValid}
                    />

                    <InternalStateChange
                        formData={formData}
                        handleInputChange={handleInputChange}
                        colors={colors}
                        textFieldStyles={textFieldStyles}
                        onValidationChange={setIsInternalStateChangeValid}
                    />
                    <FinalReview
                        formData={formData}
                        handleInputChange={handleInputChange}
                        colors={colors}
                        textFieldStyles={textFieldStyles}
                        onValidationChange={setIsFinalNotesValid}
                    />
                    {/* Кнопка отправки */}
                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        disabled={
                            !consentChecked ||
                            isSubmitting ||
                            !isCaregiversOtherValid ||
                            !isParentalFearsOtherValid ||
                            !isCharacterTraitsOtherValid ||
                            !isExpectedChangesValid ||
                            !isInternalStateChangeValid ||
                            !isFinalNotesValid
                        }
                        sx={{
                            backgroundColor: colors.accent.primary,
                            color: '#FFFFFF',
                            fontWeight: 700,
                            fontSize: '1.2rem',
                            py: 2,
                            borderRadius: 4,
                            '&:hover': {
                                backgroundColor: alpha(colors.accent.primary, 0.8)
                            },
                            '&.Mui-disabled': {
                                backgroundColor: alpha(colors.accent.primary, 0.3),
                                color: '#FFFFFF'
                            },
                            mb: 3
                        }}
                    >
                        {isSubmitting ? (
                            <>
                                <CircularProgress size={24} color="inherit" sx={{ mr: 1 }} />
                                Отправка...
                            </>
                        ) : (
                            <>
                                Отправить анкету
                                <SendIcon sx={{ ml: 1 }} />
                            </>
                        )}
                    </Button>
                </form>
                {/* После кнопки отправки */}
                {showCredentials && generatedPassword && (
                    <Alert
                        severity="info"
                        sx={{
                            mt: 2,
                            backgroundColor: alpha(colors.accent.primary, 0.1),
                            border: `1px solid ${colors.accent.primary}`,
                            color: colors.text.primary
                        }}
                        onClose={() => setShowCredentials(false)}
                    >
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                            Ваш аккаунт создан!
                        </Typography>
                        <Typography variant="body2">
                            Логин (email): <strong>{usersEmail}</strong><br/>
                            Пароль: <strong>{generatedPassword}</strong>
                        </Typography>
                        <Typography variant="caption" sx={{ display: 'block', mt: 1 }}>
                            Сохраните эти данные для входа в личный кабинет.
                        </Typography>
                    </Alert>
                )}
                <WhatNext colors={colors} />

                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={6000}
                    onClose={() => setOpenSnackbar(false)}
                >
                    <Alert severity="success" sx={{
                        width: '100%',
                        backgroundColor: colors.paper,
                        color: colors.text.primary,
                        border: `1px solid ${colors.accent.primary}`
                    }}>
                        Анкета отправлена! Спасибо за доверие.
                    </Alert>
                </Snackbar>
            </Container>
        </Box>
    );
}