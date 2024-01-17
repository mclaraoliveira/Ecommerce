import React from 'react' 
import './Footer.css' 
import footer_logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png' 
import pinterest_icon from '../Assets/pinterest_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
 
const Footer = () => {

 return (
 
   <div className='footer'>
       <div className="footer-logo">
 
           <img src={footer_logo} alt="" />
           <p>PADAWAN SHOP</p>
       </div> 
       <ul className="footer-links">
           <li>Empresa</li>
           <li>Produtos</li>
           <li>Lojistas</li> 
           <li>Sobre</li>
           <li>Contato</li>
       </ul>
       <div className="footer-social-icon">
           <div className="footer-icons-container">
               <img src={instagram_icon} alt="" /> 
           </div>
           <div className="footer-icons-container">
               <img src={pinterest_icon} alt="" />
           </div>
           <div className="footer-icons-container">
               <img src={whatsapp_icon} alt="" />
           </div>
       </div>
       <div className="footer-copyright">
           <hr />
           <p>Copyright @ 2024 - Todos os Direitos Reservados</p>
       </div>
   </div>
 )

}

export default Footer
