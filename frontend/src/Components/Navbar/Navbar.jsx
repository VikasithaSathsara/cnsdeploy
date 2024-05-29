import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav>
                <input type="checkbox" id="check" />
                <label for="check" class="checkbtn">
                    <i class="fas fa-bars"></i>
                </label>

                {/* <img class= "logo" src="Page_Navbar/logo.png" alt="Cloud Kid logo"> */}

                <ul>
                    <li>
                        <a href="../Main_Page/main.html" class="selected">
                            HOME
                        </a>
                        {/* <NavLink to="/" activeClassName="selected">
                            Home
                        </NavLink> */}
                    </li>
                    <li>
                        <a href="../PresentationPage&Shop/Shop/shop.html">
                            SHOP
                        </a>
                    </li>
                    <li>
                        <a href="../QueryForm&Navigation/query_form_and_details/queryForm.html">
                            QUERY FORM
                        </a>
                    </li>
                    <li>
                        <a href="../AboutUs&Quiz/Quiz/Quiz.html">QUIZ</a>
                    </li>
                    <li>
                        <a href="../Sitemap&Gallery/thumbnail2.html">
                            SHOW CASE
                        </a>
                    </li>
                    <li>
                        <a href="../Sitemap&Gallery/SiteMap.html">SITE MAP</a>
                    </li>
                    <li>
                        <a href="../AboutUs&Quiz/AboutUs/aboutUs.html">
                            ABOUT US
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
