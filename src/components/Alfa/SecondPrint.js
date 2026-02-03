import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import ShieldIcon from '@mui/icons-material/Shield';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import PsychologyIcon from '@mui/icons-material/Psychology';

export default function ChildPsychologyIntensive() {
    return (
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
            <Typography
                variant="h2"
                component="h2"
                sx={{
                    fontSize: { xs: 24, sm: 28, md: 32 },
                    fontWeight: 700,
                    textAlign: 'center',
                    mb: 4,
                    color: '#333',
                }}
            >
                Что происходит с ребёнком<br />
                <Typography
                    component="span"
                    sx={{
                        fontSize: { xs: 20, sm: 24, md: 28 },
                        fontWeight: 500,
                        color: '#666',
                    }}
                >
                    если ничего не менять
                </Typography>
            </Typography>

            {/* Проблемная часть */}
            <Paper
                elevation={0}
                sx={{
                    p: { xs: 2, sm: 3, md: 4 },
                    mb: 4,
                    bgcolor: '#f8f9fa',
                    borderLeft: '4px solid #ff6b6b',
                    borderRadius: 2,
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <WarningIcon sx={{ color: '#ff6b6b', mr: 1, fontSize: 28 }} />
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 600, color: '#333' }}>
                        Это не катастрофа. Но это траектория.
                    </Typography>
                </Box>

                <List sx={{ width: '100%' }}>
                    {[
                        "Ребёнок привыкает быть «удобным», а не значимым",
                        "Начинает считывать себя ниже других, даже если объективно способен",
                        "Учится избегать, а не справляться",
                        "Всё чаще молчит там, где важно сказать",
                        "Переносит школьный опыт в подростковый и взрослый возраст",
                    ].map((item, index) => (
                        <ListItem key={index} sx={{ py: 0.5, px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#ff6b6b' }} />
                            </ListItemIcon>
                            <ListItemText
                                primary={item}
                                primaryTypographyProps={{
                                    sx: {
                                        fontSize: { xs: 14, sm: 15, md: 16 },
                                        color: '#555',
                                        lineHeight: 1.5
                                    }
                                }}
                            />
                        </ListItem>
                    ))}
                </List>

                <Box sx={{ mt: 3, p: 2, bgcolor: 'white', borderRadius: 2, border: '1px solid #e0e0e0' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#333', mb: 1 }}>
                        Риск не в школе.
                    </Typography>
                    <Typography sx={{ color: '#555', fontSize: 15 }}>
                        Риск — в закреплённой роли.
                    </Typography>
                </Box>
            </Paper>

            {/* Если вовремя вмешаться */}
            <Paper
                elevation={0}
                sx={{
                    p: { xs: 2, sm: 3, md: 4 },
                    mb: 4,
                    bgcolor: '#f0f9ff',
                    borderLeft: '4px solid #4dabf7',
                    borderRadius: 2,
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PsychologyIcon sx={{ color: '#4dabf7', mr: 1, fontSize: 28 }} />
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 600, color: '#333' }}>
                        Если вовремя вмешаться
                    </Typography>
                </Box>

                <Typography
                    variant="h6"
                    sx={{
                        fontStyle: 'italic',
                        color: '#4dabf7',
                        mb: 2,
                        fontSize: { xs: 15, sm: 16, md: 17 }
                    }}
                >
                    Не чтобы переделать ребёнка. А чтобы усилить его опору.
                </Typography>

                <Grid container spacing={2}>
                    {[
                        "Появляется спокойная уверенность без агрессии",
                        "Ребёнок чувствует границы — свои и чужие",
                        "Легче входит в новые коллективы",
                        "Перестаёт бояться оценки и давления",
                        "Начинает занимать место, которое соответствует его потенциалу",
                    ].map((item, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                                <CheckCircleIcon sx={{ color: '#51cf66', fontSize: 20, mr: 1, mt: 0.25 }} />
                                <Typography sx={{ fontSize: { xs: 14, sm: 15 }, color: '#333', lineHeight: 1.5 }}>
                                    {item}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ mt: 3, p: 2, bgcolor: 'white', borderRadius: 2, border: '1px solid #a5d8ff' }}>
                    <Typography sx={{ color: '#1864ab', fontStyle: 'italic', fontSize: 15 }}>
                        Меняется не поведение. Меняется внутреннее состояние.
                    </Typography>
                </Box>
            </Paper>

            <Grid container spacing={4}>
                {/* От чего мы защищаем ребёнка */}
                <Grid item xs={12} md={6}>
                    <Paper
                        elevation={2}
                        sx={{
                            p: { xs: 2, sm: 3 },
                            height: '100%',
                            borderRadius: 2,
                            bgcolor: '#fff5f5',
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <ShieldIcon sx={{ color: '#fa5252', mr: 1, fontSize: 28 }} />
                            <Typography variant="h5" component="h3" sx={{ fontWeight: 600, color: '#333' }}>
                                От чего мы защищаем ребёнка
                            </Typography>
                        </Box>

                        <List sx={{ width: '100%' }}>
                            {[
                                "от хронической школьной тревожности",
                                "от роли «невидимого» или «удобного»",
                                "от накопленного чувства «со мной что-то не так»",
                                "от пассивной позиции в группе",
                                "от сценария, который потом приходится долго разбирать во взрослом возрасте",
                            ].map((item, index) => (
                                <ListItem key={index} sx={{ py: 0.75 }}>
                                    <ListItemIcon sx={{ minWidth: 36 }}>
                                        <Box sx={{
                                            width: 24,
                                            height: 24,
                                            borderRadius: '50%',
                                            bgcolor: '#ffe3e3',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                            <Typography sx={{ fontSize: 12, fontWeight: 600, color: '#fa5252' }}>
                                                {index + 1}
                                            </Typography>
                                        </Box>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item}
                                        primaryTypographyProps={{
                                            sx: {
                                                fontSize: { xs: 14, sm: 15 },
                                                color: '#555',
                                                lineHeight: 1.5
                                            }
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>

                {/* Что получает семья */}
                <Grid item xs={12} md={6}>
                    <Paper
                        elevation={2}
                        sx={{
                            p: { xs: 2, sm: 3 },
                            height: '100%',
                            borderRadius: 2,
                            bgcolor: '#e7f5ff',
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <FamilyRestroomIcon sx={{ color: '#339af0', mr: 1, fontSize: 28 }} />
                            <Typography variant="h5" component="h3" sx={{ fontWeight: 600, color: '#333' }}>
                                Что получает семья
                            </Typography>
                        </Box>

                        <List sx={{ width: '100%' }}>
                            {[
                                "меньше тревоги за ребёнка",
                                "больше спокойствия дома",
                                "понимание, как поддерживать, а не усиливать напряжение",
                                "ощущение, что вы не упустили важный момент",
                            ].map((item, index) => (
                                <ListItem key={index} sx={{ py: 0.75 }}>
                                    <ListItemIcon sx={{ minWidth: 36 }}>
                                        <CheckCircleIcon sx={{ color: '#339af0', fontSize: 20 }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item}
                                        primaryTypographyProps={{
                                            sx: {
                                                fontSize: { xs: 14, sm: 15 },
                                                color: '#555',
                                                lineHeight: 1.5
                                            }
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
            </Grid>

            {/* Важно честно сказать */}
            <Paper
                elevation={0}
                sx={{
                    p: { xs: 3, sm: 4, md: 5 },
                    mt: 4,
                    bgcolor: '#f8f9fa',
                    borderRadius: 2,
                    textAlign: 'center',
                    border: '2px solid #e9ecef',
                }}
            >
                <Typography
                    variant="h4"
                    component="h3"
                    sx={{
                        fontSize: { xs: 20, sm: 22, md: 24 },
                        fontWeight: 700,
                        mb: 3,
                        color: '#333',
                    }}
                >
                    Важно честно сказать
                </Typography>

                <Box sx={{
                    maxWidth: 800,
                    mx: 'auto',
                    p: { xs: 2, sm: 3 },
                    bgcolor: 'white',
                    borderRadius: 2,
                    border: '1px solid #dee2e6',
                }}>
                    <Typography
                        sx={{
                            fontSize: { xs: 15, sm: 16, md: 17 },
                            color: '#495057',
                            lineHeight: 1.7,
                            fontStyle: 'italic',
                            mb: 2,
                        }}
                    >
                        Этот интенсив не сделает ребёнка «первым».
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    <Typography
                        sx={{
                            fontSize: { xs: 16, sm: 17, md: 18 },
                            color: '#212529',
                            lineHeight: 1.6,
                            fontWeight: 500,
                        }}
                    >
                        Он помогает ему стать собой — устойчивым, собранным, уверенным
                        и перестать терять себя в коллективе.
                    </Typography>
                </Box>

                {/* Кнопка */}
                <Box sx={{ mt: 4 }}>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            px: { xs: 4, sm: 6 },
                            py: 1.5,
                            fontSize: { xs: 14, sm: 15 },
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: 0.5,
                            borderRadius: 2,
                            bgcolor: '#4dabf7',
                            '&:hover': {
                                bgcolor: '#339af0',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 12px rgba(77, 171, 247, 0.3)',
                            },
                            transition: 'all 0.3s ease',
                        }}
                    >
                        Узнать, подойдёт ли программа вашему ребёнку
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}