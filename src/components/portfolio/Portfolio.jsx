import React from 'react';
import './portfolio.css'
import IMG1 from '../../assets/imgshop.png'
import IMG2 from "../../assets/reactimg.jpeg"
import IMG3 from "../../assets/restaurante.png"
import IMG4 from "../../assets/todolist.png"
import CS from "../../assets/comingsoon.jpg"

const dados = [
    {
        id: 1,
        image: IMG1,
        title: 'Loja de roupas E-commerce',
        github: 'https://github.com/pedrowilliamsantos/shopstore',
        demo: 'https://shopstore-pw.vercel.app/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'React Painel de controle',
        github: 'https://github.com/pedrowilliamsantos/react-admin',
        demo: 'https://reactadmin-pw.vercel.app/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Website Restaurante',
        github: 'https://github.com/pedrowilliamsantos/restaurante',
        demo: 'https://restaurante-pw.vercel.app/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'React TodoList',
        github: 'https://github.com/pedrowilliamsantos/todolist',
        demo: 'https://todolist-pw.vercel.app/'
    },
    {
        id: 5,
        image: CS,
        title: 'Em breve...',
        github: 'https://github.com/pedrowilliamsantos',
        demo: 'https://github.com/pedrowilliamsantos'
    },
]

const portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>Meus Trabalhos</h5>
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