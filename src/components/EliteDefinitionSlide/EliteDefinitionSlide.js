import * as React from 'react';
import { Box, Container, Typography, Grid, List, ListItem, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

// Предполагается, что Playfair Display подключен в проекте
const serifFont = '"Playfair Display", serif';

export default function EliteDefinitionSlide() {
    const theme = useTheme();

    return (
        <Box sx={{
            backgroundColor: '#F7F4F0', // Бежевый фон как на слайде
            minHeight: '100vh',
            py: { xs: 6, md: 10 },
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center'
        }}>
            {/* Декоративный элемент - Нейронная сеть/Линии (замените URL на ваш путь к картинке) */}
            <Box
                component="img"
                src="/path-to-neural-lines-bg.png"
                sx={{
                    position: 'absolute',
                    right: -50,
                    top: '10%',
                    height: '80%',
                    opacity: 0.6,
                    pointerEvents: 'none',
                    zIndex: 0,
                    [theme.breakpoints.down('md')]: {
                        display: 'none'
                    }
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                {/* ЗАГОЛОВОК */}
                <Typography sx={{
                    fontFamily: serifFont,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    color: '#3E2F28',
                    mb: { xs: 4, md: 8 },
                    fontWeight: 400
                }}>
                    Что я называю «Элитой»?
                </Typography>

                <Grid container spacing={4}>
                    {/* ЛЕВАЯ КОЛОНКА */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" sx={{
                            fontWeight: 800,
                            color: '#000',
                            mb: 1,
                            fontSize: { xs: '1.8rem', md: '2.5rem' },
                            lineHeight: 1.1
                        }}>
                            Это не про деньги.
                        </Typography>
                        <Typography variant="h3" sx={{
                            fontWeight: 800,
                            color: '#000',
                            mb: 4,
                            fontSize: { xs: '1.8rem', md: '2.5rem' },
                            lineHeight: 1.1
                        }}>
                            Это про Нейробиологию.
                        </Typography>

                        <Box sx={{ maxWidth: '400px' }}>
                            <Typography sx={{
                                fontSize: '1.2rem',
                                fontWeight: 600,
                                color: '#3E2F28',
                                mb: 2
                            }}>
                                Элита — это не банковский счет. <br />
                                Это способ мышления.
                            </Typography>
                            <Typography sx={{
                                fontSize: '1.1rem',
                                color: '#3E2F28',
                                lineHeight: 1.5,
                                opacity: 0.8
                            }}>
                                Мы растим тех, кто будет менять правила игры, а не просто следовать им.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* ПРАВАЯ КОЛОНКА (Список с галочками) */}
                    <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                        <List sx={{
                            '& .MuiListItem-root': { px: 0, mb: 3, alignItems: 'flex-start' }
                        }}>
                            {[
                                { primary: "Умеет думать, прежде чем хотеть.", bold: true },
                                { primary: "Не боится ошибок и превращает провал в кейс.", bold: true },
                                { primary: "Не ведется на манипуляции и «тебе слабо».", bold: true }
                            ].map((item, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon sx={{ minWidth: 45, mt: 0.5 }}>
                                        <CheckIcon sx={{ fontSize: 35, color: '#3E2F28' }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.primary}
                                        primaryTypographyProps={{
                                            fontSize: { xs: '1.1rem', md: '1.3rem' },
                                            fontWeight: 700,
                                            color: '#000',
                                            lineHeight: 1.3
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>

                {/* ФУТЕР СЛАЙДА */}
                <Box sx={{ mt: { xs: 6, md: 12 } }}>
                    <Typography sx={{
                        fontSize: { xs: '1.1rem', md: '1.4rem' },
                        color: '#3E2F28',
                        fontWeight: 500
                    }}>
                        Мы переходим от «автопилота» к системе сборки сильной личности.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}