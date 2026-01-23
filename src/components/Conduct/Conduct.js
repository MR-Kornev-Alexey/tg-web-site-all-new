import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import '../main/Main.css'
import Typography from "../Typography/Typography";
import ImageLeft from "../../img/new-baby.png";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Link from "@mui/material/Link";
import ListAltIcon from "@mui/icons-material/ListAlt";
import TelegramCTA from "../TelegramCTA/TelegramCTA";

const text =`<p><em>
Минимальный срок сопровождения — 3 месяца.<br>
Первые изменения ощущаются уже через 30 дней.
</em></p>

<br>

<p><strong>Почему результат получают не все?</strong></p>

<p>
Потому что большинство родителей действует интуитивно.<br>
Без системы. Без точных инструментов. Без опоры на психотип ребёнка и среду, в которой он растёт.
</p>

<br>

<p><strong>Я работаю иначе.</strong></p>

<p>
Каждая семья — отдельная система.<br>
Каждый ребёнок — индивидуальная архитектура развития.
</p>

<p>
В работе я использую персональные технологии, адаптированные под психотип ребёнка
и реальную динамику семьи.<br>
Без универсальных советов и шаблонных решений.
</p>

<br>

<p><strong>Уже в первый месяц меняется главное:</strong></p>

<p>
Снижается внутреннее напряжение.<br>
Появляется ясность и опора.<br>
Ребёнок начинает действовать более самостоятельно и осознанно.
</p>

<p>
Формируется фундамент навыков, которые будут работать на него в будущем:
мышление, эмоциональная устойчивость, ответственность.
</p>

<br>

<p><strong>Формат сопровождения</strong></p>

<p>
Сначала — глубокая диагностика: психотип ребёнка и аудит среды.<br>
Затем — персональная стратегия с фокусом на 2–3 ключевых навыках.
</p>

<p>
Мы регулярно встречаемся в формате индивидуальных сессий.<br>
Я сопровождаю процесс, корректирую курс и даю практические инструменты —
для ребёнка и для родителей.
</p>

<p>
Между сессиями доступна поддержка в чате.<br>
Для клиентов ViP-формата — постоянная связь 24/7.
</p>

<br>

<p><strong>Для клиентов сопровождения</strong></p>

<p>
Доступ к закрытой базе знаний.<br>
Индивидуальная дорожная карта развития ребёнка до 10 лет вперёд.
</p>

`


export default function Conduct() {
    return (
        <Container component="section">
            <Grid container sx={{
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Grid item sm={9} md={4} sx={{
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: {md: 0, sm: 3, xs: 3},
                    order: {md: 1, sm: 1, xs: 1},
                    flexDirection: "column"
                }}>
                    <Box
                        component="img"
                        src={ImageLeft}
                        alt="Главная картинка"
                        sx={{
                            width: '100%',
                            maxWidth: 330
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={8}
                      sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', order: {md: 2, sm: 2, xs: 2}}}>
                                <Box  sx={{padding:2}}
                                      dangerouslySetInnerHTML={{__html: text}}
                                />
                </Grid>
            </Grid>
            <Grid item xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <TelegramCTA text="Запросить персональное ведение"/>
            </Grid>
        </Container>
    );
}
