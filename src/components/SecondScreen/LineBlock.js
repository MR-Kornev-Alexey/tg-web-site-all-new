import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



const defaultTheme = createTheme();

export default function LineBlock({title}) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            {/* Hero unit */}
            <Container disableGutters maxWidth="md" sx={{ pt: 4, pb: 2 }}>
                <Typography
                    component="h2"
                    variant="h2"
                    align="center"
                    className={"line-block"}
                >
                    {title}
                </Typography>
            </Container>
        </ThemeProvider>
    );
}
