import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import * as React from 'react';

export default function ThirdCard({title, icon}) {
    return (
        <Grid container spacing={2} sx={{ flexWrap: 'wrap', marginBottom: {md: 3, sm:2, xs:1 }}} >
            <Grid item xs={9} sm container sx={{ display: { xs: 'flex', sm: 'flex' }, flexDirection: 'column', justifyContent: 'center' }}>
                <Grid item sm>
                    <Typography variant="body2" gutterBottom className={"cardTitleThree size-common  box-start"}>
                        {title}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}



