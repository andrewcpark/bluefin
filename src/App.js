import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home";
import Navbar from "./components/navbar/NavBar";
import Listings from "./routes/Listings";


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/listings", element: <Listings /> },
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
