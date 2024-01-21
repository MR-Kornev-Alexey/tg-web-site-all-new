import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import "./ThirdScreen.css"
import Grid from "@mui/material/Grid";


export default function ThirdCard({ title, img}) {
    return (
        <Card className={'third-card-main'}>
            <CardContent>
                <Grid container>
                    <Grid item xs={9} sm={9}>
                        <div className={"third-card-title"}>{title}</div>
                    </Grid>
                </Grid>
                <Box
                    component="img"
                    src={LeftTopImage}
                    alt="LeftTopImage"
                    sx={{
                        width: '100%',
                        maxWidth: 60,
                        position: 'absolute',
                        top:0,
                        left: 0
                    }}
                />
            </CardContent>
        </Card>
    );
}
