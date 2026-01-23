import { Box, Container, Typography, Divider } from "@mui/material";

export default function Offer() {
    return (
        <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#0B0B0B" }}>
            <Container maxWidth="md">
                <Typography
                    variant="overline"
                    sx={{
                        color: "rgba(255,255,255,0.6)",
                        letterSpacing: "0.15em",
                    }}
                >
                    Публичная оферта
                </Typography>

                <Typography
                    variant="h4"
                    sx={{
                        mt: 2,
                        mb: 4,
                        color: "#FFFFFF",
                        fontWeight: 500,
                    }}
                >
                    Об условиях участия
                </Typography>

                <Divider sx={{ mb: 4, borderColor: "rgba(255,255,255,0.12)" }} />

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

                <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.12)" }} />

                <Typography sx={text}>
                    Результаты формируются со временем
                    и зависят от множества факторов,
                    находящихся вне прямого контроля сопровождающей стороны.
                </Typography>

                <Typography sx={text}>
                    Оплата подтверждает согласие
                    с условиями участия и форматом работы.
                </Typography>

                <Typography sx={signature}>
                    Все решения принимаются добровольно.<br />
                    Никакое давление, обещания или гарантии не используются.
                </Typography>
            </Container>
        </Box>
    );
}

const text = {
    color: "rgba(255,255,255,0.85)",
    fontSize: { xs: "0.95rem", md: "1rem" },
    lineHeight: 1.8,
    mb: 3,
};

const signature = {
    mt: 4,
    color: "rgba(255,255,255,0.6)",
    fontSize: "0.9rem",
    lineHeight: 1.6,
};
