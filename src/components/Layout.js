import React from 'react'
import Nav from './Nav'

function Layout({children}) {
  return (
    <div className='flex'>
        <Nav/>
        <div className='content'>
        {children}
        </div>
    </div>
  )
}

export default Layout