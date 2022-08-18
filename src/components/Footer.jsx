import React from 'react'
import '../style/footer.css'
import Button from 'react-bootstrap/Button';

const Footer = (props) => {

  return (
    <footer className='text-center'>
        <p className='text-footer '>{props.menssage}</p> 
        <Button variant="primary">Contactame</Button>
    </footer>
  )
}

export default Footer