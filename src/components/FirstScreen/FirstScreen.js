import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import '../main/Main.css'
import Typography from "../Typography/Typography";
import ImageLeft from "../../img/photo-elena.png";
import ImageSquare from "../../img/photo-elena-square.png";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Link from "@mui/material/Link";
import ListAltIcon from "@mui/icons-material/ListAlt";
import TelegramIcon from "@mui/icons-material/Telegram";
import TelegramCTA from "../TelegramCTA/TelegramCTA";

const text = [
    "Эксперт по развитию малышей от 0 до 3 лет с опытом работы с более чем 1000 успешными семьями",
    "Более полумиллиона  подписчиков на социальных платформах, получающие ценные советы по вопросам здоровья и развития детей",
    "Высококвалифицированный врач-педиатр",
    "Cемейный психолог ",
    "Бизнес-леди и мастер делового администрирования (MBA)",
    "Жена,  мама трех успешных сыновей, бабушка",
    "Сертифицированный специалист по современным методам развития мозга от Массачусетского университета",
]

const newText = `
<p>ПОЧЕМУ МНЕ ДОВЕРЯЮТ:<br />
✅ Тройная экспертиза в одном лице:<br />
<em>Врач-педиатр</em> | <em>Семейный психолог</em> | <em>Сертифицированный нейроспециалист (MIT)</em><em><br /></em>➜ Вижу здоровье, поведение и развитие как единую систему</p>
<p>✅ Не теория, а проверенная практика:</p>
<ul style="padding-left: 24px;">
<li >1000+ успешных кейсов</li>
<li >600 000+ родителей следят за моими методами</li>
</ul>
<p>✅ Создатель методики "Элитное развитие с пелёнок"</p>
<p>✅ Бизнес-подход к развитию (MBA):<br />Четкие алгоритмы вместо &laquo;размытых советов&raquo;</p>
<p>✅ Проверено на себе:<br />Мама 3 сыновей и бабушка 2 внуков &rarr; знаю реальные боли &laquo;из песочницы&raquo;</p>
`

export default function FirstScreen() {
    return (
        <Container component="section">
            <Grid container sx={{ my: { xs: 2, sm: 3 } }}>
                {/* ТЕКСТ */}
                <Grid
                    item
                    xs={12}
                    md={7}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: { xs: 'center', md: 'flex-start' },
                        mt: { xs: 2, sm: 3, md: 0 },
                        textAlign: { xs: 'center', md: 'left' },
                    }}
                >
                    {/* Заголовок */}
                    <Typography
                        component="h1"
                        sx={{
                            fontSize: { xs: 26, sm: 30, md: 36 },
                            px: { xs: 1, sm: 2 },
                            fontWeight: 600,
                            lineHeight: 1.2,
                            maxWidth: 560,
                            textTransform: 'uppercase',
                        }}
                    >
                        Я не решаю сиюминутные проблемы <br/>
                        Я формирую будущее ребёнка
                    </Typography>

                    {/* Подзаголовок */}
                    <Typography
                        component="h2"
                        sx={{
                            mt: 2,
                            px: { xs: 1, sm: 2 },
                            fontSize: { xs: 15, sm: 16, md: 18 },
                            lineHeight: 1.6,
                            color: '#555',
                            maxWidth: 560,
                        }}
                    >
                        Большинство ошибок в воспитании становятся заметны, когда поведение уже закрепилось. Теряется контакт, нарастает сопротивление, тухнет мотивация.
                        <br/>
                        Моя задача — не дать этому случиться. Я сопровождаю семьи в точках, где цена ошибки — годы исправлений, а правильное решение формирует будущее ребёнка.
                    </Typography>

                    {/* ПОРТРЕТ ЕЛЕНЫ ДЛЯ МОБИЛЬНОЙ ВЕРСИИ */}
                    <Box
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            justifyContent: 'center',
                            my: 3,
                        }}
                    >
                        <Box
                            component="img"
                            src={ImageSquare}
                            alt="Елена Корнева"
                            sx={{
                                width: '100%',
                                maxWidth: { xs: 220, sm: 260 },
                                borderRadius: '50%',
                                objectFit: 'cover',
                            }}
                        />
                    </Box>

                    <Typography
                        component="p"
                        sx={{
                            mt: { xs: 0, md: 2 },
                            px: { xs: 1, sm: 2 },
                            fontSize: { xs: 13, sm: 14 },
                            lineHeight: 1.6,
                            color: '#777',
                            maxWidth: 560,
                        }}
                    >
                        Личное ведение<br/>Ограниченный круг семей<br/>Работа там, где второго шанса не будет.
                    </Typography>

                    {/* КНОПКИ - ОБЕРТКА С АДАПТИВНОЙ СТРУКТУРОЙ */}
                    <Box
                        sx={{
                            mt: 3,
                            px: { xs: 1, sm: 2 },
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            gap: { xs: 2, md: 3 },
                            width: '100%',
                            maxWidth: 560,
                        }}
                    >
                        {/* Кнопка 1 */}
                        <Link
                            href="https://t.me/MrkDigital?text=запрос на стратегическую сессию"
                            target="_blank"
                            underline="none"
                            sx={{
                                height: { xs: 44, sm: 48 },
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 1,
                                backgroundColor: '#f5f5f5',
                                color: '#444',
                                fontSize: { xs: 13, sm: 14 },
                                fontWeight: 500,
                                textTransform: 'uppercase',
                                letterSpacing: '0.04em',
                                transition: 'all .2s ease',
                                whiteSpace: 'nowrap',
                                width: { xs: '100%', md: 'auto' },
                                flex: { xs: '0 0 auto', md: '0 1 auto' },
                                px: { xs: 2, sm: 3 },
                                '&:hover': {
                                    backgroundColor: '#eaeaea',
                                },
                            }}
                        >
                            <TelegramIcon sx={{ fontSize: 20 }} />
                            <Box>Решить критическую задачу</Box>
                        </Link>

                        {/* Кнопка 2 */}
                        <Link
                            href="https://t.me/MrkDigital?text=запрос на персональное сопровождение"
                            target="_blank"
                            underline="none"
                            sx={{
                                height: { xs: 44, sm: 48 },
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 1,
                                backgroundColor: '#f5f5f5',
                                color: '#444',
                                fontSize: { xs: 13, sm: 14 },
                                fontWeight: 500,
                                textTransform: 'uppercase',
                                letterSpacing: '0.04em',
                                transition: 'all .2s ease',
                                whiteSpace: 'nowrap',
                                width: { xs: '100%', md: 'auto' },
                                flex: { xs: '0 0 auto', md: '0 1 auto' },
                                px: { xs: 2, sm: 3 },
                                '&:hover': {
                                    backgroundColor: '#eaeaea',
                                },
                            }}
                        >
                            <TelegramIcon sx={{ fontSize: 20 }} />
                            <Box>Обсудить личное ведение</Box>
                        </Link>
                    </Box>
                </Grid>

                {/* КАРТИНКА ДЛЯ ДЕСКТОПА */}
                <Grid
                    item
                    xs={12}
                    md={5}
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        mt: { xs: 3, md: 0 },
                    }}
                >
                    <Box
                        component="img"
                        src={ImageLeft}
                        alt="Елена Корнева"
                        sx={{
                            width: '100%',
                            maxWidth: { xs: 260, sm: 300, md: 340 },
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}
