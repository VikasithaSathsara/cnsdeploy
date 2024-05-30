import { useEffect } from "react";
import "./App.css";
import Home from "./Views/Home/Home";
import Shop from "./Views/Shop/Shop";
import Reservation from "./Views/Reservation/Reservation";

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
        <Route path="shop" element={<Shop />} />
        <Route path="reservation" element={<Reservation />} />

      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;