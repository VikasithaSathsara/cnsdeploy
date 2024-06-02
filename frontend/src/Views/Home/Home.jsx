import React, { useState, useEffect } from "react";
import Fotter from "../../Components/Fotter/Fotter";
import Navbar from "../../Components/Navbar/Navbar";
import img1 from "../../Assests/court.jpg";
import img2 from "../../Assests/gym_img1.jpg";
import img3 from "../../Assests/Shop.jpg";
import S1 from "../../Assests/S1.jpg";
import S2 from "../../Assests/S2.jpg";
import S3 from "../../Assests/S3.jpg";
import S4 from "../../Assests/S4.jpg";
import "./Home.css";

function Home() {
    const [selectedSlide, setSelectedSlide] = useState("radio1");
    const handleSlideChange = (event) => {
        setSelectedSlide(event.target.id);
    };
    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextSlide = getNextSlideId(selectedSlide);
            setSelectedSlide(nextSlide);
        }, 6000);
        return () => clearInterval(intervalId);
    }, [selectedSlide]);

    const getNextSlideId = (currentSlide) => {
        switch (currentSlide) {
            case "radio1":
                return "radio2";
            case "radio2":
                return "radio3";
            case "radio3":
                return "radio4";
            case "radio4":
                return "radio1";
        }
    };

    return (
        <div>
            <div class="slider">
                <Navbar />
                <div class="slides">
                    <input
                        type="radio"
                        name="radio-btn"
                        id="radio1"
                        checked={selectedSlide === "radio1"}
                        onChange={handleSlideChange}
                    />
                    <input
                        type="radio"
                        name="radio-btn"
                        id="radio2"
                        checked={selectedSlide === "radio2"}
                        onChange={handleSlideChange}
                    />
                    <input
                        type="radio"
                        name="radio-btn"
                        id="radio3"
                        checked={selectedSlide === "radio3"}
                        onChange={handleSlideChange}
                    />
                    <input
                        type="radio"
                        name="radio-btn"
                        id="radio4"
                        checked={selectedSlide === "radio4"}
                        onChange={handleSlideChange}
                    />

                    <div class="slide slide1">
                        <img src={S1} alt="" />
                    </div>

                    <div class="slide slide2">
                        <img src={S2} alt="" />
                    </div>

                    <div class="slide slide3">
                        <img src={S3} alt="" />
                    </div>

                    <div class="slide slide4">
                        <img src={S4} alt="" />
                    </div>

                    <div class="navigation-manual">
                        <label
                            for="radio1"
                            class="manual-btn"
                            id="btn1"
                        ></label>
                        <label
                            for="radio2"
                            class="manual-btn"
                            id="btn2"
                        ></label>
                        <label
                            for="radio3"
                            class="manual-btn"
                            id="btn3"
                        ></label>
                        <label
                            for="radio4"
                            class="manual-btn"
                            id="btn4"
                        ></label>
                    </div>
                </div>
            </div>

            {/* <section>
                <img src={img1} id="nitendo" alt="Nintendo Switch" />
                <h2 id="text">ONWARDS TO GLORY</h2>
                <a href="#sec" id="explore">
                    Explore
                </a>
            </section> */}

            <div className="sec" id="sec">
                <h2>Choose Your Option</h2>
                {/* <video
                    src={bgvideo}
                    id="bgvideo"
                    autoPlay
                    muted
                    loop
                    playsInline
                /> */}
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
                            <a href="/courtreservation" className="buyNowBtn">
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
                            <a href="/gymreservation" className="buyNowBtn">
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
