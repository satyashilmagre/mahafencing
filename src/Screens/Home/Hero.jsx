import { Carousel } from 'react-bootstrap';
import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className='row'>
                <div className="col-md-12">
                    <div className="ms-panel">
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

            <div className="col-md-6">
                <div className="ms-panel   m-5">
                    <div className="ms-panel-header">
                        <h6>Annual general meeting of MFA at Kolhapur</h6>
                    </div>
                    <div className="ms-panel-body">
                        <Carousel className="ms-dotted-indicator-slider">
                            <Carousel.Item>
                                <img className="d-block w-100" src={"http://mahafencing.in/assets/inaugration/b%20(1).jpeg"} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={"http://mahafencing.in/assets/inaugration/b%20(2).jpeg"} alt="Second slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={"http://mahafencing.in/assets/inaugration/b%20(3).jpeg"} alt="Third slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={"http://mahafencing.in/assets/inaugration/b%20(4).jpeg"} alt="four slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={"http://mahafencing.in/assets/inaugration/b%20(5).jpeg"} alt="five slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={"http://mahafencing.in/assets/inaugration/b%20(6).jpeg"} alt="six slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={"http://mahafencing.in/assets/inaugration/b%20(7).jpeg"} alt="seven slide" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>


            <div className='container'>
                <div className='row'>
                <h2 className='text-center m-3'>OUR INSPIRATION</h2>

                    <div className='col-md-12 d-flex justify-content-between '>
                        <div className='text-center p-2'>
                            <img className='img-fluid' src={"http://mahafencing.in/assets/img/satej_patil.png"} />
                            <h4 className='mt-2'>Mr. SATEJ(Bunty) PATIL</h4>
                            <h4>President FAI & MFA</h4>
                            <p>Ex. State Home Minister,<br/>
                                Govt. of Maharashtra</p>
                        </div>
                        <div className='text-center p-2'>
                            <img src={"http://mahafencing.in/assets/img/rajiv.png"} />
                            <h4 className='mt-2'>Mr.RAJEEV MEHATA</h4>
                            <p>Secretory <br/>
                                Fencing Association Of India</p>
                        </div>
                        <div className='text-center p-2'>
                            <img className='img-fluid' src={"http://mahafencing.in/assets/img/bashir.png"} />
                            <h4 className='mt-2'>Mr.BASHIR AHMAD</h4>
                            <p>Treasurer <br/>
                                Fencing Association of India</p>
                        </div>
                        <div className='text-center p-2'>
                            <img className='img-fluid' src={"http://mahafencing.in/assets/img/ashok_dudhare.png"} />
                            <h4 className='mt-2'>Mr.ASHOK DUDHARE </h4>
                            <p>Advisor<br/>
                                Maharashtra Fencing Association
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Hero;
