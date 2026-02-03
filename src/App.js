import './App.css';
import * as React from 'react';
import {Route, Routes} from 'react-router-dom'
import Main from "./components/main/Main"
import Success from "./components/BackPayment/Success";
import Failed from "./components/BackPayment/Failed";
import {StyledEngineProvider} from "@mui/material";
import DrawerLeft from "./components/Drawer/anotherDrawer"
import MainCourses from "./components/MainCourses/MainCourses"
import MainConduct from "./components/MainConduct/MainConduct";
import MainConsultation from "./components/MainConsultation/MainConsultation";
import MainMiniCourses from "./components/MiniCourses/MainMiniCourses";
import DevelopmentPhilosophy from "./components/Manifest/Manifest";
import MainManifest from "./components/Manifest/MainManifest";
import TermsNew from "./components/Terms/Terms";
import Offer from "./components/Offer/Offer";
import PrivacyPolicyPage from "./components/Privacy/Privacy";
import ConsentTextDisplay from "./components/PersonalData/PerconalData";
import ServiceRules from "./components/RulesOfService/RulesOfService";

function App() {
    return (
        <div className="App">
            <React.StrictMode>
                <StyledEngineProvider injectFirst>
                    <DrawerLeft/>
                </StyledEngineProvider>
            </React.StrictMode>
            <Routes>
                <Route index element={<Main />}/>
                <Route path={'course'} element={<MainCourses/>}/>
                <Route path={'mini-course'} element={<MainMiniCourses/>}/>
                <Route path={'manifest'} element={<MainManifest/>}/>
                <Route path={'consultation'} element={<MainConsultation/>}/>
                <Route path={'conduct'} element={<MainConduct/>}/>
                <Route path={'privacy'} element={<PrivacyPolicyPage />}/>
                <Route path={'terms'} element={<TermsNew />}/>
                <Route path={'offer'} element={<Offer/>}/>
                <Route path={'success'} element={<Success />}/>
                <Route path={'personal'} element={<ConsentTextDisplay />}/>
                <Route path={'service-rules'} element={<ServiceRules />}/>
                <Route path={'failed'} element={<Failed />}/>
            </Routes>
        </div>
    );
}

export default App;
