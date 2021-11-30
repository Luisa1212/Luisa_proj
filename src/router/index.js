import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {ThemeProvider, createTheme } from "@mui/material";
import theme from "../util/theme";

import IndexPages from '../pages/indexPages';
import Aboutme from '../pages/aboutme';
import Contactme from '../pages/contactme';

export default function index() {
    const THEME = createTheme(theme(false))       //so kung true si darkmode kukunin nya sa loob ng theme na function
    return (
        <ThemeProvider theme ={THEME}>
                <Router>
                    <Switch>
                    <Route exact path="/" component={IndexPages} />
                    <Route  path="/indexPages" component={IndexPages} />
                    <Route  path="/aboutme"  component={Aboutme}  />
                    <Route path="/contactme"  component={Contactme}  />
                    </Switch>
                </Router>
        </ThemeProvider>
       
    );
}
