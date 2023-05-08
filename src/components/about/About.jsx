import React from 'react';
import './about.css'
import ME from '../../assets/me-about.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import{useState} from 'react'

function About() {
  const[activeNav, setActiveNav] = useState('#');

  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

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
              <h5>Experience</h5>
              <small>2+ year working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>0 clients</small>
            </article>

            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
              <article className='about__card'>
                <VscFolderLibrary className='about__icon' />
                <h5>Projects</h5>
                <small>6+ projects</small>
              </article>
            </a>
          </div>
          <p style={{textAlign:'justify'}}>
            Sou um Desenvolvedor Júnior apaixonado por tecnologia e sempre em busca de novos desafios. 
            Estou concluindo a graduação em Ciência da Computação na faculdade UniCEUB e tenho como objetivo me tornar um profissional 
            completo e atualizado para o mercado de trabalho.
            Minhas habilidades incluem:<br/>
            - Excelente conhecimento em HTML, CSS , Boostrap e Responsive Design, garantindo a criação de páginas web visualmente atraentes e acessíveis.<br/>
            - Conhecimento intermediário em JavaScript e seus frameworks ReactJS e VueJS, permitindo a criação de aplicações web dinâmicas e interativas.<br/>
            - Conhecimento intermediário em bancos de dados como PostgreSQL, SQL Server e MongoDB, capaz de modelar e manipular dados de forma eficiente.<br/>
            - Experiência em modelagem de dados e criação de estruturas de banco de dados, garantindo a integridade e segurança dos dados.<br/>
            - Conhecimento em PHP e no framework Laravel, que possibilitam a criação de aplicações web robustas e escaláveis.<br/>
            - Familiaridade com metodologias ágeis, garantindo uma abordagem colaborativa e eficiente no desenvolvimento de projetos.<br/>
            - Habilidade em lógica de programação, possibilitando a resolução de problemas de forma eficaz e criativa.<br/>
            - Consumo de APIs RESTful para integração com outros sistemas e consumo de dados externos.<br/>
            - Experiência em ambientes Mac/Linux/Windows e ferramentas como Visual Studio Code, Netbeans e Postman.<br/>
            - Familiaridade com plataformas de controle de versão como GitHub/GitLab
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>


  );
}

export default About;
