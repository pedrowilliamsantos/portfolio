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
                        Sou um Desenvolvedor Júnior apaixonado por tecnologia e sempre em busca de novos desafios.
                        Sou formado em Ciência da Computação na faculdade UniCEUB e tenho como objetivo me tornar um profissional
                        completo e atualizado para o mercado de trabalho. No mundo do desenvolvimento, tenho buscado constantemente
                        aprimorar minhas habilidades e como Programador Júnior, considero-me um aprendiz constante. Estou sempre empolgado
                        em explorar novas linguagens de programação, frameworks e abordagens de desenvolvimento. Minha vontade de conhecimento
                        impulsiona-me a enfrentar desafios complexos e aprimorar minhas habilidades a cada dia.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Contato</a>
                </div>
            </div>
        </section>


    );
}

export default About;
