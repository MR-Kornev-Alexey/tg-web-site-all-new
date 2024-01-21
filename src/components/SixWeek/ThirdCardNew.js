import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import * as React from 'react';

export default function ThirdCard({title, icon}) {
    return (
        <Grid container spacing={2} sx={{ flexWrap: 'wrap', marginBottom: 4 }} className={"third-card"}>
            <Grid item xs={9} sm container sx={{ display: { xs: 'flex', sm: 'flex' }, flexDirection: 'column', justifyContent: 'center' }}>
                <Grid item sm>
                    {/*<Grid item xs={12} sm={12} container sx={{*/}
                    {/*    display: { xs: 'flex', sm: 'initial' }, // Установите display: 'initial' для сброса стилей на экранах sm*/}
                    {/*    flexDirection: { xs: 'column', sm: 'row' }, // Измените направление на 'row' на экранах sm*/}
                    {/*    justifyContent: 'center',*/}
                    {/*}}>*/}
                    <Typography component="div">
                        {icon}
                    </Typography>
                </Grid>
                <Grid item sm>
                    <Typography variant="body2" gutterBottom>
                        {title}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}



