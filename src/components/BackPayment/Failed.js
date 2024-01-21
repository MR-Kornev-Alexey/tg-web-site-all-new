import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Terms from "./Terms";



const defaultTheme = createTheme();

export default function Success() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            {/* Hero unit */}
            <Container disableGutters maxWidth="md" sx={{ pt: 4, pb: 2 }} className={"terms"}>

            </Container>
        </ThemeProvider>
    );
}
