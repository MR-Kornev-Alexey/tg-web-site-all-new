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
import { autoPlay } from 'react-swipeable-views-utils';
import Container from "@mui/material/Container";
import "./Slider.css"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'Irina',
        imgPath: require("./slider/feedback-emo-1.jpg")
    },
    {
        label: 'Светлана',
        imgPath: require("./slider/feedback-emo-2.jpg")
    },
    {
        label: 'Лариса',
        imgPath: require("./slider/feedback-emo-3.jpg")
    },
    {
        label: 'Наталия',
        imgPath: require("./slider/feedback-emo-4.jpg")
    },
    {
        label: 'Лена',
        imgPath: require("./slider/feedback-emo-5.jpg")
    },
    {
        label: 'Жанна',
        imgPath: require("./slider/feedback-emo-6.jpg")
    },
    {
        label: 'Настя',
        imgPath: require("./slider/feedback-emo-7.jpg")
    },
    {
        label: 'Марина',
        imgPath: require("./slider/feedback-emo-8.jpg")
    },
    {
        label: 'Наташа',
        imgPath: require("./slider/feedback-emo-9.jpg")
    },
    {
        label: 'Елена П.',
        imgPath: require("./slider/feedback-emo-10.jpg")
    }
];

export default  function Slider() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

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
        <Container disableGutters >
            <Box sx={{ maxWidth: 400, flexGrow: 1, margin: 'auto' }} >
                <Paper
                    square
                    elevation={0}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 50,
                        pl: 2
                    }}
                >
                    <Typography>{images[activeStep].label}</Typography>
                </Paper>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {images.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Box
                                    component="img"
                                    sx={{
                                        height: 390,
                                        display: 'block',
                                        maxWidth: 460,
                                        overflow: 'hidden',
                                        width: '100%',
                                    }}
                                    src={step.imgPath}
                                    alt={step.label}
                                />
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            Дальше
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            Назад
                        </Button>
                    }
                />
            </Box>
        </Container>
    );
}
