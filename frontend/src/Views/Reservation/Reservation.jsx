import "./Reservation.css";
import bgvideo2 from "../../Assests/bgvideo.mp4";

function Reservation() {
    return (
        <div>
            <div class="center-box">
                <div class="container">
                    <video
                        src={bgvideo2}
                        id="booking-bgvideo"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                    <div class="row">
                        <div class="booking-form">
                            <div class="form-header">
                                <h1>Make your reservation</h1>
                            </div>
                            <form>
                                <div class="form-group">
                                    {" "}
                                    <input
                                        class="form-control"
                                        type="text"
                                        placeholder="Country, ZIP, city..."
                                    />{" "}
                                    <span class="form-label">Destination</span>{" "}
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            {" "}
                                            <input
                                                class="form-control"
                                                type="date"
                                                required
                                            />{" "}
                                            <span class="form-label">
                                                Check In
                                            </span>{" "}
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            {" "}
                                            <input
                                                class="form-control"
                                                type="date"
                                                required
                                            />{" "}
                                            <span class="form-label">
                                                Check out
                                            </span>{" "}
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        {" "}
                                        <input
                                            class="form-control"
                                            type="email"
                                            placeholder="Enter your Email"
                                        />{" "}
                                        <span class="form-label">Email</span>{" "}
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        {" "}
                                        <input
                                            class="form-control"
                                            type="tel"
                                            placeholder="Enter you Phone"
                                        />{" "}
                                        <span class="form-label">Phone</span>{" "}
                                    </div>
                                </div>

                                <div class="form-btn">
                                    {" "}
                                    <button class="submit-btn">
                                        Book Now
                                    </button>{" "}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reservation;
