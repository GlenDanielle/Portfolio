import './Css/ProjectCarousel.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import GoToLink from './GoToLink';

const ProjectCarousel = ({ProjectImages, lightModeOn}) => {
    //console.log(ProjectImages)
  return (
    <div className='projectCarousel'>
        <Carousel emulateTouch={true} showArrows={false} showIndicators={false} showThumbs={false} showStatus={false}>
            {ProjectImages.map((elem, index)=>(
                <div className={lightModeOn ? 'CarouselOutlineLightMode' : 'CarouselOutline'} key={index}>
        
                    <img className="CarouselImg" src={elem.image} alt={elem.name} />
                    
                    <div className="Card">
                        <p className='Title'>{elem.name}</p>
                        <p className='Desc'>{elem.desc}</p>
                        <div className="ButtonPlacement">
                            <button className="Button" onClick={()=>{GoToLink(elem.link)}}>
                                Check Out
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    </div>
  )
}

export default ProjectCarousel