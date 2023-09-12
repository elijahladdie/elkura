import React from 'react';
import img from '../assets/img/mine_.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className='content'>
      <div className='welcome'>
        <div className='intro'>
          <div>
            <h2>Elie kuradusenge</h2>
            <h1>software developer</h1>
          </div>
          <span>
            <b>Success is getting what you want not wanting what you get.</b>
          
          <p>
          I am a passionate and a dreamer software engineer who design influential brands and digital experiences.
          Mostly I put user recommendation at first in order to reach them on success.
          </p>
          </span>
          <a href='/profile' className='btn-link'>Profile&nbsp; <FontAwesomeIcon icon={faArrowRight}/></a>
        </div>
        <div className='center-part'>
          <img src={img} className='rounded'/>
        </div>
        <div className='right-part'>
          
          <p>&copy; Elijah {year}</p>
        </div>
      </div>
    </div>
  )
}

export default Home