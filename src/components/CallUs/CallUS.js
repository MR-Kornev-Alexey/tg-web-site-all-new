import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'; // Добавлен импорт
import Grid from "@mui/material/Grid";
import TelegramIcon from '@mui/icons-material/Telegram';
import Link from "@mui/material/Link";
import SectionHeader from "../SectionHeader/SectionHeader";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function CallUS({
                                   title = "Остались вопросы?",
                                   subtitle = "Получите персональную консультацию", // Исправлено: default значение
                                   description = "Отправьте сообщение в Telegram, и мы свяжемся с вами в течение 24 часов для предварительной беседы.",
                                   buttonText = "Связаться в Telegram",
                                   telegramLink = "https://t.me/MrkDigital?text=запрос на первичную консультацию",
                                   variant = "default" // 'default' или 'minimal'
                               }) {
    return (
        <Box sx={{
            py: variant === 'minimal' ? 4 : { xs: 6, md: 8 },
            position: 'relative',
            overflow: 'hidden'
        }}>
            {variant === 'default' && (
                <>
                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '1px',
                        background: 'linear-gradient(90deg, transparent, rgba(217, 93, 43, 0.3), transparent)',
                        opacity: 0.5
                    }} />

                    <Box sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '1px',
                        background: 'linear-gradient(90deg, transparent, rgba(166, 124, 82, 0.3), transparent)',
                        opacity: 0.5
                    }} />
                </>
            )}

            <Container maxWidth="md">
                {variant === 'default' ? (
                    <SectionHeader
                        title={title}
                        subtitle={subtitle}
                        align="center"
                    />
                ) : (
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: '1.5rem', md: '2rem' },
                                fontWeight: 300,
                                color: '#3E2F28',
                                mb: 1
                            }}
                        >
                            {title}
                        </Typography>
                        {subtitle && (
                            <Typography
                                sx={{
                                    color: '#A67C52',
                                    fontSize: '1rem',
                                    fontStyle: 'italic',
                                    mb: 2
                                }}
                            >
                                {subtitle}
                            </Typography>
                        )}
                    </Box>
                )}

                <Box sx={{ textAlign: 'center' }}>
                    {description && variant === 'default' && (
                        <Box sx={{
                            p: 3,
                            mb: 4,
                            backgroundColor: 'rgba(166, 124, 82, 0.05)',
                            borderRadius: 2,
                            border: '1px solid rgba(166, 124, 82, 0.2)',
                            maxWidth: '600px',
                            mx: 'auto'
                        }}>
                            <Typography
                                sx={{
                                    color: '#3E2F28',
                                    fontSize: '1.1rem',
                                    lineHeight: 1.6
                                }}
                            >
                                {description}
                            </Typography>
                        </Box>
                    )}

                    <Link
                        href={telegramLink}
                        target="_blank"
                        underline="none"
                        sx={{
                            height: variant === 'minimal' ? 50 : 60,
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 2,
                            backgroundColor: 'transparent',
                            color: '#3E2F28', // Bitter Chocolate
                            fontSize: variant === 'minimal' ? '0.95rem' : '1rem',
                            fontWeight: 600,
                            letterSpacing: '0.02em',
                            transition: 'all 0.3s ease',
                            borderRadius: '50px',
                            px: variant === 'minimal' ? 3 : 5,
                            minWidth: variant === 'minimal' ? 220 : 300,
                            textTransform: 'none',
                            border: '1px solid #A67C52',
                            boxShadow: '0 4px 12px rgba(217, 93, 43, 0.2)',
                            '&:hover': {
                                backgroundColor: 'rgba(166, 124, 82, 0.05)',
                                borderColor: '#D95D2B', // Signature Orange
                                transform: 'translateY(-2px)'
                            }
                        }}
                    >
                        <TelegramIcon sx={{ fontSize: variant === 'minimal' ? 20 : 24 }} />
                        {buttonText}
                        <ArrowForwardIcon sx={{ fontSize: variant === 'minimal' ? 16 : 20, ml: 1 }} />
                    </Link>

                    {variant === 'default' && (
                        <Box sx={{
                            mt: 4,
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 3,
                            flexWrap: 'wrap'
                        }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1
                            }}>
                                <AccessTimeIcon sx={{ fontSize: 18, color: '#A67C52' }} />
                                <Typography
                                    sx={{
                                        color: '#A67C52',
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    Ответ в течение 24 часов
                                </Typography>
                            </Box>

                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1
                            }}>
                                <PersonOutlineIcon sx={{ fontSize: 18, color: '#A67C52' }} />
                                <Typography
                                    sx={{
                                        color: '#A67C52',
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    Персональный подход
                                </Typography>
                            </Box>
                        </Box>
                    )}
                </Box>
            </Container>
        </Box>
    );
}