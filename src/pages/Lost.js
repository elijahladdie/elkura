import React from 'react';
import img from '../assets/lost.jpg'
import Nav from '../components/Nav';

const Lost = () => {
  return (
    <div className="container">
     <Nav/> 
     <span className="lost"><img src={img}/></span>
   
    </div>
  )
}

export default Lost