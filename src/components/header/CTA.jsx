import React from 'react';
import CV from '../../assets/cv.pdf'
// import { Container } from './styles';

function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
    </div>
  );
}

export default CTA;