import { useEffect } from "react";
import "./App.css";
import HomePage from "./Views/HomePage/HomePage";

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
        <Route index element={<HomePage />} />
        {/* <Route path="login" element={<LoginPage />} /> */}

      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;