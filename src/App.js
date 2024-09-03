import { useEffect } from "react";
import "./App.css";
import AboutUs from "./Views/AboutUs/AboutUs";
import Facility from "./Views/Facility/Facility";
import Gallery from "./Views/Gallery/Gallery";
import Home from "./Views/Home/Home";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Fotter from "./Components/Fotter/Fotter";
import Navbar from "./Components/Navbar/Navbar";
import ContactUs from "./Views/ContactUs/ContactUs";

function RootLayout() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Fotter />
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="facility" element={<Facility />} />
        <Route path="contact" element={<ContactUs />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
