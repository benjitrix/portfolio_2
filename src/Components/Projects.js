import React, { useState } from 'react'
import commerce from '../json/commerce'
import utility from '../json/utility.json'
import projects from '../json/projects.json'
import ProjectCard from './ProjectCard'
import '../css/Projects.css'

const Projects = () => {

  return (
    <section className="projects">
      <div className="projects-container">
        <p>Projects</p>
        <div className="projects-combined-desktop-view group">
          <div className='group-items'>
            {
              projects.map((project, index) => {
                return (
                  <ProjectCard 
                    props={project}
                    nos={index}
                    key={index}
                  />
                )
              })
            }
          </div>
        </div>
        <div className="e-commerce group">
          <p>E-Commerce</p>
          <div className='group-items'>
            {
              commerce.map((project, index) => {
                return (
                  <ProjectCard 
                    props={project}
                    nos={index}
                    key={index}
                  />
                )
              })
            }
          </div>
        </div>
        <div className="utility group">
          <p>Utility</p>
          <ul className='group-items'>
            {
              utility.map((project, index) => {
                return (
                  <ProjectCard 
                    props={project}
                    nos={index}
                    key={index}
                  />
                )
              })
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Projects