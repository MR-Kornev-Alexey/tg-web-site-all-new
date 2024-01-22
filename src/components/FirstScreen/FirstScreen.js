import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import '../main/Main.css'
import Typography from "../Typography/Typography";
import ImageLeft from "../../img/avatar-900.png";
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

export default function FirstScreen() {
    return (
        <Container component="section">
            <Grid container>
                <Grid item xs={12} md={7}
                      sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',   marginTop: {md: 0, sm: 3, xs: 2}, order: {md: 1, sm: 2, xs: 2}}}>
                    <Typography gutterBottom sx={{marginTop: 2, display: {md: "flex", sm: "none", xs: "none"}}} className="top-mainSubTitle" >
                        ваш эксперт в материнстве и развитии малыша
                    </Typography>
                    <Typography className="mainTitle">
                        Елена Корнева
                    </Typography>
                    {text.map((item, index) => (
                            <Grid container key={index} sx={{marginBottom:1}} className={"cardTitleOne size-common"}>
                                <Grid item xs={1} display={"flex"} justifyContent={"center"} alignItems={"center"} >
                                    <StarBorderIcon/>
                                </Grid>
                                <Grid item xs={11} display={"flex"} justifyContent={"flex-start"} alignItems={"center"} sx={{paddingLeft:1}}>
                                    {item}
                                </Grid>
                            </Grid>
                        )
                    )
                    }
                </Grid>
                <Grid item xs={12} md={5} sx={{
                    display: "flex",
                    justifyContent: {md: 'flex-end', sm: 'center', xs: 'center'},
                    alignItems: {md: 'flex-end', sm: 'center', xs: 'center'},
                    marginY: {md: 0, sm: 3, xs: 3},
                    order: {md: 2, sm: 1, xs: 1},
                    flexDirection: "column"
                }}>
                    <Typography gutterBottom sx={{textAlign: "center", display: {md: "none", sm: "content", xs: "content"}}} className="top-mainSubTitle">
                        ваш эксперт в материнстве и развитии малыша
                    </Typography>
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
            </Grid>
        </Container>
    );
}
