import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Description from "../components/Description";

const Details = () => {
    const [details, setDetails] = useState([]);
    // const { id } = useParams();
    useEffect(() => {


    fetch(`https://api.tvmaze.com/search/shows?q=avengers`)
    .then(response => response.json())
    .then(data => setDetails(data));
        // eslint-disable-next-line
    }, []);

    return(

        <>

        <Navbar />
        { details.map(detail => <Description key={detail.id} detail={detail} /> ) }
        <Footer />
        </>

    );
}

export default Details;