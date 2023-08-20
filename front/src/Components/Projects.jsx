import './CSS/Projects.css'

const Projects = ({datas}) => {
  return (
    <div>
        {datas.map((data)=>(
            <div key={data}>
                <div className='cont'>
                

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
                                            <button className="butt">Checkout</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                        

                   
                    
                </div>
            </div>
        ))}
    </div>
  )
}

export default Projects