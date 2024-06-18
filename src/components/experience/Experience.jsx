import React from 'react';
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>Minhas Habilidades</h5>
            <h2>Experiência</h2>

            <div className="container experience__container">

                <div className="experience__frontend">
                    <h3>Front End</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>HTML/CSS</h4>
                                <small className='text-light'>Advanced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>UI/UX</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Material UI</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>SASS/Tailwind</h4>
                                <small className='text-light'>Advanced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Responsive </h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience__backend">
                    <h3>Back End</h3>
                    <div className="experience__content">

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Next</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>PHP</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Java</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>APIs</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>TypeScript</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience__tools">
                    <h3>Wordpress</h3>
                    <div className="experience__content">

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Landing Page</h4>
                                <small className='text-light'>Intermediario</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Elementor</h4>
                                <small className='text-light'>Intermediario</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>E-Commerce</h4>
                                <small className='text-light'>Intermediario</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Pagamentos</h4>
                                <small className='text-light'>Intermediario</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Blogs</h4>
                                <small className='text-light'>Intermediario</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Google ADS</h4>
                                <small className='text-light'>Intermediario</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>



        </section>
    );
}

export default Experience;