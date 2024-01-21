import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../Typography/Typography';
import TextField from '../TextField/TextField';
import Snackbar from '../SnackBar/Snackbar';
import Button from '@mui/material/Button';
import ImageMain from '../../img/main.png'
import ImageMainBig from '../../img/main-big.png'
import ImageDot from '../../img/productCTAImageDots.png'

function ProductCTA() {
    return (
         <Container component="section" sx={{display: 'flex', position: 'relative', height: '500px', margin: 'auto' }}>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: '100%',
                    background: `url(${ImageDot})`
                }}
            />
            <Grid container>
                <Grid item xs={12} md={6} sx={{zIndex: 1}}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            py: 8,
                            px: 3,
                        }}
                    >
                        <Typography variant="h5" className={'mainSubTitle'} gutterBottom>
                            Получайте ежедневно уникальные домашние задания, созданные профессионалом
                        </Typography>
                        <Typography variant="h2" component="h2" gutterBottom className={'mainTitle'}>
                            Действенный способ развития Вашего малыша от 1 до 24 месяцев
                        </Typography>
                        <Button variant='contained' className={'btn-pay'} sx={{marginTop: 4}}>
                            Купить
                        </Button>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{display: {md: 'block', xs: 'none'}, position: 'relative'}}
                >

                    <Box
                        component="img"
                        src={ImageMain}
                        alt="Главная картинка"
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 86,
                            right: 0,
                            bottom: 0,
                            width: '100%',
                            maxWidth: 509,
                        }}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{display: {md: 'none', sm: 'block'}, position: 'relative'}}
                >

                    <Box
                        component="img"
                        src={ImageMainBig}
                        alt="Главная картинка"
                        sx={{
                            position: 'absolute',
                            top: -228,
                            right: 0,
                            width: '100%',
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default ProductCTA;
