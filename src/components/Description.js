import React from 'react';
import { Link } from 'react-router-dom';

const Description = (props) => {
//   const imageUrl = "https://www.thedetaildb.org/t/p/w600_and_h900_bestv2";

  return(
    <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
                    <div className="small mb-1">Release Date: {props.detail.show.premiered}</div> 
                    <h1 className="display-5 fw-bolder">{props.detail.show.name}</h1>
                    <div className="fs-5 mb-5">
                        <span>Status: {props.detail.show.status}</span>
                    </div>
                    <p className="lead"> {props.detail.show.summary} </p>
                    <div className="d-flex">
                        <Link className="btn btn-outline-dark flex-shrink-0" to="/">
                            Back to Home
                        </Link>
                    </div>
                    <br /><br /><br /><br /><br /><br /><br />
        </div>
    </section>
  );
}

export default Description;
