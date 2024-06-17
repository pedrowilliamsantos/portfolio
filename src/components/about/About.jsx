import React from 'react';
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { useState } from 'react'

function About() {
    const [activeNav, setActiveNav] = useState('#');

    return (
        <section id='about'>
            <h5>Carreira</h5>
            <h2>Sobre mim</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experiência</h5>
                            <small>4+ anos de trabalho</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clientes</h5>
                            <small>3 clients</small>
                        </article>

                        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
                            <article className='about__card'>
                                <VscFolderLibrary className='about__icon' />
                                <h5>Projetos</h5>
                                <small>6+ projetos</small>
                            </article>
                        </a>
                    </div>
                    <p style={{ textAlign: 'justify' }}>
                        Olá! Me chamo Pedro William, sou um jovem apaixonado por tecnologia e design. Com sólida experiência em desenvolvimento web e 
                        técnicas de design, dedico-me a criar experiências digitais inovadoras e visualmente cativantes. Minha missão é transformar 
                        ideias em realidades digitais de impacto.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Contato</a>
                </div>
            </div>
        </section>


    );
}

export default About;
