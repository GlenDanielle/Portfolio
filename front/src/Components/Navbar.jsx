import { useState, useEffect } from 'react'
import './CSS/Navbar.css'

const Navbar = ({datas, darkMode, setDarkMode}) => {

  const [navbarActive, setNavbarActive] = useState(false)

  const DDmenu =()=>{
    return(
      <div className=''>
        {datas.map((cat)=>{
          return(
            <div key={cat}> 
              {Object.values(cat.navbar).map((el)=>{
                
                return(
                  <div key={el.id}>
                    <div className="contentDD">
                      <div className="contentTT" data-tip={el.name === "Dark mode" ? darkMode ? el.Lname : el.name : el.name}>
                        <div className='CC'>
                          <a className='svgC'  
                              style={{backgroundImage:`url(${el.name === "Dark mode" ? darkMode ? el.Limg : el.img : el.img})`,
                              height:`${el.name === "Me" ? "70px" : "45px"}`, width:`${el.name === "Me" ? "70px" : "45px"}`}}
                              onClick={()=>{el.name === "Dark mode" ? setDarkMode() : null}}
                              href={el.contS === '' ? null : el.contS}
                          >
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div>
      <div className='navbarContainer'>
        <div className='navbarCont'>
          <button onClick={()=>setNavbarActive(!navbarActive)} 
            className='buttDD'
            style={{backgroundImage:`url(${navbarActive ? 'https://www.svgrepo.com/show/521564/close.svg' : 'https://www.svgrepo.com/show/532195/menu.svg'})`}}
          >
            
          </button>
          
        </div>
        {navbarActive ? DDmenu() : null}
      </div>

    </div>
  )
}

export default Navbar