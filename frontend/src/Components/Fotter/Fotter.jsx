import "./Fotter.css";

function Fotter() {
    return (
        <div>
            <footer>
                <div class="waves">
                    <div class="wave" id="wave1"></div>
                    <div class="wave" id="wave2"></div>
                    <div class="wave" id="wave3"></div>
                    <div class="wave" id="wave4"></div>
                </div>

                <ul class="social_icon">
                    <li>
                        <a href="../Additional_Content_Page/additionalContent.html">
                            <i class="fa-solid fa-cube"></i>
                        </a>
                    </li>
                    <a
                        href="../Additional_Content_Page/additionalContent.html"
                        id="additionalC"
                    >
                        Additional Content
                    </a>
                </ul>
                <ul class="menu">
                    <li>
                        <a
                            href="../PresentationPage&Shop/Page_Editor/ishan.html"
                            id="ishan"
                        >
                            Ishan
                        </a>
                    </li>
                    <li>
                        <a
                            href="../QueryForm&Navigation/page_editor/page_editor.html"
                            id="thushini"
                        >
                            Thushini
                        </a>
                    </li>
                    <li>
                        <a href="../AboutUs&Quiz/gihan.html" id="gihan">
                            Gihan
                        </a>
                    </li>
                    <li>
                        <a
                            href="../Sitemap&Gallery/pageeditor_savinthie.html"
                            id="savinthie"
                        >
                            Savinthie
                        </a>
                    </li>
                </ul>
                <p>© 2022 CLOUD KID | All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default Fotter;
