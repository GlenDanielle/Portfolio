import React, { useState, useEffect } from 'react';
import './Css/ProjectCarousel.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import GoToLink from './GoToLink';

const ProjectCarousel = ({ ProjectImages}) => {
    const [centerSlidePercentage, setCenterSlidePercentage] = useState(getCenterSlidePercentage(window.innerWidth));

    useEffect(() => {
        const handleResize = () => {
            setCenterSlidePercentage(getCenterSlidePercentage(window.innerWidth));
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function getCenterSlidePercentage(width) {
        if (width <= 425) {
            return 80; // 90% for mobile devices
        } else if (width <= 768) {
            return 70; // 70% for tablets
        }
        else if (width <= 1024) {
            return 62; 
        }
        else if (width <= 1440) {
            return 60; 
        }
        else{
            return 30; 
        }
    }

    return (
        <div className='projectCarousel'>
            <Carousel
                emulateTouch={true}
                showArrows={false}
                showIndicators={false}
                showThumbs={false}
                showStatus={false}
                centerMode={true}
                centerSlidePercentage={centerSlidePercentage}
                infiniteLoop={false}
            >
                {ProjectImages.map((elem, index) => (
                    <div className='CarouselOutline' key={index}>
                        <img className="CarouselImg" src={elem.image} alt={elem.name} />
                        <div className="Card">
                            <p className='Title'>{elem.name}</p>
                            <p className='Desc'>{elem.desc}</p>
                            <div className="ButtonPlacement">
                                <button className="Button" onClick={() => { GoToLink(elem.link) }}>
                                    Check Out
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default ProjectCarousel;
