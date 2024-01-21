import * as React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import "./HowWork.css"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import TelegramIcon from '@mui/icons-material/Telegram';
import ThreePIcon from '@mui/icons-material/ThreeP';
import DateRangeIcon from '@mui/icons-material/DateRange';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import TryIcon from '@mui/icons-material/Try';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import MessageIcon from '@mui/icons-material/Message';

const defaultTheme = createTheme();
const Description = [
    {
        index: 0,
        title: "Удобная рассылка",
        subTitle: "Теоретические материалы и практические задания ежедневно поступают в ваш Телеграмм аккаунт",
        icon: <TelegramIcon fontSize={'large'} color={"primary"}/>
    },
    {
        index: 0,
        title: "Живые семинары",
        subTitle: "В Zoom еженедельно отрабатываются практические навыки и разбираются насущные проблемы",
        icon: <VideoChatIcon fontSize={'large'} color={"primary"}/>
    },
    {
        index: 0,
        title: "Обратная связь",
        subTitle: "Проверка ваших заданий куратором или автором сопровождается выдачей персональных рекомендаций",
        icon: <LibraryAddCheckIcon fontSize={'large'} color={"primary"}/>
    },
    {
        index: 0,
        title: "Мини группы",
        subTitle: "Работая в небольших группах друг с другом, вы оттачиваете полученные навыки, обыгрывая злободневные ситуации",
        icon: <Diversity3Icon fontSize={'large'} color={"primary"}/>
    },
    {
        index: 0,
        title: "Телеграмм Чат",
        subTitle: "Вы получаете поддержку от кураторов, автора  и других участников курса",
        icon: <MessageIcon fontSize={'large'} color={"primary"}/>
    },

    {
        index: 0,
        title: "\"Вечный доступ\"",
        subTitle: "Функция 'Рестарт' позволяет вам самостоятельно пересматривать курс в удобное время",
        icon: <DateRangeIcon fontSize={'large'} color={"primary"}/>
    }
]
export default function HowWork() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline/>
            {/* Hero unit */}
            <Container component="section" >
                <Grid container sx={{display:'flex', justifyContent: 'center', alignItems: 'center'}} spacing={2}>
                    {Description.map((element, columnIndex) => (
                        <Grid item  md={6} sm={11} xs={11} key={columnIndex} sx={{display:'flex', justifyContent: 'center', alignItems: 'center'}} spacing={2}>
                            <Card className={"cardHowWorks"}>
                                <CardContent>
                                    <Box sx={{display:"flex"}} justifyContent={"flex-start"} alignItems={"center"}>
                                        {element.icon}
                                        <Typography variant="h5" component="div" className={"h5-size"} sx={{paddingLeft:2}}>
                                            {element.title}
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2" className={" size-common"}>
                                        {element.subTitle}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

            </Container>
        </ThemeProvider>
    );
}
