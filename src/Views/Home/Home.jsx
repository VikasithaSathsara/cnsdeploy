import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import bgvideo from "../../Assests/bgvideo.mp4";
import img1 from "../../Assests/court.jpg";
import img2 from "../../Assests/facilityImage.jpg";
import img3 from "../../Assests/Shop.jpg";
import flyerImg from "../../Assests/tournamentFlyer.jpeg"; 
import useScrollToContact from "../../Components/Navbar/Scroll";
import Fotter from "../../Components/Fotter/Fotter";
import "./Home.css";

function Home() {
    useScrollToContact();

    /*Comment out from here to line number 46 to remove popup*/

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Check if the popup has already been displayed in the session
        const popupDisplayed = sessionStorage.getItem("popupDisplayed");

        // If the popup hasn't been shown yet, display it and store it in sessionStorage
        if (!popupDisplayed) {
            setShowPopup(true);
            sessionStorage.setItem("popupDisplayed", "true"); // Mark the popup as displayed
        }
    }, []);

    const handleBookNow = () => {
        swal({
            title: "SORRY",
            text: "This Feature is under Construction",
            icon: "warning",
            button: "OK",
        });
    };

    const handleClosePopup = () => {
        setShowPopup(false); // Close the popup
    };

    const handleViewMoreDetails = () => {
        window.location.href = "https://www.facebook.com/people/C-S-Badminton-Complex-PVT-Ltd/61560580761181/"; // Adjust the route based on your actual page
    };

    return (
        <div>

            {/* Comment out from here to line number 66 to remove popup */}
            
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        {/* Custom Close Button */}
                        <button className="close-btn" onClick={handleClosePopup}>
                            &times; {/* This is the "X" character for Close */}
                        </button>
                        
                        <img src={flyerImg} alt="Badminton Tournament Flyer" />
                        <div className="popup-buttons">
                            <button onClick={handleViewMoreDetails}>View More Details</button>
                        </div>
                    </div>
                </div>
            )}

            <section>
                <h2 id="text">
                    SMASHING DREAMS <br /> INTO REALITY
                </h2>
                <a href="#sec" id="explore">
                    Explore
                </a>
            </section>

            <div className="sec" id="sec">
                <h2>Choose Your Option</h2>
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
                            <a className="buyNowBtn" onClick={handleBookNow}>
                                BOOK NOW
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                            <img
                                src={img2}
                                alt="Facilities"
                                style={{ borderRadius: "10%" }}
                            />
                            <h3>Our Facilities</h3>
                            <br />
                        </div>
                        <div className="content">
                            <a href="facility" className="buyNowBtn">
                                VIEW NOW
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                            <img
                                src={img3}
                                alt="Shop"
                                style={{ borderRadius: "10%" }}
                            />
                            <h3>Gallery</h3>
                            <br />
                        </div>
                        <div className="content">
                            <a href="/gallery" className="buyNowBtn">
                                VIEW NOW
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
