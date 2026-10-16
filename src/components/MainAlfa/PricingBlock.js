import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from "../Typography/Typography";
import {
    Paper,
    useTheme,
    alpha,
    Button,
    Chip,
    Divider,
    Stack
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import StarIcon from '@mui/icons-material/Star';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GroupsIcon from '@mui/icons-material/Groups';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function PricingBlock() {
    const theme = useTheme();

    const tariffs = [
        {
            name: "АЛЬФА-СТАРТ",
            subtitle: "Для дисциплинированных родителей с четким пониманием проблемы, которые верят в свои силы",
            color: '#A67C52', // Saddle Tan
            price: "5900",
            period: "₽",
            popular: false,
            icon: <RocketLaunchIcon />,
            features: [
                {
                    text: "Полный доступ к 3-недельной программе интенсива",
                    subtext: "Все видео-уроки, готовые методички и гайды",
                    icon: <VideoLibraryIcon />
                },
                {
                    text: "«Игротека Альфа-Лидера»",
                    subtext: "Набор  игр для отработки навыков с ребенком (в формате PDF и/или видео-инструкций)",
                    icon: <EmojiEventsIcon />
                },
                {
                    text: "Чек-листы и шаблоны для печати",
                    subtext: "Готовые скрипты для ребенка, карточки для игр",
                    icon: <AssignmentIcon />
                },
                {
                    text: "Финальный созвон с Еленоц Корневой",
                    subtext: "Ответы на вопросы по итогам интенсива",
                    icon: <PsychologyAltIcon />
                }
            ],
            buttonText: "Выбрать АЛЬФА-СТАРТ",
            buttonVariant: "outlined",
            link: "https://payform.ru/3u8MnQ3/"
        },
        {
            name: "АЛЬФА-ПРО",
            subtitle: "Для родителей, которые не хотят рисковать, сомневаются, нуждаются в поддержке и точечных советах под свою ситуацию",
            color: '#D95D2B', // Signature Orange
            price: "14900",
            period: "₽",
            popular: true,
            icon: <StarIcon />,
            features: [
                {
                    text: "ВСЁ, что в тарифе 'АЛЬФА-СТАРТ'",
                    subtext: "Полный доступ ко всем материалам основной программы",
                    icon: <CheckCircleOutlineIcon />
                },
                {
                    text: "Кураторство эксперта",
                    subtext: "Ответы на ваши вопросы в общем чате 5 раз в неделю (до 3 вопросов в день). Формат: голосовые или текстовые сообщения",
                    icon: <SupportAgentIcon />
                },
                {
                    text: "Индивидуальная карта развития",
                    subtext: "40-минутная онлайн-сессия в ходе интенсива с разбором прогресса вашего ребенка и составлением персонального плана действий на следующие 3 месяца",
                    icon: <CalendarTodayIcon />
                },
                {
                    text: "Приоритетная проверка домашних заданий",
                    subtext: "Ваши задания проверяются в первую очередь с детальными комментариями",
                    icon: <TrendingUpIcon />
                }
            ],
            buttonText: "Выбрать АЛЬФА-ПРО",
            buttonVariant: "outlined",
            link: "https://payform.ru/658MnSb/"
        }
    ];

    return (
        <Box id="pricing" sx={{
            backgroundColor: '#FCF9F3',
            py: { xs: 8, md: 12 },
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Декоративные элементы */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(217,93,43,0.03) 0%, transparent 50%)',
                zIndex: 0,
            }} />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Заголовок */}
                <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
                    <Typography
                        component="h2"
                        sx={{
                            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                            fontWeight: 300,
                            lineHeight: 1.1,
                            color: '#3E2F28',
                            mb: 2,
                            letterSpacing: '-0.5px'
                        }}
                    >
                        Выберите подходящий формат
                        <Box component="span" sx={{
                            display: 'block',
                            fontWeight: 400,
                            color: '#D95D2B',
                            mt: 1
                        }}>
                            участия в программе
                        </Box>
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: '1.1rem', sm: '1.2rem' },
                            lineHeight: 1.6,
                            color: '#A67C52',
                            maxWidth: '800px',
                            mx: 'auto',
                            mb: 4
                        }}
                    >
                        Оба тарифа включают полную программу трансформации. Разница — в уровне поддержки
                    </Typography>
                </Box>

                {/* Тарифы */}
                <Grid container spacing={4} sx={{ mb: 8 }}>
                    {tariffs.map((tariff, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    height: '100%',
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    border: `2px solid ${tariff.color}`,
                                    backgroundColor: '#FFFFFF',
                                    position: 'relative',
                                    transition: 'all 0.3s ease',
                                    transform: tariff.popular ? 'scale(1.02)' : 'scale(1)',
                                    '&:hover': {
                                        transform: tariff.popular ? 'scale(1.03)' : 'scale(1.01)',
                                        boxShadow: `0 20px 40px ${alpha(tariff.color, 0.15)}`
                                    }
                                }}
                            >
                                {/* Популярный чип */}
                                {tariff.popular && (
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 33,
                                            right: -46,
                                            backgroundColor: tariff.color,
                                            color: '#FFFFFF',
                                            padding: '6px 40px',
                                            transform: 'rotate(45deg)',
                                            fontSize: '0.8rem',
                                            fontWeight: 600,
                                            letterSpacing: '1px',
                                            zIndex: 2
                                        }}
                                    >
                                        РЕКОМЕНДУЕМ
                                    </Box>
                                )}

                                {/* Шапка тарифа */}
                                <Box sx={{
                                    p: 4,
                                    backgroundColor: alpha(tariff.color, 0.08),
                                    borderBottom: `1px solid ${alpha(tariff.color, 0.2)}`
                                }}>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 2,
                                        mb: 2
                                    }}>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: 60,
                                            height: 60,
                                            backgroundColor: tariff.color,
                                            color: '#FFFFFF',
                                            borderRadius: '50%'
                                        }}>
                                            {tariff.icon}
                                        </Box>
                                        <Box>
                                            <Typography
                                                sx={{
                                                    fontSize: '1.8rem',
                                                    fontWeight: 700,
                                                    color: tariff.color,
                                                    lineHeight: 1
                                                }}
                                            >
                                                {tariff.name}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: '0.9rem',
                                                    color: '#3E2F28',
                                                    fontStyle: 'italic',
                                                    mt: 0.5
                                                }}
                                            >
                                                {tariff.subtitle}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* Цена */}
                                    <Box sx={{ textAlign: 'center', mt: 3 }}>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'baseline',
                                            justifyContent: 'center',
                                            gap: 1
                                        }}>
                                            <Typography
                                                sx={{
                                                    fontSize: '3.5rem',
                                                    fontWeight: 300,
                                                    color: tariff.color,
                                                    lineHeight: 1
                                                }}
                                            >
                                                {tariff.price}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: '1.5rem',
                                                    fontWeight: 400,
                                                    color: tariff.color
                                                }}
                                            >
                                                {tariff.period}
                                            </Typography>
                                        </Box>
                                        <Typography
                                            sx={{
                                                fontSize: '0.9rem',
                                                color: '#A67C52',
                                                mt: 1
                                            }}
                                        >
                                            Единоразовый платёж
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Список преимуществ */}
                                <Box sx={{ p: 4 }}>
                                    <Typography
                                        sx={{
                                            fontSize: '1.1rem',
                                            fontWeight: 600,
                                            color: '#3E2F28',
                                            mb: 3,
                                            textAlign: 'center'
                                        }}
                                    >
                                        Что входит в тариф:
                                    </Typography>

                                    <Stack spacing={3}>
                                        {tariff.features.map((feature, featureIndex) => (
                                            <Box
                                                key={featureIndex}
                                                sx={{
                                                    display: 'flex',
                                                    gap: 2,
                                                    p: 2,
                                                    borderRadius: 2,
                                                    backgroundColor: alpha('#FCF9F3', 0.5),
                                                    border: `1px solid ${alpha(tariff.color, 0.1)}`,
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        borderColor: tariff.color,
                                                        backgroundColor: alpha(tariff.color, 0.05)
                                                    }
                                                }}
                                            >
                                                <Box sx={{
                                                    color: tariff.color,
                                                    flexShrink: 0,
                                                    mt: 0.5
                                                }}>
                                                    {feature.icon}
                                                </Box>
                                                <Box>
                                                    <Typography
                                                        sx={{
                                                            fontSize: '1rem',
                                                            fontWeight: 500,
                                                            color: '#3E2F28',
                                                            mb: 0.5
                                                        }}
                                                    >
                                                        {feature.text}
                                                    </Typography>
                                                    <Typography
                                                        sx={{
                                                            fontSize: '0.85rem',
                                                            color: '#A67C52',
                                                            lineHeight: 1.5
                                                        }}
                                                    >
                                                        {feature.subtext}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        ))}
                                    </Stack>

                                    {/* Кнопка */}
                                    <Box sx={{ mt: 4 }}>
                                        <Button
                                            fullWidth
                                            href={tariff.link}
                                            variant={tariff.buttonVariant}
                                            sx={{
                                                py: 2,
                                                borderRadius: '50px',
                                                fontSize: '1.1rem',
                                                fontWeight: 600,
                                                textTransform: 'none',
                                                letterSpacing: '0.5px',
                                                backgroundColor: tariff.buttonVariant === 'contained' ? tariff.color : 'transparent',
                                                color: tariff.buttonVariant === 'contained' ? '#FFFFFF' : tariff.color,
                                                borderColor: tariff.color,
                                                borderWidth: 2,
                                                '&:hover': {
                                                    backgroundColor: tariff.buttonVariant === 'contained' ?
                                                        alpha(tariff.color, 0.9) :
                                                        alpha(tariff.color, 0.1),
                                                    transform: 'translateY(-2px)',
                                                    boxShadow: `0 8px 20px ${alpha(tariff.color, 0.3)}`
                                                }
                                            }}
                                        >
                                            {tariff.buttonText}
                                        </Button>
                                    </Box>
                                </Box>

                                {/* Дополнительная информация */}
                                {tariff.popular && (
                                    <Box sx={{
                                        p: 3,
                                        backgroundColor: alpha(tariff.color, 0.05),
                                        borderTop: `1px solid ${alpha(tariff.color, 0.2)}`
                                    }}>
                                        <Typography
                                            sx={{
                                                fontSize: '0.9rem',
                                                color: tariff.color,
                                                textAlign: 'center',
                                                fontWeight: 500
                                            }}
                                        >
                                            ⭐ Вы не останетесь один на один с проблемой
                                        </Typography>
                                    </Box>
                                )}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {/* Примечание для всех тарифов */}
                <Paper
                    elevation={0}
                    sx={{
                        backgroundColor: alpha('#3E2F28', 0.05),
                        borderRadius: 3,
                        p: { xs: 3, md: 4 },
                        border: '1px solid rgba(166, 124, 82, 0.3)',
                        maxWidth: '800px',
                        mx: 'auto'
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        mb: 2
                    }}>
                        <InfoIcon sx={{ color: '#D95D2B' }} />
                        <Typography
                            sx={{
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                color: '#3E2F28'
                            }}
                        >
                            Важная информация для всех участников:
                        </Typography>
                    </Box>

                    <Box sx={{ pl: 4 }}>
                        <Typography
                            sx={{
                                fontSize: '1rem',
                                color: '#3E2F28',
                                lineHeight: 1.6,
                                mb: 2
                            }}
                        >
                            Для всех тарифов доступ к материалам остается навсегда. По завершении вы можете нажать кнопку "Рестарт" и заново получать задания.
                        </Typography>

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: 1.5
                                }}>
                                    <CheckCircleOutlineIcon sx={{
                                        fontSize: 18,
                                        color: '#D95D2B',
                                        flexShrink: 0,
                                        mt: 0.25
                                    }} />
                                    <Typography sx={{
                                        fontSize: '0.9rem',
                                        color: '#3E2F28'
                                    }}>
                                        Все материалы доступны в личном кабинете 24/7
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: 1.5
                                }}>
                                    <CheckCircleOutlineIcon sx={{
                                        fontSize: 18,
                                        color: '#D95D2B',
                                        flexShrink: 0,
                                        mt: 0.25
                                    }} />
                                    <Typography sx={{
                                        fontSize: '0.9rem',
                                        color: '#3E2F28'
                                    }}>
                                        Можно проходить программу в удобном темпе
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: 1.5
                                }}>
                                    <CheckCircleOutlineIcon sx={{
                                        fontSize: 18,
                                        color: '#D95D2B',
                                        flexShrink: 0,
                                        mt: 0.25
                                    }} />
                                    <Typography sx={{
                                        fontSize: '0.9rem',
                                        color: '#3E2F28'
                                    }}>
                                        Подходит для нескольких детей в семье
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: 1.5
                                }}>
                                    <CheckCircleOutlineIcon sx={{
                                        fontSize: 18,
                                        color: '#D95D2B',
                                        flexShrink: 0,
                                        mt: 0.25
                                    }} />
                                    <Typography sx={{
                                        fontSize: '0.9rem',
                                        color: '#3E2F28'
                                    }}>
                                        Обновления программы — бесплатно для всех
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>

                {/* Гарантия */}
                <Box sx={{
                    textAlign: 'center',
                    mt: 8,
                    maxWidth: '600px',
                    mx: 'auto'
                }}>
                    <Typography
                        sx={{
                            fontSize: { xs: '1.5rem', md: '1.8rem' },
                            fontWeight: 300,
                            color: '#3E2F28',
                            mb: 3,
                            fontStyle: 'italic'
                        }}
                    >
                        "Вы можете купить дорогой рюкзак. Но лучшая инвестиция в школьную жизнь — это уверенность в себе, которую не отнимет ни один одноклассник"
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

// Дополнительная иконка
function InfoIcon(props) {
    return (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="currentColor"/>
        </svg>
    );
}