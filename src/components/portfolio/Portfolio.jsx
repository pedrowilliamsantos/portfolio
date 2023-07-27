import React from 'react';
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import TESTE from '../../assets/imgshop.png'

const dados = [
  {
    id: 1, 
    image: TESTE,
    title: 'A Clothing E-commerce Site',
    github: 'https://github.com/pedrowilliamsantos/shopstore',
    demo: 'https://shopstore-pw.vercel.app/'
  },
  {
    id: 2, 
    image: IMG2,
    title: 'PayPal Illustrative Icons',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18536879-PayPal-Illustrative-Icons'
  },
  {
    id: 3, 
    image: IMG3,
    title: 'Zen Studio Marketing Materials',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18543394-Zen-Studio-Marketing-Materials'
  },
  {
    id: 4, 
    image: IMG4,
    title: 'Folder 📁 – Isometric 3D Illustration',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18539354-Folder-Isometric-3D-Illustration'
  },
  {
    id: 5, 
    image: IMG5,
    title: 'A new way in cross-border payments',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18542067-Profitize-SaaS-Analytics-Tool'
  },
  {
    id: 6, 
    image: IMG6,
    title: 'Profitize - SaaS Analytics Tool',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18545184-University-Website'
  }
]

function portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          dados.map(({id, image, title, github, demo}) =>{
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div> 
              </article>
            )
          })
        }
      </div>
    </section>
  );
}

export default portfolio;