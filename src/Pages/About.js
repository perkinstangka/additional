import React from "react";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";

const About = () => {
    return(
        <>
        <Navbar2 />
        <div className="container my-5 latar2 text-muted ">
            <div>
                <h5>About</h5>
                <p className="lead" ><strong >Nama  : Perkins Migellio tangka</strong>  </p>
                <p className="lead" ><strong>NIM   : 105011910038 </strong> </p>
                <p className="lead" ><strong>Prodi : Sistem Informasi </strong> </p>
            </div>
            <div className="my-5">
                <h5>Keterangan</h5>
                <p>*Belum Bisa <mark > Get </mark> Gambar</p>
                <p>*<mark >View-Detail</mark> Belum Sempurna</p>
                <p>*Menggunakan API <mark>TVMAZE</mark></p>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default About;