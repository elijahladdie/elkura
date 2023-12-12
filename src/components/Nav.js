import React from 'react'
import { faAddressBook, faHome } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav'>

      <Link to='/home'>

        <FontAwesomeIcon icon={faHome} />
        <span>Home</span>
      </Link>

      <Link to='/resume'>

        <FontAwesomeIcon icon={faLaptopCode} />
        <span>Resume</span>
      </Link>
      <Link to='/profile'>

        <FontAwesomeIcon icon={faAddressBook} />
        <span>Profile</span>
      </Link>
    </div>
  )
}

export default Nav





