import * as React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TelegramIcon from '@mui/icons-material/Telegram';
import Link from "@mui/material/Link";

const defaultTheme = createTheme();

export default function PayEuro({title}) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline/>
            {/* Hero unit */}
            <Container sx={{pt: 4, pb: 2}}>
                <Grid container className={"box-center"}>
                    <Grid item md={6} sm={11} xs={11} display={'flex'} justifyContent={"center"} alignItems={"center"}>
                        <Box className={"top-mainSubTitle"} sx={{marginLeft:2}}>Не можете оплатить в рублях?</Box>
                    </Grid>
                    <Grid item md={6} sm={11} xs={11}  display={'flex'} justifyContent={"center"} alignItems={"center"}>
                        <Link href={"https://t.me/curator_courses"}  target={"_blank"} className={"btn-call"}  sx={{ display: "flex", justifyContent: 'center', alignItems: "flex-end", marginTop: {md: 0, sm: 3, xs: 3}}}>
                            <TelegramIcon />  <Box className={"top-mainSubTitle"} sx={{marginLeft:2}}>Связаться</Box>
                        </Link>

                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>

                    </Grid>
                    <Grid item>

                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}