import { useEffect } from "react";
import "./App.css";
import AboutUs from "./Views/AboutUs/AboutUs";
import Facility from "./Views/Facility/Facility";
import Gallery from "./Views/Gallery/Gallery";
import Home from "./Views/Home/Home";
import {
  HashRouter as Router,  // Use HashRouter for GitHub Pages
  Routes,
  Route,
  useLocation,
  Outlet,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ContactUs from "./Views/ContactUs/ContactUs";

// Root layout with Navbar and ScrollToTop functionality
function RootLayout() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />  {/* This renders the child components */}
    </>
  );
}

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// The App component with HashRouter
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="facility" element={<Facility />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
