import { useState } from 'react';
import './Css/NavigationalButtons.css'

const NavigationalButtons = ({ButtonIcons, lightModeOn, toggleLightMode}) => {
    //console.log(ButtonIcons)
    const [showToolTip, setShowToolTip] = useState(null)

    const jumpTo = (sectionId)=>{
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }

  return (
    <div className='Nav'>
        <div className='NavigationContents'>
            {ButtonIcons.map((el, index)=>(
                <div key={index} onMouseEnter={()=>{setShowToolTip(index)}} onMouseLeave={()=>{setShowToolTip(null)}}>
                    {index === 0 ?
                        lightModeOn ? 
                            <img className="Buttons" src={ButtonIcons[1].img} onClick={()=>{toggleLightMode()}}></img>
                            : 
                            <img className="Buttons" src={ButtonIcons[0].img} onClick={()=>{toggleLightMode()}}></img>
                        :
                        null
                    }
                    {index > 1  ? 
                        <img className="Buttons" src={el.img} onClick={()=>{jumpTo(el.name)}}/>
                        :
                        null
                    }
                    {index === 0 ?
                        showToolTip === index ?
                                lightModeOn ?
                                    <p className='NavButtonTooltip'>{ButtonIcons[1].name}</p> 
                                : 
                                    <p className='NavButtonTooltip'>{ButtonIcons[0].name}</p>
                            :
                            null
                        :
                        null 
                    }
                    {showToolTip === index && index != 0 ? <p className='NavButtonTooltip'>{el.name}</p> : null}
                </div>
            ))}

        </div>
    </div>
  )
}

export default NavigationalButtons