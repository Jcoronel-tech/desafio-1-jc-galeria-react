import React from 'react'
import '../style/header.css'
const Header = (props) => {
  return (
    <header className='banner'>
        <h1 className="title text-center text-title">{props.title}</h1>
    </header>
  )
}

export default Header