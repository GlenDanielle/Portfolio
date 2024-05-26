import { useState } from 'react'
import './Css/IconPlacement.css'
import GoToLink from './GoToLink'

const IconPlacement = ({IconData}) => {

    const [showTooltip, setShowTooltip] = useState(null)
    const Icons = ()=>{
        return IconData.map((el, index)=>(
            <div key={index} className={el.name == 'JRU' || el.name == "RTU" ? 'EducContainer' : 'IconContainer'} onMouseEnter={()=>{setShowTooltip(index)}} onMouseLeave={()=>{setShowTooltip(null)}}>
                {showTooltip === index && el.name != 'JRU' && el.name != "RTU" ? <p className='Tooltip'>{el.name}</p> : null}
                <img className='Image' src={el.img} alt={el.name} onClick={()=>{el.link ? GoToLink(el.link) : null}}/>
                
            </div>
        ))
    }

  return (
    <div className='Skills'>
        <div className='IconPlacement'>
            {Icons()}
        </div>
    </div>
  )
}

export default IconPlacement