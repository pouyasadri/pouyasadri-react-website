import React from "react";
import "./App.css";
import Main from "./containers/Main";
import {ThemeProvider} from "styled-components";
import {chosenTheme} from "./theme";
import {GlobalStyles} from "./global";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
            <ThemeProvider theme={chosenTheme}>
                <>
                    <GlobalStyles/>
                    <div>
                        <Main theme={chosenTheme}/>
                    </div>
                </>
            </ThemeProvider>
    );
}

export default App;
