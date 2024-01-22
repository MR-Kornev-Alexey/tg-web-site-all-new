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
import Link from "@mui/material/Link";
import TelegramIcon from "@mui/icons-material/Telegram";

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
    const description = [
        {
            index: 0,
            linkToTilda: 'https://landinghw.kornevgmbh.com/',
            title: 'Ежедневно развивать малыша',
            subTitle: 'с <strong>рассылкой</strong> домашних заданий для Вашего возраста',
            img: require("../../img/emo-cards/emo-img-3.png"),
            description:
                '<h3>Ежедневная рассылка домашних заданий для детей от 1 до 26 месяцев</h3> ' +
                '<div class="text-left">\n' +
                '<p><strong>С детальными видео и текстовыми заданиями&nbsp;</strong></p>\n' +
                '<p>по развитию речи, двигательной активности и эмоционального интеллекта.</p>\n' +
                '<p><strong>Удобно и доступно</strong></p>\n' +
                '<p>с рассылками&nbsp; в ваш Телеграм-аккаунт&nbsp; теории, тестов, гайдов и домашних заданий.</p>\n' +
                '<p><strong>С адаптированными под возраст ребенка материалами, </strong></p>\n' +
                '<p>доступными&nbsp; от 3 недель до 2,5 лет</p>\n' +
                '<p><strong>Без необходимости покупать дополнительное оборудование</strong></p>\n' +
                '<p>все задания выполняются без финансовых затрат</p>' +
                '</div>'
        },
        {
            index: 1,
            linkToTilda: 'https://landing.kornevgmbh.com/',
            title: 'Вырастить успешную личность',
            img: require("../../img/emo-cards/emo-img-3.png"),
            subTitle: 'с <strong>вебинарами</strong>  по гармоничному  развитию малышей от 0 до 24 месяцев',
            description:
                '<h3>Авторские вебинары по гармоничному развитию детей от от 0 до 24 месяцев</h3> ' +
                '<div class="text-left">\n' +
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
            subTitle: '<div style="padding: 0 6px">научив его самостоятельному засыпанию с помощью <strong>Чат-бота по сну</strong></div>',
            img: require("../../img/emo-cards/emo-img-3.png"),
            description:
                '<div class="card-description text-left">\n' +
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
            linkToTilda: '/speakLandingSpecial',
            title: 'доРечевой 30-дневный интенсив',
            greenTitle: 'доРечевой интенсив',
            subTitle: '<div style="padding: 0 6px"><strong>"От звука к слову"</strong> - рaзвитие речевого навыка</div>',
            img: require("../../img/emo-cards/emo-img-3.png"),
            description: ' <div class="card-description text-left">\n' +
                '<p class="mb-2">Этот интенсив для Вас, если:</p>' +
                '<ul>\n' +
                '<li>Вас волнуют вопросы, связанные с речью вашего малыша, и вы устали от противоречивой и неполной информации в интернете</li>\n' +
                '<li>Вы не готовы &laquo;ждать до 3 лет&raquo;, чтобы после исправлять уже сформировавшиеся проблемы с речью вашего ребенка</li>\n' +
                '<li>Вы сомневаетесь, все ли в порядке с речевым развитием вашего малыша, и не до конца понимаете, что вам делать&nbsp;</li>\n' +
                '<li>Вам важно понимать, как на самом деле устроена речь вашего ребенка, и как работать с ней эффективно и правильно</li>\n' +
                '<li>Ваш малыш родился раньше срока или были проблемы во время беременности или родов</li>\n' +
                '<li>Ваш ребенок растет в семье, где используют два и более языка</li>\n' +
                '</ul>' +
                '<p class="mb-2">С какими проблемами поможет интенсив?</p>' +
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
            {description.map((element, index) => {
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
                                <Grid item xs={9} className={"box-start"} display={"flex"} flexDirection={"column"} justifyContent={"flex-end"} alignItems={"center"}>
                                        <Typography className={"cardTitleOne size-common"}  component="div" sx={{paddingBottom:2}} >
                                            {element.title}
                                        </Typography>
                                         <Box href={"https://t.me/curator_courses"}  target={"_blank"} className={"btn-course"}  sx={{ display: "flex", justifyContent: 'center', alignItems: "flex-end", marginTop: {md: 0, sm: 3, xs: 3}}}>
                                        <Box className={"cardTitleOne size-common"}> Подробно</Box>
                                    </Box>
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
