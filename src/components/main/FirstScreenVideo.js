import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from "../Typography/Typography";
import TelegramIcon from "@mui/icons-material/Telegram";
import Link from "@mui/material/Link";
import { Paper, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Импортируем видеофайлы (поместите их в папку public/videos/)
const VIDEO_PATH = 'https://elenakorneva.ru/videos/';

export default function FirstScreenVideo() {
    const theme = useTheme();
    const videoRef = React.useRef(null);

    return (
        <Box sx={{
            backgroundColor: '#FCF9F3',
            py: { xs: 6, md: 10 },
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Декоративный элемент */}
            <Box sx={{
                position: 'absolute',
                top: -100,
                right: -100,
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(217,93,43,0.05) 0%, transparent 70%)',
                zIndex: 0,
                [theme.breakpoints.down('md')]: {
                    display: 'none'
                }
            }} />

            <Container maxWidth="lg">
                <Grid container spacing={6} sx={{ position: 'relative', zIndex: 1 }}>
                    {/* ТЕКСТОВАЯ ЧАСТЬ */}
                    <Grid
                        item
                        xs={12}
                        md={7}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        {/* ЗАГОЛОВОК */}
                        <Typography
                            component="h1"
                            sx={{
                                fontSize: { xs: '2.0rem', sm: '2.6rem', md: '3.0rem' },
                                fontWeight: 300,
                                lineHeight: 1.2,
                                color: '#3E2F28',
                                mb: 3,
                                letterSpacing: '-0.5px'
                            }}
                        >
                            Превращаю родительский хаос{' '} в систему
                        </Typography>

                        {/* ПОДЗАГОЛОВОК */}
                        <Typography
                            component="p"
                            sx={{
                                fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                                fontWeight: 400,
                                lineHeight: 1.6,
                                color: '#4A3F39',
                                mb: 6,
                                maxWidth: '90%',
                                borderLeft: '3px solid #D95D2B',
                                pl: 3,
                                py: 0.5
                            }}
                        >
                            Врач + психолог. Автор методик «Элита с пелёнок», «Метод китайской мамы», «Нейроуборка».<br />
                            Работаю с  детьми и родителями как с единой системой
                        </Typography>

                        {/* КНОПКИ CTA */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                gap: 4,
                                flexWrap: 'wrap'
                            }}
                        >
                            {/* Левая кнопка - Консультация */}
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <Link
                                    href="/consultation"
                                    underline="none"
                                    sx={{
                                        height: 56,
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: 2,
                                        backgroundColor: 'transparent',
                                        color: '#3E2F28',
                                        border: '2px solid #D95D2B',
                                        fontSize: '0.95rem',
                                        fontWeight: 600,
                                        letterSpacing: '0.02em',
                                        transition: 'all 0.3s ease',
                                        borderRadius: '50px',
                                        px: 4,
                                        minWidth: { sm: 240 },
                                        textTransform: 'none',
                                        '&:hover': {
                                            backgroundColor: 'rgba(217, 93, 43, 0.05)',
                                            borderColor: '#C04E26',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 8px 20px rgba(217, 93, 43, 0.15)'
                                        }
                                    }}
                                >
                                    <TelegramIcon sx={{ fontSize: 20 }} />
                                    Консультация
                                    <ArrowForwardIcon sx={{ fontSize: 18, ml: 1 }} />
                                </Link>
                                <Typography
                                    component="span"
                                    sx={{
                                        fontSize: '0.8rem',
                                        lineHeight: 1.4,
                                        color: '#A67C52',
                                        fontStyle: 'italic',
                                        mt: 1,
                                        ml: 2,
                                        maxWidth: '240px'
                                    }}
                                >
                                    Разбор вашей ситуации
                                </Typography>
                            </Box>

                            {/* Правая кнопка - Ведение */}
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <Link
                                    href="conduct"
                                    underline="none"
                                    sx={{
                                        height: 56,
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: 2,
                                        backgroundColor: 'transparent',
                                        color: '#3E2F28',
                                        border: '2px solid #D95D2B',
                                        fontSize: '0.95rem',
                                        fontWeight: 600,
                                        letterSpacing: '0.02em',
                                        transition: 'all 0.3s ease',
                                        borderRadius: '50px',
                                        px: 4,
                                        minWidth: { sm: 240 },
                                        textTransform: 'none',
                                        '&:hover': {
                                            backgroundColor: 'rgba(217, 93, 43, 0.05)',
                                            borderColor: '#C04E26',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 8px 20px rgba(217, 93, 43, 0.15)'
                                        }
                                    }}
                                >
                                    <TelegramIcon sx={{ fontSize: 20, color: '#D95D2B' }} />
                                    Личное ведение
                                    <ArrowForwardIcon sx={{ fontSize: 18, ml: 1, color: '#D95D2B' }} />
                                </Link>
                                <Typography
                                    component="span"
                                    sx={{
                                        fontSize: '0.8rem',
                                        lineHeight: 1.4,
                                        color: '#A67C52',
                                        fontStyle: 'italic',
                                        mt: 1,
                                        ml: 2,
                                        maxWidth: '240px'
                                    }}
                                >
                                    Работа до результата.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* ВИДЕО */}
                    <Grid
                        item
                        xs={12}
                        md={5}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        {/* HLS Video Player */}
                        <Box sx={{
                            position: 'relative',
                            borderRadius: '2px',
                            overflow: 'hidden',
                            boxShadow: '0 8px 30px rgba(62, 47, 40, 0.15)',
                            backgroundColor: '#000',
                            aspectRatio: { xs: '1/1', md: '9/16' },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Box
                                component="video"
                                ref={videoRef}
                                controls
                                preload="metadata"
                                playsInline
                                poster={`${VIDEO_PATH}poster.png`}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block'
                                }}
                            >
                                {/* Основной HLS плейлист */}
                                <source
                                    src="https://elenakorneva.ru/videos/playlist.m3u8"
                                    type="application/x-mpegURL"
                                />

                                {/* Fallback MP4 для старых браузеров */}
                                <source
                                    src={`${VIDEO_PATH}video.mp4`}
                                    type="video/mp4"
                                />

                                {/* Субтитры (если есть) */}
                                <track
                                    kind="captions"
                                    src={`${VIDEO_PATH}captions.vtt`}
                                    srcLang="ru"
                                    label="Russian"
                                />

                                Ваш браузер не поддерживает воспроизведение видео.
                                <Link
                                    href={`${VIDEO_PATH}video.mp4`}
                                    sx={{ color: '#D95D2B' }}
                                >
                                    Скачайте видео
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}