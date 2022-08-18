import React from 'react'
import '../style/card.css'

const Card = (props) => {

    return (

        <div className='col-12 col-lg-4'>
            <div className="card card-gallery">
                <img className='card-img-top' src={require(`../images/${props.image}.webp`)} alt=""/>        
                <div className='card-body text-center'>
                    <p className='card-title'>Nombre : {props.title}</p>
                    <p className='card-text'>Descripción : {props.description}</p>
                </div>
            </div>
        </div>


    )
}

export default Card