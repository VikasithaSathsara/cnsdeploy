import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Assests/Final_logo.png";
import { HamburgerMenu } from "./HamburgerButton";
import "./Navbar.css";

function Navbar() {
    const [active, setActive] = useState(false);
    return (
        <div>
            <nav>
                {/* <a href="#/">
                    <img className="logo" src={Logo} alt="Cloud Kid logo" />
                </a> */}
                <NavLink to="/" activeClassName="selected">
                    <img className="logo" src={Logo} alt="Cloud Kid logo" />
                </NavLink>

                {/* Hamburger menu icon */}
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>

                <ul className="menu">
                    <li>
                        <NavLink to="/" activeClassName="selected">
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/facility" activeClassName="selected">
                            FACILITIES
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery" activeClassName="selected">
                            GALLERY
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="selected">
                            ABOUT US
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="selected">
                            CONTACT US
                        </NavLink>
                    </li>
                </ul>

                <div className="hamberger">
                    <HamburgerMenu active={active} setActive={setActive} />
                </div>
            </nav>
            <div className={`mobile-menu ${active ? "block" : "hidden"}`}>
                <ul>
                    <li onClick={() => setActive(false)}>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "selected" : ""
                            }
                        >
                            HOME
                        </NavLink>
                    </li>
                    <li onClick={() => setActive(false)}>
                        <NavLink
                            to="/facility"
                            className={({ isActive }) =>
                                isActive ? "selected" : ""
                            }
                        >
                            FACILITIES
                        </NavLink>
                    </li>
                    <li onClick={() => setActive(false)}>
                        <NavLink
                            to="/gallery"
                            className={({ isActive }) =>
                                isActive ? "selected" : ""
                            }
                        >
                            GALLERY
                        </NavLink>
                    </li>
                    <li onClick={() => setActive(false)}>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "selected" : ""
                            }
                        >
                            ABOUT US
                        </NavLink>
                    </li>
                    <li onClick={() => setActive(false)}>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? "selected" : ""
                            }
                        >
                            CONTACT US
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
