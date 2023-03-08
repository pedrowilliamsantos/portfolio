import React from 'react';
import './about.css'
import ME from '../../assets/me-about.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


function About() {
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

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>6+ projects</small>
            </article>
          </div>
          <p style={{textAlign:'justify'}}>
            Meu perfil profissional é caracterizado pela facilidade de adaptação com ambientes de trabalho; Possuo habilidades de boas práticas de desenvolvimento; Curiosidade em aprender novas tecnologias; Proativo e comunicativo em ambientes de trabalho; Tenho interesse na área de Front-End (ReactJS, NodeJS, JavaScript).
            Habilidades no Front-End com as ferramentas de HTML5 e CSS3 com responsividade; Desenvolvimento Web com HTML5, CSS3, Webservices e JavaScript; Procuro desenvolver para que qualquer programador possa entender o que estar no script; Uso as ferramentas VSCode, Netbeans, Postman em trabalho;
            Experiência com Desenvolvimento de Softwares empresarias com JAVA, JavaScript e integração com SQL Server; Criação de websites com HTML5, CSS3 e JavaScript integrado com web services e banco de dados SQL Server;
            Estou fazendo faculdade de Ciência da Computação no UniCEUB período noturno; Por fora da faculdade estou estudando ReactJS, JavaScript, NodeJS, Java;
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>


  );
}

export default About;