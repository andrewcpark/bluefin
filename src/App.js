import React from "react";
import axios from "axios";
import { useState } from "react";

import NavBar from "./components/navbar/NavBar";
import Hero from "./components/hero/Hero";
import CtaSection from "./components/ctaSection/CtaSection";
import Footer from "./components/footer/Footer";

function App() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState(2);

  const length = listings.length;
  console.log(length + ' this is the length');


  const host = "zillow-com1.p.rapidapi.com";
  const key = "fee072a1a6msh496832e5776cc2dp1e34a7jsn6c609534f78d";

  const fetchListings = (query) => {
    setLoading(true);
    var options = {
      method: "GET",
      url: `https://zillow-com1.p.rapidapi.com/propertyExtendedSearch?location=${query}&home_type=Houses`,
      // params: {location: 'plano, tx', page: '1', home_type: 'Houses'},
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
          //  console.log('A', a);
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

  return (
    <>
      <NavBar />
      <Hero fetchListings={fetchListings} listings={listings} loading={loading}/>
      <CtaSection />
      <Footer />
    </>
  );
}

export default App;
