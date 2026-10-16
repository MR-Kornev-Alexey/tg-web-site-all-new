import * as React from 'react';
import { Box, Container, Grid, Typography, Button, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function MethodologyContrast() {
    return (
        <Box sx={{
            backgroundColor: '#FCF9F3',
            py: { xs: 8, md: 12 },
            borderTop: '1px solid rgba(166, 124, 82, 0.1)'
        }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="stretch">

                    {/* БЛОК "НЕТ" - Слева */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ p: 3, opacity: 0.6 }}>
                            <Typography sx={{
                                fontFamily: '"Playfair Display", "Times New Roman", serif',
                                fontStyle: 'italic',
                                fontSize: '1.4rem',
                                color: '#3E2F28',
                                lineHeight: 1.4,
                                position: 'relative',
                                '&::before': {
                                    content: '"—"',
                                    position: 'absolute',
                                    left: -20,
                                    color: '#D95D2B'
                                }
                            }}>
                                «Моя методика — не для тех, кто хочет вырастить “аристократа”»
                            </Typography>
                        </Box>
                    </Grid>

                    {/* БЛОК "ДА" - Центр */}
                    <Grid item xs={12} md={8}>
                        <Paper elevation={0} sx={{
                            p: { xs: 3, md: 5 },
                            backgroundColor: '#fff',
                            borderRadius: '2px',
                            border: '1px solid rgba(166, 124, 82, 0.2)',
                            boxShadow: '0 10px 40px rgba(62, 47, 40, 0.05)'
                        }}>
                            <Typography variant="h4" sx={{
                                fontWeight: 800,
                                color: '#3E2F28',
                                mb: 3,
                                fontSize: { xs: '1.5rem', md: '2rem' },
                                letterSpacing: '-0.5px'
                            }}>
                                ОНА ДЛЯ ТЕХ, КТО ГОТОВИТ РЕБЕНКА К НОВОМУ МИРУ.
                            </Typography>

                            <Typography sx={{ color: '#A67C52', mb: 2, fontWeight: 600 }}>
                                Миру, где побеждает тот, кто:
                            </Typography>

                            <List sx={{ mb: 4 }}>
                                {[
                                    'Не боится ошибок',
                                    'Не ждет одобрения',
                                    'Не зависит от обстоятельств'
                                ].map((text, index) => (
                                    <ListItem key={index} disableGutters>
                                        <ListItemIcon sx={{ minWidth: 35 }}>
                                            <CheckCircleOutlineIcon sx={{ color: '#D95D2B', fontSize: 20 }} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={text}
                                            primaryTypographyProps={{
                                                fontWeight: 500,
                                                color: '#3E2F28',
                                                fontSize: '1.1rem'
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>

                            {/* БЛОК "ЭМПАТИЯ" */}
                            <Box sx={{
                                p: 3,
                                backgroundColor: 'rgba(217, 93, 43, 0.05)',
                                borderLeft: '4px solid #D95D2B',
                                mb: 4
                            }}>
                                <Typography sx={{
                                    fontFamily: '"Courier New", Courier, monospace',
                                    fontSize: '1.1rem',
                                    color: '#3E2F28',
                                    lineHeight: 1.6
                                }}>
                                    <strong>И ДА — ЭТО ВОЗМОЖНО.</strong> <br/>
                                    Даже если вы начинаете с коммуналки, <br/>
                                    усталости <br/>
                                    и 15 минут вашего времени.
                                </Typography>
                            </Box>

                            {/* КНОПКА CTA */}
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    py: 2.5,
                                    backgroundColor: '#D95D2B',
                                    borderRadius: '50px',
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    textTransform: 'none',
                                    boxShadow: '0 15px 30px rgba(217, 93, 43, 0.25)',
                                    '&:hover': {
                                        backgroundColor: '#C04E26',
                                        transform: 'translateY(-2px)'
                                    }
                                }}
                            >
                                Узнать, как это сделать за 15 минут
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}