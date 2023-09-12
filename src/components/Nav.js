import React from 'react'
import { faAddressBook, faHome } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Nav = () => {
    return (
        <div className='nav'>

            <a href='/home'>
                <FontAwesomeIcon icon={faHome} />
                <span>Home</span>
            </a>
            <a href='/resume'>
                <FontAwesomeIcon icon={faLaptopCode} />
                <span>Resume</span>
            </a>
            <a href='/profile'>
                <FontAwesomeIcon icon={faAddressBook} />
                <span>Profile</span>
            </a>





        </div>
    )
}

export default Nav