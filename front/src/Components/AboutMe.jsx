
import './CSS/AboutMe.css'

const AboutMe = ({datas}) => {
  
  return (
    <>
    <div>
      {/* */}
      {/*mapping para madisplay like props yung data sa array ng usestate */}
      {datas.map((data)=>(
        <div key={data}>
          {/*need unique id kea nilagay ko sa div*/}
          <div className='container'>
            <div className='container1'>

              <div className='content1-1'>
                <h1>{data.me.name}</h1>
                <h2 className='intro'>{data.me.intro}</h2>
              
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

                {Object.values(data.skills).map((el) => (
                  <div key={el.id} className='imgContainersz'>
                    <img src={el.img} alt={el.name}></img>
                  </div>
                ))}
            
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