import React from "react";
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Details from "../components/Details";
import Footer from "../components/Footer";

const Home = () => {
    return(
      <>
        <Navbar />
        <Header />
        <Details />
        <Footer />
      </>
    );
  }

export default Home;