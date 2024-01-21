import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import '../main/Main.css'

import ImageLeft from "../../img/avatar-900.png";




export default function Author() {
    return (
        <Container component="section">
            <Grid container>


                <Grid item xs={12} md={8} sx={{ order: {md: 1, sm: 2, xs: 2}, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingX: 2 }}>
                    <ul className={'ul-author'}>
                        <li>эксперт по развитию малышей от 0 до 3 лет с опытом работы с более чем 1000 успешными семьями</li>
                        <li>более полумиллиона  подписчиков на социальных платформах, получающие ценные советы по вопросам здоровья и развития детей</li>
                        <li>высококвалифицированный врач-педиатр </li>
                        <li>семейный психолог</li>
                        <li>бизнес-леди и мастер делового администрирования (MBA)</li>
                        <li>жена,  мама трех успешных сыновей, бабушка</li>
                        <li>сертифицированный специалист по современным методам развития мозга от Массачусетского университета</li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={4}  sx={{ marginBottom: {md: 0, sm: 2, xs: 2}, order: {md: 2, sm: 1, xs: 1}, display: { sm: 'flex', xs: 'flex', md: 'flex' }, justifyContent: { sm: 'center', xs: 'center', md: 'flex-start' } }}>
                    <Box
                        component="img"
                        src={ImageLeft}
                        alt="Главная картинка"
                        sx={{
                            width: '100%',
                            maxWidth: 280
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}
