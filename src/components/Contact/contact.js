import React, { useRef } from 'react';
import './contact.css';
import linkedinLogo from '../../assets/linkedin_logo.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
     e.preventDefault();

     emailjs.sendForm('service_hkutlo1', 'template_ve9obr3', form.current, 'ExpgNQGXywwE71gFs')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email sent !');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contactPage'>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form bellow to discuss any work opportunity.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='from_name' />
                <input type='email' className='email' placeholder='Your Email' name='from_email' />
                <textarea name='message' rows='5' className='msg' placeholder='Your Message'></textarea>
                <button type='submit' value='send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <a href="https://www.linkedin.com/in/kumari-pratibha/">
                    <img src={linkedinLogo} alt='linkedinLogo' className='link' />
                    </a>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact