import React, {useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';
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



export default function MiniCourses() {
    const descriptionCourse = [
        {
            index: 0,
            linkToTilda: 'https://t.me/korneva_gorshok_bot',
            title: ' Приучение к горшку БЕЗ слез и нервов? Легко!',
            subTitle: 'все секреты за 3 дня <em>(даже для малышей с 3 недель!</em>',
            img: require("../../img/emo-cards/emo-img-3.png"),
            description: `<p>Ваш результат:<br />
✅ Сухие штанишки благодаря пониманию физиологии + психологии ребенка<br />
✅ 7 проверенных методик с пошаговыми инструкциями &mdash; выберите свою!<br />
✅ ГЛАВНЫЙ СЕКРЕТ: Готовим малыша до горшка &mdash; без этого этапа 90% мам терпят неудачу!</p>
<p>Почему это РАБОТАЕТ:
<br />➜ Для крох (3+ недель): Только работающие методики = экономия 70% на подгузниках (проверено!)
<br />➜ Для детей 1-3+ лет: Подберете идеальный способ под характер малыша
<br />➜ Гарантия: Следуете алгоритму &rarr; получаете результат!</p>
<br/>Стоимость <strong>3 810</strong> рублей`
        },
        {
            index: 1,
            linkToTilda: 'https://t.me/helen_korneva_lazy_bot',
            title: 'Ленивая мама - идеальная мама',
            img: require("../../img/emo-cards/emo-img-3.png"),
            subTitle: 'как приучить <strong>ребенка</strong> к САМОСТОЯТЕЛЬНОСТИ',
            description: `<p>(Алгоритмы, проверенные на 1000+ малышей)</p> <br/>
<p>Прекратите быть "обслуживающим персоналом":<br />➔ Убирать игрушки ВМЕСТО ребенка?<br />➔ Уговаривать съесть ложку?<br />➔ Повторять просьбы по 10 раз?<br />Ваш малыш МОЖЕТ делать это САМ!</p>
<p>Мини-курс - это Ваш ключ к свободе<br />✅ 4 рабочих алгоритма с подкастами:</p>
<ol style="padding-left: 24px">
<li aria-level="1">Уборка игрушек (без слез!).</li>
<li aria-level="1">Самостоятельная еда (да, ложкой!).</li>
<li aria-level="1">Игра без вашего участия (30+ минут!).</li>
</ol>
<p>Слышать и слушать с первого раза.<br />✅ Гайд-конспекты: Самое важное<br />✅ Стартовый лайфхак: Результат через 48 часов.</p>
<br/>Стоимость <strong>3 840</strong> рублей
            `
        },
        {
            index: 2,
            linkToTilda: 'https://t.me/helen_korneva_isteriki_bot',
            title: 'Как работать с истериками',
            subTitle: '<div>и научить ребенка <strong>справляться с эмоциями</strong></div>',
            img: require("../../img/emo-cards/emo-img-3.png"),
            description: `<p><em>(Четкие алгоритмы &laquo;бери и делай&raquo; для каждого вида истерик)</em></p>
<p>Хватит:<br />
➔ Терпеть крики и ждать, пока &laquo;перерастет&raquo;.<br />
➔ Чувствовать вину, не зная, как реагировать.<br />
➔ Тушить пожар слезами и угрозами.</p>
<p>Решение есть! Мини-курс &laquo;ИСТЕРИКИ В ПРОШЛОМ&raquo;:<br />
✅ Алгоритмы под КАЖДЫЙ триггер:<br />&bull; Усталость &bull; Требование &bull; Перегруз &bull; Страх<br />
✅ Формат &laquo;Бери и делай&raquo;: Никакой теории &mdash; только рабочие шаги.<br />
✅ Чек-листы для мамы: Что сказать/сделать в первые 30 секунд.<br />
✅ Секрет профилактики: Как снизить истерики на 80%.</p>
<br/>Стоимость <strong>3 830</strong> рублей
            `
        },
        {
            index: 3,
            linkToTilda: 'https://t.me/helen_korneva_mama_ne_ori_bot/',
            title: 'Мама, не ори',
            subTitle: 'Как перестать срываться на ребенка',
            description: `<div class="emotional-parenting">
  <p>😤 <strong>Вы снова сорвались?</strong> Обещали себе больше не кричать, но эмоции кипят, и вот очередной срыв… Чувство вины накатывает, а малыш смотрит на вас испуганными глазами.</p>

  <p>💡 <strong>Но что, если можно кричать без вреда?</strong><br>
  Этот курс научит вас безопасно выражать эмоции, не разрушая детскую психику и не терзая себя чувством вины.</p>

  <div class="course-features">
    <p>🔹 <strong>В КУРСЕ ВЫ НАЙДЕТЕ:</strong></p>
    <ul>
      <li>✔️ Рабочие техники и методики, чтобы не просто подавлять крик, а направлять его в безопасное русло.</li>
      <li>✔️ Разбор причин срывов, чтобы не бороться со следствием, а убирать корень проблемы.</li>
      <li>✔️ Методы быстрой саморегуляции, которые помогут взять себя в руки здесь и сейчас.</li>
    </ul>
  </div>

  <div class="reasons-section">
    <p>😡 <strong>ПОЧЕМУ ВЫ СРЫВАЕТЕСЬ?</strong><br>
    Вы найдете техники для конкретных случаев, когда крик – это не ваша слабость, а сигнал о накопившихся проблемах:</p>
    
    <ul class="reasons-list">
      <li>🔸 <strong>Материнское выгорание</strong> – когда усталость берет верх.</li>
      <li>🔸 <strong>"Затроганность"</strong> – когда любое прикосновение раздражает.</li>
      <li>🔸 <strong>Перегрузка обязанностями</strong> – когда кажется, что ВСЕ на вас.</li>
      <li>🔸 <strong>Ребенок испытывает границы</strong> – и вас это сводит с ума.</li>
      <li>🔸 <strong>Яркие эмоции малыша</strong> – когда слишком много шума и капризов.</li>
      <li>🔸 <strong>Ощущение, что жизнь проходит мимо</strong> – когда рутина душит.</li>
    </ul>
  </div>

  <div class="encouragement">
    <p>👩‍👧 <strong>Вы – не плохая мать!</strong><br>
    Ваши эмоции естественны, и их можно выражать без ущерба для ребенка. В этом курсе я помогу вам взять ситуацию под контроль и вернуть гармонию в отношения с малышом.</p>
  </div>

  <div class="cta">
    <p>🎯 <strong>Пошаговые алгоритмы – бери и делай!</strong><br>
    Готовы перестать винить себя и научиться управлять эмоциями? Тогда вам точно нужен этот курс. 🚀</p>
    <br/>Стоимость <strong>3 820</strong> рублей
  </div>
</div>`,
        }
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
                <Card className={"card-timeline"} key={index}>
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
        </Container>
    );
}
