import React from "react";
import "./AboutUs.css";
import Navbar from "../../Components/Navbar/Navbar";
import Fotter from "../../Components/Fotter/Fotter";
import manoharaImage from "../../Assests/Dada.png";
import jayaruwanImage from "../../Assests/Uncle.png";
import trimavithanaImage from "../../Assests/Aunty.png";
import manmithaImage from "../../Assests/MAlli.png";
import shanukaImage from "../../Assests/Shanuka.png";
import aboutVideo from "../../Assests/about.mp4";

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <div className="video-background">
                <video autoPlay loop muted>
                    <source src={aboutVideo} type="video/mp4" />
                </video>
            </div>
            <div className="content-container">
                <div className="container">
                    <h1>
                        <u>OUR DIRECTER BOARD</u>
                    </h1>
                </div>

                <div className="team-container">
                    <div className="box">
                        <div className="imgBx">
                            <img
                                src={manoharaImage}
                                alt="Director : Mr. Manohara"
                            />
                        </div>
                        <div className="content">
                            <h2>
                                M K A Manohara
                                <br />
                                <span>
                                    Director
                                    <br />
                                    📱{" "}
                                    <a href="tel:+94773088508">
                                        +94 77 308 8508
                                    </a>
                                    <br />
                                    📧{" "}
                                    <a href="mailto:ajithmkmanohara@gmail.com">
                                        ajithmkmanohara@gmail.com
                                    </a>
                                    <br />
                                    📍 No.3, 1st lane, Maitipe, Galle.
                                </span>
                            </h2>
                        </div>
                    </div>

                    <div className="box">
                        <div className="imgBx">
                            <img
                                src={jayaruwanImage}
                                alt="Director : Mr. Jayaruwan"
                            />
                        </div>
                        <div className="content">
                            <h2>
                                D P I Jayaruwan
                                <br />
                                <span>
                                    Director
                                    <br />
                                    📱{" "}
                                    <a href="tel:+94772386944">
                                        +94 77 238 6944
                                    </a>
                                    <br />
                                    📧{" "}
                                    <a href="mailto:jayaruwan1978@gmail.com">
                                        jayaruwan1978@gmail.com
                                    </a>
                                    <br />
                                    📍 No.68/1G, Mahamudali mawatha, Galle.
                                </span>
                            </h2>
                        </div>
                    </div>

                    <div className="box">
                        <div className="imgBx">
                            <img
                                src={trimavithanaImage}
                                alt="Director : Mr. Trimavithana"
                            />
                        </div>
                        <div className="content">
                            <h2>
                                C W Trimavithana
                                <br />
                                <span>
                                    Director
                                    <br />
                                    📱{" "}
                                    <a href="tel:+94775131830">
                                        +94 77 513 1830
                                    </a>
                                    <br />
                                    📧{" "}
                                    <a href="mailto:ctrimavithana1981@gmail.com">
                                        ctrimavithana1981@gmail.com
                                    </a>
                                    <br />
                                    📍 No.68/1G, Mahamudali Mawatha, Galle.
                                </span>
                            </h2>
                        </div>
                    </div>

                    <div className="box">
                        <div className="imgBx">
                            <img src={manmithaImage} alt="Mr. Manmitha" />
                        </div>
                        <div className="content">
                            <h2>
                                M K C Manmitha
                                <br />
                                <span>
                                    Director
                                    <br />
                                    📱{" "}
                                    <a href="tel:+94764160217">
                                        +94 76 416 0217
                                    </a>
                                    <br />
                                    📧{" "}
                                    <a href="mailto:cmanmitha09@gmail.com">
                                        cmanmitha09@gmail.com
                                    </a>
                                    <br />
                                    📍 No.3, 1st Lane, Maitipe, Galle.
                                </span>
                            </h2>
                        </div>
                    </div>

                    <div className="box">
                        <div className="imgBx">
                            <img src={shanukaImage} alt="Mr. Himsara" />
                        </div>
                        <div className="content">
                            <h2>
                                M K S Himsara
                                <br />
                                <span>
                                    Director
                                    <br />
                                    📱{" "}
                                    <a href="tel:+94769752104">
                                        +94 76 975 2104
                                    </a>
                                    <br />
                                    📧{" "}
                                    <a href="mailto:shanukahimsara123@gmail.com">
                                        shanukahimsara123@gmail.com
                                    </a>
                                    <br />
                                    📍 No.3, 1st Lane, Maitipe, Galle.
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <Fotter />
        </div>
    );
};

export default AboutUs;
