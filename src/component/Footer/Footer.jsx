import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png';
import Insta from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className="Footer-container">
        <hr />
        <div className="footer">
            <div className="social-links">
                <img src={Github} alt="" />
                <img src={Insta} alt="" />
                <img src={LinkedIn} alt="" />
            </div>
            <div className="logo-f">
                <img src={Logo} alt="" />
                <span>@Created By Ashen A V S</span>
            </div>
        </div>

        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>

        
    </div>
  )
}

export default Footer