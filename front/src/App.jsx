import './App.css'
import { useState, useEffect } from 'react';
import AboutMe from './Components/AboutMe'
//notes 
//npm i axios dis is for fetching
import axios from 'axios'
//npm i sass para sa css to
//react-router-dom for outlet and links

function App() {
  //taga salo lang ng data galing backend
  const [apiData, setApiData] = useState([]);
  
  useEffect(() => {
    // Fetch data from the server when the component mounts
    axios.get("http://localhost:3000/aboutMe")//saan kukunin yung data
      .then((response) => setApiData(response.data))
      .catch((error) => console.log("Error fetching data", error));
  }, []);
  
  return (
    <>
      <div className='body'>
        <div>
          <AboutMe data={apiData}/>
        </div>
      </div>
    </>
  )
}

export default App
