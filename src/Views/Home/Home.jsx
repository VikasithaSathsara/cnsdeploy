import React from "react";
import swal from "sweetalert";
import bgvideo from "../../Assests/bgvideo.mp4";
import img1 from "../../Assests/court.jpg";
import img2 from "../../Assests/facilityImage.jpg";
import img3 from "../../Assests/Shop.jpg";
import useScrollToContact from "../../Components/Navbar/Scroll";
import Fotter from "../../Components/Fotter/Fotter";
import "./Home.css";

function Home() {
    useScrollToContact();

    const handleBookNow = () => {
        swal({
            title: "SORRY",
            text: "This Feature is under Constructions",
            icon: "warning",
            button: "OK",
        });
    };

    return (
        <div>
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
