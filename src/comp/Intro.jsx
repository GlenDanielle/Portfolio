import Images from './Images'
import './Css/Intro.css'

const Intro = () => {
  const {CroptedpicNiGlen} = Images

  return (
    <div className="Intro">
          <img className='Photo' src={CroptedpicNiGlen}/>
        <div className='TxtIntro'>
          <h4>Hello! I'm Glen Danielle D. Galit</h4>
          <p>I'm a passionate individual fueled by the thrill of learning and the excitement of problem-solving. With an insatiable curiosity and a knack for quick comprehension, I thrive in dynamic environments where challenges are not obstacles but opportunities for growth. I strive not only to achieve but to excel. I thrive in environments that demand excellence and value innovation. My goal is not just to meet expectations but to exceed them, leaving a lasting impact through my dedication, integrity, and the caliber of my work.</p>
        </div>
    </div>
  )
}

export default Intro