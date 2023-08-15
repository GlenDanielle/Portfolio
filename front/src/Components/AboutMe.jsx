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
                <p>SKILLS</p>
              </div>
              <div className='containersz'>
                <div className='imgContainersz'>
                  <img src='https://www.svgrepo.com/show/452092/react.svg'></img>
                </div>
                <div className='imgContainersz'>
                  <img className='ZO' src='https://www.svgrepo.com/show/452045/js.svg'></img>
                </div>
                <div className='imgContainersz'>
                  <img src='https://www.svgrepo.com/show/452228/html-5.svg'></img>
                </div>
                <div className='imgContainersz'>
                  <img src='https://www.svgrepo.com/show/373528/cpp3.svg'></img>
                </div>
                <div className='imgContainersz'>
                  <img className="ZO" src='https://www.svgrepo.com/show/452234/java.svg'></img>
                </div>
                <div className='imgContainersz'>
                  <img src='https://www.svgrepo.com/show/452075/node-js.svg'></img>
                </div>

                <div className='imgContainersz'>
                  <img src='https://www.svgrepo.com/show/452088/php.svg'></img>
                </div>
                <div className='imgContainersz'>
                  <img src='https://www.svgrepo.com/show/452091/python.svg'></img>
                </div>
                <div className='imgContainersz'>
                  <img src='https://www.svgrepo.com/show/374118/tailwind.svg'></img>
                </div>
                <div className='imgContainersz'>
                  <img src='https://www.svgrepo.com/show/452185/css-3.svg'></img>
                </div>
                <div className='imgContainersz'>
                  <img src='https://daisyui.com/images/daisyui-logo/daisyui-logomark.svg'></img>
                </div>
                <div className='imgContainersz'>
                  <img className="ZO" src='https://www.svgrepo.com/show/353498/bootstrap.svg'></img>
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