import React from 'react';
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Pedro William</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portifolio">Portifolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com/pedrolwilliam"><FiInstagram/></a>
        <a href="https://www.linkedin.com/in/pedro-william-937b10218/"><BsLinkedin/></a>
        <a href="https://github.com/pedrowilliamsantos"><AiOutlineGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;PedroWilliam All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer;