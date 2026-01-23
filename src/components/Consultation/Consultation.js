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
import TelegramCTA from "../TelegramCTA/TelegramCTA";

const text =
    `
Разблокировка потенциала ребёнка.
Индивидуально. Точно. Без шаблонов.
</p>

<br>

<p><em>
Продолжительность — до 1,5 часа.
</em></p>

<br>

<p>
Я работаю с конкретной ситуацией,
а не с абстрактными советами.
</p>

<p>
Каждая консультация —
это персональная стратегия,
собранная под ребёнка и реальную жизнь семьи.
</p>

<br>

<p>
Мы разбираем происходящее на глубинном уровне
и выстраиваем понятный вектор дальнейших действий.
</p>

<br>

<p>
После встречи у вас остаётся ясность,
опора и чёткое понимание следующих шагов.
</p>

<br>

<p>
Формат предполагает ограниченное количество консультаций.
</p>

<br>

<p>
Стоимость — 30&nbsp;000 рублей/сессия.
</p>
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
                <TelegramCTA text="Запросить консультацию" />
            </Grid>
        </Container>
    );
}
