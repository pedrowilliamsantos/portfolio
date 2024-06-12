import React from 'react';
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { AiOutlineGithub } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'

function Footer() {
    return (
        <footer>
            <a href="#" className='footer__logo'>Pedro William</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                {/*<li><a href="#services">Services</a></li>*/}
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://api.whatsapp.com/send?phone=61991835656"><BsWhatsapp /></a>
                <a href="https://www.linkedin.com/in/pedro-william-937b10218/"><BsLinkedin /></a>
                <a href="https://github.com/pedrowilliamsantos"><AiOutlineGithub /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy;PedroWilliam All rights reserved</small>
            </div>
        </footer>
    );
}

export default Footer;