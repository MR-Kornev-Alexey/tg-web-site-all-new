import './App.css';
import * as React from 'react';
import {useEffect} from "react";
import {Route, Routes} from 'react-router-dom'
import Main from "./components/main/Main"
import Privacy from "./components/Legal/Privacy";
import Terms from "./components/Legal/Terms";
import Success from "./components/BackPayment/Success";
import Failed from "./components/BackPayment/Failed";
import {StyledEngineProvider} from "@mui/material";
import DrawerLeft from "./components/Drawer/anotherDrawer"
import MainCourses from "./components/MainCourses/MainCourses"

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
                <Route path={'privacy'} element={<Privacy />}/>
                <Route path={'terms'} element={<Terms />}/>
                <Route path={'success'} element={<Success />}/>
                <Route path={'failed'} element={<Failed />}/>
            </Routes>
        </div>
    );
}

export default App;
