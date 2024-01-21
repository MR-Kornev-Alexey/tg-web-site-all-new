import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function WhatCourse() {
    const Description = [
        "<p><strong>Работа с положительными эмоциями<br /></strong></p>\n" +
        "<ul>\n" +
        "<li>\"Как правильно распознать эмоции своего ребенка\"</li>\n" +
        "<li>\"Для чего работать с положительными эмоциями\"</li>\n" +
        "<li>\"Особенности эмоционального развития у малышей\"</li>\n" +
        "<li>\"Особые алгоритмы работы для вашего возраста\"</li>\n" +
        "<li>\"Эмоциональная связь - основа формирования сильной личности \"</li>\n" +
        "</ul>\n" +
        "<p>&nbsp;</p>" +
        "<p>2 домашних задания по эмоциональному развитию<br />Рекомендации для печати</p>",

        "<p><strong>Работа с отрицательными эмоциями</strong></p>\n" +
        "<ul>\n" +
        "<li>\"3 основных способа работы с отрицательными эмоциями\"</li>\n" +
        "<li>\"Возрастные особенности проживания отрицательных эмоций у малышей\"</li>\n" +
        "<li>\"Как принять отрицательные эмоции ребенка\"</li>\n" +
        "<li>\"Учимся жить с отрицательными эмоциями\"</li>\n" +
        "</ul>\n" +
        "<p><strong>Контейнирование эмоций</strong></p>\n" +
        "<ul>\n" +
        "<li>\"Что такое Контейнирование\"</li>\n" +
        "<li>\"Алгоритм работы с эмоциями\"</li>\n" +
        "<li>\"Особенность контейнирования у малышей\"</li>\n" +
        "<li>\"Разбор ошибок при работе с методикой\"</li>\n" +
        "</ul>\n" +
        "<p>&nbsp;</p>" +
        "<p><strong>Вебинар<br /></strong>2 домашних задания по эмоциям&nbsp;<br />Рекомендации для печати</p>",

        "<p><strong>Истерики<br /></strong></p>\n" +
        "<ul>\n" +
        "<li>\"Истерики. Принятие истерик\"</li>\n" +
        "<li>\"Виды истерик\"</li>\n" +
        "<li>\"Как не допустить истерику\"</li>\n" +
        "<li>\"Алгоритмы работы с истериками\"</li>\n" +
        "<li>\"Варианты поведения после истерики\"</li>\n" +
        "</ul>\n" +
        "<p>&nbsp;</p>" +
        "<p><strong>Вебинар<br /></strong>2 домашних задания по эмоциям&nbsp;<br />Рекомендации для печати</p>",
        "<p><strong>Домашний агрессор<br /></strong></p>\n" +
        "<ul>\n" +
        "<li>\"Кусает, щипает, бросает. Причины\"</li>\n" +
        "<li>\"Почему не работают такие варианты, как кусать в ответ, обижаться, показывать боль и др. \"</li>\n" +
        "<li>\"Варианты работы в различных ситуациях\"</li>\n" +
        "</ul>\n" +
        "<p>&nbsp;</p>" +
        "<p><strong>Вебинар<br /></strong>2 домашних задания по эмоциям&nbsp;<br />Рекомендации для печати</p>",
        "<p><strong>Запреты и слова \"НЕТ\" и \"НЕЛЬЗЯ\"</strong></p>\n" +
        "<ul>\n" +
        "<li>\"Почему не работают запреты\"</li>\n" +
        "<li>\"Что такое<strong>&nbsp;\"преодоление запрета\"</strong>&nbsp;и как это использовать в развитии личности\"</li>\n" +
        "<li>\"В чем диаметральная разница методик\"</li>\n" +
        "<li>\"2 ключевых алгоритма работы с запретом\"</li>\n" +
        "<li>\"Разбор частых ошибок \"</li>\n" +
        "</ul>\n" +
        "<p><strong>Эмоциональное развитие мамы</strong></p>\n" +
        "<ul>\n" +
        "<li>\"В чем ключевая роль мамы в развитии личности\"</li>\n" +
        "<li>\"Не бойтесь показать отрицательные эмоции\"</li>\n" +
        "<li>\"Алгоритмы работы с эмоциями родителей\"</li>\n" +
        "</ul>\n" +
        "<p><br />2 домашних задания по эмоциям&nbsp;<br />Рекомендации для печати</p>",
        "<p><strong>Удобный ребенок или харизматичная личность<br /></strong></p>\n" +
        "<ul>\n" +
        "<li>\"Как не вырастить удобного ребенка\"</li>\n" +
        "<li>\"Особенности формирования харизмы\"</li>\n" +
        "<li>\"Развитие яркой личности через работу с эмоциями\"</li>\n" +
        "</ul>\n" +
        "<p><strong>Границы и правила</strong></p>\n" +
        "<ul>\n" +
        "<li>\"Почему отсутствие границ осложняет жизнь\"</li>\n" +
        "<li>\"Как устанавливать правила и границы\"</li>\n" +
        "<li>\"Это работает как в 5 месяцев так и в 30 лет\"</li>\n" +
        "</ul>\n" +
        "<p><br />2 домашних задания по эмоциям&nbsp;<br />Рекомендации для печати</p>"
    ]

    return (
        <Box className={"box-center"}>
            <Card sx={{maxWidth: 345}}>
                <CardMedia
                    sx={{height: 140}}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Подробнее</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Box>

    )
}
