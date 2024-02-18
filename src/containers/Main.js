import React, {Component, lazy, Suspense} from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import AboutMe from "../pages/aboutMe/AboutMe";
import Services from "../pages/services/ServicesComponent";
import Faq from "../pages/faq/Faq";

const Education = lazy(() => import("../pages/education/EducationComponent"));
const Experience = lazy(() => import("../pages/experience/Experience"));
const Contact = lazy(() => import("../pages/contact/ContactComponent"));
const Projects = lazy(() => import("../pages/projects/Projects"));
const Error404 = lazy(() => import("../pages/errors/error404/Error"));
export default class Main extends Component {
    render() {
        return (
            <div>
                <BrowserRouter basename="/">
                    <Switch>
                        <Route
                            path="/"
                            exact
                            render={(props) => <Home {...props} theme={this.props.theme}/>}
                        />
                        <Route
                            path="/home"
                            render={(props) => <Home {...props} theme={this.props.theme}/>}
                        />
                        <Suspense fallback={<div>Loading...</div>}>
                            <Route
                                path="/experience"
                                exact
                                render={(props) => (
                                    <Experience {...props} theme={this.props.theme}/>
                                )}
                            />
                            <Route
                                path="/about"
                                render={(props) => (
                                    <AboutMe {...props} theme={this.props.theme}/>
                                )}
                            />
                            <Route
                                path="/services"
                                render={(props) => (
                                    <Services {...props} theme={this.props.theme}/>
                                )}
                            />
                            <Route
                                path="/contact"
                                render={(props) => (
                                    <Contact {...props} theme={this.props.theme}/>
                                )}
                            />
                            <Route
                                path="/portfolio"
                                render={(props) => (
                                    <Projects {...props} theme={this.props.theme}/>
                                )}
                            />
                            <Route
                                path="/FAQ"
                                render={(props) => (
                                    <Faq {...props} theme={this.props.theme}/>
                                )}
                            />
                        </Suspense>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
