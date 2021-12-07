import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
    return(

    <nav className="container navbar navbar-expand-lg navbar-light  rounded my-5 shadow d-flex">

        <div className="container d-flex">

            <div className="dropdown p-2 flex-fill text-black-50">
                <h5>
                    <Link className="navbar-brand  dropdown-toggle text-secondary" to="/">ALL TYPES</Link>
                </h5>
            </div>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>


            <div className=" p-2 flex-fill text-secondary text-center">
                <h6>
                    <Link className="navbar-brand text-secondary " to="/"> Popular Product</Link>
                    <Link className="navbar-brand text-secondary m-5" to="/">Low Price</Link>
                    <Link className="navbar-brand text-secondary " to="/">High Price</Link>
                </h6>
            </div>

            <div className="dropdown p-2 flex-fill text-secondary text-end">
                <h5>
                    <Link className="navbar-brand  dropdown-toggle text-black-50 " to="/">PRICE</Link>
                </h5>
            </div>
        </div>

    </nav>

    );

}

export default Nav;