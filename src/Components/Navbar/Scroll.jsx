import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useScrollToContact() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#contact-section") {
            const element = document.getElementById("contact-section");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);
}

export default useScrollToContact;
