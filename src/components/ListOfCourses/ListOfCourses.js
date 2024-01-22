import React, {useEffect, useState} from 'react';
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
import "../TimeLine/Timeline.css"
import AlertDialogSlide from "../Dialog/Dialog"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import rb from "../../img/right-bottom.svg";
import Link from "@mui/material/Link";
import TelegramIcon from "@mui/icons-material/Telegram";
import ListAltIcon from '@mui/icons-material/ListAlt';
import Grid from "@mui/material/Grid";


export default function listOfCourses() {
    const descriptionCourse = [
        {
            index: 0,
            linkToTilda: 'https://landinghw.kornevgmbh.com/',
            title: 'Ежедневно развивать малыша',
            subTitle: 'с <strong>рассылкой</strong> домашних заданий для Вашего возраста',
            img: require("../../img/emo-cards/emo-img-3.png"),
            description:
                '<div>\n' +
                '<h3>Ежедневная рассылка домашних заданий для детей от 1 до 26 месяцев</h3> ' +
                '<h3 >&nbsp;</h3>' +
                '<ul>\n' +
                '<li><strong>С детальными видео и текстовыми заданиями&nbsp;</strong>\n' +
                '<ul>\n' +
                '<li>по развитию речи, двигательной активности и эмоционального интеллекта.</li>\n' +
                '</ul>\n' +
                '</li>\n' +
                '<li><strong>Удобно и доступно</strong>\n' +
                '<ul>\n' +
                '<li>с рассылками&nbsp; в ваш Телеграм-аккаунт&nbsp; теории, тестов, гайдов и домашних заданий.</li>\n' +
                '</ul>\n' +
                '</li>\n' +
                '<li><strong>С адаптированными под возраст ребенка материалами</strong>\n' +
                '<ul>\n' +
                '<li>доступными&nbsp; от 3 недель до 2,5 лет</li>\n' +
                '</ul>\n' +
                '</li>\n' +
                '<li><strong>Без необходимости покупать дополнительное оборудование</strong>\n' +
                '<ul>\n' +
                '<li>все задания выполняются без финансовых затрат</li>\n' +
                '</ul>\n' +
                '</li>\n' +
                '</ul>' +
                '</div>'
        },
        {
            index: 1,
            linkToTilda: 'https://landing.kornevgmbh.com/',
            title: 'Вырастить успешную личность',
            img: require("../../img/emo-cards/emo-img-3.png"),
            subTitle: 'с <strong>вебинарами</strong>  по гармоничному  развитию малышей от 0 до 24 месяцев',
            description:
                '<div >\n' +
                '<h3>Авторские вебинары по гармоничному развитию детей от от 0 до 24 месяцев</h3> ' +
                '<h3 >&nbsp;</h3>' +
                '<ul>\n' +
                '<li>Уникальные вебинары с простыми и&nbsp; понятными объяснениями сложных процессов детского развития</li>\n' +
                '<li>Содержат концентрированную и полезную информацию по каждому возрастному периоду</li>\n' +
                '<li>Подробно разъясняют какими действиями Вы можете достичь максимальных результатов в развитии крохи</li>\n' +
                '</ul>\n' +
                '</div>'
        },
        {
            index: 2,
            linkToTilda: 'https://landing-dream.kornevgmbh.com/',
            title: 'Наладить сон ребенка',
            subTitle: '<div>научив его самостоятельному засыпанию с помощью <strong>Чат-бота по сну</strong></div>',
            img: require("../../img/emo-cards/emo-img-3.png"),
            description:
                '<div>\n' +
                '<h3>Наладить сон ребенка </h3> ' +
                '<h3 class="mb-2">&nbsp;</h3>' +
                '<ul>\n' +
                '<li>на основе одной из четырех методик, обучив самостоятельному засыпанию</li>\n' +
                '<li>избавив от недосыпа всю семью</li>\n' +
                '<li>с наиболее подходящей по возрасту методикой, решая проблемы:\n' +
                '<ul>\n' +
                '<li> раннего пробуждения</li>\n' +
                '<li> бесконечных ночных кормлений</li>\n' +
                '<li> "часовых" укладываний</li>\n' +
                '<li> частых пробуждений</li>\n' +
                '<li> утомительных укачиваний&nbsp;и др.</li>\n' +
                '</ul>\n' +
                '</li>\n' +
                '</ul>' +
                '</div>'
        },
        {
            index: 3,
            linkToTilda: 'https://landing-emo.kornevgmbh.com/',
            title: 'Оставить истерики в прошлом',
            greenTitle: 'Как эффективно управлять эмоциями ребенка',
            subTitle: 'и научится управлять эмоциями ребенка',
            showBF: true,
            img: ['3_2.png', '3_2.png', '3_3.png'],
            description: '<div >\n' +
                '<h3 >Курс для вас, если ваш малыш:</h3> ' +
                '<h3 >&nbsp;</h3>' +
                '<ul>\n' +
                '<li>Уже проявляет яркие эмоции и ему от 5 до 36 месяцев</li>\n' +
                '<li>Не знает и понимает границ</li>\n' +
                '<li>Устраивает истерики дома, на улице или в общественном месте</li>\n' +
                '<li>Кусает , щипает, дергает за волосы и вы не знаете что с этим делать</li>\n' +
                '<li>Не слушается Вас и не реагирует на слова</li>\n' +
                '<li>Проявляет агрессию или плачет по любому поводу</li>\n' +
                '<li>Лезет в опасные места, игнорируя запреты</li>\n' +
                '</ul>' +
                '<p >И если Вы:</p> ' +
                '<ul>\n' +
                '<li>Бессильны при выплеске эмоций ребенка</li>\n' +
                '<li>Чувствуете вину за эмоциональные срывы и крики</li>\n' +
                '<li>Не можете планировать жизнь из-за внезапных эмоциональных реакций ребенка</li>\n' +
                '<li>Испытываете страх перед появлением новых эмоций</li>\n' +
                '<li>Считаете себя плохим родителем</li>\n' +
                '<li>Боитесь посещений общественных мест из-за возможной негативной реакциий ребенка</li>\n' +
                '</ul>' +
                '</div>',
            linkIn: '/emoPageIntro',
            linkLanding: '',
            access: false
        },
        {
            index: 3,
            linkToTilda: 'https://elenakorneva.site/speakLandingSpecial',
            title: 'Усилить  речь ребенка',
            greenTitle: 'доРечевой интенсив',
            subTitle: '<div>с  30-дневным доРечевым интенсивом <strong>"От звука к слову"</strong> - рaзвитие речевого навыка</div>',
            img: require("../../img/emo-cards/emo-img-3.png"),
            description: ' <div >\n' +
                '<h3 >Этот интенсив для Вас, если:</h3>' +
                '<h3 >&nbsp;</h3>' +
                '<ul>\n' +
                '<li>Вас волнуют вопросы, связанные с речью вашего малыша, и вы устали от противоречивой и неполной информации в интернете</li>\n' +
                '<li>Вы не готовы &laquo;ждать до 3 лет&raquo;, чтобы после исправлять уже сформировавшиеся проблемы с речью вашего ребенка</li>\n' +
                '<li>Вы сомневаетесь, все ли в порядке с речевым развитием вашего малыша, и не до конца понимаете, что вам делать&nbsp;</li>\n' +
                '<li>Вам важно понимать, как на самом деле устроена речь вашего ребенка, и как работать с ней эффективно и правильно</li>\n' +
                '<li>Ваш малыш родился раньше срока или были проблемы во время беременности или родов</li>\n' +
                '<li>Ваш ребенок растет в семье, где используют два и более языка</li>\n' +
                '</ul>' +
                '<p >С какими проблемами поможет интенсив?</p>' +
                '<ul>\n' +
                '<li>Ребенок не стремится говорить или использовать речь для коммуникации</li>\n' +
                '<li>Малыш ограничивается использованием одного слога или звука вместо полных слов</li>\n' +
                '<li>Ребенок не расширяет свой активный словарь и не повторяет слова, которые слышит</li>\n' +
                '<li>Малыш полагается на жесты или мимику, вместо использования слов для выражения своих потребностей или желаний</li>\n' +
                '<li>Ребенок не реагирует или не отзывается на свое имя, когда его зовут</li>\n' +
                '<li>Малыш испытывает трудности в понимании или выполнении простых инструкций</li>\n' +
                '<li>Ребенок использует ограниченное количество слов и не проявляет стремления произносить новые слова</li>\n' +
                '<li>Малыш произносит отдельные слова, но не способен составить связные фразы или предложения</li>\n' +
                '<li>Ребенок испытывает трудности в установлении речевого контакта и взаимодействии с родителями и сверстниками</li>\n' +
                '<li>Малыш имеет недостаточный уровень речевого развития по сравнению со сверстниками</li>\n' +
                '</ul>' +
                '</div>'
        },
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
    return (
        <Container className={"box-center"}>
            {descriptionCourse.map((element, index) =>
                <Card className={"card-timeline"}>
                    <CardContent sx={{position: "relative"}}>
                        <Box sx={{display: "flex"}} justifyContent={"flex-start"} alignItems={"flex-start"}
                             flexDirection={"column"}>
                            <Typography variant="body2" color="text.secondary" className={"title-courses"}>
                                {element.title}
                            </Typography>
                            <Typography variant="h5" component="div" className={"h5-size"}
                                        dangerouslySetInnerHTML={{__html: element.subTitle}}/>
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
                        <a href={element.linkToTilda}>
                            <Button className={'timeline-button'}>
                                Перейти</Button>
                        </a>
                    </CardActions>
                </Card>
            )
            }
            <AlertDialogSlide isOpen={dialogOpen} closeDialog={closeDialog} text={dialogText}/>
            <Grid container display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{marginTop: 2}}>
                <Grid item xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <Box className="top-mainSubTitle" sx={{marginTop: 1}} >Другие курсы </Box>
                </Grid>
                <Grid item xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <Link href={"/course"} className={"btn-call"} sx={{
                        maxWidth: 260,
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: "center",
                        marginTop: {md: 2, sm: 2, xs: 2}
                    }}>
                        <ListAltIcon color={"#666666"}/> <Box className={"top-mainSubTitle"}
                                                              sx={{marginLeft: 2}}>Перейти</Box>
                    </Link>
                </Grid>
            </Grid>

        </Container>
    );
}
