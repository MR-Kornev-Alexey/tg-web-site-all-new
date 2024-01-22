import React, {useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";



export default function ListOfFreeCourses() {
    const descriptionCourse = [
        {
            index: 0,
            linkToTilda: 'https://t.me/HelenEventBot?start=start',
            title: 'Разобраться в проблеме срыгивания',
            subTitle: 'с помощью <strong>тест-курса</strong>',
            showBF: false,
            img: require("../../img/ImageCards/card-image-gray-5.jpg"),
            description:
                '<h3 >&nbsp;</h3>' +
                '<div>\n' +
                '<h3>Поймете срыгивание или рвота?</h3> ' +
                '<ul>\n' +
                '<li>в бесплатном Web-приложении</li>\n' +
                '<li>Поняв, почему происходят срыгивания именно у Вашего ребенка</li>\n' +
                '<li>Определившись насколько серьезна ситуация со срыгиванием у малыша, стоит ли бить тревогу и срочно бежать за помощью</li>\n' +
                '<li>Научившись применять простые, но эффективные стратегии в зависимости от состояния крохи</li>\n' +
                '<li>Пройдя индивидуальное тестирование и получив рекомендации для конкретного случая</li>\n' +
                '</ul>' +
                '</div>'
        },
        {
            index: 1,
            linkToTilda: 'https://t.me/HelenEventBot?start=start',
            title: 'Вырастить гармоничного ребенка ',
            subTitle: 'Бесплатный стартовый курс',
            img: require("../../img/ImageCards/card-image-gray-8.jpg"),
            description:
                '<h3 >&nbsp;</h3>' +
                '<div>\n' +
                '<h3>Секрет успешного материнства</h3> ' +
                '<ol>\n' +
                '<li>\n' +
                '<p><strong>Индивидуальное развитие:</strong> Создайте уникальное обучающее окружение, поддерживая потребности малыша и стимулируя его естественные таланты и интересы.</p>\n' +
                '</li>\n' +
                '<li>\n' +
                '<p><strong>Раннее обучение:</strong> Используйте инновационные методики раннего обучения, включая игры, книги и музыку, для развития мозга и когнитивных навыков.</p>\n' +
                '</li>\n' +
                '<li>\n' +
                '<p><strong>Творческие занятия:</strong> Развивайте творческие способности ребенка через искусство, музыку и танец, предоставляя доступ к профессиональным тренерам.</p>\n' +
                '</li>\n' +
                '<li>\n' +
                '<p><strong>Семейная поддержка:</strong> Содействуйте сбалансированному семейному окружению, вовлекая семью в обучающие и воспитательные процессы.</p>\n' +
                '</li>\n' +
                '<li>\n' +
                '<p><strong>Материнская поддержка:</strong> Облегчайте материнство предоставлением полезных ресурсов и организацией мероприятий для осознанной поддержки родителей.</p>\n' +
                '</li>\n' +
                '</ol>' +
                '</div>'
        }
    ]
    return (
        <Container className={"box-center"}>
            {descriptionCourse.map((element, index) =>
                <Box>
                <Card  className={'card-timeline'} key={index}>
                <CardMedia
                sx={{ height: 300}}
                image={element.img}
                title={element.title}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary" className={"title-courses"}>
                        {element.title}
                    </Typography>
                    <Typography variant="h5" component="div" className={"h5-size"}
                                dangerouslySetInnerHTML={{__html: element.subTitle}}/>
                    <Typography variant="h5" component="div" className={"description-courses"}
                                dangerouslySetInnerHTML={{__html: element.description}}/>
                </CardContent>
                    <CardActions sx={{display: "flex", justifyContent: 'center'}}>
                        <a href={element.linkToTilda}>
                            <Button className={'timeline-button'}>
                                Перейти</Button>
                        </a>
                    </CardActions>
                </Card>
                </Box>
            )
            }
        </Container>
    );
}
