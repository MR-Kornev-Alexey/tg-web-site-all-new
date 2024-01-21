import React, { useEffect, useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import AdjustIcon from '@mui/icons-material/Adjust';
import BrowserNotSupportedIcon from '@mui/icons-material/BrowserNotSupported';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import Button from "@mui/material/Button";
import "./Timeline.css"
import AlertDialogSlide from "../Dialog/Dialog"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import rb from "../../img/right-bottom.svg";



export default function TimeLine() {
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
        "<p>2 домашних задания<br />" +
        "2 задания для работы в мини группах<br />" +
        "2 семинара в Zoom<br />" +
        "Рекомендации для печати</p>",

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
        "<p>2 домашних задания<br />" +
        "2 задания для работы в мини группах<br />" +
        "2 семинара в Zoom<br />" +
        "Рекомендации для печати</p>",

        "<p><strong>Истерики<br /></strong></p>\n" +
        "<ul>\n" +
        "<li>\"Истерики. Принятие истерик\"</li>\n" +
        "<li>\"Виды истерик\"</li>\n" +
        "<li>\"Как не допустить истерику\"</li>\n" +
        "<li>\"Алгоритмы работы с истериками\"</li>\n" +
        "<li>\"Варианты поведения после истерики\"</li>\n" +
        "<li>\"Разбор родительских ошибок\"</li>\n" +
        "</ul>\n" +
        "<p>&nbsp;</p>" +
        "<p>2 домашних задания<br />" +
        "2 задания для работы в мини группах<br />" +
        "2 семинара в Zoom<br />" +
        "Рекомендации для печати</p>",
        "<p><strong>Домашний агрессор<br /></strong></p>\n" +
        "<ul>\n" +
        "<li>\"Кусает, щипает, бросает. Причины\"</li>\n" +
        "<li>\"Почему не работают такие варианты, как кусать в ответ, обижаться, показывать боль и др. \"</li>\n" +
        "<li>\"Варианты работы в различных ситуациях\"</li>\n" +
        "<li>\"Почему у вас не получается. РазБор ошибок \"</li>\n" +
        "</ul>\n" +
        "<p>&nbsp;</p>" +
        "<p>2 домашних задания<br />" +
        "2 задания для работы в мини группах<br />" +
        "2 семинара в Zoom<br />" +
        "Рекомендации для печати</p>",
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
        "<p>2 домашних задания<br />" +
        "2 задания для работы в мини группах<br />" +
        "2 семинара в Zoom<br />" +
        "Рекомендации для печати</p>",
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
        "<li>\"Разбор родительских ошибок \"</li>\n" +
        "</ul>\n" +
        "<p>2 домашних задания<br />" +
        "2 задания для работы в мини группах<br />" +
        "2 семинара в Zoom<br />" +
        "Рекомендации для печати</p>",
    ]
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogText, setDialogText] = useState('');
    const closeDialog = () => {
        setDialogOpen(false);
    };
    const openDialog = (text) => {
        setDialogOpen(true);
        setDialogText(text)
    }
    const timeLineNew = [
        { week: "1 - я неделя",
          title: "Работа с положительными эмоциями",
          icon: "",
          description: Description[0],
          img: ''
        },
        { week: "2 - я неделя",
            title: "Работа с отрицательными эмоциями <br />\n" +
                   "Контейнирование эмоций",
            icon: "",
            description: Description[1],
            img: ''
        },
        { week: "3 - я неделя",
            title: "Работа с истериками",
            icon: "",
            description:Description[2],
            img: ''
        },
        { week: "4 - я неделя",
            title: "Домашний беспредельщик",
            icon: "",
            description: Description[3],
            img: ''
        },
        { week: "5 - я неделя",
            title: "Запреты и слова \"НЕТ\" и \"НЕЛЬЗЯ\" <br/>\n" +
                "Эмоциональное развитие мамы",
            icon: "",
            description: Description[4],
            img: ''
        },
        { week: "6 - я неделя",
            title: "Удобный ребенок или харизматичная личность<br/>\n" +
                "Устанавление границ и правил",
            icon: "",
            description: Description[5],
            img: ''
        }
    ]
    return (
        <Container className={"box-center"}>
            {timeLineNew.map((element, index) =>
                <Card className={"card-timeline"}>
                    <CardContent sx={{position: "relative"}}>
                        <Box sx={{display:"flex"}} justifyContent={"flex-start"} alignItems={"flex-start"} flexDirection={"column"}>
                            <Typography variant="body2" color="text.secondary">
                                {element.week}
                            </Typography>
                            <Typography variant="h5" component="div" className={"h5-size"}
                                        dangerouslySetInnerHTML={{__html: element.title}} />
                        </Box>
                        <Box
                            component="img"
                            src={rb}
                            alt="Главная картинка"
                            className={"corner-timeline"}

                        />
                    </CardContent>
                    <CardActions sx={{display: "flex", justifyContent: 'center'}}>
                    <Button className={'timeline-button'}
                            onClick={() => openDialog(element.description)}>
                    Подробнее</Button>
                    </CardActions>
                </Card>
            )
            }
            <AlertDialogSlide isOpen={dialogOpen} closeDialog={ closeDialog} text={dialogText}/>
        </Container>
    );
}
