import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    Divider,
    useTheme,
    useMediaQuery
} from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import Link from "@mui/material/Link";
import TelegramIcon from "@mui/icons-material/Telegram";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WindowIcon from '@mui/icons-material/Window';
import BuildIcon from '@mui/icons-material/Build';
import SearchIcon from '@mui/icons-material/Search';
import PublicIcon from '@mui/icons-material/Public';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

export default function SecondScreenNew() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const ageStages = [
        {
            age: "12 лет",
            title: "Время поиска своего «Я»",
            subtitle: "Как это бывает «на ощупь»",
            problem: "Ребенок закрывается, а мы пытаемся достучаться через контроль. Итог — тихий протест и «стены» в детской.",
            solutionTitle: "Как это делаем мы",
            solution: "Учим ребенка аргументировать свое мнение, а вас — слышать его. Вы становитесь для него не «надзирателем», а мудрым наставником.",
            icon: <SearchIcon />,
            color: "#D95D2B" // Signature Orange
        },
        {
            age: "15 лет",
            title: "Выход в большой мир",
            subtitle: "Как это бывает «на ощупь»",
            problem: "Ребенок ищет авторитеты где угодно, только не дома. Мы теряем влияние, потому что не понимаем его ценностей.",
            solutionTitle: "Как это делаем мы",
            solution: "Формируем у ребенка внутренний компас. Он не боится сказать «нет» плохой компании, потому что его главная опора и поддержка — это вы.",
            icon: <PublicIcon />,
            color: "#A67C52" // Saddle Tan
        },
        {
            age: "20 лет",
            title: "Взлетная полоса",
            subtitle: "Как это бывает «на ощупь»",
            problem: "Либо полная зависимость от родителей, либо болезненный разрыв. Ребенок не знает, кто он и на что способен.",
            solutionTitle: "Как это делаем мы",
            solution: "Перед вами — самостоятельная, яркая личность. Ваш взрослый ребенок берет на себя ответственность за свою жизнь, сохраняя с вами теплые, дружеские отношения на равных.",
            icon: <FlightTakeoffIcon />,
            color: "#3E2F28" // Bitter Chocolate
        }
    ];

    return (
        <Box sx={{
            backgroundColor: '#FCF9F3', // Silk Parchment
            py: { xs: 6, md: 10 },
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(217,93,43,0.08) 0%, transparent 70%)',
                zIndex: 0,
            }
        }}>
            <Container maxWidth="lg">
                {/* Главный заголовок */}
                <Box sx={{ textAlign: 'center', mb: 10, position: 'relative', zIndex: 1 }}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2rem', md: '3rem' },
                            fontWeight: 300,
                            color: '#3E2F28', // Bitter Chocolate
                            mb: 3,
                            lineHeight: 1.2,
                            letterSpacing: '-0.5px'
                        }}
                    >
                        Две траектории одного взросления
                    </Typography>

                    <Typography
                        variant="h5"
                        sx={{
                            fontSize: { xs: '1.3rem', md: '1.8rem' },
                            fontWeight: 400,
                            color: '#D95D2B', // Signature Orange
                            lineHeight: 1.4,
                            maxWidth: '800px',
                            mx: 'auto',
                            mb: 3,
                            fontStyle: 'italic'
                        }}
                    >
                        Мы строим мосты сегодня, чтобы завтра нам было о чем поговорить
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2,
                        mt: 4
                    }}>
                        <AccessTimeIcon sx={{ color: '#A67C52', fontSize: 24 }} />
                        <Typography
                            sx={{
                                fontSize: '1.1rem',
                                fontWeight: 400,
                                color: '#A67C52', // Saddle Tan
                                lineHeight: 1.6,
                                fontStyle: 'italic'
                            }}
                        >
                            Время — это единственный ресурс, который нельзя вернуть. В каждом возрасте у нас есть «окно возможностей», чтобы остаться для ребенка значимым взрослым.
                        </Typography>
                    </Box>
                </Box>

                {/* Карточки этапов взросления */}
                <Grid container spacing={4} sx={{ mb: 8 }}>
                    {ageStages.map((stage, index) => (
                        <Grid item xs={12} md={4} key={stage.age}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: { xs: 3, md: 4 },
                                    height: '100%',
                                    backgroundColor: 'transparent',
                                    border: '1px solid',
                                    borderColor: stage.color,
                                    borderRadius: 2,
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: `0 12px 24px rgba(0,0,0,0.1)`,
                                    },
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '4px',
                                        backgroundColor: stage.color,
                                    }
                                }}
                            >
                                {/* Возраст и иконка */}
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontWeight: 700,
                                            color: stage.color,
                                            fontSize: '2.5rem',
                                            lineHeight: 1
                                        }}
                                    >
                                        {stage.age}
                                    </Typography>
                                    <Box sx={{
                                        color: stage.color,
                                        fontSize: '2.5rem',
                                        lineHeight: 1,
                                        opacity: 0.8
                                    }}>
                                        {stage.icon}
                                    </Box>
                                </Box>

                                {/* Заголовок этапа */}
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 600,
                                        color: '#3E2F28', // Bitter Chocolate
                                        mb: 3,
                                        fontSize: '1.4rem',
                                        lineHeight: 1.3
                                    }}
                                >
                                    {stage.title}
                                </Typography>

                                {/* Проблемная часть */}
                                <Box sx={{ mb: 4, flex: 1 }}>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            fontWeight: 500,
                                            color: stage.color,
                                            mb: 2,
                                            fontSize: '1rem',
                                            fontStyle: 'italic'
                                        }}
                                    >
                                        {stage.subtitle}
                                    </Typography>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 3,
                                            backgroundColor: 'rgba(217, 93, 43, 0.05)',
                                            borderLeft: `4px solid ${stage.color}`,
                                            mb: 3
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: '#3E2F28', // Bitter Chocolate
                                                lineHeight: 1.6,
                                                fontSize: '0.95rem'
                                            }}
                                        >
                                            {stage.problem}
                                        </Typography>
                                    </Paper>
                                </Box>

                                {/* Решение */}
                                <Box>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            fontWeight: 500,
                                            color: stage.color,
                                            mb: 2,
                                            fontSize: '1rem',
                                            fontStyle: 'italic'
                                        }}
                                    >
                                        {stage.solutionTitle}
                                    </Typography>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 3,
                                            backgroundColor: 'rgba(166, 124, 82, 0.05)',
                                            borderLeft: `4px solid #A67C52`
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: '#3E2F28', // Bitter Chocolate
                                                lineHeight: 1.6,
                                                fontSize: '0.95rem'
                                            }}
                                        >
                                            {stage.solution}
                                        </Typography>
                                    </Paper>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {/* Разделитель */}
                <Divider sx={{
                    my: 8,
                    borderColor: '#A67C52', // Saddle Tan
                    opacity: 0.3,
                    width: '100px',
                    mx: 'auto'
                }} />

                {/* Призыв к действию */}
                <Paper
                    elevation={0}
                    sx={{
                        backgroundColor: 'transparent',
                        p: 0,
                        textAlign: 'center',
                        borderTop: '1px solid',
                        borderBottom: '1px solid',
                        borderColor: 'rgba(166, 124, 82, 0.2)', // Saddle Tan с прозрачностью
                        py: 8,
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, rgba(217,93,43,0.03) 0%, rgba(166,124,82,0.03) 100%)',
                        zIndex: 0
                    }} />

                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                            <WindowIcon sx={{
                                color: '#D95D2B',
                                fontSize: 48,
                                opacity: 0.8
                            }} />
                        </Box>

                        <Typography
                            variant="h4"
                            sx={{
                                fontSize: { xs: '1.5rem', md: '2rem' },
                                fontWeight: 300,
                                color: '#3E2F28', // Bitter Chocolate
                                mb: 3,
                                lineHeight: 1.3
                            }}
                        >
                            Не упустите «окно возможностей»
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: '1.1rem',
                                fontWeight: 400,
                                color: '#A67C52', // Saddle Tan
                                lineHeight: 1.6,
                                maxWidth: '600px',
                                mx: 'auto',
                                mb: 6
                            }}
                        >
                            Каждый возраст — это уникальный шанс укрепить связь с ребенком.
                            Сделайте правильный выбор сегодня, чтобы завтра не сожалеть об упущенных возможностях.
                        </Typography>

                        <Link
                            href="https://t.me/MrkDigital?text=Хочу узнать больше о возрастных возможностях"
                            target="_blank"
                            underline="none"
                            sx={{
                                height: 56,
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 2,
                                backgroundColor: 'transparent',
                                color: '#3E2F28', // Bitter Chocolate
                                fontSize: '0.95rem',
                                fontWeight: 500,
                                letterSpacing: '0.02em',
                                transition: 'all 0.3s ease',
                                borderRadius: '50px',
                                px: 4,
                                minWidth: { sm: 250 },
                                textTransform: 'none',
                                border: '1px solid #A67C52', // Saddle Tan
                                position: 'relative',
                                overflow: 'hidden',
                                '&:hover': {
                                    backgroundColor: 'rgba(217, 93, 43, 0.05)',
                                    borderColor: '#D95D2B', // Signature Orange
                                    transform: 'translateY(-2px)',
                                    '& .arrow-icon': {
                                        transform: 'translateX(4px)'
                                    }
                                }
                            }}
                        >
                            <TelegramIcon sx={{ fontSize: 20 }} />
                            Узнать как правильно строить мосты
                            <ArrowForwardIcon
                                className="arrow-icon"
                                sx={{
                                    fontSize: 18,
                                    transition: 'transform 0.3s ease',
                                    ml: 1
                                }}
                            />
                        </Link>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}