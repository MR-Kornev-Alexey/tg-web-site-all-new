import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';

const footers = [
    {
        title: 'Контакты',
        description: [
            {
                id: 0,
                text: 'Telegram',
                link: 'https://t.me/MrkDigital'
            },
            {
                id: 1,
                text: 'info@elenakorneva.ru',
                link: 'mailto:info@elenakorneva.ru'
            },
            {
                id: 2,
                text: 'Работаем по всему миру',
                link: null
            },
        ],
    },
    {
        title: 'Документы',
        description: [
            {
                id: 0,
                text: 'Политика конфиденциальности',
                link: '/privacy'
            },
            {
                id: 1,
                text: 'Пользовательское соглашение',
                link: '/terms'
            },
            {
                id: 2,
                text: "Публичная оферта",
                link: "/offer",
            },
            {
                id: 3,
                text: "Правила оказания услуг",
                link: "/service-rules",
            }
        ],
    },
    {
        title: 'Экспертиза',
        description: [
            {
                id: 0,
                text: 'Консультация',
                link: '/consultation'
            },
            {
                id: 1,
                text: 'Персональное ведение',
                link: '/conduct'
            },
            {
                id: 2,
                text: 'Курсы',
                link: '/course'
            },
        ],
    },
];

function Copyright() {
    return (
        <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography
                variant="caption"
                sx={{
                    color: 'rgba(166, 124, 82, 0.6)',
                    fontSize: '0.8rem',
                    display: 'block'
                }}
            >
                © {new Date().getFullYear()} Елена Корнева
            </Typography>
            <Typography
                variant="caption"
                sx={{
                    color: 'rgba(166, 124, 82, 0.4)',
                    fontSize: '0.7rem',
                    display: 'block',
                    mt: 0.5
                }}
            >
                Все права защищены
            </Typography>
        </Box>
    );
}

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 6,
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(166, 124, 82, 0.2), transparent)'
                }
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="center">
                    {footers.map((footer) => (
                        <Grid item xs={12} sm={6} md={4} key={footer.title}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#3E2F28',
                                    fontWeight: 600,
                                    fontSize: '1rem',
                                    mb: 2,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}
                            >
                                {footer.title}
                            </Typography>
                            <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                                {footer.description.map((item) => (
                                    <Box component="li" key={item.id} sx={{ mb: 1.5 }}>
                                        {item.link ? (
                                            <Link
                                                href={item.link}
                                                underline="none"
                                                sx={{
                                                    color: '#A67C52',
                                                    fontSize: '0.9rem',
                                                    fontWeight: 400,
                                                    transition: 'all 0.2s ease',
                                                    display: 'inline-block',
                                                    '&:hover': {
                                                        color: '#D95D2B',
                                                        transform: 'translateX(4px)'
                                                    }
                                                }}
                                            >
                                                {item.text}
                                            </Link>
                                        ) : (
                                            <Typography
                                                sx={{
                                                    color: 'rgba(166, 124, 82, 0.6)',
                                                    fontSize: '0.9rem',
                                                    fontStyle: 'italic'
                                                }}
                                            >
                                                {item.text}
                                            </Typography>
                                        )}
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                <Divider sx={{
                    my: 4,
                    borderColor: 'rgba(166, 124, 82, 0.1)',
                    opacity: 0.5
                }} />

                {/* Контактная информация */}
                <Box sx={{
                    textAlign: 'center',
                    mb: 4,
                    p: 3,
                    backgroundColor: 'rgba(166, 124, 82, 0.03)',
                    borderRadius: 2,
                    border: '1px solid rgba(166, 124, 82, 0.1)'
                }}>
                    <Typography
                        sx={{
                            color: '#3E2F28',
                            fontSize: '0.95rem',
                            mb: 2,
                            fontWeight: 500
                        }}
                    >
                        Экспертное сопровождение семей с 2015 года
                    </Typography>
                </Box>

                <Copyright />
            </Container>
        </Box>
    );
}