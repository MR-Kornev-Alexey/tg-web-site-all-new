import React from 'react';
import {
    Paper,
    Box,
    Grid,
    Container,
    Chip,
    Typography,
    alpha
} from '@mui/material';
import {
    PsychologyAlt as PsychologyIcon,
    ChildCare as ChildCareIcon,
    Group as GroupIcon,
    School as SchoolIcon,
    BusinessCenter as BusinessIcon,
    FamilyRestroom as FamilyIcon,
    EmojiObjects as BrainIcon
} from '@mui/icons-material';
import ImageLeft from "../../img/avatar-900.png";

// Цветовая схема в соответствии с общим дизайном
const colors = {
    primary: '#D95D2B',      // Оранжевый акцент
    secondary: '#A67C52',     // Золотисто-коричневый
    background: '#FCF9F3',    // Светлый фон
    text: '#3E2F28',          // Темно-коричневый для текста
    textLight: '#6B5A4E',     // Светло-коричневый для второстепенного текста
    paperBg: '#FFFFFF',       // Белый для карточек
    border: 'rgba(166, 124, 82, 0.2)'
};

export default function Author() {
    const expertiseItems = [
        {
            icon: <ChildCareIcon />,
            title: "Педиатрия",
            description: "Врач-педиатр с многолетним опытом",
            color: colors.primary
        },
        {
            icon: <PsychologyIcon />,
            title: "Психология",
            description: "Семейный психолог",
            color: colors.secondary
        },
        {
            icon: <GroupIcon />,
            title: "1000+ семей",
            description: "Успешных кейсов",
            color: colors.primary
        },
        {
            icon: <SchoolIcon />,
            title: "MBA",
            description: "Мастер делового администрирования",
            color: colors.secondary
        },
        {
            icon: <BusinessIcon />,
            title: "Бизнес-леди",
            description: "Предприниматель",
            color: colors.primary
        },
        {
            icon: <FamilyIcon />,
            title: "Мама и бабушка",
            description: "Жена, мама троих сыновей, бабушка",
            color: colors.secondary
        },
        {
            icon: <BrainIcon />,
            title: "Нейропсихология",
            description: "Сертификат Массачусетского технологического института",
            color: colors.primary
        }
    ];

    return (
        <Box
            component="section"
            sx={{
                py: { xs: 8, md: 12 },
                backgroundColor: colors.background,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -100,
                    right: -100,
                    width: '400px',
                    height: '400px',
                    background: `radial-gradient(circle, ${alpha(colors.primary, 0.03)} 0%, transparent 70%)`,
                    zIndex: 0
                }
            }}
        >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Заголовок секции */}
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography
                        component="span"
                        sx={{
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            letterSpacing: '4px',
                            textTransform: 'uppercase',
                            color: colors.secondary,
                            mb: 2,
                            display: 'block'
                        }}
                    >
                        Коротко обо мне
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2rem', md: '2.8rem' },
                            fontWeight: 300,
                            color: '#3E2F28',
                            mb: 3,
                            letterSpacing: '-0.5px'
                        }}
                    >
                        Сплав медицины, нейробиологии и системы воспитания
                    </Typography>
                </Box>

                <Grid container spacing={6}>
                    {/* Фото и основная информация */}
                    <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: { xs: 'center', md: 'flex-start' }
                        }}
                    >
                        <Paper
                            elevation={0}
                            sx={{
                                backgroundColor: 'transparent',
                                position: 'relative',
                                width: 'fit-content',
                                mb: 3
                            }}
                        >
                            <Box
                                component="img"
                                src={ImageLeft}
                                alt="Елена Корнева"
                                sx={{
                                    width: { xs: 240, md: 280 },
                                    height: 'auto',
                                    display: 'block',
                                    borderRadius: '4px',
                                    boxShadow: `0 20px 40px ${alpha(colors.text, 0.1)}`,
                                    mb: 2
                                }}
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: 16,
                                    right: 16,
                                    backgroundColor: colors.primary,
                                    color: 'white',
                                    padding: '8px 16px',
                                    borderRadius: '50px',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    boxShadow: `0 4px 12px ${alpha(colors.primary, 0.3)}`
                                }}
                            >
                                Эксперт
                            </Box>
                        </Paper>

                        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontSize: '1.8rem',
                                    fontWeight: 500,
                                    color: colors.text,
                                    mb: 1
                                }}
                            >
                                Елена Корнева
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '1.1rem',
                                    color: colors.secondary,
                                    mb: 2
                                }}
                            >
                                Врач-педиатр, психолог, MBA
                            </Typography>
                            <Chip
                                label="Подписчиков: 700K+"
                                sx={{
                                    backgroundColor: alpha(colors.primary, 0.1),
                                    color: colors.primary,
                                    fontWeight: 500,
                                    border: `1px solid ${alpha(colors.primary, 0.2)}`
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* Блоки с экспертизой */}
                    <Grid item xs={12} md={8}>
                        <Grid container spacing={3}>
                            {expertiseItems.map((item, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 3,
                                            height: '100%',
                                            backgroundColor: colors.paperBg,
                                            borderRadius: 2,
                                            border: `1px solid ${colors.border}`,
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: `0 12px 24px ${alpha(colors.text, 0.08)}`,
                                                borderColor: alpha(colors.primary, 0.3)
                                            }
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                            <Box
                                                sx={{
                                                    backgroundColor: alpha(item.color, 0.1),
                                                    color: item.color,
                                                    width: 48,
                                                    height: 48,
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    flexShrink: 0
                                                }}
                                            >
                                                {item.icon}
                                            </Box>
                                            <Box>
                                                <Typography
                                                    sx={{
                                                        fontSize: '1.1rem',
                                                        fontWeight: 600,
                                                        color: colors.text,
                                                        mb: 0.5
                                                    }}
                                                >
                                                    {item.title}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontSize: '0.9rem',
                                                        color: colors.textLight,
                                                        lineHeight: 1.5
                                                    }}
                                                >
                                                    {item.description}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

                {/* Достижения в цифрах */}
                <Box
                    sx={{
                        mt: 8,
                        pt: 6,
                        borderTop: `1px solid ${colors.border}`
                    }}
                >
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={6} sm={3}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography
                                    sx={{
                                        fontSize: '2.5rem',
                                        fontWeight: 300,
                                        color: colors.primary,
                                        lineHeight: 1
                                    }}
                                >
                                    1000+
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '0.9rem',
                                        color: colors.textLight,
                                        mt: 1
                                    }}
                                >
                                    успешных семей
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography
                                    sx={{
                                        fontSize: '2.5rem',
                                        fontWeight: 300,
                                        color: colors.primary,
                                        lineHeight: 1
                                    }}
                                >
                                    700K+
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '0.9rem',
                                        color: colors.textLight,
                                        mt: 1
                                    }}
                                >
                                    подписчиков
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography
                                    sx={{
                                        fontSize: '2.5rem',
                                        fontWeight: 300,
                                        color: colors.primary,
                                        lineHeight: 1
                                    }}
                                >
                                    28+
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '0.9rem',
                                        color: colors.textLight,
                                        mt: 1
                                    }}
                                >
                                    лет практики
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography
                                    sx={{
                                        fontSize: '2.5rem',
                                        fontWeight: 300,
                                        color: colors.primary,
                                        lineHeight: 1
                                    }}
                                >
                                    3
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '0.9rem',
                                        color: colors.textLight,
                                        mt: 1
                                    }}
                                >
                                    образования
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}