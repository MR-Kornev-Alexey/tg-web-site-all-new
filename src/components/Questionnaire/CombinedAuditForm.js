import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Paper,
    TextField,
    FormControlLabel,
    Radio,
    RadioGroup,
    Checkbox,
    FormGroup,
    Button,
    Link,
    Alert,
    Snackbar,
    Divider,
    Grid,
    Chip,
    Avatar,
    alpha
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LockIcon from '@mui/icons-material/Lock';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PsychologyIcon from '@mui/icons-material/Psychology';
import GroupsIcon from '@mui/icons-material/Groups';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

export default function CombinedAuditForm() {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [consentChecked, setConsentChecked] = useState(false);

    // Цветовая схема из ThreePowersSystem
    const colors = {
        background: '#FCF9F3', // Silk Parchment
        paper: '#FFFFFF',
        text: {
            primary: '#3E2F28', // Bitter Chocolate
            secondary: '#5A4A3E',
            light: '#A67C52' // Saddle Tan
        },
        accent: {
            primary: '#D95D2B', // Signature Orange
            secondary: '#A67C52',
            light: alpha('#D95D2B', 0.1)
        },
        border: alpha('#A67C52', 0.2)
    };

    // Состояние формы
    const [formData, setFormData] = useState({
        consent: false,
        name: '',
        messenger: '',
        phone:'',
        contactTime: 'day',
        childName: '',
        managementTeam: {
            nanny: false,
            grandparents: false,
            tutors: false,
            onlyParents: false,
            other: ''
        },
        forceDrain: {
            whining: false,
            disobedience: false,
            aggression: false,
            withdrawal: false,
            gadgets: false,
            health: false,
            other: ''
        },
        noSituation: '',
        lastWord: 'me',
        burnoutLevel: '5',
        consultedSpecialists: 'no',
        triedMethods: 'no',
        methodsDescription: '',
        previousExperience: '',
        fearFuture: 'consumer',
        fearOther: '',
        mainSkill: 'selfControl',
        skillOther: '',
        workPriority: {
            quickResult: false,
            deepUnderstanding: false,
            practicalTools: false,
            longTermSystem: false
        },
        dailyTime: '15-30',
        monthlyBudget: '15000-30000',
        workBudget: '100000-250000',
        readiness: 'now',
        teamReady: 'yes',
        dailyContact: 'yes',
        changeChild: '',
        changeSelf: ''
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

    const handleCheckboxGroup = (group, field) => (e) => {
        setFormData(prev => ({
            ...prev,
            [group]: {
                ...prev[group],
                [field]: e.target.checked
            }
        }));
    };

    const handleSubmit = (e) => {
        alert('!!!')
        e.preventDefault();
        if (!consentChecked) {
            alert('Пожалуйста, дайте согласие на обработку персональных данных');
            return;
        }
        console.log('Form Data:', formData);
        setOpenSnackbar(true);
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
            {/* Фоновый декор как в ThreePowersSystem */}
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
                    {/* Верхняя полоска как в карточках */}
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
                                АНКЕТА ДЛЯ ИНДИВИДУАЛЬНОГО СОПРОВОЖДЕНИЯ
                            </Typography>
                            <Typography variant="subtitle1" sx={{ color: colors.text.light, mt: 1 }}>
                                <LockIcon sx={{ fontSize: 16, mr: 0.5, verticalAlign: 'middle' }} />
                                Конфиденциальность гарантирована · Ищем системный сбой, а не виноватых
                            </Typography>
                        </Box>
                    </Box>

                    <Alert icon={<LockIcon />} severity="info" sx={{
                        mt: 3,
                        backgroundColor: alpha(colors.accent.secondary, 0.05),
                        border: '1px solid',
                        borderColor: colors.accent.secondary,
                        color: colors.text.primary,
                        '& .MuiAlert-icon': { color: colors.accent.secondary }
                    }}>
                        <Typography variant="body2">
                            Эта анкета — первый шаг. Она поможет мне понять масштаб вашей ситуации и подготовиться к разговору.
                        </Typography>
                    </Alert>
                </Paper>

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
                                    <Link href="/privacy" sx={{ color: colors.accent.primary }}>Политикой конфиденциальности
                                    </Link>
                                </Typography>
                            }
                        />
                    </Paper>

                    {/* БЛОК 1: Контактные данные */}
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
                            <Typography variant="h5" sx={{ color: colors.text.primary }}>Контактные данные</Typography>
                        </Box>

                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    fullWidth
                                    label="Ваше имя"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Имя"
                                    variant="outlined"
                                    sx={textFieldStyles}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    fullWidth
                                    label="Номер телефона"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="+7 (___) ___-__-__"
                                    variant="outlined"
                                    sx={textFieldStyles}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    fullWidth
                                    label="Удобный мессенджер"
                                    name="messenger"
                                    value={formData.messenger}
                                    onChange={handleInputChange}
                                    placeholder="Telegram / WhatsApp/ Max"
                                    variant="outlined"
                                    sx={textFieldStyles}
                                />
                            </Grid>
                        </Grid>

                        <Box sx={{ mt: 3 }}>
                            <Typography sx={{ color: colors.text.primary, mb: 1 }}>
                                В какое время вам удобно провести созвон?
                            </Typography>
                            <RadioGroup
                                row
                                name="contactTime"
                                value={formData.contactTime}
                                onChange={handleInputChange}
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

                    {/* БЛОК 2: О ребенке */}
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
                                2
                            </Avatar>
                            <Typography variant="h5" sx={{ color: colors.text.primary }}>О ребенке</Typography>
                        </Box>

                        <TextField
                            fullWidth
                            label="Имя и возраст ребёнка/детей"
                            name="childName"
                            value={formData.childName}
                            onChange={handleInputChange}
                            placeholder="Например: Михаил, 7 лет; Анна, 4 года"
                            variant="outlined"
                            multiline
                            rows={2}
                            sx={textFieldStyles}
                        />

                        <Box sx={{ mt: 3 }}>
                            <Typography sx={{ color: colors.text.primary, mb: 1 }}>
                                Кто входит в вашу «управленческую команду»?
                            </Typography>
                            <FormGroup row sx={{ gap: 2, flexWrap: 'wrap', mb: 2 }}>
                                {[
                                    { key: 'nanny', label: 'Няня / гувернант' },
                                    { key: 'grandparents', label: 'Бабушки / дедушки' },
                                    { key: 'tutors', label: 'Репетиторы / тренеры' },
                                    { key: 'onlyParents', label: 'Только родители' }
                                ].map(option => (
                                    <FormControlLabel
                                        key={option.key}
                                        control={
                                            <Checkbox
                                                checked={formData.managementTeam[option.key]}
                                                onChange={handleCheckboxGroup('managementTeam', option.key)}
                                                sx={{
                                                    color: colors.accent.secondary,
                                                    '&.Mui-checked': { color: colors.accent.primary }
                                                }}
                                            />
                                        }
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
                            </FormGroup>
                            <TextField
                                fullWidth
                                label="Другое"
                                value={formData.managementTeam.other}
                                onChange={(e) => setFormData(prev => ({
                                    ...prev,
                                    managementTeam: { ...prev.managementTeam, other: e.target.value }
                                }))}
                                placeholder="Кто ещё участвует в воспитании"
                                variant="outlined"
                                size="small"
                                sx={textFieldStyles}
                            />
                        </Box>
                    </Paper>

                    {/* БЛОК 3: Точка сбоя */}
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
                                3
                            </Avatar>
                            <Typography variant="h5" sx={{ color: colors.text.primary }}>Что отнимает больше всего сил?</Typography>
                        </Box>

                        <Typography sx={{ color: colors.text.primary, mb: 2 }}>
                            Выберите 1–3 самых острых пункта:
                        </Typography>

                        <FormGroup sx={{ gap: 1, mb: 2 }}>
                            {[
                                { key: 'whining', label: 'Постоянное нытьё, крики и «эмоциональный шантаж»' },
                                { key: 'disobedience', label: 'Открытое неповиновение и игнорирование правил' },
                                { key: 'aggression', label: 'Агрессия (в сторону взрослых, младших детей или себя)' },
                                { key: 'withdrawal', label: 'Замкнутость, отсутствие интереса и инициативы' },
                                { key: 'gadgets', label: 'Гаджетозависимость (виртуальный побег от реальности)' },
                                { key: 'health', label: 'Проблемы со сном/едой/здоровьем' }
                            ].map(option => (
                                <FormControlLabel
                                    key={option.key}
                                    control={
                                        <Checkbox
                                            checked={formData.forceDrain[option.key]}
                                            onChange={handleCheckboxGroup('forceDrain', option.key)}
                                            sx={{
                                                color: colors.accent.secondary,
                                                '&.Mui-checked': { color: colors.accent.primary }
                                            }}
                                        />
                                    }
                                    label={option.label}
                                    sx={{ color: colors.text.primary }}
                                />
                            ))}
                        </FormGroup>

                        <TextField
                            fullWidth
                            label="Другое"
                            value={formData.forceDrain.other}
                            onChange={(e) => setFormData(prev => ({
                                ...prev,
                                forceDrain: { ...prev.forceDrain, other: e.target.value }
                            }))}
                            placeholder="Опишите свою ситуацию"
                            variant="outlined"
                            size="small"
                            sx={{ mb: 3, ...textFieldStyles }}
                        />

                        <Typography sx={{ color: colors.text.primary, mb: 1 }}>
                            Опишите ситуацию, которая отнимает больше всего сил (что происходит в моменты «Нет»?)
                        </Typography>
                        <TextField
                            fullWidth
                            name="noSituation"
                            value={formData.noSituation}
                            onChange={handleInputChange}
                            placeholder="Например: когда ребёнок слышит отказ, он падает на пол и кричит 20 минут"
                            variant="outlined"
                            multiline
                            rows={3}
                            sx={{ mb: 3, ...textFieldStyles }}
                        />

                        <Typography sx={{ color: colors.text.primary, mb: 1 }}>
                            За кем сейчас остаётся последнее слово в доме?
                        </Typography>
                        <RadioGroup
                            name="lastWord"
                            value={formData.lastWord}
                            onChange={handleInputChange}
                            sx={{ mb: 2 }}
                        >
                            {[
                                { value: 'me', label: 'За мной' },
                                { value: 'child', label: 'За ребёнком' },
                                { value: 'nanny', label: 'За няней / бабушкой' },
                                { value: 'none', label: 'Нет единых правил / каждый тянет одеяло на себя' }
                            ].map(option => (
                                <FormControlLabel
                                    key={option.value}
                                    value={option.value}
                                    control={<Radio sx={{ color: colors.accent.secondary }} />}
                                    label={option.label}
                                />
                            ))}
                        </RadioGroup>
                    </Paper>

                    {/* БЛОК 4: Уровень выгорания */}
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
                                4
                            </Avatar>
                            <Typography variant="h5" sx={{ color: colors.text.primary }}>Родительское выгорание</Typography>
                        </Box>

                        <Typography sx={{ color: colors.text.primary, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                            <WarningAmberIcon sx={{ color: colors.accent.primary }} />
                            Оцените уровень родительского выгорания по шкале от 1 до 10:
                            <Chip
                                label="1 — всё под контролем, 10 — на грани"
                                size="small"
                                sx={{
                                    bgcolor: alpha(colors.accent.primary, 0.1),
                                    color: colors.accent.primary,
                                    borderColor: colors.accent.primary
                                }}
                            />
                        </Typography>

                        <RadioGroup
                            row
                            name="burnoutLevel"
                            value={formData.burnoutLevel}
                            onChange={handleInputChange}
                            sx={{ justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}
                        >
                            {[1,2,3,4,5,6,7,8,9,10].map(num => (
                                <FormControlLabel
                                    key={num}
                                    value={num.toString()}
                                    control={<Radio sx={{ display: 'none' }} />}
                                    label={
                                        <Box sx={{
                                            width: 40,
                                            height: 40,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: formData.burnoutLevel === num.toString() ? colors.accent.primary : alpha(colors.accent.primary, 0.1),
                                            color: formData.burnoutLevel === num.toString() ? '#FFFFFF' : colors.accent.primary,
                                            borderRadius: '50%',
                                            border: '2px solid',
                                            borderColor: colors.accent.primary,
                                            fontWeight: 700,
                                            fontSize: '1.2rem',
                                            cursor: 'pointer',
                                            transition: '0.2s',
                                            '&:hover': {
                                                backgroundColor: alpha(colors.accent.primary, 0.2),
                                                color: colors.text.primary
                                            }
                                        }}>
                                            {num}
                                        </Box>
                                    }
                                    sx={{ m: 0 }}
                                />
                            ))}
                        </RadioGroup>
                    </Paper>

                    {/* БЛОК 5: Предыдущий опыт */}
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
                                5
                            </Avatar>
                            <Typography variant="h5" sx={{ color: colors.text.primary }}>Предыдущий опыт</Typography>
                        </Box>

                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <Typography sx={{ color: colors.text.primary }}>Обращались ли к специалистам?</Typography>
                                <RadioGroup
                                    row
                                    name="consultedSpecialists"
                                    value={formData.consultedSpecialists}
                                    onChange={handleInputChange}
                                >
                                    <FormControlLabel value="yes" control={<Radio sx={{ color: colors.accent.secondary }} />} label="Да" />
                                    <FormControlLabel value="no" control={<Radio sx={{ color: colors.accent.secondary }} />} label="Нет" />
                                </RadioGroup>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography sx={{ color: colors.text.primary }}>Пробовали методики воспитания?</Typography>
                                <RadioGroup
                                    row
                                    name="triedMethods"
                                    value={formData.triedMethods}
                                    onChange={handleInputChange}
                                >
                                    <FormControlLabel value="yes" control={<Radio sx={{ color: colors.accent.secondary }} />} label="Да" />
                                    <FormControlLabel value="no" control={<Radio sx={{ color: colors.accent.secondary }} />} label="Нет" />
                                </RadioGroup>
                            </Grid>
                        </Grid>

                        {formData.triedMethods === 'yes' && (
                            <TextField
                                fullWidth
                                label="Опишите кратко, какие результаты были (или почему не помогло)"
                                name="methodsDescription"
                                value={formData.methodsDescription}
                                onChange={handleInputChange}
                                placeholder="Что пробовали и с каким результатом?"
                                variant="outlined"
                                multiline
                                rows={3}
                                sx={{ mt: 2, ...textFieldStyles }}
                            />
                        )}

                        <TextField
                            fullWidth
                            label="К кому вы уже обращались? Почему результат оказался временным?"
                            name="previousExperience"
                            value={formData.previousExperience}
                            onChange={handleInputChange}
                            placeholder="Ваш опыт работы со специалистами"
                            variant="outlined"
                            multiline
                            rows={3}
                            sx={{ mt: 2, ...textFieldStyles }}
                        />
                    </Paper>

                    {/* БЛОК 6: Страхи и цели */}
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
                                6
                            </Avatar>
                            <Typography variant="h5" sx={{ color: colors.text.primary }}>Страхи и цели</Typography>
                        </Box>

                        <Typography sx={{ color: colors.text.primary, mb: 1 }}>
                            Какой сценарий будущего вашего ребёнка пугает вас больше всего?
                        </Typography>
                        <RadioGroup
                            name="fearFuture"
                            value={formData.fearFuture}
                            onChange={handleInputChange}
                            sx={{ mb: 2 }}
                        >
                            {[
                                { value: 'consumer', label: 'Станет «потребителем», не способным ценить ресурсы семьи' },
                                { value: 'competition', label: 'Не выдержит конкуренции, не сможет управлять своей жизнью' },
                                { value: 'dependency', label: 'Останется в эмоциональной зависимости от родителей' },
                                { value: 'will', label: 'Потеряет волю и внутренний стержень под влиянием окружения' },
                                { value: 'virtual', label: 'Уйдёт в виртуальную реальность (гаджеты, игры)' },
                                { value: 'motivation', label: 'Потеряет мотивацию и не найдет себя' }
                            ].map(option => (
                                <FormControlLabel
                                    key={option.value}
                                    value={option.value}
                                    control={<Radio sx={{ color: colors.accent.secondary }} />}
                                    label={option.label}
                                />
                            ))}
                        </RadioGroup>

                        <TextField
                            fullWidth
                            label="Другое"
                            name="fearOther"
                            value={formData.fearOther}
                            onChange={handleInputChange}
                            placeholder="Ваш вариант"
                            variant="outlined"
                            size="small"
                            sx={{ mb: 3, ...textFieldStyles }}
                        />

                        <Typography sx={{ color: colors.text.primary, mb: 1 }}>
                            Какой главный навык вы хотите внедрить в характер ребёнка в ближайшие 3 месяца?
                        </Typography>
                        <RadioGroup
                            name="mainSkill"
                            value={formData.mainSkill}
                            onChange={handleInputChange}
                            sx={{ mb: 2 }}
                        >
                            <Grid container spacing={1}>
                                {[
                                    { value: 'selfControl', label: 'Самоконтроль (ответственность без надзора)' },
                                    { value: 'stressResistance', label: 'Стрессоустойчивость (принятие отказа без истерик)' },
                                    { value: 'diligence', label: 'Трудолюбие (доводить начатое до конца)' },
                                    { value: 'respect', label: 'Уважение к старшим (признание авторитета)' },
                                    { value: 'emotionalIntelligence', label: 'Эмоциональный интеллект' },
                                    { value: 'flexibility', label: 'Гибкость мышления' },
                                    { value: 'will', label: 'Воля и самостоятельность' }
                                ].map(option => (
                                    <Grid item xs={12} sm={6} key={option.value}>
                                        <FormControlLabel
                                            value={option.value}
                                            control={<Radio sx={{ color: colors.accent.secondary }} />}
                                            label={option.label}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </RadioGroup>

                        <TextField
                            fullWidth
                            label="Другой навык"
                            name="skillOther"
                            value={formData.skillOther}
                            onChange={handleInputChange}
                            placeholder="Ваш вариант"
                            variant="outlined"
                            size="small"
                            sx={textFieldStyles}
                        />
                    </Paper>

                    {/* БЛОК 7: Приоритеты и ресурсы */}
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
                                7
                            </Avatar>
                            <Typography variant="h5" sx={{ color: colors.text.primary }}>Приоритеты и ресурсы</Typography>
                        </Box>

                        <Typography sx={{ color: colors.text.primary, mb: 1 }}>
                            Что для вас важнее всего в работе со мной?
                        </Typography>
                        <FormGroup sx={{ mb: 3 }}>
                            {[
                                { key: 'quickResult', label: 'Быстрый результат' },
                                { key: 'deepUnderstanding', label: 'Глубокое понимание причин' },
                                { key: 'practicalTools', label: 'Практические инструменты "здесь и сейчас"' },
                                { key: 'longTermSystem', label: 'Долгосрочная система воспитания' }
                            ].map(option => (
                                <FormControlLabel
                                    key={option.key}
                                    control={
                                        <Checkbox
                                            checked={formData.workPriority[option.key]}
                                            onChange={handleCheckboxGroup('workPriority', option.key)}
                                            sx={{
                                                color: colors.accent.secondary,
                                                '&.Mui-checked': { color: colors.accent.primary }
                                            }}
                                        />
                                    }
                                    label={option.label}
                                />
                            ))}
                        </FormGroup>

                        <Typography sx={{ color: colors.text.primary, mb: 1 }}>
                            Сколько времени в день вы готовы уделять работе с ребёнком?
                        </Typography>
                        <RadioGroup
                            name="dailyTime"
                            value={formData.dailyTime}
                            onChange={handleInputChange}
                            sx={{ mb: 3, flexWrap: 'wrap', gap: 2 }}
                            row
                        >
                            {[
                                { value: '10-15', label: '10-15 минут' },
                                { value: '15-30', label: '15-30 минут' },
                                { value: '1-2', label: '1-2 часа' },
                                { value: 'more', label: 'Больше 2 часов' }
                            ].map(option => (
                                <FormControlLabel
                                    key={option.value}
                                    value={option.value}
                                    control={<Radio sx={{ color: colors.accent.secondary }} />}
                                    label={option.label}
                                    sx={{
                                        backgroundColor: alpha(colors.accent.light, 0.3),
                                        borderRadius: 4,
                                        px: 2,
                                        py: 0.5,
                                        m: 0,
                                        border: '1px solid',
                                        borderColor: colors.border
                                    }}
                                />
                            ))}
                        </RadioGroup>

                        <Typography sx={{ color: colors.text.primary, mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                            <AttachMoneyIcon sx={{ color: colors.accent.primary }} />
                            Какой бюджет в месяц вы готовы инвестировать?
                        </Typography>
                        <RadioGroup
                            name="monthlyBudget"
                            value={formData.monthlyBudget}
                            onChange={handleInputChange}
                            sx={{ mb: 3, flexWrap: 'wrap', gap: 2 }}
                            row
                        >
                            {[
                                { value: '15000', label: 'до 15 000 ₽' },
                                { value: '15000-30000', label: '15 000 – 30 000 ₽' },
                                { value: '30000-50000', label: '30 000 – 50 000 ₽' },
                                { value: '50000-100000', label: '50 000 – 100 000 ₽' },
                                { value: '100000+', label: 'Свыше 100 000 ₽' }
                            ].map(option => (
                                <FormControlLabel
                                    key={option.value}
                                    value={option.value}
                                    control={<Radio sx={{ color: colors.accent.secondary }} />}
                                    label={option.label}
                                    sx={{
                                        backgroundColor: alpha(colors.accent.light, 0.3),
                                        borderRadius: 4,
                                        px: 2,
                                        py: 0.5,
                                        m: 0,
                                        border: '1px solid',
                                        borderColor: colors.border
                                    }}
                                />
                            ))}
                        </RadioGroup>

                        <Typography sx={{ color: colors.text.primary, mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                            <AttachMoneyIcon sx={{ color: colors.accent.primary }} />
                            Бюджет на внедрение системы (от 100 000 ₽)
                        </Typography>
                        <RadioGroup
                            name="workBudget"
                            value={formData.workBudget}
                            onChange={handleInputChange}
                            sx={{ mb: 3, flexWrap: 'wrap', gap: 2 }}
                            row
                        >
                            {[
                                { value: '100000-250000', label: '100 000 – 250 000 ₽' },
                                { value: '250000-500000', label: '250 000 – 500 000 ₽' },
                                { value: '500000+', label: 'Свыше 500 000 ₽' }
                            ].map(option => (
                                <FormControlLabel
                                    key={option.value}
                                    value={option.value}
                                    control={<Radio sx={{ color: colors.accent.secondary }} />}
                                    label={option.label}
                                    sx={{
                                        backgroundColor: alpha(colors.accent.light, 0.3),
                                        borderRadius: 4,
                                        px: 2,
                                        py: 0.5,
                                        m: 0,
                                        border: '1px solid',
                                        borderColor: colors.border
                                    }}
                                />
                            ))}
                        </RadioGroup>

                        <Typography sx={{ color: colors.text.primary, mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                            <ScheduleIcon sx={{ color: colors.accent.primary }} />
                            Насколько оперативно вы готовы приступить?
                        </Typography>
                        <RadioGroup
                            name="readiness"
                            value={formData.readiness}
                            onChange={handleInputChange}
                            sx={{ flexWrap: 'wrap', gap: 2 }}
                            row
                        >
                            {[
                                { value: 'now', label: 'Готов(а) прямо сейчас, ситуация критическая' },
                                { value: 'week', label: 'В течение недели' },
                                { value: 'month', label: 'В следующем месяце' },
                                { value: 'looking', label: 'Присматриваюсь, собираю информацию' }
                            ].map(option => (
                                <FormControlLabel
                                    key={option.value}
                                    value={option.value}
                                    control={<Radio sx={{ color: colors.accent.secondary }} />}
                                    label={option.label}
                                    sx={{
                                        backgroundColor: alpha(colors.accent.light, 0.3),
                                        borderRadius: 4,
                                        px: 2,
                                        py: 0.5,
                                        m: 0,
                                        border: '1px solid',
                                        borderColor: colors.border
                                    }}
                                />
                            ))}
                        </RadioGroup>
                    </Paper>

                    {/* БЛОК 8: Готовность к работе */}
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
                                8
                            </Avatar>
                            <Typography variant="h5" sx={{ color: colors.text.primary }}>Готовность к работе</Typography>
                        </Box>

                        <Alert severity="info" sx={{
                            mb: 3,
                            backgroundColor: alpha(colors.accent.secondary, 0.05),
                            color: colors.text.primary,
                            border: '1px solid',
                            borderColor: colors.accent.secondary
                        }}>
                            Ребёнок — это отражение системы, которую создают взрослые. Мы будем перестраивать алгоритмы вместе.
                        </Alert>

                        <Typography sx={{ color: colors.text.primary, mb: 1 }}>
                            Вы готовы к командной работе со мной?
                        </Typography>
                        <RadioGroup
                            name="teamReady"
                            value={formData.teamReady}
                            onChange={handleInputChange}
                            sx={{ mb: 3 }}
                        >
                            <FormControlLabel
                                value="yes"
                                control={<Radio sx={{ color: colors.accent.secondary }} />}
                                label="Да, я готов(а) менять привычные реакции"
                            />
                            <FormControlLabel
                                value="no"
                                control={<Radio sx={{ color: colors.accent.secondary }} />}
                                label="Нет, я хочу, чтобы специалист работал только с ребёнком (автоматический отказ)"
                            />
                        </RadioGroup>

                        <Typography sx={{ color: colors.text.primary, mb: 1 }}>
                            Готовы ли вы выделять 15–20 минут в день на связь со мной?
                        </Typography>
                        <RadioGroup
                            row
                            name="dailyContact"
                            value={formData.dailyContact}
                            onChange={handleInputChange}
                        >
                            <FormControlLabel value="yes" control={<Radio sx={{ color: colors.accent.secondary }} />} label="Да" />
                            <FormControlLabel value="no" control={<Radio sx={{ color: colors.accent.secondary }} />} label="Нет" />
                        </RadioGroup>
                    </Paper>

                    {/* БЛОК 9: Запрос на результат */}
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
                                9
                            </Avatar>
                            <Typography variant="h5" sx={{ color: colors.text.primary }}>Запрос на результат</Typography>
                        </Box>

                        <TextField
                            fullWidth
                            label="Что должно измениться в поведении ребёнка через 3 месяца?"
                            name="changeChild"
                            value={formData.changeChild}
                            onChange={handleInputChange}
                            placeholder="Опишите конкретные изменения"
                            variant="outlined"
                            multiline
                            rows={3}
                            sx={{ mb: 3, ...textFieldStyles }}
                        />

                        <TextField
                            fullWidth
                            label="Что должно измениться в вашем личном состоянии?"
                            name="changeSelf"
                            value={formData.changeSelf}
                            onChange={handleInputChange}
                            placeholder="Как вы хотите себя чувствовать?"
                            variant="outlined"
                            multiline
                            rows={3}
                            sx={textFieldStyles}
                        />
                    </Paper>

                    {/* Кнопка отправки */}
                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        endIcon={<SendIcon />}
                        disabled={!consentChecked}
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
                        Отправить анкету
                    </Button>

                    {/* Бонус-блок */}
                    <Paper elevation={0} sx={{
                        backgroundColor: alpha(colors.accent.secondary, 0.05),
                        borderRadius: 4,
                        p: 3,
                        border: '1px solid',
                        borderColor: colors.accent.secondary,
                        position: 'relative'
                    }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                            <Avatar sx={{
                                bgcolor: colors.accent.secondary,
                                width: 40,
                                height: 40,
                                color: '#FFFFFF'
                            }}>
                                <ChildCareIcon />
                            </Avatar>
                            <Typography sx={{ color: colors.text.primary, fontWeight: 600 }}>
                                Бонус за заполнение
                            </Typography>
                        </Box>

                        <Typography sx={{ color: colors.text.primary, mb: 2 }}>
                            Сразу после отправки вы получите памятку: «5 микро-скриптов в момент истерики: как включить взрослого и остановить конфликт без крика»
                        </Typography>

                        <Divider sx={{ borderColor: colors.border, my: 2 }} />

                        <Typography sx={{ color: colors.text.primary, fontWeight: 600, mb: 1 }}>
                            Что дальше?
                        </Typography>
                        <Typography sx={{ color: colors.text.secondary }}>
                            • Я внимательно изучу вашу анкету в течение 24 часов.
                        </Typography>
                        <Typography sx={{ color: colors.text.secondary }}>
                            • Если я пойму, что моя система даст вам результат — я приглашу вас на короткий установочный созвон.
                        </Typography>
                        <Typography sx={{ color: colors.text.secondary }}>
                            • Я беру в личное ведение только 3 семьи в квартал. Если места заполнены, мы предложим вам лист ожидания.
                        </Typography>
                    </Paper>
                </form>

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
                        Анкета отправлена! Спасибо за доверие. Бонусная памятка отправлена на указанный мессенджер.
                    </Alert>
                </Snackbar>
            </Container>
        </Box>
    );
}