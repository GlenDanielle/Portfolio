import { useState, useEffect } from 'react';
import './CSS/AboutMe.css'

const AboutMe = ({data}) => {

  return (
    <>
    <div>
      {/* */}
      {/*mapping para madisplay like props yung data sa array ng usestate */}
      {data.map((data)=>(
        //need unique id kea nilagay ko sa div
        <div key={data.me.id}>

          <div className='container'>
            <div className='container1'>

              <div className='content1-1'>

                <h1>Hello! I'm Glen Danielle Delavega Galit</h1>
                <h2 className='intro'>I'm a 4th year college student, a beginner at webdev who wants to be a full stack developer</h2>
              
              </div>

              <div className='content1-2'>

                <img src={data.me.img}></img>

              </div>

            </div>

            <div className='container2'>

              <div className='container2-1'>

              </div>
              <div className='container2-2'>
                <div className='imgContainer2-1'>
                  <img src='https://i0.wp.com/programmingwithmosh.com/wp-content/uploads/2019/01/2000px-React-icon.svg_.png?fit=2000%2C1413&ssl=1'></img>
                
                  </div>
              </div>

            </div>

          </div>

        </div>
      ))}
      
    </div>
    </>
  )
}

export default AboutMe