import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import '../main/Main.css'
import Typography from "../Typography/Typography";
import ImageLeft from "../../img/consultation.png";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Link from "@mui/material/Link";
import ListAltIcon from "@mui/icons-material/ListAlt";

const text =
    `<p><strong>РАЗБЛОКИРУЙТЕ ПОТЕНЦИАЛ РЕБЕНКА ЗА 1.5 ЧАСА</strong>(консультация)<br />
<p><em>Не даю общих советов, а выстраиваю  РАБОЧИЕ индивидуальные стратегии под ключ.</em></p>
<br />
<p><strong>Ваша боль — мой вызов. Обращайтесь, если:</strong></p>

<ul style="list-style-type: none; padding-left: 0; margin-left: 0;">
<li><strong>➔ Воспитание = битва:</strong> Истерики, «не хочу!», сломанные границы, беспомощность.</li>
<li><strong>➔ Хотите РАЗВИВАТЬ, а не «переживать»:</strong><br>
✔️ Самостоятельность<br>
✔️ Лидерство<br>
✔️ Креативность <br>
✔️ Финансовый интеллект </li>
<li><strong>➔ Нужен НЕ шаблон, а решение под ВАШЕГО ребенка и ВАШ ритм жизни.</strong></li>
</ul>
<br/>
<p><strong>КОНСУЛЬТАЦИЯ = Тройная экспертиза:</strong></p>

<ul style="list-style-type: none; padding-left: 0; margin-left: 0;">
<li><strong>🔍 Глубокое погружение за 90-120 минут (Zoom):</strong><br>
✔️ Докопаемся до корня проблемы (не маскируем симптомы!).<br>
✔️ Не закончу, пока вы не скажете: «Теперь ЯСНО!».</li>
<li><strong>🎯 Четкий план «Что делать ЗАВТРА»:</strong><br>
✔️ Пошаговые шаги под ваши ресурсы.<br>
✔️ Фокус на 1-2 ключевых навыка (самостоятельность, креатив и т.д.).</li>
<li><strong>💡 Вижу картину ЦЕЛИКОМ:</strong><br>
✔️ Как здоровье влияет на поведение?<br>
✔️ Как эмоции блокируют обучение?<br>
✔️ Как развитие формирует характер?<br>
→ Никаких однобоких советов!</li>
</ul>
<br />
<p><strong>ВАШ РЕЗУЛЬТАТ ПОСЛЕ ВСТРЕЧИ:</strong></p>

<ul style="list-style-type: none; padding-left: 0; margin-left: 0;">
<li><strong>✅ ЯСНОСТЬ вместо хаоса:</strong> Понимаете ПОЧЕМУ происходит и КАК реагировать.</li>
<li><strong>✅ ИНСТРУМЕНТЫ в руки:</strong> Конкретные техники, алгоритмы, чек-листы.</li>
<li><strong>✅ ПЛАН «Миссия выполнима»:</strong> Что делать завтра/через неделю/через месяц.</li>
<li><strong>✅ СПОКОЙСТВИЕ:</strong> Уверенность, что идете верным путем.</li>
<li><strong>✅ СТАРТ ПЕРЕМЕН:</strong> Ребенок удивит инициативой уже на первой неделе!</li>
</ul>
<br />
<p>Стоимость консультации <strong>30 000</strong> рублей </p><br/>
<p><strong>КАК ПОПАСТЬ НА КОНСУЛЬТАЦИЮ</strong></p>
<p>Напишите «Хочу консультацию» в WhatsApp</p>
`


export default function Consultation() {
    return (
        <Container component="section">
            <Grid container sx={{
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Grid item xs={12} md={4} sx={{
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
                            maxWidth: 400
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={8}
                      sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', order: {md: 2, sm: 2, xs: 2}}}>
                    <Box  sx={{paddingLeft:1}}
                          dangerouslySetInnerHTML={{__html: text}}
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Link href={"https://wa.me/79253114131?text=Хочу консультацию"}  className={"btn-call"} sx={{
                    maxWidth: 260,
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: "center",
                    marginTop: {md: 2, sm: 2, xs: 2}
                }}>
                    <ListAltIcon color={"#666666"}/> <Box className={"top-mainSubTitle"}
                                                          sx={{marginLeft: 2}}>Заказать</Box>
                </Link>
            </Grid>
        </Container>
    );
}
