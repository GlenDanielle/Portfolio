import './CSS/Projects.css'

const Projects = ({datas}) => {
  return (
    <div>
        {datas.map((key)=>(
            <div key={key}>
                <div className='cont'>

                    <div className='container2'>
                        <div className="projCont">
                            <div className="projContent">
                                <img src="https://picsum.photos/id/237/200/300" className="projImg" />
                                <div>
                                    <h1 className="title">Box Office News!</h1>
                                    <p className="desc">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <button className="butt">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        ))}
    </div>
  )
}

export default Projects