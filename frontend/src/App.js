import { useEffect } from "react";
import "./App.css";
import Home from "./Views/Home/Home";
import Shop from "./Views/Shop/Shop";
import AboutUs from './Views/AboutUs/AboutUs';

import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
  useLocation,
} from "react-router-dom";
import CourtReservation from "./Views/Reservation/CourtReservation";
import GymReservation from "./Views/Reservation/GymReservation";



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
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="courtreservation" element={<CourtReservation />} />
        <Route path="gymreservation" element={<GymReservation />} />

      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;