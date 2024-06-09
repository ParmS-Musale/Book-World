import React from "react";
import Navbar from "../components/Navbar"; // Correct the path
import Banner from "../components/Banner"; // Correct the path
import Footer from "../components/Footer"; // Correct the path
import FreeBook from "../components/FreeBook"; // Correct the path

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <FreeBook />
      <Footer />
    </>
  );
}

export default Home;
