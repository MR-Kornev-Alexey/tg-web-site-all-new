import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from "../Typography/Typography";
// Замените на актуальное изображение для этого курса (например, спокойная мама, медитация или теплый момент)
import ImageLeft from "../../img/twenty.png";

// ============ ЦВЕТА ============
const COLORS = {
    primary: '#964321',      // Теплый, заземляющий акцентный цвет
    secondary: '#A67C52',    // Мягкий вторичный цвет
    background: '#FCF9F3',   // Спокойный, "бумажный" фон
    text: '#3E2F28',         // Глубокий темный для текста
    textLight: '#6B5A4E',    // Приглушенный текст
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
                        20 техник мгновенного восстановления:{' '}
                        <Box component="span" sx={{ color: COLORS.primary }}>
                            верните себе энергию и радость материнства
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
                        «Просто отдохни» — не спасет! Выгорание и усталость не решаются обычным отдыхом.
                        Узнайте, как освободить энергию и вернуть эмоциональную устойчивость с помощью проверенных методов,
                        которые работают здесь и сейчас.
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
                            alt="Мама в состоянии ресурса и спокойствия"
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
                            href="https://t.me/energy_korneva_bot"
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
                                '&:visited, &:active': { color: '#fff !important' },
                            }}
                        >
                            Получить курс
                        </Link>

                        <Link
                            href="#program"
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
                                '&:visited, &:active': { color: COLORS.text },
                            }}
                        >
                            Смотреть программу
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
                        Автор: Эксперт по эмоциональному выгоранию и ресурсным состояниям для мам.
                        Более 10 000 женщин вернули себе силы с помощью этой системы.
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
                        alt="Мама в состоянии ресурса и спокойствия"
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
// БЛОК 2. ПРОБЛЕМА (Почему «просто отдохни» не работает)
// ==================================================================
export function ProblemSection() {
    const problems = [
        {
            icon: '🔄',
            title: 'Ловушка «просто отдохни»',
            description: 'Ваш организм эволюционно настроен так, чтобы вы максимально концентрировались на ребенке и минимально – на себе. Обычный сон или пауза не перезагружают эту систему.',
            color: COLORS.secondary,
        },
        {
            icon: '📉',
            title: 'Накопительный эффект',
            description: 'Усталость копится месяцами. Стандартные советы вроде «выпей чаю» или «посмотри сериал» перестают работать, потому что не касаются корня проблемы.',
            color: COLORS.textLight,
        },
        {
            icon: '💡',
            title: 'Работа с причиной',
            description: 'Наш подход — это не просто расслабление. Это точечная работа с физиологическими и эмоциональными причинами усталости, дающая моментальный эффект.',
            color: COLORS.primary,
        },
    ];

    return (
        <Container component="section" sx={sectionSx} id="problem">
            <Typography sx={sectionLabelSx}>Важно понимать</Typography>
            <Typography component="h2" sx={{ ...sectionTitleSx, textAlign: 'center' }}>
                Почему выгорание не уходит после{' '}
                <Box component="span" sx={{ color: COLORS.primary }}>выходного дня?</Box>
            </Typography>

            <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mt: 2 }}>
                {problems.map((item, i) => (
                    <Grid item xs={12} md={4} key={i}>
                        <Box
                            sx={{
                                height: '100%',
                                backgroundColor: COLORS.paperBg,
                                border: `1px solid ${COLORS.border}`,
                                borderRadius: 3,
                                p: { xs: 3, md: 4 },
                                transition: 'all .3s ease',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: `0 12px 32px ${item.color}15`,
                                    borderColor: item.color,
                                },
                            }}
                        >
                            <Box sx={{ fontSize: 40, mb: 2, textAlign: 'center' }}>{item.icon}</Box>
                            <Typography
                                component="h3"
                                sx={{
                                    fontSize: { xs: 18, md: 20 },
                                    fontWeight: 700,
                                    color: COLORS.text,
                                    textAlign: 'center',
                                    mb: 1.5,
                                }}
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: 14, md: 15 },
                                    lineHeight: 1.6,
                                    color: COLORS.textLight,
                                    textAlign: 'center',
                                }}
                            >
                                {item.description}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

// ==================================================================
// БЛОК 3. ПРОГРАММА КУРСА (Что внутри)
// ==================================================================
const COURSE_CONTENT = [
    {
        icon: '⚡',
        title: 'Техники экстренной помощи',
        desc: 'Инструменты, которые можно применять здесь и сейчас, когда силы на исходе, а ребенок требует внимания.'
    },
    {
        icon: '⏱️',
        title: 'Быстрые методики восстановления',
        desc: 'Никаких сложных духовных практик и лишнего времени. Только то, что работает за 5–10 минут в условиях реальной жизни.'
    },
    {
        icon: '🧠',
        title: 'Физиологические инструменты',
        desc: 'Настройки дыхания, тела и фокуса внимания, которые заставляют энергию появляться саму по себе, без насилия над собой.'
    },
    {
        icon: '🛡️',
        title: 'Профилактика выгорания',
        desc: 'Как выстроить личный ритуал, чтобы быт и рутина перестали загонять вас в хроническую усталость.'
    },
];

export function ProgramSection() {
    return (
        <Container component="section" sx={{ ...sectionSx, backgroundColor: COLORS.paperBg }} id="program">
            <Typography sx={sectionLabelSx}>Программа</Typography>
            <Typography component="h2" sx={{ ...sectionTitleSx, textAlign: 'center' }}>
                В курсе вы найдете{' '}
                <Box component="span" sx={{ color: COLORS.primary }}>20+ проверенных техник</Box>
            </Typography>

            <Grid container spacing={{ xs: 2, md: 3 }}>
                {COURSE_CONTENT.map((item, i) => (
                    <Grid item xs={12} sm={6} md={3} key={i}>
                        <Box
                            sx={{
                                height: '100%',
                                backgroundColor: COLORS.background,
                                border: `1px solid ${COLORS.border}`,
                                borderRadius: 2,
                                p: { xs: 2.5, md: 3 },
                                transition: 'all .2s ease',
                                '&:hover': {
                                    borderColor: COLORS.primary,
                                    transform: 'translateY(-3px)',
                                    boxShadow: '0 8px 24px rgba(217, 93, 43, 0.1)',
                                },
                            }}
                        >
                            <Box sx={{ fontSize: 32, mb: 1.5 }}>{item.icon}</Box>
                            <Typography
                                component="h3"
                                sx={{
                                    fontSize: { xs: 16, md: 18 },
                                    fontWeight: 700,
                                    color: COLORS.text,
                                    mb: 1,
                                    lineHeight: 1.3,
                                }}
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: 13, md: 14 },
                                    lineHeight: 1.55,
                                    color: COLORS.textLight,
                                }}
                            >
                                {item.desc}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            <Box
                sx={{
                    mt: 5,
                    p: { xs: 2.5, md: 3.5 },
                    backgroundColor: 'rgba(150, 67, 33, 0.06)',
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
                    <Box component="strong" sx={{ color: COLORS.primary }}>Это не просто расслабление.</Box> Это работа с причиной усталости,
                    которая даст моментальный эффект и вернет вам ощущение, что вы управляете своим состоянием.
                </Typography>
            </Box>
        </Container>
    );
}

// ==================================================================
// БЛОК 4. ДЛЯ КОГО
// ==================================================================
const FOR_WHOM = [
    'Чувствуете хроническую усталость, даже если вроде бы спали ночью.',
    'Ловите себя на мысли, что совет «просто отдохни» вызывает только раздражение.',
    'Хотите научиться переключаться и сохранять спокойствие в любых, даже стрессовых ситуациях.',
    'Устали от эмоциональных качелей и хотите стабилизировать свое настроение.',
    'Мечтаете вернуть ощущение легкости и вдохновения, чтобы материнство не казалось марафоном без финиша.',
];

export function ForWhomSection() {
    return (
        <Container component="section" sx={{ ...sectionSx, backgroundColor: COLORS.background }}>
            <Typography sx={sectionLabelSx}>Для кого</Typography>
            <Typography component="h2" sx={sectionTitleSx}>
                Этот курс станет вашим спасением, если вы:
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
// БЛОК 5. РЕЗУЛЬТАТЫ
// ==================================================================
const RESULTS = [
    { bold: 'Энергия и ресурсность.', rest: 'Вы станете более энергичной, быт и рутина перестанут загонять вас в выгорание.' },
    { bold: 'Эмоциональная стабильность.', rest: 'Настроение выравнивается, а эмоции перестают «качать» из стороны в сторону.' },
    { bold: 'Устойчивость к стрессу.', rest: 'Вы легче переживаете сложные ситуации и сохраняете спокойствие в любых условиях.' },
    { bold: 'Легкость и вдохновение.', rest: 'Материнство больше не кажется марафоном без финиша, возвращаются силы радоваться моменту.' },
];

export function ResultsSection() {
    return (
        <Container component="section" sx={sectionSx}>
            <Typography sx={sectionLabelSx}>Результат</Typography>
            <Typography component="h2" sx={{ ...sectionTitleSx, textAlign: 'center' }}>
                Что вы получите после внедрения техник
            </Typography>

            <Grid container spacing={{ xs: 2, md: 2.5 }}>
                {RESULTS.map((item, i) => (
                    <Grid item xs={12} sm={6} md={6} key={i}>
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
// БЛОК 6. ТАРИФЫ
// ==================================================================
const PRICING = [
    {
        title: 'Самостоятельный',
        price: '2 900 ₽',
        type: 'Базовый',
        features: [
            'Доступ ко всем 20 техникам',
            'Видеоинструкции к каждой практике',
            'Чек-лист «Скорая помощь при усталости»',
            'Доступ на 3 месяца',
        ],
        buttonText: 'Выбрать',
        recommended: false,
    },
    {
        title: 'С поддержкой',
        price: '4 900 ₽',
        type: 'Рекомендуем',
        features: [
            'Все материалы тарифа «Самостоятельный»',
            'Доступ в закрытый чат с единомышленницами',
            '2 групповых Q&A сессии с экспертом',
            'Доступ на 6 месяцев',
            'Бонус: Аудио-медитации для сна',
        ],
        buttonText: 'Начать восстановление',
        recommended: true,
    },
    {
        title: 'VIP: Личная работа',
        price: '9 900 ₽',
        type: 'Максимум внимания',
        features: [
            'Все материалы курса навсегда',
            'Личная консультация с экспертом (60 мин)',
            'Индивидуальный план восстановления',
            'Приоритетная поддержка в Telegram',
        ],
        buttonText: 'Записаться',
        recommended: false,
    },
];

export function PricingSection() {
    return (
        <Container component="section" sx={{ ...sectionSx, pb: { xs: 6, md: 10 }, backgroundColor: COLORS.paperBg }} id="pricing">
            <Typography sx={sectionLabelSx}>Тарифы</Typography>
            <Typography component="h2" sx={{ ...sectionTitleSx, textAlign: 'center' }}>
                Выберите подходящий формат участия
            </Typography>

            <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mt: 1 }}>
                {PRICING.map((plan, i) => (
                    <Grid item xs={12} sm={6} lg={4} key={i}>
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
                                    color: COLORS.primary,
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
// БЛОК 7. CTA (Призыв к действию)
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
                    Начните возвращать себе себя уже сегодня
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
                    Вам не нужно ждать идеального момента или отпуска.
                    Первые техники займут всего 5 минут, но дадут ощутимый прилив сил прямо сейчас.
                </Typography>

                <Link
                    href="https://t.me/energy_korneva_bot"
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
                    Получить доступ к техникам
                </Link>

                <Typography
                    sx={{
                        mt: 2.5,
                        fontSize: 13,
                        color: COLORS.textLight,
                        fontStyle: 'italic',
                    }}
                >
                    Гарантия возврата средств в течение 7 дней, если вы не почувствуете изменений
                </Typography>
            </Box>
        </Container>
    );
}

// ==================================================================
// ОБЩИЙ КОМПОНЕНТ ЛЕНДИНГА
// ==================================================================
export default function RecoveryLanding() {
    return (
        <Box sx={{ backgroundColor: COLORS.background, minHeight: '100vh' }}>
            <HeroSection />
            <ProblemSection />
            <ProgramSection />
            <ForWhomSection />
            <ResultsSection />
            {/*<PricingSection />*/}
            <CTASection />
        </Box>
    );
}