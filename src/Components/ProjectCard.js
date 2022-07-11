import React, { useState } from 'react'
import '../css/ProjectCard.css'

const ProjectCard = ({props, showDesc, nos}) => {
  const { image, appBtn, appLink, gitLink, description } = props
  const [more, setMore] = useState(false)

  return (
    <div className='project-card'>
      <img src={image} alt="" className='project-image' />
      <div className="app-links">
        <a href="" className='app-link'>{appBtn} App</a>
        <a href="" className='git-link'>Git Repo</a>
      </div>
      <div className="description-container">
        <p className="description">
          {(description).slice(0, 105)}
          <button
            onMouseEnter={(e) => setMore(!more)} 
            onMouseLeave={(e) => setMore(!more)}
            className='btn'
          >
            more...
          </button>
        </p>
      </div>
      <div className={`${more ? 'full-description' : 'no-description'}`}>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard