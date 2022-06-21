import React from 'react';
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


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
            <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+year working</small>
            </article>

            <article className='about__card'>
            <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ clients</small>
            </article>

            <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quam blanditiis aliquid alias
            voluptatem iusto error atque magni, ipsum cum aliquam reprehenderit quae laudantium ut modi 
            officia sequi optio nisi?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>


  );
}

export default About;