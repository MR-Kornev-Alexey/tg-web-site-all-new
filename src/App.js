import './App.css';
import * as React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import {
    StyledEngineProvider,
    useTheme,
    useMediaQuery,
    BottomNavigation,
    BottomNavigationAction,
    Box
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PeopleIcon from '@mui/icons-material/People';
import FactCheckIcon from '@mui/icons-material/FactCheck';    // <-- Добавьте это
// или import AssignmentIcon from '@mui/icons-material/Assignment';


import Main from "./components/main/Main";
import Success from "./components/BackPayment/Success";
import Failed from "./components/BackPayment/Failed";
import DrawerLeft from "./components/Drawer/anotherDrawer";
import MainCourses from "./components/MainCourses/MainCourses";
import MainConduct from "./components/MainConduct/MainConduct";
import MainConsultation from "./components/MainConsultation/MainConsultation";
import MainMiniCourses from "./components/MiniCourses/MainMiniCourses";
import MainManifest from "./components/Manifest/MainManifest";
import TermsNew from "./components/Terms/Terms";
import Offer from "./components/Offer/Offer";
import PrivacyPolicyPage from "./components/Privacy/Privacy";
import ConsentTextDisplay from "./components/PersonalData/PerconalData";
import ServiceRules from "./components/RulesOfService/RulesOfService";
import MainAlfa from "./components/MainAlfa/MainAlfa";
import MainStrategicAuditForm from "./components/Questionnaire/MainStrategicAuditForm";
import MainSpeak from "./components/SpeakCourse/MainSpeak";
import HelenBotLanding from "./components/HwCourse/HwCourse";
import UnifiedLanding from "./components/HwCourse/HwCourse";
import MainHW from "./components/HwCourse/MainHW";
import MainTwenty from "./components/TwentyCourse/MainTwenty";

// Цвет для активной вкладки (темно-терракотовый)
const TERRACOTTA = '#A04028';

function App() {
    const location = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const getBottomNavValue = () => {
        if (location.pathname === '/') return 0;
        if (location.pathname.startsWith('/course') || location.pathname.startsWith('/mini-course')) return 1;
        if (location.pathname === '/consultation' || location.pathname === '/manifest' || location.pathname === '/alfa') return 2;
        if (location.pathname === '/conduct') return 3;
        if (location.pathname === '/strategic') return 4;
        return false;
    };

    const handleNavChange = (event: React.SyntheticEvent, newValue: number) => {
        switch (newValue) {
            case 0:
                navigate('/');
                break;
            case 1:
                navigate('/course');
                break;
            case 2:
                navigate('/consultation');
                break;
            case 3:
                navigate('/conduct');
                break;
            case 4:
                window.location.href = 'https://form.mrk.digital';
                break;
            default:
                break;
        }
    };


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <React.StrictMode>
                <StyledEngineProvider injectFirst>
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <DrawerLeft />
                    </Box>
                </StyledEngineProvider>
            </React.StrictMode>

            <Box component="main" sx={{ flexGrow: 1, pb: isMobile ? 8 : 0 }}>
                <Routes>
                    <Route index element={<Main />} />
                    <Route path={'course'} element={<MainCourses />} />
                    <Route path={'mini-course'} element={<MainMiniCourses />} />
                    <Route path={'manifest'} element={<MainManifest />} />
                    <Route path={'consultation'} element={<MainConsultation />} />
                    <Route path={'alfa'} element={<MainAlfa />} />
                    <Route path={'twenty'} element={<MainTwenty />} />
                    <Route path={'speakCourse'} element={<MainSpeak />} />
                    <Route path={'hwCourse'} element={<MainHW />} />
                    <Route path={'conduct'} element={<MainConduct />} />
                    <Route path={'strategic'} element={<MainStrategicAuditForm />} />
                    <Route path={'privacy'} element={<PrivacyPolicyPage />} />
                    <Route path={'terms'} element={<TermsNew />} />
                    <Route path={'offer'} element={<Offer />} />
                    <Route path={'success'} element={<Success />} />
                    <Route path={'personal'} element={<ConsentTextDisplay />} />
                    <Route path={'service-rules'} element={<ServiceRules />} />
                    <Route path={'failed'} element={<Failed />} />
                </Routes>
            </Box>

            {isMobile && (
                <BottomNavigation
                    value={getBottomNavValue()}
                    onChange={handleNavChange}
                    showLabels
                    sx={{
                        position: 'fixed',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: theme.palette.background.paper,
                        borderTop: `1px solid ${theme.palette.divider}`,
                        '& .MuiBottomNavigationAction-root': {
                            color: theme.palette.text.secondary,
                            transition: 'color 0.2s ease-in-out',
                            '&.Mui-selected': {
                                color: TERRACOTTA, // <-- Активный цвет: темно-терракотовый
                            },
                            '&:hover': {
                                color: TERRACOTTA, // <-- Подсветка при наведении тоже терракотовая
                                backgroundColor: 'rgba(160, 64, 40, 0.08)',
                            },
                            '&:active': {
                                color: TERRACOTTA,
                            },
                        },
                        // Меняем цвет ripple-эффекта (волны при клике)
                        '& .MuiTouchRipple-rippleVisible': {
                            color: TERRACOTTA,
                        },
                        zIndex: theme.zIndex.appBar,
                    }}
                >
                    <BottomNavigationAction label="Главная" icon={<HomeIcon />} />
                    <BottomNavigationAction label="Курсы" icon={<SchoolIcon />} />
                    <BottomNavigationAction label="Консультация" icon={<PsychologyIcon />} />
                    <BottomNavigationAction label="Ведение" icon={<PeopleIcon />} />
                    <BottomNavigationAction label="Анкета" icon={<FactCheckIcon />} />
                </BottomNavigation>
            )}
        </Box>
    );
}

export default App;