import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../../Assests/Final_logo.png";

function Navbar() {
    return (
        <div>
            <nav>
                {/* <input type="checkbox" id="check" />
                <label for="check" class="checkbtn">
                    <i class="fas fa-bars"></i>
                </label> */}
                <a href="/">
                    <img class="logo" src={Logo} alt="Cloud Kid logo" />
                </a>

                <ul class="menu">
                    <li>
                        <NavLink to="/" activeClassName="selected">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop" className="nav-link">
                            SHOP
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="nav-link">
                            ABOUT US
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
