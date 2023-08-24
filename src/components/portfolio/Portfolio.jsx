import React from 'react';
import './portfolio.css'
import IMG1 from '../../assets/imgshop.png'
import IMG2 from "../../assets/comingsoon.jpg"

const dados = [
    {
        id: 1,
        image: IMG1,
        title: 'A Clothing E-commerce Site → Under Development',
        github: 'https://github.com/pedrowilliamsantos/shopstore',
        demo: 'https://shopstore-pw.vercel.app/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Coming Soon...',
        github: 'https://github.com/pedrowilliamsantos',
        demo: 'https://github.com/pedrowilliamsantos'
    },
    {
        id: 3,
        image: IMG2,
        title: 'Coming Soon...',
        github: 'https://github.com/pedrowilliamsantos',
        demo: 'https://github.com/pedrowilliamsantos'
    },
    
]

const portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    dados.map(({ id, image, title, github, demo }) => {
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