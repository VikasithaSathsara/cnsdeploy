import React, { useState } from "react";
import Fotter from "../../Components/Fotter/Fotter";
import Navbar from "../../Components/Navbar/Navbar";
import img1 from "../../Assests/court.jpg";
import img2 from "../../Assests/gym_img1.jpg";
import img3 from "../../Assests/Shop.jpg";
import bgvideo from "../../Assests/mainBgVideo.mov";
import useScrollToContact from "../../Components/Navbar/Scroll";
import "./Home.css";

function Home() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [popupVisible, setPopupVisible] = useState(false);

    useScrollToContact();

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        if (validateEmail(value)) {
            setEmailError("");
        } else {
            setEmailError("Invalid email address!");
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(email)) {
            setPopupVisible(true);
            setTimeout(() => {
                setPopupVisible(false);
            }, 2000); // Hide popup after 2 seconds
        } else {
            setEmailError("Invalid email address!");
        }
    };

    return (
        <div>
            <Navbar />
            <section>
                {/* <img src={img1} id="nitendo" alt="Nintendo Switch" /> */}
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

            <section id="contact-section">
                <h2>Contact Us</h2>
                <div className="contact-details">
                    <p>Email: cnsb233@gmail.com</p>
                    <p>Telephone: +94-777-983264</p>
                    <p>
                        Address: No:38/2, Godaduwa Rd, Kapuhempola, Akmeemana,
                        Galle.
                    </p>
                </div>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31739.826663287346!2d80.2223134347656!3d6.066041600000011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae171001b952ce9%3A0xcce4b3f47bbdf7e3!2sC%20%26%20S%20Badminton%20Complex%20(PVT)%20Ltd!5e0!3m2!1sen!2slk!4v1717599934147!5m2!1sen!2slk"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title="C&S Badminton Complex Map"
                    ></iframe>
                </div>
                <form className="contact-form" onSubmit={handleFormSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Your Name (John Doe)"
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        placeholder="Your Email (example@domain.com)"
                    />
                    {emailError && <div className="error">{emailError}</div>}

                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Type your message here"
                    ></textarea>

                    <button type="submit">Send</button>
                </form>
                {popupVisible && <div className="popup">Message sent!</div>}
            </section>

            <Fotter />
        </div>
    );
}

export default Home;
