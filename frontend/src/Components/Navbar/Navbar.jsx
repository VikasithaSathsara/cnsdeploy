import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav>
                {/* <input type="checkbox" id="check" />
                <label for="check" class="checkbtn">
                    <i class="fas fa-bars"></i>
                </label> */}

                {/* <img class= "logo" src="Page_Navbar/logo.png" alt="Cloud Kid logo"> */}

                <ul>
                    <li>
                        <NavLink to="/" activeClassName="selected">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop">SHOP</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">ABOUT US</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
