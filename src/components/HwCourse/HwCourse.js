import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from "../Typography/Typography";
import ImageLeft from "../../img/hw-main.png";
import HwPricingSection from "./HWPricingSection";
// import ImageWebinar from "../../img/hw-main.png;

// ============ ЦВЕТА ============
const COLORS = {
    primary: '#964321',
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

// ==================================================================
// БЛОК 1. HERO (Первый экран)
// ==================================================================
export function HeroSection() {
    return (
        <Container component="section" sx={sectionSx}>
            <Grid container sx={{ my: { xs: 2, sm: 3 } }} alignItems="center">
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
                        Комплексная система развития ребёнка от 0 до 24 месяцев:{' '}
                        <Box component="span" sx={{ color: COLORS.primary }}>
                            ежедневные занятия + экспертные вебинары
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
                            maxWidth: { md: '90%' },
                        }}
                    >
                        Получайте персональные задания в Telegram и углублённые знания на вебинарах.
                        15 минут в день + 1 час в месяц = уверенное развитие вашего малыша.
                    </Typography>

                    {/* ИЗОБРАЖЕНИЕ ДЛЯ МОБИЛЬНЫХ УСТРОЙСТВ */}
                    <Box
                        sx={{
                            display: { xs: 'block', md: 'none' },
                            mt: { xs: 2.5, sm: 3 },
                            width: '100%',
                            maxWidth: { xs: 320, sm: 380 },
                            mx: 'auto',
                        }}
                    >
                        <Box
                            component="img"
                            src={ImageLeft}
                            alt="Мама и малыш"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: 2,
                                boxShadow: '0 12px 40px rgba(62, 47, 40, 0.15)',
                            }}
                        />
                    </Box>

                    {/* КНОПКИ */}
                    <Box
                        sx={{
                            mt: { xs: 2.5, sm: 3 },
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            gap: { xs: 1.5, sm: 2, md: 3 },
                            width: '100%',
                            justifyContent: { xs: 'center', sm: 'flex-start' },
                        }}
                    >
                        <Link
                            href="#products"
                            underline="none"
                            sx={{
                                height: { xs: 48, sm: 52 },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: COLORS.primary,
                                color: '#fff !important',
                                fontSize: { xs: 13, sm: 14 },
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.03em',
                                transition: 'all .2s ease',
                                width: { xs: '100%', sm: 'auto' },
                                flex: { xs: 'none', sm: 1 },
                                px: { xs: 2, sm: 3 },
                                minWidth: { sm: 200 },
                                borderRadius: 1,
                                '&:hover': {
                                    backgroundColor: '#c44f22',
                                    color: '#fff !important',
                                    transform: 'translateY(-1px)',
                                    boxShadow: '0 8px 24px rgba(217, 93, 43, 0.25)',
                                },
                                '&:visited': {
                                    color: '#fff !important',
                                },
                                '&:active': {
                                    color: '#fff !important',
                                },
                            }}
                        >
                            Выбрать программу
                        </Link>

                        <Link
                            href="#webinars"
                            underline="none"
                            sx={{
                                height: { xs: 48, sm: 52 },
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
                                minWidth: { sm: 200 },
                                borderRadius: 1,
                                '&:hover': {
                                    backgroundColor: COLORS.background,
                                    borderColor: COLORS.secondary,
                                    transform: 'translateY(-1px)',
                                },
                                '&:visited': {
                                    color: COLORS.text,
                                },
                                '&:active': {
                                    color: COLORS.text,
                                },
                            }}
                        >
                            Вебинары по возрастам
                        </Link>
                    </Box>

                    <Typography
                        component="p"
                        sx={{
                            mt: { xs: 1.5, sm: 2 },
                            fontSize: { xs: 13, sm: 14, md: 15 },
                            lineHeight: 1.5,
                            color: COLORS.textLight,
                            fontWeight: 400,
                            width: '100%',
                        }}
                    >
                        Автор: Елена Корнева — врач-педиатр, эксперт по раннему развитию.
                        Более 500 000 довольных подписчиков.
                    </Typography>
                </Grid>

                {/* ИЗОБРАЖЕНИЕ ДЛЯ ДЕСКТОПА */}
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
                        alt="Мама и малыш"
                        sx={{
                            width: '100%',
                            maxWidth: { md: 400, lg: 450 },
                            borderRadius: 2,
                            boxShadow: '0 12px 40px rgba(62, 47, 40, 0.15)',
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

// ==================================================================
// БЛОК 2. ДВА ПРОДУКТА В ОДНОЙ СИСТЕМЕ
// ==================================================================
export function ProductsSection() {
    const products = [
        {
            icon: '📱',
            title: 'Ежедневная рассылка HelenBot',
            subtitle: 'Практика каждый день',
            description: 'Персональные задания в Telegram с учётом точного возраста вашего ребёнка. 15 минут в день, 5 дней в неделю.',
            features: [
                'Задания с точностью до недели',
                'Игры без специального инвентаря',
                'Видеоинструкции и гайды',
                'Библиотека заданий на выходные',
            ],
            color: COLORS.primary,
        },
        {
            icon: '🎓',
            title: 'Авторские вебинары',
            subtitle: 'Глубокие знания',
            description: 'Научно обоснованная информация о развитии ребёнка в конкретном возрасте. 1 час в месяц — и вы эксперт для своего малыша.',
            features: [
                'Современные исследования мозга',
                'Конкретные навыки по возрастам',
                'Ответы на вопросы',
                'Запись вебинара в подарок',
            ],
            color: COLORS.secondary,
        },
    ];

    return (
        <Container component="section" sx={sectionSx} id="products">
            <Typography sx={sectionLabelSx}>Как это работает</Typography>
            <Typography component="h2" sx={{ ...sectionTitleSx, textAlign: 'center' }}>
                Два продукта — одна цель: <Box component="span" sx={{ color: COLORS.primary }}>гармоничное развитие вашего ребёнка</Box>
            </Typography>

            <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mt: 2 }}>
                {products.map((product, i) => (
                    <Grid item xs={12} md={6} key={i}>
                        <Box
                            sx={{
                                height: '100%',
                                backgroundColor: COLORS.paperBg,
                                border: `2px solid ${product.color}`,
                                borderRadius: 3,
                                p: { xs: 3, md: 4 },
                                transition: 'all .3s ease',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: `0 12px 32px ${product.color}20`,
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    fontSize: 48,
                                    mb: 2,
                                    textAlign: 'center',
                                }}
                            >
                                {product.icon}
                            </Box>
                            <Typography
                                component="h3"
                                sx={{
                                    fontSize: { xs: 18, md: 22 },
                                    fontWeight: 700,
                                    color: COLORS.text,
                                    textAlign: 'center',
                                    mb: 0.5,
                                }}
                            >
                                {product.title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: 14,
                                    fontWeight: 600,
                                    color: product.color,
                                    textAlign: 'center',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    mb: 2,
                                }}
                            >
                                {product.subtitle}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: 14, md: 15 },
                                    lineHeight: 1.6,
                                    color: COLORS.textLight,
                                    textAlign: 'center',
                                    mb: 2.5,
                                }}
                            >
                                {product.description}
                            </Typography>
                            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                                {product.features.map((feature, idx) => (
                                    <Box
                                        component="li"
                                        key={idx}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1.5,
                                            mb: 1.25,
                                            fontSize: { xs: 13, md: 14 },
                                            color: COLORS.textLight,
                                            '&::before': {
                                                content: '"✓"',
                                                color: product.color,
                                                fontWeight: 700,
                                                fontSize: 16,
                                            },
                                        }}
                                    >
                                        {feature}
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            <Box
                sx={{
                    mt: 5,
                    p: { xs: 2.5, md: 3.5 },
                    backgroundColor: 'rgba(217, 93, 43, 0.08)',
                    borderRadius: 2,
                    border: `1px dashed ${COLORS.primary}`,
                    textAlign: 'center',
                }}
            >
                <Typography
                    sx={{
                        fontSize: { xs: 15, md: 17 },
                        lineHeight: 1.6,
                        color: COLORS.text,
                        fontWeight: 500,
                    }}
                >
                    <Box component="strong" sx={{ color: COLORS.primary }}>Идеальная формула:</Box>{' '}
                    ежедневная практика через рассылку + глубокое понимание через вебинары ={' '}
                    <Box component="strong">уверенная мама и развитый ребёнок</Box>
                </Typography>
            </Box>
        </Container>
    );
}

// ==================================================================
// БЛОК 3. ВЕБИНАРЫ ПО ВОЗРАСТАМ
// ==================================================================
const WEBINARS = [
    { age: '0-2 месяца', title: 'Первые недели жизни', desc: 'Адаптация, базовые рефлексы, установление контакта' },
    { age: '3-4 месяца', title: 'Первые открытия', desc: 'Удержание головы, хватание, улыбка и гуление' },
    { age: '5-6 месяцев', title: 'Активное познание', desc: 'Перевороты, интерес к предметам, лепет' },
    { age: '7-8 месяцев', title: 'Движение и общение', desc: 'Ползание, сидение, понимание речи' },
    { age: '9-10 месяцев', title: 'Исследователь', desc: 'Первые шаги у опоры, указательный жест' },
    { age: '11-13 месяцев', title: 'Самостоятельность', desc: 'Первые шаги, подражание, простые слова' },
    { age: '14-18 месяцев', title: 'Активный ходок', desc: 'Уверенная ходьба, расширение словаря' },
    { age: '19-24 месяца', title: 'Маленький собеседник', desc: 'Фразы, ролевые игры, эмоциональный интеллект' },
];

export function WebinarsSection() {
    return (
        <Container component="section" sx={{ ...sectionSx, backgroundColor: COLORS.paperBg }} id="webinars">
            <Typography sx={sectionLabelSx}>Вебинары</Typography>
            <Typography component="h2" sx={{ ...sectionTitleSx, textAlign: 'center' }}>
                Выберите вебинар по возрасту вашего ребёнка
            </Typography>

            <Grid container spacing={{ xs: 2, md: 2.5 }}>
                {WEBINARS.map((webinar, i) => (
                    <Grid item xs={12} sm={6} md={3} key={i}>
                        <Box
                            sx={{
                                height: '100%',
                                backgroundColor: COLORS.background,
                                border: `1px solid ${COLORS.border}`,
                                borderRadius: 2,
                                p: { xs: 2, md: 2.5 },
                                transition: 'all .2s ease',
                                '&:hover': {
                                    borderColor: COLORS.primary,
                                    transform: 'translateY(-3px)',
                                    boxShadow: '0 8px 24px rgba(217, 93, 43, 0.15)',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: COLORS.primary,
                                    color: '#fff',
                                    fontSize: 12,
                                    fontWeight: 700,
                                    px: 1.5,
                                    py: 0.5,
                                    borderRadius: 1,
                                    display: 'inline-block',
                                    mb: 1.5,
                                    letterSpacing: '0.03em',
                                }}
                            >
                                {webinar.age}
                            </Box>
                            <Typography
                                component="h3"
                                sx={{
                                    fontSize: { xs: 15, md: 16 },
                                    fontWeight: 700,
                                    color: COLORS.text,
                                    mb: 1,
                                    lineHeight: 1.3,
                                }}
                            >
                                {webinar.title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: 13, md: 14 },
                                    lineHeight: 1.5,
                                    color: COLORS.textLight,
                                }}
                            >
                                {webinar.desc}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            <Box
                sx={{
                    mt: 4,
                    textAlign: 'center',
                    p: { xs: 2.5, md: 3 },
                    backgroundColor: COLORS.background,
                    borderRadius: 2,
                }}
            >
                <Typography
                    sx={{
                        fontSize: { xs: 14, md: 15 },
                        lineHeight: 1.6,
                        color: COLORS.textLight,
                        mb: 1,
                    }}
                >
                    <Box component="strong" sx={{ color: COLORS.text }}>Также доступны:</Box> вебинары для родителей по темам:
                    речь, эмоциональный интеллект, адаптация к садику, детские истерики
                </Typography>
            </Box>
        </Container>
    );
}

// ==================================================================
// БЛОК 4. ОСОБЕННОСТЬ ВЕБИНАРОВ
// ==================================================================
export function WebinarFeaturesSection() {
    const features = [
        'Методика основана на современных исследованиях мозга ребёнка',
        'Оригинальный подход приводит к значимым результатам',
        'Длительность 1 час — достаточно для глубокого погружения',
        'Практические рекомендации, а не только теория',
    ];

    return (
        <Container component="section" sx={sectionSx}>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Typography sx={sectionLabelSx}>Почему наши вебинары</Typography>
                    <Typography component="h2" sx={sectionTitleSx}>
                        Как простыми действиями помочь малышу вырасти многогранной личностью
                    </Typography>

                    <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, mt: 3 }}>
                        {features.map((feature, i) => (
                            <Box
                                component="li"
                                key={i}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: 2,
                                    mb: 2.5,
                                    fontSize: { xs: 14, md: 15 },
                                    lineHeight: 1.6,
                                    color: COLORS.textLight,
                                    '&::before': {
                                        content: '"★"',
                                        color: COLORS.primary,
                                        fontSize: 18,
                                        fontWeight: 700,
                                        flexShrink: 0,
                                    },
                                }}
                            >
                                {feature}
                            </Box>
                        ))}
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        component="img"
                        src={ImageLeft}
                        alt="Вебинар"
                        sx={{
                            width: '100%',
                            borderRadius: 2,
                            boxShadow: '0 12px 40px rgba(62, 47, 40, 0.15)',
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

// ==================================================================
// БЛОК 5. ДЛЯ КОГО
// ==================================================================
const FOR_WHOM = [
    'Хотят быстро получить концентрированную информацию по особенностям возраста',
    'Стремятся понимать, какие навыки развивать у ребёнка прямо сейчас',
    'Готовы включиться в процесс развития, экономя время на поиск информации',
    'Желают уменьшить страхи, что что-то упустили в воспитании',
    'Намерены использовать передовые научные методы развития детей',
];

export function ForWhomSection() {
    return (
        <Container component="section" sx={{ ...sectionSx, backgroundColor: COLORS.paperBg }}>
            <Typography sx={sectionLabelSx}>Для кого</Typography>
            <Typography component="h2" sx={sectionTitleSx}>
                Эта система станет вашим спасением, если вы:
            </Typography>

            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, maxWidth: 800 }}>
                {FOR_WHOM.map((text, i) => (
                    <Box
                        component="li"
                        key={i}
                        sx={{
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
// БЛОК 6. РЕЗУЛЬТАТЫ
// ==================================================================
const RESULTS = [
    { bold: 'Уверенность.', rest: 'Вы точно знаете, что и когда делать в каждом возрасте.' },
    { bold: 'Системность.', rest: 'Ежедневная практика + глубокие знания = устойчивый результат.' },
    { bold: 'Спокойствие.', rest: 'Вы ничего не упускаете и не гадаете о нормах развития.' },
    { bold: 'Близость.', rest: 'Вы начнёте по-настоящему понимать своего ребёнка.' },
    { bold: 'Время.', rest: '15 минут в день + 1 час вебинара в месяц — и вы эксперт.' },
];

export function ResultsSection() {
    return (
        <Container component="section" sx={sectionSx}>
            <Typography sx={sectionLabelSx}>Результат</Typography>
            <Typography component="h2" sx={{ ...sectionTitleSx, textAlign: 'center' }}>
                Что вы получите
            </Typography>

            <Grid container spacing={{ xs: 2, md: 2.5 }}>
                {RESULTS.map((item, i) => (
                    <Grid item xs={12} sm={6} md key={i}>
                        <Box
                            sx={{
                                height: '100%',
                                backgroundColor: COLORS.paperBg,
                                border: `1px solid ${COLORS.border}`,
                                borderLeft: `4px solid ${COLORS.primary}`,
                                borderRadius: 1.5,
                                p: { xs: 2.5, md: 3 },
                                fontSize: { xs: 14, md: 15 },
                                lineHeight: 1.55,
                                color: COLORS.textLight,
                                transition: 'all .2s ease',
                                '&:hover': {
                                    boxShadow: '0 4px 12px rgba(166, 124, 82, 0.1)',
                                },
                            }}
                        >
                            <Box component="strong" sx={{ color: COLORS.text, fontWeight: 700, display: 'block', mb: 0.5, fontSize: { xs: 15, md: 16 } }}>
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
// БЛОК 7. ТАРИФЫ
// ==================================================================
const PRICING = [
    {
        title: 'Рассылка: 1 месяц',
        price: '1 500 ₽',
        type: 'Только рассылка',
        features: [
            '1 месяц ежедневных заданий',
            'Тесты и материалы',
            'Доступ к библиотеке',
            'Техподдержка',
        ],
        buttonText: 'Начать за 1500 ₽',
        recommended: false,
    },

    {
        title: 'Комбо: Рассылка + Вебинар',
        price: '3 900 ₽',
        type: 'Выгодно!',
        features: [
            '3 месяца рассылки',
            '1 вебинар на выбор',
            'Запись вебинара',
            'Все материалы',
            'Экономия 500 ₽',
        ],
        buttonText: 'Выбрать комбо',
        recommended: true,
    },
    {
        title: 'Полный доступ: 6 месяцев',
        price: '8 900 ₽',
        type: 'Максимум выгоды',
        features: [
            '6 месяцев рассылки',
            '2 вебинара на выбор',
            'Все записи и материалы',
            'Приоритетная поддержка',
            'Экономия 2000 ₽',
        ],
        buttonText: 'Начать за 8900 ₽',
        recommended: false,
    },
];

export function PricingSection() {
    return (
        <Container component="section" sx={{ ...sectionSx, pb: { xs: 6, md: 10 } }} id="pricing">
            <Typography sx={sectionLabelSx}>Тарифы</Typography>
            <Typography component="h2" sx={{ ...sectionTitleSx, textAlign: 'center' }}>
                Выберите подходящий формат
            </Typography>

            <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mt: 1 }}>
                {PRICING.map((plan, i) => (
                    <Grid item xs={12} sm={6} lg={3} key={i}>
                        <Box
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: plan.recommended ? COLORS.text : COLORS.paperBg,
                                border: `2px solid ${plan.recommended ? COLORS.primary : COLORS.border}`,
                                borderRadius: 2,
                                p: { xs: 2.5, md: 3 },
                                transition: 'all .2s ease',
                                position: 'relative',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: plan.recommended
                                        ? '0 12px 32px rgba(217, 93, 43, 0.3)'
                                        : '0 12px 32px rgba(166, 124, 82, 0.15)',
                                },
                            }}
                        >
                            {plan.recommended && (
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: -12,
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        backgroundColor: COLORS.primary,
                                        color: '#fff',
                                        fontSize: 11,
                                        fontWeight: 700,
                                        px: 2,
                                        py: 0.5,
                                        borderRadius: 1,
                                        letterSpacing: '0.05em',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    РЕКОМЕНДУЕМ
                                </Box>
                            )}

                            <Typography
                                sx={{
                                    fontSize: 12,
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    color: plan.recommended ? 'rgba(255,255,255,0.7)' : COLORS.secondary,
                                    mb: 1,
                                    textAlign: 'center',
                                }}
                            >
                                {plan.type}
                            </Typography>

                            <Typography
                                component="h3"
                                sx={{
                                    fontSize: { xs: 16, md: 18 },
                                    fontWeight: 700,
                                    color: plan.recommended ? '#FFFFFF' : COLORS.text,
                                    mb: 1.5,
                                    textAlign: 'center',
                                    lineHeight: 1.3,
                                }}
                            >
                                {plan.title}
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: { xs: 28, md: 32 },
                                    fontWeight: 800,
                                    color: plan.recommended ? COLORS.primary : COLORS.primary,
                                    mb: 2.5,
                                    textAlign: 'center',
                                }}
                            >
                                {plan.price}
                            </Typography>

                            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, mb: 'auto' }}>
                                {plan.features.map((feature, idx) => (
                                    <Box
                                        component="li"
                                        key={idx}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: 1.5,
                                            mb: 1.25,
                                            fontSize: { xs: 13, md: 14 },
                                            lineHeight: 1.4,
                                            color: plan.recommended ? 'rgba(255,255,255,0.9)' : COLORS.textLight,
                                            '&::before': {
                                                content: '"✓"',
                                                color: plan.recommended ? COLORS.primary : COLORS.secondary,
                                                fontWeight: 700,
                                                flexShrink: 0,
                                            },
                                        }}
                                    >
                                        {feature}
                                    </Box>
                                ))}
                            </Box>

                            <Link
                                href="#"
                                underline="none"
                                sx={{
                                    width: '100%',
                                    height: 44,
                                    mt: 3,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: plan.recommended ? COLORS.primary : COLORS.paperBg,
                                    color: plan.recommended ? '#fff' : COLORS.text,
                                    border: plan.recommended ? 'none' : `1px solid ${COLORS.border}`,
                                    fontSize: 13,
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.03em',
                                    borderRadius: 1,
                                    transition: 'all .2s ease',
                                    '&:hover': {
                                        backgroundColor: plan.recommended ? '#c44f22' : COLORS.background,
                                        borderColor: plan.recommended ? 'transparent' : COLORS.secondary,
                                        transform: 'translateY(-1px)',
                                    },
                                }}
                            >
                                {plan.buttonText}
                            </Link>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

// ==================================================================
// БЛОК 8. CTA
// ==================================================================
export function CTASection() {
    return (
        <Container component="section" sx={{ ...sectionSx, pb: { xs: 6, md: 10 } }}>
            <Box
                sx={{
                    textAlign: 'center',
                    backgroundColor: COLORS.paperBg,
                    border: `2px solid ${COLORS.primary}`,
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
                    Начните развитие вашего малыша сегодня
                </Typography>

                <Typography
                    sx={{
                        color: COLORS.textLight,
                        maxWidth: 600,
                        mx: 'auto',
                        mb: 4,
                        fontSize: { xs: 14, md: 16 },
                        lineHeight: 1.6,
                    }}
                >
                    Присоединяйтесь к системе, которая объединяет ежедневную практику
                    и глубокие знания. Уже более 20 000 мам доверяют нам развитие своих детей.
                </Typography>

                <Link
                    href="#pricing"
                    underline="none"
                    sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: { xs: 48, sm: 52 },
                        px: { xs: 3, sm: 5 },
                        backgroundColor: COLORS.primary,
                        color: '#fff !important',
                        fontSize: { xs: 13, sm: 14 },
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.03em',
                        transition: 'all .2s ease',
                        borderRadius: 1,
                        '&:hover': {
                            backgroundColor: '#c44f22',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 24px rgba(217, 93, 43, 0.3)',
                        },
                    }}
                >
                    Выбрать программу развития
                </Link>

                <Typography
                    sx={{
                        mt: 2.5,
                        fontSize: 13,
                        color: COLORS.textLight,
                        fontStyle: 'italic',
                    }}
                >
                    Гарантия возврата в течение 7 дней, если система вам не подойдёт
                </Typography>
            </Box>
        </Container>
    );
}

// ==================================================================
// ОБЩИЙ КОМПОНЕНТ ЛЕНДИНГА
// ==================================================================
export default function UnifiedLanding() {
    return (
        <Box sx={{ backgroundColor: COLORS.background, minHeight: '100vh' }}>
            <HeroSection />
            <ProductsSection />
            <WebinarsSection />
            <WebinarFeaturesSection />
            <ForWhomSection />
            <ResultsSection />
            <HwPricingSection />
            <CTASection />
        </Box>
    );
}