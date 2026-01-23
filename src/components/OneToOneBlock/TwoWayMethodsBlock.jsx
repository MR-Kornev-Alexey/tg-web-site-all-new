import { Box, Grid, Typography, Button } from "@mui/material"; // Добавлен Button
import Container from "@mui/material/Container";
import TelegramCTA from "../TelegramCTA/TelegramCTA";
import * as React from "react";

export default function TwoWayMethodsBlock() {
    return (
        <Container component="section">
            <Box>
                {/* Общий заголовок */}
                <Typography
                    component="h2"
                    sx={{
                        fontSize: { xs: 24, sm: 28, md: 32 },
                        fontWeight: 600,
                        lineHeight: 1.3,
                        textAlign: 'center',
                        mb: { xs: 4, md: 6 },
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                    }}
                >
                    Два способа работать со мной.<br/>
                    <Box component="span" sx={{ color: '#666', fontSize: '0.9em' }}>
                        Общее — глубина. Разное — масштаб задачи.
                    </Box>
                </Typography>

                <Grid container spacing={4}>

                    {/* ФОРМАТ А: Стратегическая сессия */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            height: '100%',
                            p: { xs: 3, md: 4 },
                            border: '1px solid #e0e0e0',
                            borderRadius: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                borderColor: '#000',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                            }
                        }}>

                            {/* Заголовок формата */}
                            <Typography
                                component="h3"
                                sx={{
                                    fontSize: { xs: 20, md: 22 },
                                    fontWeight: 600,
                                    mb: 1,
                                    textTransform: 'uppercase',
                                }}
                            >
                                Стратегическая сессия
                            </Typography>

                            {/* Подзаголовок */}
                            <Typography
                                sx={{
                                    fontSize: 14,
                                    color: '#666',
                                    fontWeight: 500,
                                    mb: 3,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                «Точка невозврата»
                            </Typography>

                            {/* Для кого */}
                            <Box sx={{
                                mb: 3,
                                p: 2,
                                backgroundColor: '#f9f9f9',
                                borderRadius: 1,
                                borderLeft: '3px solid #000',
                            }}>
                                <Typography sx={{ fontSize: 14, fontWeight: 500 }}>
                                    Для тех, кто столкнулся с одной критической, неотложной задачей
                                </Typography>
                            </Box>

                            {/* Суть */}
                            <Typography sx={{ mb: 3, lineHeight: 1.6 }}>
                                Это не разовая консультация. Это{' '}
                                <Box component="span" sx={{ fontWeight: 600 }}>
                                    глубинное исследование и разработка стратегии
                                </Box>{' '}
                                по самой острой на данный момент точке: возрастной кризис, потеря контакта, агрессия, выбор школы, экстренный случай.
                            </Typography>

                            {/* Что входит */}
                            <Box sx={{ mb: 4 }}>
                                <Typography sx={{ fontSize: 16, fontWeight: 600, mb: 2 }}>
                                    Что входит:
                                </Typography>

                                <Box sx={{ pl: 0 }}>
                                    {[
                                        'Детальная анкета-погружение перед встречей.',
                                        'Сессия 2–2,5 часа (онлайн или лично), где мы разбираем не только «что делать», но и корни ситуации.',
                                        'Протокол сессии с пошаговой стратегией, принципами принятия решений и прогнозом развития событий.'
                                    ].map((item, index) => (
                                        <Box key={index} sx={{ display: 'flex', mb: 1.5 }}>
                                            <Box sx={{
                                                minWidth: 20,
                                                mt: 0.5,
                                                fontSize: 14,
                                                fontWeight: 600,
                                                color: '#000',
                                            }}>
                                                {index + 1}.
                                            </Box>
                                            <Typography sx={{ fontSize: 15, lineHeight: 1.5, color: '#444' }}>
                                                {item}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>

                            {/* Философия */}
                            <Box sx={{
                                mt: 'auto',
                                p: 2.5,
                                backgroundColor: '#f0f0f0',
                                borderRadius: 1,
                                border: '1px solid #ddd',
                            }}>
                                <Typography sx={{ fontSize: 15, fontStyle: 'italic', lineHeight: 1.6 }}>
                                    Цена сессии — это не стоимость часа. Это цена{' '}
                                    <Box component="span" sx={{ fontWeight: 600 }}>
                                        правильного решения в момент, который определит следующие несколько лет
                                    </Box>.
                                </Typography>
                            </Box>

                            {/* Кнопка CTA */}
                            <Box sx={{ mt: 4 }}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    href="https://t.me/MrkDigital?text=запрос на стратегическую сессию"
                                    target="_blank"
                                    sx={{
                                        height: { xs: 66, md: 52 },
                                        backgroundColor: '#f5f5f5',
                                        color: '#444',
                                        fontSize: { xs: 12, md: 14 },
                                        textAlign: "center",
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        borderRadius: 1,
                                        '&:hover': {
                                            backgroundColor: '#bbb',
                                        },
                                    }}
                                >
                                    Забронировать стратегическую сессию
                                </Button>
                            </Box>

                        </Box>
                    </Grid>

                    {/* ФОРМАТ Б: Персональное сопровождение */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            height: '100%',
                            p: { xs: 3, md: 4 },
                            border: '1px solid #e0e0e0',
                            borderRadius: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'all 0.3s ease',
                            backgroundColor: '#fafafa',
                            position: 'relative',
                            overflow: 'hidden',
                            '&:hover': {
                                borderColor: '#000',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                            },
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: 4,
                                backgroundColor: '#000',
                            }
                        }}>

                            {/* Метка "Премиум" */}
                            <Box sx={{
                                position: 'absolute',
                                top: 12,
                                right: 12,
                                backgroundColor: '#000',
                                color: '#fff',
                                fontSize: 11,
                                fontWeight: 600,
                                px: 1.5,
                                py: 0.5,
                                borderRadius: 1,
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                            }}>
                                Премиум
                            </Box>

                            {/* Заголовок формата */}
                            <Typography
                                component="h3"
                                sx={{
                                    fontSize: { xs: 20, md: 22 },
                                    fontWeight: 600,
                                    mb: 1,
                                    textTransform: 'uppercase',
                                    pt: 1,
                                }}
                            >
                                Персональное сопровождение
                            </Typography>

                            {/* Подзаголовок */}
                            <Typography
                                sx={{
                                    fontSize: 14,
                                    color: '#666',
                                    fontWeight: 500,
                                    mb: 3,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                «Точка опоры»
                            </Typography>

                            {/* Для кого */}
                            <Box sx={{
                                mb: 3,
                                p: 2,
                                backgroundColor: '#f0f0f0',
                                borderRadius: 1,
                                borderLeft: '3px solid #000',
                            }}>
                                <Typography sx={{ fontSize: 14, fontWeight: 500 }}>
                                    Для тех, кто мыслит на годы вперёд и готов менять систему
                                </Typography>
                            </Box>

                            {/* Суть */}
                            <Typography sx={{ mb: 3, lineHeight: 1.6 }}>
                                Это{' '}
                                <Box component="span" sx={{ fontWeight: 600 }}>
                                    принятие в ограниченный круг семей
                                </Box>
                                . Я становлюсь вашим стратегом на продолжительном отрезке (от 3 месяцев). Вы покупаете не часы, а мою постоянную включённость в ваш контекст и ответственность за анализ ваших решений.
                            </Typography>

                            {/* Что входит */}
                            <Box sx={{ mb: 4 }}>
                                <Typography sx={{ fontSize: 16, fontWeight: 600, mb: 2 }}>
                                    Что входит:
                                </Typography>

                                <Box sx={{ pl: 0 }}>
                                    {[
                                        'Закрытый канал связи (Telegram/Max) для оперативных вопросов и анализа ситуаций в моменте.',
                                        'Регулярные глубинные сессии (раз в 1-2 недели) для стратегического планирования.',
                                        'Системная работа с вашей позицией, границами и семейной средой.',
                                        'Предвидение и профилактика кризисов до их наступления.'
                                    ].map((item, index) => (
                                        <Box key={index} sx={{ display: 'flex', mb: 1.5 }}>
                                            <Box sx={{
                                                minWidth: 20,
                                                mt: 0.5,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}>
                                                <Box sx={{
                                                    width: 6,
                                                    height: 6,
                                                    borderRadius: '50%',
                                                    backgroundColor: '#000',
                                                }} />
                                            </Box>
                                            <Typography sx={{ fontSize: 15, lineHeight: 1.5, color: '#444' }}>
                                                {item}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>

                            {/* Философия */}
                            <Box sx={{
                                mt: 'auto',
                                p: 2.5,
                                backgroundColor: '#000',
                                color: '#fff',
                                borderRadius: 1,
                            }}>
                                <Typography sx={{ fontSize: 15, fontStyle: 'italic', lineHeight: 1.6 }}>
                                    Я не тушу пожары, а  проектирую пространство, в котором они не возникают.
                                </Typography>
                            </Box>

                            {/* Кнопка CTA */}
                            <Box sx={{ mt: 4 }}>
                                <Button
                                    fullWidth
                                    variant="outlined"
                                    href="https://t.me/MrkDigital?text=запрос на персональное сопровождение"
                                    target="_blank"
                                    sx={{
                                        height: { xs: 66, md: 52 },
                                        borderColor: '#000',
                                        borderWidth: 2,
                                        color: '#f5f5f5',
                                        fontSize: { xs: 11, md: 14 },
                                        textAlign: "center",
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        borderRadius: 1,
                                        '&:hover': {
                                            borderColor: '#000',
                                            borderWidth: 2,
                                            backgroundColor: 'rgba(0,0,0,0.05)',
                                        },
                                    }}
                                >
                                    Запросить условия персонального споровождения
                                </Button>
                            </Box>

                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </Container>
    );
}