import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import '../main/Main.css'
import Typography from "../Typography/Typography";
import Button from "@mui/material/Button";
import ImageMain from "../../img/main.png";
import ImageMainBig from "../../img/main-big.png";

export default function FirstScreen() {
    return (
        <Container component="section">
            <Paper>
                <Grid container>
                    <Grid item xs={12} md={7} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography className="mainSubTitle" gutterBottom>
                            Получайте ежедневно уникальные задания, тесты и другие материалы, созданные профессионалом
                        </Typography>
                        <Typography gutterBottom className="mainTitle">
                            Действенный способ развития Вашего малыша от 1 до 24 месяцев
                        </Typography>
                        <Button variant="contained" className="btn-pay" sx={{ marginTop: 4 }}>
                            Купить
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={5}  sx={{ display: { sm: 'none', xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                        <Box
                            component="img"
                            src={ImageMain}
                            alt="Главная картинка"
                            sx={{
                                width: '100%',
                                maxWidth: 400,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={12} sx={{ display: { sm: 'flex', md: 'none' , xs: 'flex', }, justifyContent: 'center', alignItems: 'flex-start',marginTop: 4 }}>
                        <Box
                            component="img"
                            src={ImageMainBig}
                            alt="Главная картинка"
                            className={"big-image"}
                        />
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}
