import './CSS/Projects.css'
import resume from "./Resume.pdf"

const Projects = ({datas}) => {

  return (
    <div>
        {datas.map((data)=>(
            <div key={data}>
                <div id='projects' className='cont'>
                
                    <div className='containerTxtProj'>
                        <h1 className='txtProjTit'>PROJECTS</h1>
                    </div>
                        
                    {Object.values(data.projects).map((el)=>{
                        return(
                    
                            <div key={el.id} className='compProjContainer'>
                                <div className="projImg" style={{backgroundImage:el.img}}>
                                    <div className="projContainer">
            
                                    </div>
                                    <div className="projtxtContainer">
                                        <div className="txtFormat">
                                            <h1 className="title">{el.title}</h1>
                                            <p className="desc">{el.desc}</p>
                                            <a href={el.links} target='_blank' className="butt">Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                    <div className='Contancts'>
                        <div className='containerTxtProj'>
                            <h1 className='txtProjTit'>Contacts</h1>

                        </div>

                    </div>
                    <div id='contacts' className='containersz'>

                        {Object.values(data.contacts).map((el) => (
                            <div key={el.id}>
                                {/* tooltip sana */}
                                <div key={el.id} className="skillsTT" data-tip={el.name}>
                                    <div href={el.links} className='linkinCont'>
                                        <a className='linkin' 
                                            style={{backgroundImage:`url(${el.img})`}}
                                            target={el.link === 'cp' ? null : '_blank'}
                                            href={el.link === 'resume' ? resume : el.link}
                                            download
                                        ></a>
                                    </div>
                                </div>
                                
                            </div>
                        ))}

                    </div>
                    
                </div>
            </div>
        ))}
    </div>
  )
}

export default Projects