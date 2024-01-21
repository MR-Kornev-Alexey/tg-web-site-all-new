import * as React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import BabyCool from '../../img/baby-cool.png'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LineBlock from "../SecondScreen/LineBlock";
import TelegramIcon from '@mui/icons-material/Telegram';
import LanguageIcon from '@mui/icons-material/Language';
import './Success.css'
import Link from "@mui/material/Link";


const defaultTheme = createTheme();

export default function Success() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline/>
            {/* Hero unit */}
            <LineBlock title={"Успешная покупка"}/>
            <Container disableGutters maxWidth="md" sx={{pt: 2, pb: 2}} className={"terms"}>
                <Grid item xs={11} md={8} sx={{display: 'flex', justifyContent: 'center'}}>
                    <Box
                        component="img"
                        src={BabyCool}
                        alt="Главная картинка"
                        sx={{
                            width: '100%',
                            maxWidth: 400,
                        }}
                    />

                </Grid>
                <Grid item xs={11} md={8} sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <Typography className="successTitle font-17">
                        &nbsp; &nbsp; Благодарим вас за выбор образовательного продукта от Елены Корневой. Мы искренне надеемся, что
                        наши продукты принесут радость и пользу в развитии ваших детей.
                    </Typography>
                    <Typography className="successTitle font-17">
                        &nbsp; &nbsp; Ваш выбор — это важный шаг на пути к знаниям и навыкам, которые помогут малышам раскрывать свой
                        потенциал и исследовать мир в увлекательной и интересной форме. Мы стремимся создавать
                        качественные и инновационные продукты, которые вдохновляют и способствуют умственному и
                        эмоциональному развитию детей.
                    </Typography>
                    <Typography className="successTitle font-17">
                        &nbsp; &nbsp; Спасибо, что выбрали нас, и мы с нетерпением ждем, чтобы подарить
                        вашим малышам множество незабываемых учебных и творческих моментов.
                    </Typography>
                </Grid>

                <LineBlock title={"Следующие шаги"}/>
                <Grid item xs={11} md={8} sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                    <Box className="successTitle font-17" sx={{marginY:2, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                        <Box>
                            1.Зарегистрируйтесь в нашем Телеграм Боте
                        </Box>
                        <Link  href={'https://t.me/helen_root_bot'} >
                            <button className={'btn-telegram'} ><TelegramIcon/>Перейти</button>
                        </Link>
                    </Box>
                    <Box className="successTitle font-17" sx={{marginY:2, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                        <Box>
                            1.Зарегистрируйтесь на нашем сайте www.elenakorneva.site для прохождения тестов
                        </Box>
                        <Link  href={'https://elenakorneva.site/register'} >
                        <button className={'btn-telegram'} ><LanguageIcon></LanguageIcon>Перейти</button>
                        </Link>
                    </Box>
                </Grid>
                <LineBlock title={"Остались вопросы"}/>
                <Grid item xs={11} md={8} sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                    <Box className="successTitle font-17" sx={{marginY:2, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                        <Box>
                            Написать в службу поддержки
                        </Box>
                        <Link  href={'https://t.me/mrk_service'} >
                        <button className="btn-telegram" ><TelegramIcon/>Написать</button>
                        </Link>
                    </Box>

                </Grid>
            </Container>
        </ThemeProvider>
    );
}
