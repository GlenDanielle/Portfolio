import './App.css'
import Intro from './comp/Intro'
import IconPlacement from './comp/IconPlacement'
import IconSkills from './comp/Json/Skills.json'
import ProjectCarousel from './comp/ProjectCarousel'
import ContactInfo from "./comp/Json/Contacts.json"
import ProjectObj from './comp/ProjectObj'
import School from './comp/School'
import NavigationalButtons from './comp/NavigationalButtons'
import NavigationalButtonsIcons from './comp/Json/NavigationButtonsIcon.json'
import { useEffect, useState } from 'react'
import BackgroundCircle from './comp/BackgroundCircle'

function App() {
  const [lightModeOn, setLightModeOn] = useState(false)
  useEffect(() => {
    lightModeOn ?
    document.body.classList.add('lightMode')
    :
    document.body.classList.remove('lightMode')
  }, [lightModeOn])
  
  const toggleLightMode = () => {
    setLightModeOn(!lightModeOn)
  }
  return (
    <div className='background'>
      <NavigationalButtons ButtonIcons={NavigationalButtonsIcons} lightModeOn={lightModeOn} toggleLightMode={toggleLightMode}/>
      <div className='Contents'>
        <BackgroundCircle/>
        <Intro/> 
        <h1 id='school'>Education</h1>
        <School/>
        <h1 id="skills">Skills</h1>
        <IconPlacement IconData={IconSkills}/>
        <h1 id="projects">Projects</h1>
        <ProjectCarousel lightModeOn={lightModeOn} ProjectImages={ProjectObj}/>
        <h1 id="contacts">Contacts</h1>
        <IconPlacement IconData={ContactInfo}/>
      </div>
    </div>
  )
}

export default App
