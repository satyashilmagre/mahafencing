import { Carousel } from 'react-bootstrap';
import React from 'react';

const Hero = () => {
    return (
        <div>
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

            <div className="col-md-6">
                        <div className="ms-panel  m-5">
                            <div className="ms-panel-header">
                                <h6>Annual general meeting of MFA at Kolhapur</h6>
                            </div>
                            <div className="ms-panel-body  ">
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
                                        <img className="d-block w-100" src={"http://mahafencing.in/assets/inaugration/b%20(4).jpeg"} alt="Third slide" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={"http://mahafencing.in/assets/inaugration/b%20(5).jpeg"} alt="Third slide" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={"http://mahafencing.in/assets/inaugration/b%20(6).jpeg"} alt="Third slide" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={"http://mahafencing.in/assets/inaugration/b%20(7).jpeg"} alt="Third slide" />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
        </div>
    );
}

export default Hero;
