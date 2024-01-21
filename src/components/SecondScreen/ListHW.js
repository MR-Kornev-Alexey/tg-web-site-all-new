import React, { useEffect, useRef } from 'react';
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
import { useSpring, animated } from 'react-spring';

export default function ComplexGrid() {
    const cardsRef = useRef([]);
    const cardsOfHW = [
        {
            id: 0,
            title: "На любые ваши действия истерит и бурно реагирует",
            img: require("../../img/emo-cards/emo-img-6.png")
        },
        {
            id: 1,
            title: "Начинет психовать при любой попытке отлучить от планшета,  телефона, мультиков ",
            img: require("../../img/emo-cards/emo-img-4.png")
        },
        {
            id: 3,
            title: "Безудержно бьется головой об стену, швыряет игрушки, кусается и  щипается",
            img: require("../../img/emo-cards/emo-img-5.png")
        },
        {
            id: 4,
            title: "Игнорирует запреты,  а слова \"Нет\" и \"Нельзя\" не работают",
            img: require("../../img/emo-cards/emo-img-2.png")
        },
        {
            id: 2,
            title: "Проявляет агрессию к детям, взрослым, домашним питомцам",
            img: require("../../img/emo-cards/emo-img-3.png")
        },

        {
            id: 5,
            title: "Находится в возрасте от 0 до трех лет ",
            img: require("../../img/emo-cards/emo-img-1.png")
        }
    ]
    const cardSprings = useSpring({
        from: { opacity: 0, transform: 'translateX(-100%)' },
        to: { opacity: 1, transform: 'translateX(0)' },
        config: { mass: 1, tension: 200, friction: 14 },
    });
    useEffect(() => {
        cardsRef.current.forEach((card, index) => {
            cardSprings.delay = index * 100; // Adjust the delay time for each card
            card.start(cardSprings);
        });
    }, [cardSprings]);

    return (
        <div>
            {cardsOfHW.map((element, index) => {
                const cardSpring = useSpring({
                    from: { opacity: 0, transform: 'translateX(-100%)' },
                    to: { opacity: 1, transform: 'translateX(0)' },
                    config: { mass: 1, tension: 200, friction: 14 },
                    ref: cardsRef.current[index],
                });

                return (
                    <animated.div key={element.id} style={cardSpring}>
                        <Paper
                            sx={{
                                margin: 'auto',
                                flexGrow: 1,
                                color: '#25384b',
                                position: 'relative',
                                marginBottom: index < cardsOfHW.length - 1 ? 2 : 0,
                            }}
                            className={"cardPaper"}
                        >
                            <Grid container >
                                {/* ... your existing Grid and Typography code */}
                                <Grid item xs={3}  display={"flex"} justifyContent={"center"} alignItems={"flex-end"}>
                                    <Box
                                        component="img"
                                        src={element.img}
                                        alt="истерики"
                                        sx={{
                                            marginTop: 1,
                                            width: '90%',
                                            maxWidth: 160,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={9} className={"box-start"} >
                                        <Typography className={"cardTitleOne size-common"}  component="div" >
                                            {element.title}
                                        </Typography>
                                </Grid>
                            </Grid>
                            <Box
                                component="img"
                                src={rb}
                                alt="Главная картинка"
                                sx={{
                                    width: '100%',
                                    maxWidth: 60,
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                }}
                            />
                        </Paper>
                    </animated.div>
                );
            })}
        </div>
    );
}
