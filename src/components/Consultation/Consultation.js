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

const text = [
    "Эксперт по развитию малышей от 0 до 3 лет с опытом работы с более чем 1000 успешными семьями",
    "Более полумиллиона  подписчиков на социальных платформах, получающие ценные советы по вопросам здоровья и развития детей",
    "Высококвалифицированный врач-педиатр",
    "Cемейный психолог ",
    "Бизнес-леди и мастер делового администрирования (MBA)",
    "Жена,  мама трех успешных сыновей, бабушка",
    "Сертифицированный специалист по современным методам развития мозга от Массачусетского университета",
]
const textNew = ["Вы получите <strong>экспертные советы</strong> от профессионала с более чем 30 - летним опытом развитии детей. Это поможет вам понять, как правильно развивать ребенка и предотвратить проблемы в будущем",
"Если у вас возникли <strong>медицинские проблемы</strong> с вашим ребенком, которые вы не понимаете, то вы получите помощь от опытного педиатра и семейного психолога. Это даст вам четкий план действий, что делать дальше",
"<strong>Онлайн консультация</strong> безопасна для вас и вашего ребенка, особенно во время пандемий. Вы получите помощь, не выходя из дома, избежав контакт с другими людьми и снизите риск заболевания",
"<strong>Онлайн консультация</strong> экономит время и деньги, поскольку не тратится время на поездки и нет оплаты за дорогостоящие консультации в офисе специалиста",
"<strong>Онлайн консультация</strong> доступна всем родителям, независимо от места жительства. Это позволяет получать помощь и знания всем, кто заинтересован в здоровье и развитии своего малыша         "
]

export default function Consultation() {
    return (
        <Container component="section">
            <Grid container>
                <Grid item xs={12} md={4} sx={{
                    display: "flex",
                    justifyContent: {md: 'flex-end', sm: 'center', xs: 'center'},
                    alignItems: {md: 'flex-end', sm: 'center', xs: 'center'},
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
                    {textNew.map((item, index) => (
                            <Grid container key={index} sx={{marginBottom:1}} className={"cardTitleOne size-common-price"}>
                                <Grid item xs={1} display={"flex"} justifyContent={"center"} alignItems={"center"} >
                                    <StarBorderIcon/>
                                </Grid>
                                <Grid item xs={11}  sx={{paddingLeft:1}}
                                      dangerouslySetInnerHTML={{__html: item}}
                                >
                                </Grid>
                            </Grid>
                        )
                    )
                    }
                </Grid>

            </Grid>
            <Grid item xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Link href={"/consultation"} className={"btn-call"} sx={{
                    maxWidth: 260,
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: "center",
                    marginTop: {md: 2, sm: 2, xs: 2}
                }}>
                    <ListAltIcon color={"#666666"}/> <Box className={"top-mainSubTitle"}
                                                          sx={{marginLeft: 2}}>Перейти</Box>
                </Link>
            </Grid>
        </Container>
    );
}
