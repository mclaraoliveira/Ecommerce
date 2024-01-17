import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Receba Ofertas Exclusivas</h1>
        <p>Se inscreva em nossa newsletter e fique atualizado</p>
        <div>
            <input type="email" placeholder='Seu E-mail' />
            <button>Inscreva-se</button>
        </div>
    </div>
  )
}

export default Newsletter