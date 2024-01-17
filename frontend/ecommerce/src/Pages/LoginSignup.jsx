import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Cadastre-se</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Seu nome' name="" id="" />
          <input type="email" placeholder='E-mail' />
          <input type="password" placeholder='Senha' name="" id="" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Já possui uma conta? <span>Entre aqui</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>Ao continuar, eu aceito os Termos de Uso e a Política de Privacidade.</p>
        </div>
      </div>

    </div>
  )
}
