import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import '../main/Main.css'
import Typography from "../Typography/Typography";
import ImageLeft from "../../img/main-next.png";
import StarBorderIcon from '@mui/icons-material/StarBorder';

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
            <Grid container>
                <Grid item xs={12} md={7}
                      sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',   marginTop: {md: 0, sm: 3, xs: 2}, order: {md: 1, sm: 1, xs: 1}}}>

                    <Typography className="mainTitle">
                        Елена Корнева
                    </Typography>
                    <Typography gutterBottom sx={{marginTop: 2, paddingX:2 }} className="top-mainSubTitle" >
                      помогаю родителям раскрыть потенциал малыша через науку, любовь и систему
                    </Typography>
                    <Box  sx={{padding:2,   display: {md: "block", xs: 'none' } }}
                          dangerouslySetInnerHTML={{__html: newText}}
                    />
                </Grid>
                <Grid item xs={12} md={5} sx={{
                    display: "flex",
                    justifyContent: {md: 'flex-end', sm: 'center', xs: 'center'},
                    alignItems: {md: 'flex-end', sm: 'center', xs: 'center'},
                    marginY: {md: 0, sm: 2, xs: 2},
                    order: {md: 2, sm: 2, xs: 2},
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
                    <Box  sx={{padding:2,     display: {md: "none", sm: 'block' } } }
                          dangerouslySetInnerHTML={{__html: newText}}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}
