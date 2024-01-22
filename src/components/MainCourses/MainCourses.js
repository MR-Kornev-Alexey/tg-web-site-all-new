import React, {useState, useEffect} from 'react';
import '../main/Main.css'
import LineBlock from "../SecondScreen/LineBlock"
import Slider from "../Sliders/Sliders";
import ListOfCourses from "../ListOfCourses/ListOfCourses"
import {Box} from "@mui/system";

const images = [
    {
        label: 'Надежда',
        imgPath: require("../Sliders/outMain/Image03.jpg")
    },
    {
        label: 'Ксения П.',
        imgPath: require("../Sliders/outMain/Image01.jpg")
    },
    {
        label: 'Nastya',
        imgPath: require("../Sliders/outMain/Image05.jpg")
    },
    {
        label: 'Лейсан',
        imgPath: require("../Sliders/outMain/Image09.jpg")
    },
    {
        label: 'Анастасия',
        imgPath: require("../Sliders/outMain/Image12.jpg")
    },
    {
        label: 'Smex',
        imgPath: require("../Sliders/outMain/Image16.jpg")
    },
    {
        label: 'Alenka',
        imgPath: require("../Sliders/outMain/Image17.jpg")
    },
    {
        label: 'Александра Ф.',
        imgPath: require("../Sliders/outMain/Image18.jpg")
    },
    {
        label: 'Дарья',
        imgPath: require("../Sliders/outMain/Image22.jpg")
    },
    {
        label: 'Мария',
        imgPath: require("../Sliders/outMain/Image25.jpg")
    },
    {
        label: 'Ani M.',
        imgPath: require("../Sliders/outMain/Image29.jpg")
    },
    {
        label: 'Дарья',
        imgPath: require("../Sliders/outMain/Image32.jpg")
    },
    {
        label: 'Асель',
        imgPath: require("../Sliders/outMain/Image33.jpg")
    },
    {
        label: 'Наталья',
        imgPath: require("../Sliders/outMain/Image36.jpg")
    },
    {
        label: 'Марина П.',
        imgPath: require("../Sliders/outMain/Image41.jpg")
    }
];
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CallUS from "../CallUs/CallUS";
import Footer from "../Footer/Footer";
import Consultation from "../Consultation/Consultation";
import ListOfFreeCourses from "../ListOfCourses/ListOfFreeCourses";



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
            style={{
                display: isVisible ? 'block' : 'none',
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                cursor: 'pointer'
            }}
            onClick={scrollToTop}
        >
            <ArrowUpwardIcon fontSize={"large"}/>
        </button>
    );
};

export default function MainCourses() {
    return (
        <Box>
            <LineBlock title={"Платные курсы"}/>
            <ListOfCourses/>
            <LineBlock title={"Бесплатные курсы"}/>
            <ListOfFreeCourses />

            <LineBlock title={"Отзывы"}/>
            <Slider imagesFrom={images}/>
            <LineBlock title={"Вопросы?"}/>
            <CallUS/>
            <Footer/>
            <ScrollToTopButton/>
        </Box>
    );
}
