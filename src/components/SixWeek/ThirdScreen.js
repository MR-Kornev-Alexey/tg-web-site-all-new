import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import '../main/Main.css'
import Typography from "../Typography/Typography";
import Button from "@mui/material/Button";
import ImageLeft from "../../img/image-new-2.png";
import ImageCentral from "../../img/image-new-3.png";
import CardThird from "../ThirdScreen/CardThird";
import Icon from '@mdi/react';
import { mdiBaby, mdiClockTimeEightOutline, mdiBabyFaceOutline, mdiTeddyBear, mdiHandClap, mdiTabletDashboard } from '@mdi/js';
import ThirdCardNew from "./ThirdCardNew";
import ThirdCard from "../ThirdScreen/CardThird";





const listOfCards = [
    {  id: 0,
       description: "Сделаете процесс развития ребенка максимально интересным и эффективным",
       icon: <Icon path={mdiBaby}  size={2}  color={"#739abf"} />
    },
    {  id: 1,
        description: "Сохраните ценное время, которое можно потратить на другие важные дела"  ,
        icon: <Icon path={mdiClockTimeEightOutline}  size={2}  color={"#739abf"} />
    },
    {  id: 2,
        description: "Разнообразите занятия с детьми и сделаете их более интересными и продуктивными"  ,
        icon: <Icon path={mdiTeddyBear}  size={2}  color={"#739abf"} />
    },
    {  id: 3,
        description: "Получите уверенность в правильности своих действий"  ,
        icon: <Icon path={mdiHandClap}  size={2}  color={"#739abf"}/>
    },
    {  id: 4,
        description: "Подключите современные технологии для развития малыша"  ,
        icon: <Icon path={mdiTabletDashboard} size={2}  color={"#739abf"}/>
    },
    {  id: 5,
        description: "Начнете лучше понимать и принимать свою кроху, его эмоциональное состояние"  ,
        icon: <Icon path={mdiBabyFaceOutline}  size={2}  color={"#739abf"}/>
    }
]

export default function ThirdScreen() {
    return (
        <Container component="section">
              <Grid container>
                    <Grid item xs={12} md={8} sx={{ display: { sm: 'none', xs: 'none', md: 'flex' }, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingX: 2 }}>
                        <Grid container spacing={2}>
                            {[listOfCards.slice(0, 3), listOfCards.slice(3, 6)].map((column, columnIndex) => (
                                <Grid item key={columnIndex} sm={6} md={6}>
                                    {column.map((element) => (
                                        <ThirdCardNew key={element.id} title={element.description} icon={element.icon} />
                                        // <CardThird key={element.id} title={element.description} icon={element.icon} />
                                    ))}
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                  <Grid item xs={12} md={8} sx={{ display: { sm: 'flex', xs: 'flex', md: 'none' }, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingX: 2 }}>
                      <Grid container spacing={2}>
                          {listOfCards.map((element, columnIndex) => (
                              <Grid item key={columnIndex}>
                                      <ThirdCard  title={element.description} icon={element.icon} />
                              </Grid>
                          ))}
                      </Grid>
                  </Grid>
                  <Grid item xs={12} md={4}  sx={{ display: { sm: 'none', xs: 'none', md: 'flex' }, justifyContent: 'flex-start', position: 'relative', overflow: "hidden" }}>
                      <Box
                          component="img"
                          src={ImageCentral}
                          alt="Главная картинка"
                          className={"img-right"}
                      />
                  </Grid>
                    <Grid item xs={12} md={12} sx={{ display: { sm: 'flex', md: 'none' , xs: 'flex', }, justifyContent: 'center', alignItems: 'flex-start',marginTop: 4 }}>
                        <Box
                            component="img"
                            src={ImageCentral}
                            alt="Главная картинка"
                            className={"big-image"}
                        />
                    </Grid>
                </Grid>
        </Container>
    );
}
