import React from "react";
import { Link } from 'react-router-dom';
import sofa from '../Image/sofa2.jpg'
import sofaa from '../Image/sofa3.jpg'
import sofaaa from '../Image/sofa4.jpg'

const Details = () => {
    return (
        <div className="container">
            <div className="row">

                {/* card 1 */}
                <div className="col-lg-4  ">
                    <div className="Rounded my-5 shadow">
                        <div className="d-flex">

                            <div className="p-2 flex-fill opacity-50 m-3">
                                <h5><span class="badge bg-secondary text-dark-50">NEW</span></h5>
                            </div>

                            <div className="dropdown p-2 flex-fill text-secondary text-end m-3">
                                <Link className="navbar-brand text-secondary " to="/"> <i class="fa fa-heart-o"></i></Link>
                                <Link className="navbar-brand text-secondary m-2" to="/"><i class="fa fa-list"></i></Link>
                            </div>

                        </div>

                        <div className="text-center">
                            <img src={sofaa} alt="sofa"/>
                            <h5 className="text-secondary">Wooden Chair</h5>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="m-4 text-center">
                                    <span><i class="fa fa-star-o"></i></span>
                                    <span><i class="fa fa-star-o"></i></span>
                                    <span><i class="fa fa-star-o"></i></span>
                                    <span><i class="fa fa-star-o"></i></span>
                                    <span><i class="fa fa-star-o"></i></span>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="text-center m-3">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Rp 12.000" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <span class="input-group-text" id="basic-addon2"><i className=" fa fa-shopping-cart"></i></span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                {/* card 2 */}
                <div className="col-lg-4 ">
                <div className="Rounded my-5 shadow">
                        <div className="d-flex">

                            <div className="p-2 flex-fill opacity-50 m-3">
                                <h5><span class="badge bg-secondary text-dark-50">NEW</span></h5>
                            </div>

                            <div className="dropdown p-2 flex-fill text-secondary text-end m-3">
                                <Link className="navbar-brand text-secondary " to="/"> <i class="fa fa-heart-o"></i></Link>
                                <Link className="navbar-brand text-secondary m-2" to="/"><i class="fa fa-list"></i></Link>
                            </div>

                        </div>

                        <div className="text-center">
                            <img src={sofaaa} alt="sofa"/>
                            <h5 className="text-secondary">Wooden Chair</h5>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="m-4 text-center">
                                    <span><i class="fa fa-star-o"></i></span>
                                    <span><i class="fa fa-star-o"></i></span>
                                    <span><i class="fa fa-star-o"></i></span>
                                    <span><i class="fa fa-star-o"></i></span>
                                    <span><i class="fa fa-star-o"></i></span>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="text-center m-3">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Rp 12.000" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <span class="input-group-text" id="basic-addon2"><i className=" fa fa-shopping-cart"></i></span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                {/* card 3 */}
                <div className="col-lg-4  ">
                <div className="Rounded my-5 shadow">
                        <div className="d-flex">

                            <div className="p-2 flex-fill opacity-50 m-3">
                                <h5><span class="badge bg-secondary text-dark-50">NEW</span></h5>
                            </div>

                            <div className="dropdown p-2 flex-fill text-secondary text-end m-3">
                                <Link className="navbar-brand text-secondary " to="/"> <i class="fa fa-heart-o"></i></Link>
                                <Link className="navbar-brand text-secondary m-2" to="/"><i class="fa fa-list"></i></Link>
                            </div>

                        </div>

                        <div className="text-center">
                            <img src={sofa} alt="sofa"/>
                            <h5 className="text-secondary">Wooden Chair</h5>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="m-4 text-center">
                                    <span><i class="fa fa-star-o"></i></span>
                                    <span><i class="fa fa-star-o"></i></span>
                                    <span><i class="fa fa-star-o"></i></span>
                                    <span><i class="fa fa-star-o"></i></span>
                                    <span><i class="fa fa-star-o"></i></span>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="text-center m-3">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Rp 12.000" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <span class="input-group-text" id="basic-addon2"><i className=" fa fa-shopping-cart"></i></span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Details;