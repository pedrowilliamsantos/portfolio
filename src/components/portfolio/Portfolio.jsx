import React from 'react';
import './portifolio.css'
import IMG1 from '../../assets/portifolio1.png'
import IMG2 from '../../assets/portifolio2.png'
import IMG3 from '../../assets/portifolio3.png'
import IMG4 from '../../assets/portifolio4.png'
import IMG5 from '../../assets/portifolio5.png'
import IMG6 from '../../assets/portifolio6.png'

const dados = [
  {
    id: 1, 
    image: IMG1,
    title: 'A new way in cross-border payments',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18543304-A-new-way-in-cross-border-payments'
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

function Portifolio() {
  return (
    <section id='portifolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portifolio__container">
        {
          dados.map(({id, image, title, github, demo}) =>{
            return (
              <article key={id} className='portifolio__item'>
                <div className='portifolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portifolio__item-cta">
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

export default Portifolio;