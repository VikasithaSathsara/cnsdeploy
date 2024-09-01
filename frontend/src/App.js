import { useEffect } from "react";
import "./App.css";
import Home from "./Views/Home/Home";
import Gallery from "./Views/Gallery/Gallery";
import AboutUs from './Views/AboutUs/AboutUs';
import Facility from "./Views/Facility/Facility";

import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
  useLocation,
} from "react-router-dom";



function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
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
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;