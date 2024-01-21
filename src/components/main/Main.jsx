import React, { useState, useEffect } from 'react';
import './Main.css'
import FirstScreen from "../FirstScreen/FirstScreen"
import Price from "../Price/Price";
import LineBlock from "../SecondScreen/LineBlock"
import ListHW from "../SecondScreen/ListHW"
import ThirdScreen from "../SixWeek/ThirdScreen";
import ProductCTA from "../GTA/ProductCTA";
import Algorithm from "../Algorithm/Algorithm";
import Author from "../Author/Author";
import NewExamples from "../Examples/Examples";
import SecondListLeft from "../SecondScreen/SecondListLeft";
import SixWeek from "../SixWeek/SixWeek";
import HowWork from "../HowWork/HowWork";
import Slider from "../Sliders/Sliders";
import TimeLine from "../TimeLine/TimeLine";
import WhatCourse from "../WhatCourse/WhatCourse";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import {Box} from "@mui/system";


import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CallUS from "../CallUs/CallUS";


const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        // Определите, насколько экранов нужно прокрутить, чтобы кнопка стала видимой
        const scrollThreshold = window.innerHeight * 1.5;

        if (window.scrollY > scrollThreshold) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Очистка слушателя событий при размонтировании компонента
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            style={{ display: isVisible ? 'block' : 'none', position: 'fixed', bottom: '20px', right: '20px',  cursor: 'pointer' }}
            onClick={scrollToTop}
        >
            <ArrowUpwardIcon fontSize={"large"}/>
        </button>
    );
};

export default function Main() {
    return (
            <Box >
                <FirstScreen />
                <CountdownTimer />
                <LineBlock title={"Курс для Вас, если малыш:"}/>
                 <ListHW />
                <LineBlock title={"И если Вы:"}/>
                <SecondListLeft />
                <LineBlock title={"За 6 недель работы Вы:"}/>
                <SixWeek/>
                <LineBlock title={"Как работаем ?"}/>
                <HowWork />
                <LineBlock title={"Остались вопросы?"}/>
                <CallUS />
                <LineBlock title={"Отзывы"}/>
                <Slider />
                <LineBlock title={"Программа курса"}/>
                <TimeLine />
                <LineBlock title={"Елена Корнева"}/>
                <Author/>
                <LineBlock title={"Тарифы"}/>
                <Price />
                <ScrollToTopButton />
            </Box>
        );
    }
