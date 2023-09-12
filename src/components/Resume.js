import {  faEye, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Resume = () => {
  return (
    <div className='content experience'>
      <samp>
        <h1>Experience</h1>
        <a href='https://docs.google.com/document/d/e/2PACX-1vQSYI0FzVk0QviYZvyprIDg2edri8cxcCfN9a7ez5wdnSqILBdhDi020HPElPnSGG6Ih0grrPSQSbdE/pub'><FontAwesomeIcon icon={faEye} /> View CV</a>
      </samp>

      <section>
        {/* <div className='exper_card'>
         
          <span>
            <p>Project Description</p>
            <i><FontAwesomeIcon icon={faLocationDot} />Kigali - Rwanda</i>
          </span>
        </div> */}
        <div className='exper_card'>
          <span className='title'>
            <h1> Software developer Intern | Qonics inc</h1>
            <p>March, 2023 - April, 2023  <i>-Remote</i></p>
          </span>
          <span className='description'>
            <p>In this internship I created an app called Kain FC this app helped a club manager to create,read,update and delete the club staff activities such as hosting match as well as registering new referees to the club.</p>
            <i><FontAwesomeIcon icon={faLocationDot} />Kigali - Rwanda </i>
          </span>
        </div>
        <div className='exper_card'>
          <span className='title'>
            <h1> Software developer Intern | Mvend Rwanda</h1>
            <p>April, 2022 - May, 2022 <i>-Remote</i></p>
         
          </span>
          <span className='description'>
            <p>In this internship I worked on improving my tech skills including learning new technology on freecodecamp learn platform and I  gained two certificates: javascript algorithm and data structure and  frontend development libraries Here on freecodecamp.</p>
            <i><FontAwesomeIcon icon={faLocationDot} />Kigali - Rwanda</i>
          </span>
        </div>
        <b>
          For now I don't have work experience. I started coding since 2020 until now. I have good experience I took from internships, projects and 
          trainings.
          </b>
      </section>
    </div>
  )
}

export default Resume