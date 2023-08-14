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
              <div className='content1'>
                <h1>Hello! I'm Glen Danielle Delavega Galit</h1>
                <h2 className='intro'>I'm currently a 4th year college student, a beginner at webdev who wants to be a full stack developer</h2>
              </div>
              <div className='content2'>
                <img src={data.me.img}></img>
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