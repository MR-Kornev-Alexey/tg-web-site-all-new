import React, {useState, useEffect} from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {Box} from "@mui/system";

const CountdownTimer = () => {
    // Устанавливаем целевую дату и время (в данном случае, 29 января 2024 года, 8:00 утра)
    const targetDate = new Date('2024-01-29T08:00:00');
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    function calculateTimeLeft(targetDate) {
        const now = new Date();
        const difference = targetDate - now;

        if (difference <= 0) {
            // Таймер истек
            return {days: 0, hours: 0, minutes: 0, seconds: 0};
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return {days, hours, minutes, seconds};
    }

    function countDays(days) {
        switch (days) {
            case 0:
                return "дней"
            case 1:
                return "день"
            case 2:
                return "дня"
            case 3:
                return "дня"
            case 4:
                return "дня"
            default:
                return "дней"
        }
    }

    function countSeconds(second) {
        const lastDigit = second % 10;
        const lastTwoDigits = second % 100;

        if ((lastTwoDigits >= 11 && lastTwoDigits <= 19) || (lastDigit >= 5 && lastDigit <= 9) || lastDigit === 0) {
            return "секунд";
        } else if (lastDigit === 1) {
            return "секунда";
        } else {
            return "секунды";
        }
    }

    function countHours(hour) {
        const lastDigit = hour % 10;
        const lastTwoDigits = hour % 100;

        if ((lastTwoDigits >= 11 && lastTwoDigits <= 19) || (lastDigit >= 5 && lastDigit <= 9) || lastDigit === 0) {
            return "часов";
        } else if (lastDigit === 1) {
            return "час";
        } else {
            return "часа";
        }
    }

    function countMinutes(minute) {
        const lastDigit = minute % 10;
        const lastTwoDigits = minute % 100;
        if ((lastTwoDigits >= 11 && lastTwoDigits <= 19) || (lastDigit >= 5 && lastDigit <= 9) || lastDigit === 0) {
            return "минут";
        } else if (lastDigit === 1) {
            return "минута";
        } else {
            return "минуты";
        }
    }

    return (
        <Container disableGutters maxWidth="md" sx={{pt: 4}} className={"box-center"}>
            <Typography
                component="h3"
                variant="h3"
                align="center"
                className={"line-block"}
            >
                До старта курса осталось:
            </Typography>
            <Box className={"box-timer"} sx={{display: {md: "flex", sm: "flex", xs: "none"}}}>
                <Box className={"box-timer-in"}>
                    <h3 className={"h3-timer"}>{timeLeft.days}</h3>
                    <span className={"timer-span"}> {countDays(timeLeft.days)}</span>
                </Box>
                <Box className={"box-timer-in"} sx={{marginX: {md: 3, sm: 2, xs: 0}}}>
                    <h3 className={"h3-timer"}>{timeLeft.hours}</h3>
                    <span className={"timer-span"}> {countHours(timeLeft.hours)}</span>
                </Box>
                <Box className={"box-timer-in"} sx={{marginX: {md: 3, sm: 2, xs: 0}}}>
                    <h3 className={"h3-timer"}>{timeLeft.minutes}</h3>
                    <span className={"timer-span"}> {countMinutes(timeLeft.minutes)}</span>
                </Box>
                <Box className={"box-timer-in"}>
                    <h3 className={"h3-timer"}>{timeLeft.seconds}</h3>
                    <span className={"timer-span"}> {countSeconds(timeLeft.seconds)}</span>
                </Box>
            </Box>
            <Box className={"box-timer"} sx={{display: {md: "none", sm: "none", xs: "block"}}}>
                <Box className={"box-timer"} >
                    <Box className={"box-timer-in"}>
                        <h3 className={"h3-timer"}>{timeLeft.days}</h3>
                        <span className={"timer-span"}> {countDays(timeLeft.days)}</span>
                    </Box>
                    <Box className={"box-timer-in"} sx={{marginX: {md: 3, sm: 2, xs: 0}}}>
                        <h3 className={"h3-timer"}>{timeLeft.hours}</h3>
                        <span className={"timer-span"}> {countHours(timeLeft.hours)}</span>
                    </Box>
                </Box>
                <Box className={"box-timer"} >
                    <Box className={"box-timer-in"} sx={{marginX: {md: 3, sm: 2, xs: 0}}}>
                        <h3 className={"h3-timer"}>{timeLeft.minutes}</h3>
                        <span className={"timer-span"}> {countMinutes(timeLeft.minutes)}</span>
                    </Box>
                    <Box className={"box-timer-in"}>
                        <h3 className={"h3-timer"}>{timeLeft.seconds}</h3>
                        <span className={"timer-span"}> {countSeconds(timeLeft.seconds)}</span>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default CountdownTimer;
