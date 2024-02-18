import React, {memo} from "react";
import "./Header.css";
import {Fade} from "react-reveal";
import {NavLink, Link} from "react-router-dom";
import {greeting} from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const onMouseEnter = (event, color) => {
    const el = event.target;
    el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
    const el = event.target;
    el.style.backgroundColor = "transparent";
};

const Header = ({theme}) => {
    const link = "home";
    return (
        <Fade top duration={1000} distance="20px">
            <SeoHeader/>
            <div>
                <header className="header">
                    <NavLink to={link} tag={Link} className="logo">
                        <span style={{color: theme.text}}> &lt;</span>
                        <span className="logo-name" style={{color: theme.text}}>
                {greeting.logo_name}
              </span>
                        <span style={{color: theme.text}}>/&gt;</span>
                    </NavLink>
                    <input className="menu-btn" type="checkbox" id="menu-btn"/>
                    <label className="menu-icon" htmlFor="menu-btn">
                        <span className="navicon"></span>
                    </label>
                    <ul className="menu" style={{backgroundColor: theme.body}}>
                        <li>
                            <NavLink
                                to="/home"
                                tag={Link}
                                activeStyle={{fontWeight: "bold"}}
                                style={{color: theme.text}}
                                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                                onMouseOut={(event) => onMouseOut(event)}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                tag={Link}
                                activeStyle={{fontWeight: "bold"}}
                                style={{color: theme.text}}
                                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                                onMouseOut={(event) => onMouseOut(event)}
                            >
                                About Me
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/services"
                                tag={Link}
                                activeStyle={{fontWeight: "bold"}}
                                style={{color: theme.text}}
                                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                                onMouseOut={(event) => onMouseOut(event)}
                            >
                                Services
                            </NavLink>
                        </li>
                        {/*<li>*/}
                        {/*  <NavLink*/}
                        {/*      to="/education"*/}
                        {/*      tag={Link}*/}
                        {/*      activeStyle={{fontWeight: "bold"}}*/}
                        {/*      style={{color: theme.text}}*/}
                        {/*      onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}*/}
                        {/*      onMouseOut={(event) => onMouseOut(event)}*/}
                        {/*  >*/}
                        {/*    Education*/}
                        {/*  </NavLink>*/}
                        {/*</li>*/}
                        <li>
                            <NavLink
                                to="/experience"
                                tag={Link}
                                activeStyle={{fontWeight: "bold"}}
                                style={{color: theme.text}}
                                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                                onMouseOut={(event) => onMouseOut(event)}
                            >
                                Experience
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/portfolio"
                                tag={Link}
                                activeStyle={{fontWeight: "bold"}}
                                style={{color: theme.text}}
                                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                                onMouseOut={(event) => onMouseOut(event)}
                            >
                                Portfolio
                            </NavLink>
                        </li>
                        <li>
                            {/*<NavLink*/}
                            {/*  to="/opensource"*/}
                            {/*  tag={Link}*/}
                            {/*  activeStyle={{ fontWeight: "bold" }}*/}
                            {/*  style={{ color: theme.text }}*/}
                            {/*  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}*/}
                            {/*  onMouseOut={(event) => onMouseOut(event)}*/}
                            {/*>*/}
                            {/*  Open Source*/}
                            {/*</NavLink>*/}
                        </li>
                        <li>
                            <NavLink
                                to="/faq"
                                tag={Link}
                                activeStyle={{fontWeight: "bold"}}
                                style={{color: theme.text}}
                                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                                onMouseOut={(event) => onMouseOut(event)}
                            >
                                FAQ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                tag={Link}
                                activeStyle={{fontWeight: "bold"}}
                                style={{color: theme.text}}
                                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                                onMouseOut={(event) => onMouseOut(event)}
                            >
                                Contact Me
                            </NavLink>
                        </li>
                    </ul>
                </header>
            </div>
        </Fade>
    );
}

export default memo(Header);
