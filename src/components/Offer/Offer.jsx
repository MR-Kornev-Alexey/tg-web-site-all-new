import { Box, Container, Typography, Divider, Paper } from "@mui/material";

export default function Offer() {
    return (
        <Box sx={{ py: { xs: 8, md: 12 } }}>
            <Container maxWidth="md">
                {/* Заголовок секции */}
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: "#A67C52", // Saddle Tan
                            letterSpacing: "0.15em",
                            fontSize: "0.8rem",
                            fontWeight: 500,
                            mb: 2,
                            display: 'block'
                        }}
                    >
                        Публичная оферта
                    </Typography>

                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2rem', md: '2.5rem' },
                            fontWeight: 300,
                            color: "#3E2F28", // Bitter Chocolate
                            mb: 2,
                            lineHeight: 1.1
                        }}
                    >
                        Об условиях участия
                    </Typography>

                    <Box sx={{
                        width: '80px',
                        height: '2px',
                        backgroundColor: '#D95D2B', // Signature Orange
                        mx: 'auto'
                    }} />
                </Box>

                {/* Основной контент */}
                <Paper
                    elevation={0}
                    sx={{
                        p: { xs: 4, md: 6 },
                        mb: 6,
                        backgroundColor: 'rgba(166, 124, 82, 0.03)', // Saddle Tan с прозрачностью
                        borderRadius: 2,
                        border: '1px solid rgba(166, 124, 82, 0.1)'
                    }}
                >
                    <Typography sx={text}>
                        Настоящий сайт является официальным предложением о вступлении
                        в индивидуальную программу сопровождения.
                    </Typography>

                    <Typography sx={text}>
                        Программа не является образовательным курсом, консультацией
                        или услугой с гарантированным результатом.
                    </Typography>

                    <Typography sx={text}>
                        Мы не работаем с обещаниями.
                        Мы работаем с системой мышления, среды и решений.
                    </Typography>

                    <Typography sx={text}>
                        Участие предполагает осознанный выбор,
                        внутреннюю готовность к изменениям
                        и личную ответственность за принятые решения.
                    </Typography>

                    <Divider sx={{
                        my: 4,
                        borderColor: "rgba(166, 124, 82, 0.2)",
                        opacity: 0.5
                    }} />

                    <Typography sx={text}>
                        Результаты формируются со временем
                        и зависят от множества факторов,
                        находящихся вне прямого контроля сопровождающей стороны.
                    </Typography>

                    <Typography sx={text}>
                        Оплата подтверждает согласие
                        с условиями участия и форматом работы.
                    </Typography>
                </Paper>

                {/* Подпись */}
                <Paper
                    elevation={0}
                    sx={{
                        p: 4,
                        backgroundColor: 'rgba(217, 93, 43, 0.05)', // Signature Orange с прозрачностью
                        borderRadius: 2,
                        borderLeft: '4px solid #D95D2B', // Signature Orange акцент
                        borderTop: '1px solid rgba(217, 93, 43, 0.2)',
                        borderRight: '1px solid rgba(217, 93, 43, 0.2)',
                        borderBottom: '1px solid rgba(217, 93, 43, 0.2)'
                    }}
                >
                    <Typography sx={signature}>
                        Все решения принимаются добровольно.<br />
                        Никакое давление, обещания или гарантии не используются.
                    </Typography>
                </Paper>

                {/* Дополнительная информация */}
                <Box sx={{
                    mt: 4,
                    textAlign: 'center',
                    p: 3
                }}>
                    <Typography
                        sx={{
                            color: '#A67C52',
                            fontSize: '0.9rem',
                            fontStyle: 'italic',
                            lineHeight: 1.5
                        }}
                    >
                        Для получения полного текста договора-оферты<br />
                        свяжитесь через Telegram для персональной консультации
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

const text = {
    color: "#3E2F28", // Bitter Chocolate
    fontSize: { xs: "1rem", md: "1.1rem" },
    lineHeight: 1.7,
    mb: 3,
};

const signature = {
    color: "#3E2F28",
    fontSize: { xs: "1rem", md: "1.1rem" },
    lineHeight: 1.6,
    fontStyle: 'italic',
    fontWeight: 500
};