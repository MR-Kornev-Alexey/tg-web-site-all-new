import * as React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import {Box} from "@mui/material";
import ImageBF from "../../img/black-friday.png";
import Grid from "@mui/material/Grid";


const defaultTheme = createTheme();

export default function BlackFriday() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline/>
            {/* Hero unit */}

            <Grid container sx={{pt: 4, pb: 2}} id={'black'}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box
                        component="img"
                        src={ImageBF}
                        alt="Черная пятница"
                        sx={{
                            width: '100%',
                            maxWidth: 400,
                        }}
                    />
                </Grid>
                <Grid item  md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography gutterBottom variant="h6" component="div" className={"help-description"} sx={{paddingLeft: {xs:4 , sm:4 }}}>
                        <ul>
                            <li>акция проводится с 23 по 30 ноября</li>
                            <li>распространяется на все продукты эксперта</li>
                            <li>промокод "blackfriday25" дает 25 процентов скидки</li>
                            <li>не забудьте ввести данный промокод при покупке</li>
                        </ul>
                    </Typography>
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}
