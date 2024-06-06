import Navbar from "../../Components/Navbar/Navbar";
import Fotter from "../../Components/Fotter/Fotter";
import "./Gallery.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "baguettebox.js/dist/baguetteBox.min.css";
import S1 from "../../Assests/S1.jpg";
import S2 from "../../Assests/S2.jpg";
import S3 from "../../Assests/S3.jpg";
import S4 from "../../Assests/S4.jpg";
import S5 from "../../Assests/S5.jpg";

const Gallery = () => {
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
                return "radio5";
            case "radio5":
                return "radio1";
            // case "radio6":
            //     return "radio1";
            // case "radio7":
            //     return "radio1";
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
                    <input
                        type="radio"
                        name="radio-btn"
                        id="radio5"
                        checked={selectedSlide === "radio5"}
                        onChange={handleSlideChange}
                    />
                    {/* <input
                        type="radio"
                        name="radio-btn"
                        id="radio6"
                        checked={selectedSlide === "radio6"}
                        onChange={handleSlideChange}
                    />
                    <input
                        type="radio"
                        name="radio-btn"
                        id="radio7"
                        checked={selectedSlide === "radio7"}
                        onChange={handleSlideChange}
                    /> */}

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
                    <div class="slide slide5">
                        <img src={S5} alt="" />
                    </div>
                    {/* <div class="slide slide6">
                        <img src={S6} alt="" />
                    </div>
                    <div class="slide slide7">
                        <img src={S7} alt="" />
                    </div> */}

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
                        <label
                            for="radio5"
                            class="manual-btn"
                            id="btn5"
                        ></label>
                        {/* <label
                            for="radio6"
                            class="manual-btn"
                            id="btn6"
                        ></label>
                        <label
                            for="radio7"
                            class="manual-btn"
                            id="btn7"
                        ></label> */}
                    </div>
                </div>
            </div>

            <div className="g-fotter">
                <Fotter />
            </div>
        </div>
    );
};

export default Gallery;
