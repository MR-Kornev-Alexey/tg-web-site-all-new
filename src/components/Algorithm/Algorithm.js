import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";



const defaultTheme = createTheme();

export default function Algorithm({title}) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            {/* Hero unit */}
            <Container disableGutters maxWidth="md" sx={{ pt: 4, pb: 4 }}>
                <Typography
                    component="h5"
                    variant="h5"
                    align="center"
                    className={"tittle-algorithm"}
                >
                    Алгоритм рассылки в HelenBot является одновременно простым и сложным, но дает родителям возможность ежедневно получать материалы и эффективно развивать своего ребенка.<br/>Вот как он работает:
                </Typography>
                <Box sx={{marginY: 2, paddingX: 4}}>
                    <ol>
                        <li >
                            <p><strong>Регистрация:</strong> При регистрации в HelenBot, вы вводите день рождения вашего ребенка. Это позволяет системе рассчитать фактический возраст вашего малыша c точностью до недели.</p>
                        </li>
                        <li>
                            <p><strong>Рассылка:</strong> Рассылка домашних заданий и материалов идет ежедневно с разбикой по времени. Этот график был определен на основе опыта и исследований, и он оптимально соответствует потребностям родителей и детей.</p>
                        </li>
                        <li>
                            <p><strong>Приложение и библиотека домашних заданий:</strong> В HelenBot в личном кабинтет доступна библиотека домашних заданий, где вы можете самостоятельно выбирать задания для вашего ребенка. Это особенно полезно, если вы или папа решите проводить уроки с малышом в выходные дни.</p>
                        </li>
                    </ol>
                </Box>
                <Typography
                    component="h5"
                    variant="h5"
                    align="center"
                    className={"tittle-algorithm"}
                >
             </Typography>
           </Container>
        </ThemeProvider>
    );
}
