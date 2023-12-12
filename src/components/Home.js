import React from 'react';
import img from '../assets/img/mine_.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Home = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className='block'>
      <div className='welcome'>
        <div className='intro'>
          <div>
            <h2 className='cssfree'>Elie kuradusenge</h2>
            <h1 className='cssfree1'>software developer</h1>
          </div>
          <span>
            <b>Who am I?</b>
            

            <p>
              I am software developer and IT enthusiast, I mostly focus on frontend development
              creating user interfaces that are attractive and adoptable for all types of visitors and make it fun so that
              whoever visit once will <i>come again</i> to interact with endless user exprience.
            </p><br/>
            <p>Not only that  I also develop backend application in order make to application more interactive and problem solving.
               I am also lifelong learner in what I do, To make sure that I  provide product as expected with exptected tool</p>
            <b>Have an idea? talk to me📞.</b>
           </span>
          <Link to='/profile' className='btn-link'>Contact me&nbsp; <FontAwesomeIcon icon={faArrowRight} /></Link>
        </div>

        <div className='center-part'>
          <img src={img} className='rounded' alt="" />
        </div>

        <div className='right-part'>
          <span>Turning ideas into reality</span>
          <p>&copy; Elijah {year}</p>
        </div>

      </div>
    </div>
  )
}

export default Home