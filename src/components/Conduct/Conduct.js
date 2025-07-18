import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import '../main/Main.css'
import Typography from "../Typography/Typography";
import ImageLeft from "../../img/baby-smile-1.png";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Link from "@mui/material/Link";
import ListAltIcon from "@mui/icons-material/ListAlt";

const text =`
<p><em>Минимум 3 месяца для гарантированного результата. Первые изменения &mdash; уже через 30 дней</em></p>

<p><strong>Почему 95% родителей топчутся на месте?</strong><br>
Им не хватает <strong>СИСТЕМЫ</strong> и <strong>ТЕХНОЛОГИЙ</strong>.</p>

<p>Я использую прорывные методики, доказавшие свою эффективность:</p>
<br/>
<ul style="list-style-type: none; padding-left: 0; margin-left: 0;">
  <li><strong>➜ Нейроадаптивные инструменты</strong> под психотип ребенка</li>
  <li><strong>➜ Индивидуальные технологии</strong> для отработки сложных сценариев (истерики, отказы)</li>
  <li><strong>➜ ИИ-анализ среды</strong> &mdash; нахожу «тормоза» развития за 48 часов</li>
</ul>
<br/>
<p><strong>Ваш результат через 1 месяц:</strong></p>
<ul>
  <li><strong>✅ СНИМУ 80% «БОЛИ»:</strong> Истерики, нежелание учиться, беспомощность.</li>
  <li><strong>✅ ЗАПУСКАЕМ «СКИЛЛЫ БУДУЩЕГО»:</strong> Критическое мышление, эмоциональный интеллект, лидерство, финансовая грамотность.</li>
  <li><strong>✅ ВЫ ПОЛУЧАЕТЕ:</strong> Четкий план + инструменты «под ключ».</li>
</ul>
<br/>
<p><strong>ФОРМАТ ВЕДЕНИЯ (от 3 месяцев):</strong></p>

<ol>
  <li><strong>ЭЛИТ-ДИАГНОСТИКА:</strong>
    <ul>
      <li>Нейротест психотипа + Аудит среды.</li>
      <li>Технология: Анализ 100+ параметров развития.</li>
    </ul>
  </li>
  
  <li><strong>ПЕРСОНАЛЬНАЯ СТРАТЕГИЯ:</strong>
    <ul>
      <li>Календарь целей на 90 дней.</li>
      <li>Фокус на 2-3 ключевых навыках (например: самостоятельность + креативность + лидерство).</li>
    </ul>
  </li>
  
  <li><strong>📅 СЕССИИ 1-2р/неделю (Zoom):</strong>
    <ul>
      <li>Разбор прогресса + коррекция плана.</li>
      <li>Доступ к записям + чек-листам.</li>
    </ul>
  </li>
  
  <li><strong>🛠️ ТЕХНОЛОГИИ В ДЕЙСТВИИ:</strong>
    <ul>
      <li>Индивидуально подобранные задания (ребенок делает с удовольствием!).</li>
      <li>Технологии для родителей.</li>
    </ul>
  </li>
  
  <li><strong>🔥 ЭКСТРЕННАЯ ПОДДЕРЖКА:</strong>
    <ul>
      <li>Чат с куратором 5/7.</li>
      <li>ViP-тариф (24/7): Срочный разбор кризиса за 20 минут.</li>
    </ul>
  </li>
</ol>
<br/>
<p><strong>ЭКСКЛЮЗИВ:</strong></p>
<ul>
  <li>➜ Доступ к закрытой библиотеке знаний.</li>
  <li>➜ «Дорожная карта» до 10 лет &mdash; инвестируем в навыки, которые дадут фору в будущем.</li>
</ul>
<br/>
<p><strong>КАК ПОПАСТЬ НА ВЕДЕНИЕ</strong></p>
<p>Напишите «Хочу ведение» в WhatsApp</p>
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
                            maxWidth: 400
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
                <Link href={"https://wa.me/79253114131?text=Хочу на ведение"} className={"btn-call"} target="_blank" sx={{
                    maxWidth: 260,
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: "center",
                    marginTop: {md: 2, sm: 2, xs: 2}
                }}>
                    <ListAltIcon color={"#666666"}/> <Box className={"top-mainSubTitle"}
                                                          sx={{marginLeft: 2}}>Написать</Box>
                </Link>
            </Grid>
        </Container>
    );
}
