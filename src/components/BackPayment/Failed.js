import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LineBlock from "../SecondScreen/LineBlock";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import BabyUpset from "../../img/baby-upset.png";
import Link from "@mui/material/Link";
import TelegramIcon from "@mui/icons-material/Telegram";
import LanguageIcon from "@mui/icons-material/Language";




const defaultTheme = createTheme();

export default function Failed() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline/>
            {/* Hero unit */}
            <LineBlock title={"Ошибка по оплате"}/>
            <Container disableGutters maxWidth="md" sx={{pt: 2, pb: 2}} className={"terms"}>
                <Grid item xs={11} md={8} sx={{display: 'flex', justifyContent: 'center'}}>
                    <Box
                        component="img"
                        src={BabyUpset}
                        alt="Главная картинка"
                        sx={{
                            width: '100%',
                            maxWidth: 400,
                        }}
                    />

                </Grid>
                <Grid item xs={11} md={8} sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <Typography className="successTitle font-17">
                        <p>К сожалению, возникла ошибка при попытке совершения оплаты. Причины могут быть разнообразными:</p>
                        <ul>
                            <li>Возможно, это связано с временным техническим сбоем.</li>
                            <li>Ваша платежная система может не поддерживать данную карту или возникла проблема с обработкой платежа.</li>
                            <li>Возможно, на вашем счете недостаточно средств для совершения оплаты.</li>
                        </ul>
                        <p>Не волнуйтесь, такие ситуации могут возникать, но они решаемы. Пожалуйста, проверьте информацию о вашей карте, убедитесь, что на счету достаточно средств, и попробуйте повторить оплату. Если проблема остается, обратитесь в службу поддержки для получения дополнительной помощи и разъяснения ситуации. Мы готовы помочь вам в решении этой проблемы.</p>
                    </Typography>
                </Grid>
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
