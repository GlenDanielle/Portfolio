import { useState, useEffect } from 'react';
import './CSS/Contents.css'
//wag kalimutan import axios
import axios from 'axios'
//npm i sass para sa css to

const Contents = () => {
    //taga salo lang ng data galing backend
    const [data, setData] = useState([]);
  
    useEffect(() => {
      // Fetch data from the server when the component mounts
      axios.get("http://localhost:3000/aboutMe")//saan kukunin yung data
        .then((response) => setData(response.data))
        .catch((error) => console.log("Error fetching data", error));
    }, []);

  return (
    <>
    <div>
      {/* */}
      {/*mapping para madisplay like props yung data sa array ng usestate */}
      {data.map((data)=>(
        //need unique id kea nilagay ko sa div
        <div key={data.me.id}>

          <div className='container1'>
            <div className='container2'>
              <div className='container3'>
                <img src={data.me.img}></img>
              </div>

              <div className='content1'>
                <h1 className='name'>Glen Danielle D. Galit</h1>
              </div>
              
              
            </div>
            
          </div>

        </div>
      ))}
      
    </div>
    </>
  )
}

export default Contents