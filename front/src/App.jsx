import './App.css'
import { useState, useEffect } from 'react';
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects';
//notes 
//npm i sass para sa css to
import Datas from'./Datas.json'


function App() {
  const [jsonData, setjsonData] = useState([Datas]);

  return (
    <>
      <div className='body'>
        <div>
          <AboutMe datas={jsonData}/>
          <Projects datas={jsonData}/>
        </div>
      </div>
    </>
  )
}

export default App
