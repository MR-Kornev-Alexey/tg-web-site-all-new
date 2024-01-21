import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import '../main/Main.css'
import ThirdCardNew from "./ThirdCardNew";
import ImageMain from "../../img/baby-smile-1.png";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ImageMom from "../../img/mom-1.png";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

const listOfCards = [
    {  id: 0,
        description: "Приобретете навыки работы с разными видами \"нытья\" и истерик",
    },
    {  id: 1,
        description: "Научитесь использовать  \"Нет\" и \"Нельзя\" так, чтобы ребенок следовал вашим указаниям"  ,
    },
    {  id: 2,
        description: "Перестанете чувствовать беспомощность при эмоциональных всплесках",
    },
    {  id: 3,
        description: "Получите навыки по установке и защите личных границ для себя и малыша"  ,
    },
    {  id: 5,
        description: "Вернете себе свою жизнь"  ,
    },
    {  id: 6,
        description: "Обучите  ребенка адекватным способам выражать свои потребности"  ,
    }
]
const listOfCards1 = [
    {  id: 0,
        description: "Приобретете навыки работы с разными видами \"нытья\" и истерик",
    },
    {  id: 1,
        description: "Научитесь использовать  \"Нет\" и \"Нельзя\" так, чтобы ребенок следовал вашим указаниям"  ,
    },
    {  id: 2,
        description: "Перестанете чувствовать беспомощность при эмоциональных всплесках",
    }
]
const listOfCards2 = [
    {  id: 0,
        description: "Получите навыки по установке и защите личных границ для себя и малыша"  ,
    },
    {  id: 1,
        description: "Вернете себе свою жизнь"  ,
    },
    {  id: 2,
        description: "Обучите  ребенка адекватным способам выражать свои потребности"  ,
    }
]
    // <ThirdCardNew key={element.id} title={element.description} icon={element.icon} img={element.img} />
export default function SixWeek() {
    return (
        <Container component="third">
            <Grid container sx={{marginTop: 4}}>

                <Grid item md={9} sm={12} xs={12} container sx={{order: {md: 1, sm: 2, xs: 2}}}>
                    <Grid item md={5} sm={12} xs={12} sx={{marginRight: {md: 1, sm: 0, xs: 0}}}>
                        {listOfCards1.map((element, index) => {
                                return (
                                        <ThirdCardNew key={index} title={element.description}  />
                                )
                            }
                        )
                        }
                    </Grid>
                    <Grid item md={5} sm={12} xs={12} sx={{marginLeft: {md: 1, sm: 0, xs: 0}}}>
                        {listOfCards2.map((element, index) => {
                                return (
                                    <ThirdCardNew key={index} title={element.description}  />
                                )
                            }
                        )
                        }
                    </Grid>

                </Grid>
                <Grid item md={3} sm={12} xs={12} sx={{
                    display: "flex",
                    justifyContent: {md: 'center', sm: 'center', xs: 'center'},
                    alignItems: "center",
                    order: {md: 2, sm: 1, xs: 1}
                }}>
                    <Box
                        component="img"
                        src={ImageMain}
                        alt="Главная ImageMain"
                        sx={{
                            width: '100%',
                            maxWidth: 420,
                            marginBottom: {md: 0, sm: 3, xs:4 },
                            transform: 'scaleX(-1)',
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}
