import { useState } from 'react';
import './Css/NavigationalButtons.css'

const NavigationalButtons = ({ButtonIcons, lightModeOn, toggleLightMode}) => {
    //console.log(ButtonIcons)
    const [showToolTip, setShowToolTip] = useState(null)
    const [showNavBar, setshowNavBar] = useState(false)

    const jumpTo = (sectionId)=>{
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }

  return (
    <div className='Nav'>
        <div className='NavigationContents'>
            {showNavBar ? 
                <img className="NavButtons" src={ButtonIcons[1].img} onClick={()=>{setshowNavBar(false)}}></img>
                :
                <img className="NavButtons" src={ButtonIcons[0].img} onClick={()=>{setshowNavBar(true)}}></img>
            }
            {ButtonIcons.map((el, index)=>(
                <div key={index} onMouseEnter={()=>{setShowToolTip(index)}} onMouseLeave={()=>{setShowToolTip(null)}}>
                    {index === 2 ?
                        lightModeOn ? 
                            <img className={showNavBar ? "Buttons": "hideButts"} src={ButtonIcons[3].img} onClick={()=>{toggleLightMode()}}></img>
                            : 
                            <img className={showNavBar ? "Buttons": "hideButts"} src={ButtonIcons[2].img} onClick={()=>{toggleLightMode()}}></img>
                        :
                        null
                    }
                    {index > 3  ? 
                        <img className={showNavBar ? "Buttons": "hideButts"} src={el.img} onClick={()=>{jumpTo(el.name)}}/>
                        :
                        null
                    }
                    {showNavBar && showToolTip == index && index !=0 ? <p className='NavButtonTooltip'>{el.name}</p> : null}
                </div>
            ))}

        </div>
    </div>
  )
}

export default NavigationalButtons