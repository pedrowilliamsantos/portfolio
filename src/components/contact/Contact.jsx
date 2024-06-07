import React, { useRef, useState } from 'react';
import './contact.css';
import { SiGmail } from "react-icons/si";
import { BsWhatsapp } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs'

import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        setFeedbackMessage('');

        emailjs.sendForm('service_m7381r1', 'template_xqtrpbt', form.current, 'EOBH7ZK-A36ArBXir')
            .then((result) => {
                console.log(result.text);
                setIsSending(false);
                setFeedbackMessage('Message sent successfully!');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                setIsSending(false);
                setFeedbackMessage('Failed to send message, please try again.');
            });
    };

    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <SiGmail style={{color:"#ec5353"}} className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>pedrowilliam866@gmail.com</h5>
                        <a href="mailto:pedrowilliam866@gmail.com" target='_blank' rel='noopener noreferrer'>Send a message</a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp style={{color: "green"}} className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>61991835656</h5>
                        <a href="https://api.whatsapp.com/send?phone=61991835656" target='_blank' rel='noopener noreferrer'>Send a message</a>
                    </article>

                    <article className="contact__option">
                        <BsLinkedin style={{color:"#4db5ff"}} className='contact__option-icon' />
                        <h4>LinkedIn</h4>
                        <h5>pedro-william-937b10218</h5>
                        <a href="https://www.linkedin.com/in/pedro-william-937b10218/" target='_blank' rel='noopener noreferrer'>Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Your Full Name' required />
                    <input type="email" name="email" placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary' disabled={isSending}>
                        {isSending ? 'Sending...' : 'Send Message'}
                    </button>
                    {feedbackMessage && <p className={feedbackMessage.includes('successfully') ? 'success-message' : 'error-message'}>{feedbackMessage}</p>}
                </form>
            </div>
        </section>
    );
}

export default Contact;
