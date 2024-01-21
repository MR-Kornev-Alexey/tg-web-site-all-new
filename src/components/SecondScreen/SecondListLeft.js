import * as React from 'react';
import {styled} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import "./SecondScreen.css"
import rb from "../../img/right-bottom.svg"
import {Box} from "@mui/system";


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '90%',
    maxHeight: '90%',
});
const cardsOfHW = [
    {
        id: 0,
        title: "Регулярно истерит и бурно реагирует на любые раздражители"
    },
    {
        id: 1,
        title: "Ноет при отключении от мультиков и/или при изъятии планшета и телефона"
    },
    {
        id: 2,
        title: "Агрессивно ведет себя с детьми и домашними животными",
    },
    {
        id: 3,
        title: "Бъется головой об стену, швыряет игрушки, кусается, щипается и Вы не знаете что с этим делать"
    },
    {
        id: 4,
        title: "Не слушается, а слова \"Нет\" и \"Нельзя\' не работают"
    },
    {
        id: 5,
        title: "Проявляет агрессию, постоянно ноет, не идет на компромисс, требует невозможного",
    }
]
export default function ComplexGrid() {
    return (
        <div>
            {cardsOfHW.map((element, index)  => {
                    return (
                         <Paper
                            sx={{
                                p: 2,
                                margin: 'auto',
                                flexGrow: 1,
                                color: '#25384b',
                                position: 'relative',
                                marginBottom: index < cardsOfHW.length - 1 ? 2 : 0, // Add margin-bottom except for the last card
                            }}
                            key={element.id}
                            className={'cardPaper'}
                        >
                             <Grid container spacing={2} sx={{ flexWrap: 'wrap' }}>

                                 <Grid item xs={9} sm container sx={{ height: 80,  justifyContent: 'center', alignItems: 'center', marginBottom: 2 }}>
                                     <Grid item sm>
                                         <Typography gutterBottom component="div" className={'mainSubTitle'} sx={{textAlign: "left"}}>
                                             {element.title}
                                         </Typography>
                                     </Grid>
                                 </Grid>

                             </Grid>
                             <Box
                                 component="img"
                                 src={rb}
                                 alt="Главная картинка"
                                 sx={{
                                     width: '100%',
                                     maxWidth: 60,
                                     position: "absolute",
                                     bottom:0,
                                     right:0
                                 }}
                             />
                        </Paper>
                    )

                }
            )
            }
        </div>
    );
}
