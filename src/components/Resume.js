import {  faEye, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div className='experience'>
      <samp>
        <h1>Experience</h1>
        <Link   to="/resume/view" ><FontAwesomeIcon icon={faEye} /> View CV</Link>
      </samp>
      <section>
      <div className='exper_card'>
          <span className='title'>
            <h1> Software developer | Klab.rw - Apprentice</h1>
            <p>March, 2023 - Present  <i>-Hybrid</i></p>
          </span>
          <span className='description'>
            <p> Using ReactJs and NodeJs  to create backend,frontend, fullstack applications</p>
            <i><FontAwesomeIcon icon={faLocationDot} />Kigali - Rwanda </i>
          </span>
        </div>
        
        <div className='exper_card'>
          <span className='title'>
            <h1> Software developer | Qonics inc - Intern </h1>
            <p>March, 2023 - April, 2023  <i>-Remote</i></p>
          </span>
          <span className='description'>
            <p>In this internship I created an app called Kain FC this app helped a club manager to create,read,update and delete the club staff activities such as hosting match as well as registering new referees to the club.</p>
            <i><FontAwesomeIcon icon={faLocationDot} />Kigali - Rwanda </i>
          </span>
        </div>

        <div className='exper_card'>
          <span className='title'>
            <h1> Software developer | Mvend Rwanda - Intern</h1>
            <p>April, 2022 - May, 2022 <i>-Remote</i></p>
          </span>
          <span className='description'>
            <p>In this internship I worked on improving my tech skills including learning new technology on freecodecamp learn platform and I  gained two certificates: javascript algorithm and data structure and  frontend development libraries Here on freecodecamp.</p>
            <i><FontAwesomeIcon icon={faLocationDot} />Kigali - Rwanda</i>
          </span>
        </div>
      </section>
    </div>
  )
}

export default Resume
