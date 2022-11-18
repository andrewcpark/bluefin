import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import Home from "./routes/Home";
import Navbar from "./components/navbar/NavBar";
import Listings from "./routes/Listings";
import Footer from "./components/footer/Footer";

function App() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState(2);

  const length = listings.length;
  console.log(length + " this is the length");

  const host = "zillow-com1.p.rapidapi.com";
  const key = process.env.REACT_APP_API_BLUEFIN_ZILLOW_API_KEY;

  const fetchListings = (query) => {
    setLoading(true);
    var options = {
      method: "GET",
      url: `https://zillow-com1.p.rapidapi.com/propertyExtendedSearch?location=${query}&home_type=Houses`,
      headers: {
        "x-rapidapi-host": host,
        "x-rapidapi-key": key,
      },
    };

    axios
      .request(options)
      .then((response) => {
        let props = response.data.props;

        props = props.sort((a, b) => {
          if (sortOrder === 1) {
            return a.price > b.price ? 1 : -1;
          } else {
            return a.price < b.price ? 1 : -1;
          }
        });
        setListings(props);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          fetchListings={fetchListings}
          listings={listings}
          loading={loading}
        />
      ),
    },
    {
      path: "/listings",
      element: (
        <Listings
          fetchListings={fetchListings}
          listings={listings}
          loading={loading}
        />
      ),
    },
  ]);

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
