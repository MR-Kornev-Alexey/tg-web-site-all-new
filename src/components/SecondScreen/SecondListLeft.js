import * as React from 'react';
import {styled} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import "./SecondScreen.css"
import rb from "../../img/right-bottom.svg"
import {Box} from "@mui/system";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import ImageMom from "../../img/mom-1.png";
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const cardsOfHW1 = [
    {
        id: 0,
        title: "Беспомощны при эмоциональных взрывах и потеряли контроль над своей жизнью"
    },
    {
        id: 1,
        title: "С ужасом ожидаете очередную истерику"
    },
    {
        id: 1,
        title: "Опасаетесь, что ребенок может пострадать как физически, так и психологически",
    }
]
const cardsOfHW2 = [
    {
        id: 0,
        title: "В шоке от неуправляемой агрессии вашей крохи"
    },
    {
        id: 2,
        title: "Избегаете общественные места из-за страха неловкости  и чувства вины как \"плохой матери\"."
    },
    {
        id: 2,
        title: "Испытываете вину за поведение ребенка и свои срывы",
    }
]
const cardsOfHW3 = [
    {
        id: 0,
        title: "потеряли контроль над своей жизнью ",
    }
]
export default function SecondListLeft() {
    return (
        <Container component="third">
            <Grid container>
                <Grid item md={2} sm={12} xs={12} sx={{
                    display: "flex",
                    justifyContent: {md: 'center', sm: 'center', xs: 'center'},
                    alignItems: "center",
                    marginTop: {md: 0, sm: 3, xs: 3}
                }}>
                    <Box
                        component="img"
                        src={ImageMom}
                        alt="Главная картинка"
                        sx={{
                            width: '100%',
                            maxWidth: 390,
                            marginBottom: {md: 0, sm: 2, xs:2 }
                        }}
                    />
                </Grid>
                <Grid item md={10} sm={12} xs={12} container sx={{padding: 2}}>
                    <Grid item md={6} sm={12} xs={12}>
                        {cardsOfHW1.map((element, index) => {
                                return (
                                    <Box
                                        key={element.id}
                                    >
                                        <Grid container className={"titleBlockMom size-common"}>
                                            <Grid item md={2} sm={1} xs={1}  display={"flex"} justifyContent={"center"} alignItems={"center"} >
                                                <CheckBoxIcon color={"primary"} fontSize={"large"}/>
                                            </Grid>
                                            <Grid item md={10} sm={11} xs={11} className={"padding-mom-left padding-mom-right"}  display={"flex"} justifyContent={"flex-start"} alignItems={"center"} >
                                                {element.title}
                                            </Grid>
                                        </Grid>
                                    </Box>
                                )
                            }
                        )
                        }
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        {cardsOfHW2.map((element, index) => {
                                return (
                                    <Box
                                        key={element.id}
                                    >
                                        <Grid container className={"titleBlockMom size-common"}>
                                            <Grid item md={2} sm={1} xs={1}  display={"flex"} justifyContent={"center"} alignItems={"center"} >
                                                <CheckBoxIcon color={"primary"} fontSize={"large"}/>
                                            </Grid>
                                            <Grid item md={10} sm={11} xs={11} className={"padding-mom-left padding-mom-right"}  display={"flex"} justifyContent={"flex-start"} alignItems={"center"} >
                                                {element.title}
                                            </Grid>
                                        </Grid>
                                    </Box>
                                )
                            }
                        )
                        }
                    </Grid>

                </Grid>
            </Grid>

            <Link href={'#price'} sx={{display: "flex", justifyContent: 'center', marginTop: 2}}>
                <Button variant="contained" className="btn-pay" sx={{margin: '4 auto 0 auto'}}>
                    Купить
                </Button>
            </Link>
        </Container>
    );
}
