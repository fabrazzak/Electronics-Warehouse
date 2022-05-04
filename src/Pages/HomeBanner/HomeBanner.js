import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../images/banner/banner1.png'
import banner2 from '../images/banner/banner2.png'

const HomeBanner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                   
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                   
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />

                    
                </Carousel.Item>
            </Carousel> 
        </div>
    );
};

export default HomeBanner;