import React from 'react';
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials';
function Header() {
    return (
        <header>
            <div className='container header__container'>
                <h5>Olá, me chamo</h5>
                <h1>Pedro William</h1>
                <h5 className='text-light'>Web Designer</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>

            </div>
        </header>

    );
}

export default Header;