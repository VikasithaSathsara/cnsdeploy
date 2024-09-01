import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../Assests/Final_logo.png";

function Navbar() {
    return (
        <div>
            <nav>
                <a href="/">
                    <img class="logo" src={Logo} alt="Cloud Kid logo" />
                </a>

                <ul class="menu">
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
                        <Link to="/#contact-section" activeclassName="nav-link">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
