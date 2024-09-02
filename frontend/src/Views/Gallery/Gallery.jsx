import React, { useState } from "react";
import "./Gallery.css";
import Navbar from "../../Components/Navbar/Navbar";
import g1 from "../../Assests/S1.jpg";
import g2 from "../../Assests/g2.jpg";
import g3 from "../../Assests/g3.jpg";
import g4 from "../../Assests/g4.jpg";
import g5 from "../../Assests/g5.jpg";
import g6 from "../../Assests/g6.jpg";
import g7 from "../../Assests/g7.jpg";
import g7a from "../../Assests/S6.jpg";
import g8 from "../../Assests/g8.jpg";
import g9 from "../../Assests/g9.jpg";
import g10 from "../../Assests/g10.jpg";
import g10a from "../../Assests/g10a.jpg";
import g11 from "../../Assests/g11.jpg";
import g12 from "../../Assests/g12.jpg";
import g13 from "../../Assests/g13.jpg";
import g14 from "../../Assests/g14.jpg";

function Gallery() {
    const [modalImage, setModalImage] = useState(null);

    const openModal = (imageSrc) => {
        setModalImage(imageSrc);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <div className="gback">
            <Navbar />
            <div
                className={`modal ${modalImage ? "open" : ""}`}
                onClick={closeModal}
            >
                <span className="close">&times;</span>
                <img className="modal-content" src={modalImage} alt="" />
            </div>

            <div className="container">
                <h1>
                    <u>GALLERY</u>
                </h1>
            </div>
            <div className="gallery-image">
                <div className="img-box" onClick={() => openModal(g1)}>
                    <img src={g1} alt="" />
                    <div className="transparent-box">
                        <div className="caption">
                            <p>Pre-Construction</p>
                        </div>
                    </div>
                </div>
                <div className="img-box" onClick={() => openModal(g2)}>
                    <img src={g2} alt="" />
                    <div className="transparent-box">
                        <div className="caption">
                            <p>Pre-Construction</p>
                        </div>
                    </div>
                </div>
                <div className="img-box" onClick={() => openModal(g3)}>
                    <img src={g3} alt="" />
                    <div className="transparent-box">
                        <div className="caption">
                            <p>Pre-Construction</p>
                        </div>
                    </div>
                </div>
                <div className="img-box" onClick={() => openModal(g4)}>
                    <img src={g4} alt="" />
                    <div className="transparent-box">
                        <div className="caption">
                            <p>During the Construction</p>
                        </div>
                    </div>
                </div>
                <div className="img-box" onClick={() => openModal(g5)}>
                    <img src={g5} alt="" />
                    <div className="transparent-box">
                        <div className="caption">
                            <p>During the Construction</p>
                        </div>
                    </div>
                </div>
                <div className="img-box" onClick={() => openModal(g6)}>
                    <img src={g6} alt="" />
                    <div className="transparent-box">
                        <div className="caption">
                            <p>During the Construction</p>
                        </div>
                    </div>
                </div>
                <div className="img-box" onClick={() => openModal(g7a)}>
                    <img src={g7a} alt="" />
                    <div className="transparent-box">
                        <div className="caption">
                            <p>During the Construction</p>
                        </div>
                    </div>
                </div>
                <div className="img-box" onClick={() => openModal(g7)}>
                    <img src={g7} alt="" />
                    <div className="transparent-box">
                        <div className="caption">
                            <p>Grand Opening</p>
                        </div>
                    </div>
                </div>
                <div className="img-box" onClick={() => openModal(g8)}>
                    <img src={g8} alt="" />
                    <div className="transparent-box">
                        <div className="caption">
                            <p>Grand Opening</p>
                        </div>
                    </div>
                </div>
                <div className="img-box" onClick={() => openModal(g9)}>
                    <img src={g9} alt="" />
                    <div className="transparent-box">
                        <div className="caption">
                            <p>Grand Opening</p>
                        </div>
                    </div>
                </div>
                <div className="img-box" onClick={() => openModal(g10a)}>
                    <img src={g10a} alt="" />
                    <div className="transparent-box">
                        <div className="caption">
                            <p>Grand Opening</p>
                        </div>
                    </div>
                </div>
                <div className="img-box" onClick={() => openModal(g10)}>
                    <img src={g10} alt="" />
                    <div className="transparent-box">
                        <div className="caption">
                            <p>Grand Opening</p>
                        </div>
                    </div>
                </div>
                <div className="img-box" onClick={() => openModal(g11)}>
                    <img src={g11} alt="" />
                    <div className="transparent-box">
                        <div className="caption">
                            <p>Grand Opening</p>
                        </div>
                    </div>
                </div>
                <div className="img-box" onClick={() => openModal(g12)}>
                    <img src={g12} alt="" />
                    <div className="transparent-box">
                        <div className="caption">
                            <p>Grand Opening</p>
                        </div>
                    </div>
                </div>
                <div className="img-box" onClick={() => openModal(g13)}>
                    <img src={g13} alt="" />
                    <div className="transparent-box">
                        <div className="caption">
                            <p>Grand Opening</p>
                        </div>
                    </div>
                </div>
                <div className="img-box" onClick={() => openModal(g14)}>
                    <img src={g14} alt="" />
                    <div className="transparent-box">
                        <div className="caption">
                            <p>Grand Opening</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
