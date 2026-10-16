import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Fade from '@mui/material/Fade';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Conduct from "../Conduct/Conduct";
import Slider from "../Sliders/Sliders";
import CallUS from "../CallUs/CallUS";
import Footer from "../Footer/Footer";
import SystemicTransformation from "../Conduct/SystemicTransformation";

const images = [
    {
        label: 'Надежда',
        imgPath: require("../Sliders/outMain/Image03.jpg"),
        description: "Более 10 лет педагогического опыта"
    },
    {
        label: 'Ксения П.',
        imgPath: require("../Sliders/outMain/Image01.jpg"),
        description: "Работает с детьми с особыми потребностями"
    },
    {
        label: 'Nastya',
        imgPath: require("../Sliders/outMain/Image05.jpg"),
        description: "Специалист по раннему развитию"
    },
    {
        label: 'Лейсан',
        imgPath: require("../Sliders/outMain/Image09.jpg"),
        description: "Кандидат педагогических наук"
    },
    {
        label: 'Анастасия',
        imgPath: require("../Sliders/outMain/Image12.jpg"),
        description: "Нейропсихолог, стаж 8 лет"
    },
    {
        label: 'Smex',
        imgPath: require("../Sliders/outMain/Image16.jpg"),
        description: "Семейный психолог"
    },
    {
        label: 'Alenka',
        imgPath: require("../Sliders/outMain/Image17.jpg"),
        description: "Монтессори-педагог"
    },
    {
        label: 'Александра Ф.',
        imgPath: require("../Sliders/outMain/Image18.jpg"),
        description: "Логопед-дефектолог"
    },
    {
        label: 'Дарья',
        imgPath: require("../Sliders/outMain/Image22.jpg"),
        description: "Клинический психолог"
    },
    {
        label: 'Мария',
        imgPath: require("../Sliders/outMain/Image25.jpg"),
        description: "Арт-терапевт"
    },
    {
        label: 'Ani M.',
        imgPath: require("../Sliders/outMain/Image29.jpg"),
        description: "Педагог-психолог"
    },
    {
        label: 'Дарья',
        imgPath: require("../Sliders/outMain/Image32.jpg"),
        description: "Специалист по сенсорной интеграции"
    },
    {
        label: 'Асель',
        imgPath: require("../Sliders/outMain/Image33.jpg"),
        description: "Методист детского развития"
    },
    {
        label: 'Наталья',
        imgPath: require("../Sliders/outMain/Image36.jpg"),
        description: "Врач ЛФК для детей"
    },
    {
        label: 'Марина П.',
        imgPath: require("../Sliders/outMain/Image41.jpg"),
        description: "Психолог-консультант"
    }
];

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
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
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Fade in={isVisible} timeout={300}>
            <Fab
                onClick={scrollToTop}
                sx={{
                    position: 'fixed',
                    bottom: 32,
                    right: 32,
                    zIndex: 1000,
                    backgroundColor: '#D95D2B',
                    color: '#FCF9F3',
                    '&:hover': {
                        backgroundColor: '#C54A1F',
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 16px rgba(217, 93, 43, 0.3)'
                    },
                    transition: 'all 0.3s ease'
                }}
                size="medium"
                aria-label="scroll to top"
            >
                <ArrowUpwardIcon />
            </Fab>
        </Fade>
    );
};

export default function MainConduct() {
    return (
        <Box sx={{
            backgroundColor: '#FCF9F3',
            minHeight: '100vh'
        }}>
            <SystemicTransformation />
            <Slider
                imagesFrom={images}
                title="Мои клиенты пишут"
                subtitle="Реальные истории и результаты работы"
            />

            <CallUS
                title="Готовы начать системное сопровождение?"
                subtitle="Первая консультация поможет определить вектор развития"
            />

            <Footer />
            <ScrollToTopButton />
        </Box>
    );
}