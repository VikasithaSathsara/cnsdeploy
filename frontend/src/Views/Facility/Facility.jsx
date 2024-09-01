import React from "react";
import "./Facility.css";
import restaurant from "../../Assests/restaurant.jpg";
import juicebar from "../../Assests/Juicebar.jpg";
import badmintonhub from "../../Assests/badmintonhub.jpg";
import Navbar from "../../Components/Navbar/Navbar";
import Fotter from "../../Components/Fotter/Fotter";
import Facilityvideo from "../../Assests/bgvideo1.mp4";

function Facility() {
    return (
        <div>
            <Navbar />
            <div className="video-background">
                <video autoPlay loop muted>
                    <source src={Facilityvideo} type="video/mp4" />
                </video>
            </div>
            <div className="container">
                <h1>
                    <u>FACILITIES</u>
                </h1>
            </div>
            <br />
            <br />
            <div class="image-container">
                <img src={badmintonhub} alt="uncharted" id="image" />
                <div class="description" id="gameDescription">
                    <h3 className="ftopic">C & S Badminton Hub</h3>
                    <p className="facility-description">
                        At the C & S Badminton Equipment Shop, we pride
                        ourselves on being your one-stop destination for all
                        badminton-related needs. Our shop features an extensive
                        range of top-tier badminton rackets, shuttlecocks,
                        shoes, and apparel from leading brands. We also carry
                        essential accessories such as grips, strings, and bags.
                        Whether you're a beginner looking for your first racket
                        or a seasoned player seeking the latest gear, our expert
                        staff is on hand to provide personalized advice and
                        recommendations. Our goal is to equip you with the best
                        tools to enhance your performance on the court.
                    </p>
                </div>
            </div>
            <br />
            <div class="image-container">
                <img src={restaurant} alt="uncharted" id="image" />
                <div class="description" id="gameDescription">
                    <h3 className="ftopic">C&S Family Restaurant</h3>
                    <p className="facility-description">
                        Welcome to the C & S Family Restaurant, where we serve a
                        delightful array of dishes that cater to every palate.
                        Our menu is thoughtfully curated to include a variety of
                        cuisines, from local favorites to international
                        delights, ensuring there's something for everyone.
                        Whether you're in the mood for a hearty meal after a day
                        of badminton or looking for a place to enjoy a family
                        dinner, our restaurant provides a cozy and welcoming
                        environment. We take pride in using fresh ingredients
                        and delivering exceptional service, making every dining
                        experience memorable. Join us for a meal, and let us
                        treat you to the finest in food and hospitality.
                    </p>
                </div>
            </div>
            <br />
            <div class="image-container" style={{ marginBottom: "120px" }}>
                <img src={juicebar} alt="uncharted" id="image" />
                <div class="description" id="gameDescription">
                    <h3 className="ftopic">C&S Juice Bar</h3>
                    <p className="facility-description">
                        The C & S Juice Bar is your go-to spot for refreshing
                        and nutritious beverages. After an intense game or
                        workout, refuel with our selection of freshly squeezed
                        juices, smoothies, and energy drinks. Our menu is
                        crafted with health in mind, offering a variety of
                        options made from the freshest fruits and vegetables. We
                        also serve a range of light snacks, including protein
                        bars and healthy treats, perfect for keeping your energy
                        levels up. The C & S Juice Bar is more than just a place
                        to grab a drink—it's a destination for those who value
                        wellness and quality.
                    </p>
                </div>
            </div>
            <Fotter />
        </div>
    );
}

export default Facility;
