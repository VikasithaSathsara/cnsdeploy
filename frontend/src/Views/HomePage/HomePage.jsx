import Fotter from "../../Components/Fotter/Fotter";
import Navbar from "../../Components/Navbar/Navbar";
import "./HomePage.css";

function HomePage() {
    return (
        <div>
            <body>
                <Navbar />
                <section>
                    {/* <img src="Main_Assets/Background/nitendo.png" id="nitendo" alt="Nintendo Switch"> */}
                    <h2 id="text">ONWARDS TO GLORY</h2>
                    <a href="#sec" id="explore">
                        Explore
                    </a>
                    {/* <img src="Main_Assets/Background/controller.png" id="controller" alt="Gaming Controller"> */}
                </section>

                <div class="sec" id="sec">
                    <h2>Choose Your Weapon</h2>
                    <video id="bgvideo" autoplay muted loop>
                        {/* <source src="Main_Assets/Background/Main_bg.mp4" type="video/mp4"> */}
                    </video>
                    <div class="container">
                        <div class="card">
                            <div class="imgBx">
                                {/* <img src = "Main_Assets/Card_Images/headset.png" alt="SteelSeries HeadSet"> */}
                                <h3>SteelSeries</h3>
                                <br />
                            </div>
                            <div class="content">
                                <a
                                    href="../PresentationPage&Shop/Shop/shop.html"
                                    class="buyNowBtn"
                                >
                                    BUY NOW
                                </a>
                            </div>
                        </div>
                        <div class="card">
                            <div class="imgBx">
                                {/* <img src = "Main_Assets/Card_Images/nintendo.png" alt="Nintendo Switch"> */}
                                <h3>Nintendo</h3>
                                <br />
                            </div>
                            <div class="content">
                                <a href="../PresentationPage&Shop/Shop/shop.html">
                                    BUY NOW
                                </a>
                            </div>
                        </div>
                        <div class="card">
                            <div class="imgBx">
                                {/* <img src = "Main_Assets/Card_Images/oculusvr.png" alt="Oculus quest 2 VR"> */}
                                <h3>Oculus</h3>
                                <br />
                            </div>
                            <div class="content">
                                <a href="../PresentationPage&Shop/Shop/shop.html">
                                    BUY NOW
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Fotter />
                {/* <script>  // Parralax Effects Section
            let nitendo = document.getElementById('nitendo');
            let text= document.getElementById('text')
            let explore = document.getElementById('explore')
            let controller = document.getElementById('controller');
            let header = document.querySelector("header");

            window.addEventListener("scroll",function(){
                let value = window.scrollY;
                nitendo.style.top = value * 0.25 + "px";
                text.style.marginRight = value * 4 + "px";
                explore.style.marginTop = value *1.5 + "px";
                controller.style.top = value * 0.25 + "px";
                header.style.top= value * 0.5 + "px";    
            })
        </script> */}
            </body>
        </div>
    );
}

export default HomePage;
