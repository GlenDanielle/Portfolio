import "./Css/School.css"
import IconPlacement from "./IconPlacement"
const School = () => {
  const Jru = [{
    name: 'JRU',
    fullname: 'Jose Rizal University',
    img: 'https://jrc.edu.ph/jruapplicant/img/jru99.png',
    course: 'Science, Technology, Engineering and Mathematics',
    when: '2019-2021',
    where: 'Mandaluyong City'
  }]
  const Rtu = [{
    name: 'RTU',
    fullname: 'Rizal Technological University',
    img: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Rizal_Technological_University_seal.png',
    course: 'Bachelor of Science in Information and Technology',
    when: '2021-2024',
    where: 'Mandaluyong City'
  }]
  return (
    <div className="Schools">
      <div className="SchoolDataHolder">
        <IconPlacement IconData={Jru}/>
        <h4>{Jru[0].fullname}</h4>
        <p className="JruSpace">{Jru[0].course}</p>
        <div className="DateNLoc">
          <p>{Jru[0].when}</p>
          <p>{Jru[0].where}</p>
        </div>
      </div>

      <hr/>

      <div className="SchoolDataHolder">
        <IconPlacement IconData={Rtu}/>
        <h4>{Rtu[0].fullname}</h4>
        <p>{Rtu[0].course}</p>
        <div className="DateNLoc">
          <p>{Rtu[0].when}</p>
          <p>{Rtu[0].where}</p>
        </div>
      </div>
    </div>
  )
}

export default School