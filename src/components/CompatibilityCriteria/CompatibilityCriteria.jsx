import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Button,
    Link,
    useTheme,
    useMediaQuery
} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled } from '@mui/material/styles';
import TelegramIcon from "@mui/icons-material/Telegram";

const StyledLink = styled(Link)(({ theme }) => ({
    color: '#D95D2B',
    fontWeight: 500,
    textDecoration: 'none',
    borderBottom: '1px solid transparent',
    transition: 'all 0.2s ease',
    '&:hover': {
        borderBottom: '1px solid #D95D2B',
    }
}));

export default function CompatibilityCriteria() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const noGoCriteria = [
        {
            id: 1,
            text: "Вы ищете «волшебную таблетку» или разовые манипуляции для послушания.",
            icon: <CancelIcon />
        },
        {
            id: 2,
            text: "Вы не готовы менять привычные сценарии своего поведения.",
            icon: <WarningIcon />
        },
        {
            id: 3,
            text: "Вы ждете, что я «исправлю» ребенка без вашего участия.",
            icon: <CancelIcon />
        }
    ];

    const partnerCriteria = [
        {
            id: 1,
            text: "Вы понимаете, что родительство — это самая важная инвестиция в вашей жизни.",
            icon: <CheckCircleIcon />
        },
        {
            id: 2,
            text: "Вы готовы стать архитектором своей семейной системы.",
            icon: <HandshakeIcon />
        },
        {
            id: 3,
            text: "Вы строите отношения на фундаменте знаний, а не случайных эмоций.",
            icon: <PsychologyIcon />
        }
    ];

    return (
        <Box sx={{
            backgroundColor: '#FCF9F3', // Silk Parchment
            py: { xs: 8, md: 12 },
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Декоративные элементы */}
            <Box sx={{
                position: 'absolute',
                top: -100,
                right: -100,
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(217,93,43,0.03) 0%, transparent 70%)',
                zIndex: 0
            }} />

            <Box sx={{
                position: 'absolute',
                bottom: -150,
                left: -150,
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(166,124,82,0.02) 0%, transparent 70%)',
                zIndex: 0
            }} />

            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Главный заголовок */}
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2.2rem', md: '3rem' },
                            fontWeight: 300,
                            color: '#3E2F28', // Bitter Chocolate
                            mb: 3,
                            lineHeight: 1.1,
                            letterSpacing: '-0.5px'
                        }}
                    >
                        Критерии сонастройки:
                        <Box component="span" sx={{
                            display: 'block',
                            fontWeight: 400,
                            color: '#D95D2B', // Signature Orange
                            mt: 1
                        }}>
                            почему я работаю не со всеми
                        </Box>
                    </Typography>

                    <Divider sx={{
                        width: '80px',
                        height: '2px',
                        backgroundColor: '#D95D2B',
                        mx: 'auto',
                        mb: 4
                    }} />
                </Box>

                {/* Вступительный текст */}
                <Paper
                    elevation={0}
                    sx={{
                        backgroundColor: 'rgba(166, 124, 82, 0.05)', // Saddle Tan с прозрачностью
                        borderRadius: 2,
                        p: { xs: 3, md: 4 },
                        mb: 8,
                        borderLeft: '4px solid #D95D2B', // Signature Orange
                        position: 'relative'
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: '1.1rem', md: '1.2rem' },
                            color: '#3E2F28', // Bitter Chocolate
                            lineHeight: 1.7,
                            mb: 2
                        }}
                    >
                        Я отказываю восьми из десяти обратившихся. Моё сопровождение — это не услуга «по запросу», а глубокое сотворчество.
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: '1.1rem', md: '1.2rem' },
                            color: '#3E2F28', // Bitter Chocolate
                            lineHeight: 1.7
                        }}
                    >
                        Я не работаю с теми, кто ищет «быстрые решения» или хочет передать ребенка на «ремонт».
                        Моя система создана для тех, кто уже осознал: будущее детей начинается с глубокой трансформации самого родителя.
                    </Typography>
                </Paper>

                {/* Две колонки: Не по пути / Станем партнерами */}
                <Grid container spacing={6} sx={{ mb: 10 }}>
                    {/* Колонка 1: Нам не по пути */}
                    <Grid item xs={12} md={6}>
                        <Paper
                            elevation={0}
                            sx={{
                                height: '100%',
                                backgroundColor: '#FCF9F3', // Silk Parchment
                                borderRadius: 2,
                                p: 4,
                                border: '1px solid rgba(166, 124, 82, 0.2)', // Saddle Tan
                                position: 'relative',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: -1,
                                    left: -1,
                                    right: -1,
                                    height: '4px',
                                    backgroundColor: '#A67C52', // Saddle Tan
                                    borderTopLeftRadius: '8px',
                                    borderTopRightRadius: '8px'
                                }
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                <Box sx={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(166, 124, 82, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mr: 2
                                }}>
                                    <CancelIcon sx={{ color: '#A67C52', fontSize: 24 }} />
                                </Box>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontSize: '1.5rem',
                                        fontWeight: 500,
                                        color: '#3E2F28' // Bitter Chocolate
                                    }}
                                >
                                    Нам не по пути, если:
                                </Typography>
                            </Box>

                            <List sx={{ p: 0 }}>
                                {noGoCriteria.map((item) => (
                                    <ListItem
                                        key={item.id}
                                        disablePadding
                                        sx={{
                                            mb: 3,
                                            alignItems: 'flex-start'
                                        }}
                                    >
                                        <ListItemIcon sx={{
                                            minWidth: 32,
                                            mt: 0.5
                                        }}>
                                            <Box sx={{ color: '#A67C52' }}>
                                                {item.icon}
                                            </Box>
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={item.text}
                                            primaryTypographyProps={{
                                                fontSize: '1rem',
                                                color: '#3E2F28', // Bitter Chocolate
                                                lineHeight: 1.6
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </Grid>

                    {/* Колонка 2: Станем партнерами */}
                    <Grid item xs={12} md={6}>
                        <Paper
                            elevation={0}
                            sx={{
                                height: '100%',
                                backgroundColor: '#FCF9F3', // Silk Parchment
                                borderRadius: 2,
                                p: 4,
                                border: '1px solid rgba(217, 93, 43, 0.2)', // Signature Orange
                                position: 'relative',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: -1,
                                    left: -1,
                                    right: -1,
                                    height: '4px',
                                    backgroundColor: '#D95D2B', // Signature Orange
                                    borderTopLeftRadius: '8px',
                                    borderTopRightRadius: '8px'
                                }
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                <Box sx={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(217, 93, 43, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mr: 2
                                }}>
                                    <HandshakeIcon sx={{ color: '#D95D2B', fontSize: 24 }} />
                                </Box>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontSize: '1.5rem',
                                        fontWeight: 500,
                                        color: '#3E2F28' // Bitter Chocolate
                                    }}
                                >
                                    Мы станем партнерами, если:
                                </Typography>
                            </Box>

                            <List sx={{ p: 0 }}>
                                {partnerCriteria.map((item) => (
                                    <ListItem
                                        key={item.id}
                                        disablePadding
                                        sx={{
                                            mb: 3,
                                            alignItems: 'flex-start'
                                        }}
                                    >
                                        <ListItemIcon sx={{
                                            minWidth: 32,
                                            mt: 0.5
                                        }}>
                                            <Box sx={{ color: '#D95D2B' }}>
                                                {item.icon}
                                            </Box>
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={item.text}
                                            primaryTypographyProps={{
                                                fontSize: '1rem',
                                                color: '#3E2F28', // Bitter Chocolate
                                                lineHeight: 1.6
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </Grid>
                </Grid>

                {/* Статистика отказа */}
                <Box sx={{
                    textAlign: 'center',
                    mb: 8,
                    p: 4,
                    backgroundColor: 'rgba(166, 124, 82, 0.05)',
                    borderRadius: 2,
                    border: '1px dashed rgba(166, 124, 82, 0.3)'
                }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontSize: { xs: '2rem', md: '2.5rem' },
                            fontWeight: 300,
                            color: '#D95D2B', // Signature Orange
                            mb: 2
                        }}
                    >
                        8 из 10
                    </Typography>
                    <Typography
                        sx={{
                            color: '#3E2F28', // Bitter Chocolate
                            fontSize: '1.1rem',
                            maxWidth: '500px',
                            mx: 'auto'
                        }}
                    >
                        Именно столько обращений я отклоняю. Это сознательный выбор в пользу качества глубины работы.
                    </Typography>
                </Box>

                {/* Ссылка-манифест */}
                <Paper
                    elevation={0}
                    sx={{
                        backgroundColor: 'rgba(217, 93, 43, 0.05)', // Signature Orange с прозрачностью
                        borderRadius: 2,
                        p: { xs: 3, md: 4 },
                        mb: 8,
                        border: '1px solid rgba(217, 93, 43, 0.2)',
                        textAlign: 'center'
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 500,
                            color: '#3E2F28', // Bitter Chocolate
                            mb: 3,
                            fontSize: '1.3rem'
                        }}
                    >
                        Прежде чем подать заявку, обязательно прочтите:
                    </Typography>

                    <StyledLink
                        href="/manifest"
                        underline="none"
                        sx={{
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 1,
                            mb: 2,
                            color: '#D95D2B',
                            '&:hover': {
                                '& .arrow-icon': {
                                    transform: 'translateX(4px)'
                                }
                            }
                        }}
                    >
                        С кем я категорически не работаю
                        <ArrowForwardIcon
                            className="arrow-icon"
                            sx={{
                                fontSize: 18,
                                transition: 'transform 0.2s ease'
                            }}
                        />
                    </StyledLink>

                    <Typography
                        sx={{
                            color: '#A67C52', // Saddle Tan
                            fontSize: '0.95rem',
                            fontStyle: 'italic'
                        }}
                    >
                        Прочтите манифест — это сэкономит время нам обоим
                    </Typography>
                </Paper>

                {/* Кнопка CTA */}
                <Box sx={{ textAlign: 'center' }}>

                    <Link
                        href="https://t.me/MrkDigital?text=запрос на собеседование"
                        target="_blank"
                        underline="none"
                        sx={{
                            height: 56,
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 2,
                            backgroundColor: 'transparent',
                            color: '#3E2F28', // Bitter Chocolate
                            fontSize: '0.95rem',
                            fontWeight: 500,
                            letterSpacing: '0.02em',
                            transition: 'all 0.3s ease',
                            borderRadius: '50px',
                            px: 4,
                            minWidth: { sm: 220 },
                            textTransform: 'none',
                            border: '1px solid #A67C52', // Saddle Tan
                            '&:hover': {
                                backgroundColor: 'rgba(166, 124, 82, 0.05)',
                                borderColor: '#D95D2B', // Signature Orange
                                transform: 'translateY(-2px)'
                            }
                        }}
                    >
                        <TelegramIcon sx={{ fontSize: 20 }} />
                        Подать заявку на собеседование
                    </Link>
                    <Typography
                        sx={{
                            color: '#A67C52', // Saddle Tan
                            fontSize: '0.9rem',
                            fontStyle: 'italic',
                            maxWidth: '400px',
                            mx: 'auto',
                            mt: 2
                        }}
                    >
                        Первый шаг — 30-минутное предварительное собеседование
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}