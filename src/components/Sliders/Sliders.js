import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import Container from "@mui/material/Container";
import SectionHeader from "../SectionHeader/SectionHeader";


export default function Slider({
                                   imagesFrom,
                                   title = "Мои клиенты пишут",
                                   subtitle = "",
                                   showHeader = true
                               }) {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = imagesFrom.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Container sx={{
            py: 8,
            // backgroundColor: '#FCF9F3' // Теперь фон глобальный, можно убрать
        }}>
            {/* Используем новый компонент SectionHeader */}
            {showHeader && (
                <SectionHeader
                    title={title}
                    subtitle={subtitle}
                />
            )}

            {/* Контейнер слайдера */}
            <Box sx={{
                maxWidth: 500,
                flexGrow: 1,
                margin: 'auto',
                position: 'relative'
            }}>
                {/* Заголовок текущего слайда */}
                <Paper
                    square
                    elevation={0}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 60,
                        bgcolor: 'transparent',
                        borderBottom: '1px solid rgba(166, 124, 82, 0.2)', // Saddle Tan с прозрачностью
                        position: 'relative',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -1,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '60px',
                            height: '2px',
                            backgroundColor: '#D95D2B' // Signature Orange
                        }
                    }}
                >
                    <Typography
                        sx={{
                            color: '#3E2F28', // Bitter Chocolate
                            fontWeight: 500,
                            fontSize: '1.1rem',
                            textAlign: 'center',
                            px: 2
                        }}
                    >
                        {imagesFrom[activeStep].label}
                    </Typography>
                </Paper>

                {/* Слайдер */}
                <Box sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '0 0 8px 8px',
                    border: '1px solid rgba(166, 124, 82, 0.1)',
                    borderTop: 'none'
                }}>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {imagesFrom.map((step, index) => (
                            <Box key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <Box
                                        component="img"
                                        sx={{
                                            height: 360,
                                            display: 'block',
                                            maxWidth: 500,
                                            width: '100%',
                                            objectFit: 'cover'
                                        }}
                                        src={step.imgPath}
                                        alt={step.label}
                                    />
                                ) : null}
                            </Box>
                        ))}
                    </SwipeableViews>

                    {/* Индикаторы сверху */}
                    <Box sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        display: 'flex',
                        gap: 1
                    }}>
                        {imagesFrom.map((_, index) => (
                            <Box
                                key={index}
                                sx={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: '50%',
                                    backgroundColor: activeStep === index ? '#D95D2B' : 'rgba(255, 255, 255, 0.5)',
                                    border: activeStep === index ? 'none' : '1px solid rgba(255, 255, 255, 0.8)',
                                    transition: 'background-color 0.3s ease'
                                }}
                            />
                        ))}
                    </Box>
                </Box>

                {/* Навигация */}
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    sx={{
                        backgroundColor: 'transparent',
                        border: '1px solid rgba(166, 124, 82, 0.1)',
                        borderTop: 'none',
                        borderRadius: '0 0 8px 8px',
                        '& .MuiMobileStepper-dot': {
                            backgroundColor: 'rgba(166, 124, 82, 0.3)', // Saddle Tan с прозрачностью
                            width: 8,
                            height: 8,
                            margin: '0 4px'
                        },
                        '& .MuiMobileStepper-dotActive': {
                            backgroundColor: '#D95D2B' // Signature Orange
                        }
                    }}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                            sx={{
                                color: activeStep === maxSteps - 1 ? 'rgba(166, 124, 82, 0.3)' : '#3E2F28',
                                '&:hover': {
                                    backgroundColor: activeStep === maxSteps - 1 ? 'transparent' : 'rgba(217, 93, 43, 0.1)'
                                }
                            }}
                        >
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button
                            size="small"
                            onClick={handleBack}
                            disabled={activeStep === 0}
                            sx={{
                                color: activeStep === 0 ? 'rgba(166, 124, 82, 0.3)' : '#3E2F28',
                                '&:hover': {
                                    backgroundColor: activeStep === 0 ? 'transparent' : 'rgba(217, 93, 43, 0.1)'
                                }
                            }}
                        >
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                        </Button>
                    }
                />

                {/* Счетчик слайдов */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 3,
                    mb: 2,
                    gap: 1
                }}>
                    <Typography
                        variant="caption"
                        sx={{
                            color: '#A67C52', // Saddle Tan
                            fontSize: '0.85rem',
                            fontWeight: 500
                        }}
                    >
                        {activeStep + 1} / {maxSteps}
                    </Typography>
                </Box>
            </Box>

            {/* Подпись под слайдером */}
            <Box sx={{
                textAlign: 'center',
                mt: 4,
                px: 2
            }}>
                <Typography
                    sx={{
                        color: '#A67C52', // Saddle Tan
                        fontSize: '0.9rem',
                        fontStyle: 'italic',
                        maxWidth: '400px',
                        mx: 'auto',
                        lineHeight: 1.5
                    }}
                >
                    {imagesFrom[activeStep].description || 'Проведите пальцем или используйте кнопки для навигации'}
                </Typography>
            </Box>
        </Container>
    );
}