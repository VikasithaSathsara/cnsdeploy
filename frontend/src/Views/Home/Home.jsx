import React from "react";
import Fotter from "../../Components/Fotter/Fotter";
import Navbar from "../../Components/Navbar/Navbar";
import bgvideo from "../../Assests/bgvideo1.mp4";
import img1 from "../../Assests/court.jpg";
import img2 from "../../Assests/gym_img1.jpg";
import img3 from "../../Assests/Shop.jpg";
import "./Home.css";

function Home() {
    return (
        <div>
            <Navbar />
            <section>
                {/* <img src={img1} id="nitendo" alt="Nintendo Switch" /> */}
                <h2 id="text">ONWARDS TO GLORY</h2>
                <a href="#sec" id="explore">
                    Explore
                </a>
            </section>

            <div className="sec" id="sec">
                <h2>Choose Your Weapon</h2>
                <video
                    src={bgvideo}
                    id="bgvideo"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                <div className="container">
                    <div className="card">
                        <div className="imgBx">
                            <img
                                src={img1}
                                alt="Badminton Court"
                                style={{ borderRadius: "10%" }}
                            />
                            <h3>Badminton Court</h3>
                            <br />
                        </div>
                        <div className="content">
                            <a href="/reservation" className="buyNowBtn">
                                BOOK NOW
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                            <img
                                src={img2}
                                alt="Gymnasium"
                                style={{ borderRadius: "10%" }}
                            />
                            <h3>Gymnasium</h3>
                            <br />
                        </div>
                        <div className="content">
                            <a href="/reservation" className="buyNowBtn">
                                BOOK NOW
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                            <img
                                src={img3}
                                alt="Gymnasium"
                                style={{ borderRadius: "10%" }}
                            />
                            <h3>Shop</h3>
                            <br />
                        </div>
                        <div className="content">
                            <a href="/shop" className="buyNowBtn">
                                SHOP NOW
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Fotter />
        </div>
    );
}

export default Home;
