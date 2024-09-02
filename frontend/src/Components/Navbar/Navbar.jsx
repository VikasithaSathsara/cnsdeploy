import React from "react";
import "./Navbar.css";
import { NavLink} from "react-router-dom";
import Logo from "../../Assests/Final_logo.png";

function Navbar() {
    return (
        <div>
            <nav>
                <a href="/">
                    <img className="logo" src={Logo} alt="Cloud Kid logo" />
                </a>

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
            </nav>
        </div>
    );
}

export default Navbar;
