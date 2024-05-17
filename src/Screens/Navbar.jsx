import React from 'react';
import '../App.css';
import { Carousel } from 'react-bootstrap';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
                <div className="container">

                    {/* Brand */}
                    <a className="navbar-brand a" href="#" target="_blank" style={{ display: 'none' }}>
                        <img src="http://mahafencing.in/assets/img/logo.png" className="img-fluid img-thumbnail" alt="Responsive image" style={{ borderRadius: '120px' }} />
                    </a>

                    {/* Collapse */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Links */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        {/* Left */}
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link waves-effect waves-light" href="http://mahafencing.in/home/">Home
                                    <span className="sr-only">Fencing</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link waves-effect waves-light" href="http://mahafencing.in/home/about">About us</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle waves-effect waves-light" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    History
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                    <a className="dropdown-item waves-effect waves-light" href="http://mahafencing.in/home/fie_history"> Fencing History</a>
                                    <a className="dropdown-item waves-effect waves-light" href="http://mahafencing.in/home/fai_history">FAI History</a>
                                    <a className="dropdown-item waves-effect waves-light" href="http://mahafencing.in/home/mfa_history">MFA History</a>
                                </div>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle waves-effect waves-light" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Achievements
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
                                    <a className="dropdown-item waves-effect waves-light" href="http://mahafencing.in/home/shivch_player">Shivchhatrapati Awardee</a>
                                    <a className="dropdown-item waves-effect waves-light" href="http://mahafencing.in/home/dist_awardee_player">Dist. Sports Awardee</a>
                                    <a className="dropdown-item waves-effect waves-light" href="http://mahafencing.in/home/national_medalist">National Medalist</a>
                                    <a className="dropdown-item waves-effect waves-light" href="http://mahafencing.in/home/international_medalist">International Medalist</a>
                                    <a className="dropdown-item waves-effect waves-light" href="http://mahafencing.in/home/research">Research</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle waves-effect waves-light" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Our Team
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                    <a className="dropdown-item waves-effect waves-light" href="http://mahafencing.in/home/office_bearer">office bearers</a>
                                    <a className="dropdown-item waves-effect waves-light" href="http://mahafencing.in/home/sub_commitee">Sub Committee</a>
                                    <a className="dropdown-item waves-effect waves-light" href="http://mahafencing.in/home/nis_coaches">NIS Coaches</a>
                                    <a className="dropdown-item waves-effect waves-light" href="http://mahafencing.in/assets/QUALIFIED REFEREE.pdf" target="_blank">Qualified Referee</a>
                                    <a className="dropdown-item waves-effect waves-light" href="http://mahafencing.in/home/annual_report/">Annual report</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle waves-effect waves-light" href="#" id="navbarDropdown4" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Results
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown4">
                                    <a className="dropdown-item waves-effect waves-light" href="https://www.fencingindia.org/national-results">National Results</a>
                                    <a className="dropdown-item waves-effect waves-light" href="https://fie.org/competitions">International Results</a>
                                </div>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link waves-effect waves-light" href="http://mahafencing.in/home/gallery">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link waves-effect waves-light" href="http://mahafencing.in/home/contact">Contact us</a>
                            </li>


                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle btn btn-info waves-effect waves-light" href="#" id="navbarDropdown5" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Register
                                </a>

                                <div className="dropdown-menu" aria-labelledby="navbarDropdown5">
                                    <a className="dropdown-item waves-effect waves-light" href="http://registration.mahafencing.in/">New Registration</a>
                                    <a className="dropdown-item" href="http://registration.mahafencing.in/correction/corrections">Correction</a>
                                    <a className="dropdown-item" href="http://registration.mahafencing.in/home/download">Download</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn btn-primary waves-effect waves-light" href="http://mahafencing.in/login">Login</a>
                            </li>
                        </ul>

                        {/* Right */}
                        <ul className="navbar-nav nav-flex-icons">
                            <li className="nav-item">
                                <a href="#" className="nav-link" target="_blank">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link" target="_blank">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>

                        </ul>

                    </div>

                </div>
            </nav>


            <div className='row'>
                <div className="col-md-12">
                    <div className="ms-panel">
                        {/* <div className="ms-panel-header">
                            <h6>Slider Images</h6>
                        </div> */}
                        <div className="ms-panel-body">
                            <Carousel className="ms-image-slider" controls={false}>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={"http://mahafencing.in/assets/img/banner/MFA%20(1).jpg"} alt="First slide" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={"http://mahafencing.in/assets/img/banner/FAI%20(1).jpg"} alt="Second slide" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={"http://mahafencing.in/assets/img/banner/IFF.jpg"} alt="Third slide" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={"http://mahafencing.in/assets/img/banner/Fencing%20Association.jpg"} alt="Third slide" />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
