import './App.css'
import { useState, useEffect } from 'react';
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects';
//notes 
//npm i sass para sa css to
import Datas from'./Datas.json'
import Navbar from './Components/Navbar';


function App() {
  const [jsonData, setjsonData] = useState([Datas]);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      setDarkMode(storedDarkMode === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <>
      <div className={darkMode ? `bodyD` : `body`}>
        <style>{`
          *{color:${darkMode ? 'white': ''}}
        `}</style>
        <div>
          <Navbar datas={jsonData} darkMode={darkMode} setDarkMode={toggleDarkMode}/>
          <AboutMe datas={jsonData}/>
          <Projects datas={jsonData}/>
        </div>
      </div>
    </>
  )
}

export default App
