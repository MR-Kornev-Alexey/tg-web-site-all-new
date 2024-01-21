import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../Typography/Typography';
import imdCTA from '../../img/cta.jpg'
import productCTAImageDots from '../../img/productCTAImageDots.png'

function ProductCTA() {
    const [open, setOpen] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container component="section" sx={{ display: 'flex'}} className={'blockCTA'}>
            <Grid container>
                <Grid item xs={12} md={6} sx={{ zIndex: 2 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            textAlign: 'left',
                            bgcolor: '#739abf',
                            py: 4,
                            px: 2,
                            color: 'white'
                        }}
                    >
                        <Box  sx={{ maxWidth: 400 }}>
                            <Typography variant="h5" sx={{fontWeight: 500}}>
                                Таким образом, алгоритм рассылки предоставляют родителям удобный и эффективный инструмент для работы с эмоциями.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: -67,
                            left: -67,
                            right: 0,
                            bottom: 0,
                            width: '100%',

                            background: `url(${productCTAImageDots})`
                        }}
                    />
                    <Box
                        component="img"
                        src={imdCTA}
                        alt="call to action"
                        sx={{
                            position: 'absolute',
                            top: -28,
                            left: -28,
                            right: 0,
                            bottom: 0,
                            width: '100%',
                            maxWidth: 600,
                            zIndex: 1,
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default ProductCTA;
