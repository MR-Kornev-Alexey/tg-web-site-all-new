import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from "../Typography/Typography";
import ImageLeft from "../../img/ImageCards/boy_main.png";
import ImageSquare from "../../img/photo-elena-square.png";
import Link from "@mui/material/Link";
import {ForWhomSectionNew} from "./ForWhomSection";
import SpeechPricingBlock from "./SpeackPrice";

// ============ ЦВЕТА ============
const COLORS = {
    primary: '#D95D2B',
    secondary: '#A67C52',
    background: '#FCF9F3',
    text: '#3E2F28',
    textLight: '#6B5A4E',
    paperBg: '#FFFFFF',
    border: 'rgba(166, 124, 82, 0.2)',
};

// ============ ОБЩИЕ СТИЛИ ============
const sectionSx = {
    px: { xs: 2, sm: 3 },
    py: { xs: 5, md: 8 },
    backgroundColor: COLORS.background,
};

const sectionLabelSx = {
    display: 'inline-block',
    fontSize: { xs: 12, sm: 13 },
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: COLORS.secondary,
    mb: 1.5,
};

const sectionTitleSx = {
    fontSize: { xs: 20, sm: 24, md: 28 },
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
    color: COLORS.text,
    mb: { xs: 3, md: 4 },
};

const listItemSx = {
    position: 'relative',
    pl: 4,
    py: 1.75,
    fontSize: { xs: 14, sm: 15, md: 16 },
    lineHeight: 1.55,
    color: COLORS.textLight,
    borderBottom: `1px solid ${COLORS.border}`,
    '&:last-of-type': { borderBottom: 'none' },
    '&::before': {
        content: '""',
        position: 'absolute',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        width: 18,
        height: 18,
        backgroundColor: COLORS.primary,
        opacity: 0.15,
        borderRadius: '50%',
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        left: 6,
        top: '50%',
        transform: 'translateY(-50%)',
        width: 6,
        height: 6,
        backgroundColor: COLORS.primary,
        borderRadius: '50%',
    },
};

const numberItemSx = {
    position: 'relative',
    pl: 6,
    py: 2,
    fontSize: { xs: 14, sm: 15, md: 16 },
    lineHeight: 1.55,
    color: COLORS.textLight,
    borderBottom: `1px solid ${COLORS.border}`,
    '&:last-of-type': { borderBottom: 'none' },
};


// ==================================================================
// БЛОК 1. HERO (первый экран)
// ==================================================================
export function HeroSection() {
    return (
        <Container component="section" sx={sectionSx}>
            <Grid container sx={{ my: { xs: 2, sm: 3 } }} alignItems="center">
                {/* ТЕКСТ */}
                <Grid
                    item
                    xs={12}
                    md={7}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: { xs: 'center', md: 'flex-start' },
                        mt: { xs: 2, sm: 3, md: 0 },
                        textAlign: { xs: 'center', md: 'left' },
                        px: { xs: 0, sm: 1 },
                    }}
                >
                    <Typography
                        component="h1"
                        sx={{
                            fontSize: { xs: 22, sm: 26, md: 32, lg: 36 },
                            fontWeight: 700,
                            lineHeight: 1.25,
                            width: '100%',
                            letterSpacing: '-0.01em',
                            wordBreak: 'break-word',
                            color: COLORS.text,
                        }}
                    >
                        Как научить малыша говорить фразами за 30 дней{' '}
                        <Box component="span" sx={{ color: COLORS.primary }}>
                          без слез и уговоров
                        </Box>
                    </Typography>

                    <Typography
                        component="h2"
                        sx={{
                            mt: { xs: 1.5, sm: 2 },
                            fontSize: { xs: 14, sm: 15, md: 17, lg: 18 },
                            lineHeight: 1.5,
                            color: COLORS.textLight,
                            fontWeight: 400,
                            width: '100%',
                        }}
                    >
                        Игровая система для детей 2–4 лет.
                        Превращаем молчание в первые предложения через игру
                    </Typography>

                    {/* Картинка для мобильной версии */}
                    <Box
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            justifyContent: 'center',
                            my: { xs: 2, sm: 3 },
                            width: '100%',
                        }}
                    >
                        <Box
                            component="img"
                            src={ImageLeft}
                            alt="Ребёнок"
                            sx={{ width: '80%', maxWidth: { xs: 200, sm: 240 }, objectFit: 'cover' }}
                        />
                    </Box>

                    {/* Кнопки */}
                    <Box
                        sx={{
                            mt: { xs: 2, sm: 3 },
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            gap: { xs: 1.5, sm: 2, md: 3 },
                            width: '100%',
                            justifyContent: { xs: 'center', sm: 'flex-start' },
                        }}
                    >
                        <Link
                            href="#program"
                            underline="none"
                            sx={{
                                height: { xs: 44, sm: 48 },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: COLORS.primary,
                                color: '#fff !important',        // ← добавлен !important
                                fontSize: { xs: 13, sm: 14 },
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.03em',
                                transition: 'all .2s ease',
                                width: { xs: '100%', sm: 'auto' },
                                flex: { xs: 'none', sm: 1 },
                                px: { xs: 2, sm: 3 },
                                minWidth: { sm: 160 },
                                borderRadius: 0,
                                '&:hover': {
                                    backgroundColor: '#c44f22',
                                    color: '#fff !important',    // ← и на hover тоже
                                    transform: 'translateY(-1px)',
                                    boxShadow: '0 8px 24px rgba(217, 93, 43, 0.25)',
                                },
                            }}
                        >
                            Узнать программу
                        </Link>

                        <Link
                            href="#pricing"
                            underline="none"
                            sx={{
                                height: { xs: 44, sm: 48 },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: COLORS.paperBg,
                                color: COLORS.text,
                                border: `1px solid ${COLORS.border}`,
                                fontSize: { xs: 13, sm: 14 },
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.03em',
                                transition: 'all .2s ease',
                                width: { xs: '100%', sm: 'auto' },
                                flex: { xs: 'none', sm: 1 },
                                px: { xs: 2, sm: 3 },
                                minWidth: { sm: 160 },
                                borderRadius: 0,
                                '&:hover': {
                                    backgroundColor: COLORS.background,
                                    borderColor: COLORS.secondary,
                                    transform: 'translateY(-1px)',
                                },
                            }}
                        >
                            Записаться
                        </Link>
                    </Box>

                    <Typography
                        component="p"
                        sx={{
                            mt: { xs: 1.5, sm: 2 },
                            fontSize: { xs: 13, sm: 14, md: 15, lg: 16 },
                            lineHeight: 1.5,
                            color: COLORS.textLight,
                            fontWeight: 400,
                            width: '100%',
                        }}
                    >
                        Автор программы: Елена Корнева - врач-педиатр , психолог с опытом работы с детьми раннего возраста
                    </Typography>
                </Grid>

                {/* Картинка для десктопа */}
                <Grid
                    item
                    xs={12}
                    md={5}
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                        mt: { xs: 3, md: 0 },
                        pl: { md: 2, lg: 3 },
                    }}
                >
                    <Box
                        component="img"
                        src={ImageLeft}
                        alt="Ребёнок"
                        sx={{ width: '100%', maxWidth: { md: 320, lg: 360 }, height: 'auto' }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}


// ==================================================================
// БЛОК 2. ДЛЯ КОГО
// ==================================================================
const FOR_WHOM = [
    'Вы устали от противоречивой и неполной информации в интернете и хотите чётких рекомендаций.',
    'Вы не готовы «ждать до 3 лет», чтобы потом исправлять уже укоренившиеся проблемы с речью.',
    'Сомневаетесь в правильности речевого развития ребёнка и не понимаете, какие конкретно шаги предпринимать.',
    'Хотите разобраться, как устроена речь вашего малыша, и научиться работать с ней эффективно.',
    'Ребёнок родился раньше срока или в процессе беременности/родов возникали сложности.',
    'Ваш малыш растёт в двуязычной среде (в семье используют два и более языка).',
];

export function ForWhomSection() {
    return (
        <Container component="section" sx={sectionSx}>
            <Typography sx={sectionLabelSx}>Для кого</Typography>
            <Typography component="h2" sx={sectionTitleSx}>
                Этот курс станет для вас спасением, если:
            </Typography>

            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {FOR_WHOM.map((text, i) => (
                    <Box component="li" key={i} sx={listItemSx}>
                        {text}
                    </Box>
                ))}
            </Box>
        </Container>
    );
}


// ==================================================================
// БЛОК 3. СИМПТОМЫ
// ==================================================================
const SYMPTOMS = [
    'Не стремится говорить или использовать речь для повседневного общения.',
    'Использует только один слог или звук вместо полноценных слов.',
    'Не пополняет словарь и не пытается повторять новые услышанные слова.',
    'Заменяет речь жестами и мимикой, когда хочет выразить свои желания или потребности.',
    'Не отзывается на своё имя и испытывает трудности с выполнением простых инструкций.',
    'Произносит только отдельные слова, но не может сложить их в фразы или предложения.',
    'Избегает речевого контакта со взрослыми и сверстниками или заметно отстаёт в развитии от возраста.',
];

export function SymptomsSection() {
    return (
        <Container component="section" sx={sectionSx}>
            <Typography sx={sectionLabelSx}>Симптомы</Typography>
            <Typography component="h2" sx={sectionTitleSx}>
                С какими симптомами поможет справиться интенсив?
            </Typography>

            <Box component="ol" sx={{ listStyle: 'none', p: 0, m: 0, counterReset: 'item' }}>
                {SYMPTOMS.map((text, i) => (
                    <Box
                        component="li"
                        key={i}
                        sx={{
                            ...numberItemSx,
                            counterIncrement: 'item',
                            '&::before': {
                                content: `"${i + 1}"`,
                                position: 'absolute',
                                left: 0,
                                top: 16,
                                width: 30,
                                height: 30,
                                backgroundColor: COLORS.paperBg,
                                border: `1px solid ${COLORS.border}`,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 13,
                                fontWeight: 600,
                                color: COLORS.primary,
                            },
                        }}
                    >
                        {text}
                    </Box>
                ))}
            </Box>
        </Container>
    );
}


// ==================================================================
// БЛОК 4. МЕТОДИКА
// ==================================================================
const METHOD = [
    {
        title: 'Наглядная видеооценка прогресса',
        text: 'В 0-й день вы записываете бытовое общение с ребёнком на видео, чтобы сравнить результаты через 30 дней и увидеть реальные изменения.',
    },
    {
        title: 'Игровая артикуляционная гимнастика',
        text: 'Простые и весёлые упражнения («Цыплята», «Заборчик», «Наказать непослушный язычок») тренируют мышцы языка и губ без принуждения.',
    },
    {
        title: 'Нейролингвистика и двигательные игры',
        text: 'Занятия с мячом («Туннель из стульев», «Ворота») помогают связать движения тела с речевыми процессами.',
    },
    {
        title: 'Правильное речевое дыхание',
        text: 'Запуск бумажных самолётиков, мыльные пузыри и игры с дудочками формируют необходимую для речи воздушную струю.',
    },
    {
        title: 'Развитие ритма и неречевого слуха',
        text: 'Упражнения с колокольчиком, отстукивание ритма молоточком и игры-«часики» тренируют слуховое внимание.',
    },
    {
        title: 'Чистоговорки и пошаговые диалоги',
        text: 'Специальные чистоговорки («Повторюшки») и трёхэтапные алгоритмы вопросов помогают перейти от изолированных звуков к живому диалогу.',
    },
    {
        title: 'Элементы рефлексотерапии',
        text: 'Безопасный точечный массаж активных точек для стимулирования речевых зон.',
    },
    {
        title: 'Экспертные вебинары для родителей',
        text: 'Разборы важных тем — от влияния смартфонов и мультиков до алгоритмов помощи при задержке речевого развития (ЗРР).',
    },
];

export function MethodSection() {
    return (
        <Container component="section" sx={sectionSx} id="program">
            <Typography sx={sectionLabelSx}>Методика</Typography>
            <Typography component="h2" sx={sectionTitleSx}>
                Что ждёт вас внутри курса
            </Typography>

            <Grid container spacing={{ xs: 2, md: 2.5 }}>
                {METHOD.map((item, i) => (
                    <Grid item xs={12} sm={6} key={i}>
                        <Box
                            sx={{
                                height: '100%',
                                backgroundColor: COLORS.paperBg,
                                border: `1px solid ${COLORS.border}`,
                                borderRadius: 2,
                                p: { xs: 2.5, md: 3 },
                                transition: 'border-color .2s ease',
                                '&:hover': {
                                    borderColor: 'rgba(166, 124, 82, 0.4)',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1.25,
                                    mb: 1,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 8,
                                        height: 8,
                                        backgroundColor: COLORS.primary,
                                        borderRadius: '50%',
                                        flexShrink: 0,
                                    }}
                                />
                                <Typography
                                    component="h3"
                                    sx={{
                                        fontSize: { xs: 15, md: 16 },
                                        fontWeight: 600,
                                        color: COLORS.text,
                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </Box>
                            <Typography
                                sx={{
                                    fontSize: { xs: 14, md: 15 },
                                    lineHeight: 1.55,
                                    color: COLORS.textLight,
                                    pl: 2.25,
                                }}
                            >
                                {item.text}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}


// ==================================================================
// БЛОК 5. РЕЗУЛЬТАТЫ
// ==================================================================
const RESULTS = [
    {
        bold: 'Ребёнок начнёт использовать слова и фразы',
        rest: ' вместо жестов и капризов для выражения своих желаний.',
    },
    {
        bold: 'Появится фундамент для правильного произношения',
        rest: ' и понимания обращённой речи.',
    },
    {
        bold: 'Вы получите понятный пошаговый план занятий',
        rest: ' на каждый день, включающий упражнения в игровой форме.',
    },
    {
        bold: 'Вы отследите динамику развития',
        rest: ' по видеозаписям до и после курса.',
    },
];

export function ResultsSection() {
    return (
        <Container component="section" sx={sectionSx}>
            <Typography sx={sectionLabelSx}>Результаты</Typography>
            <Typography component="h2" sx={sectionTitleSx}>
                Что вы получите
            </Typography>

            <Grid container spacing={{ xs: 2, md: 2.5 }}>
                {RESULTS.map((item, i) => (
                    <Grid item xs={12} key={i}>
                        <Box
                            sx={{
                                backgroundColor: COLORS.paperBg,
                                border: `1px solid ${COLORS.border}`,
                                borderLeft: `3px solid ${COLORS.primary}`,
                                borderRadius: 1.5,
                                p: { xs: 2.5, md: 3 },
                                fontSize: { xs: 14, md: 15 },
                                lineHeight: 1.55,
                                color: COLORS.textLight,
                            }}
                        >
                            <Box component="strong" sx={{ color: COLORS.text, fontWeight: 600 }}>
                                {item.bold}
                            </Box>
                            {item.rest}
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}


// ==================================================================
// БЛОК 6. CTA
// ==================================================================
export function CTASection() {
    return (
        <Container component="section" sx={{ ...sectionSx, pb: { xs: 6, md: 10 } }} id="cta">
            <Box
                sx={{
                    textAlign: 'center',
                    backgroundColor: COLORS.paperBg,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: 3,
                    p: { xs: 4, md: 7 },
                }}
            >
                <Typography
                    component="h2"
                    sx={{
                        fontSize: { xs: 20, sm: 24, md: 28 },
                        fontWeight: 700,
                        lineHeight: 1.3,
                        color: COLORS.text,
                        mb: 2,
                    }}
                >
                    Помогите своему малышу заговорить легко и уверенно
                </Typography>

                <Typography
                    sx={{
                        color: COLORS.textLight,
                        maxWidth: 480,
                        mx: 'auto',
                        mb: 4,
                        fontSize: { xs: 14, md: 16 },
                        lineHeight: 1.55,
                    }}
                >
                    Присоединяйтесь к 30-дневному интенсиву по развитию речи
                    и заложите правильный фундамент уже сегодня.
                </Typography>

                <Link
                    href="#"
                    underline="none"
                    sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: { xs: 44, sm: 48 },
                        px: { xs: 3, sm: 5 },
                        backgroundColor: COLORS.primary,
                        color: '#fff',
                        fontSize: { xs: 13, sm: 14 },
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.03em',
                        transition: 'all .2s ease',
                        borderRadius: 0,
                        '&:hover': {
                            backgroundColor: '#c44f22',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 24px rgba(217, 93, 43, 0.25)',
                        },
                    }}
                >
                    Записаться на интенсив
                </Link>
            </Box>
        </Container>
    );
}


// ==================================================================
// ОБЩИЙ КОМПОНЕНТ ЛЕНДИНГА
// ==================================================================
export default function SpeechLanding() {
    return (
        <Box sx={{ backgroundColor: COLORS.background, minHeight: '100vh' }}>
            <HeroSection />
            <ForWhomSectionNew />
            <SymptomsSection />
            <MethodSection />
            <ResultsSection />
            <SpeechPricingBlock />
        </Box>
    );
}