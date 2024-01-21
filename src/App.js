import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import {Route, Routes} from 'react-router-dom'
import Main from "./components/main/Main"
import Privacy from "./components/Legal/Privacy";
import Terms from "./components/Legal/Terms";
import Success from "./components/BackPayment/Success";
import Failed from "./components/BackPayment/Failed";

function App() {
    const {onToggleButton, tg} = useTelegram();
    useEffect(() => {
        tg.ready();
    }, [])
    return (
        <div className="App">
            <Routes>
                <Route index element={<Main />}/>
                <Route path={'privacy'} element={<Privacy />}/>
                <Route path={'terms'} element={<Terms />}/>
                <Route path={'success'} element={<Success />}/>
                <Route path={'failed'} element={<Failed />}/>
            </Routes>
        </div>
    );
}

export default App;
