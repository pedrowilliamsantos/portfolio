import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlineGithub } from 'react-icons/ai'
import './header.css'

function HeaderSocials() {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/pedro-william-937b10218/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/pedrowilliamsantos" target="_blank"><AiOutlineGithub /></a>
            <a href="https://api.whatsapp.com/send?phone=61991835656" target="_blank"><BsWhatsapp /></a>
        </div>
    );
}

export default HeaderSocials;