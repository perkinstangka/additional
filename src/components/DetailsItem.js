import React from "react";
import { Link } from 'react-router-dom';

const DetailsItems = (props) => {
    // const imageUrl = "https://static.tvmaze.com/uploads/images/original_untouched";

    return(
        <div className="col mb-5">
            <div className="card h-100">
                {/* <img  className="card-img-top text-center" src={imageUrl+props.detail.show} alt={props.detail.show.name} /> */}
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{props.detail.show.name}</h5>
                            {props.detail.show.language}
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <Link className="btn btn-outline-dark mt-auto" to={`/detail/${props.detail.show.id}`}>View Details</Link></div>
                    </div>
                </div>
            </div>
    );
}

export default DetailsItems;