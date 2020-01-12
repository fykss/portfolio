import React from 'react';
import './contact.scss';

const contact = () => {
  return (
    <section
      className='contact d-flex align-content-between flex-column '
      id='Contact'
    >
      <h2 className='contact-title'>contact</h2>
      <div className='contact-mail d-flex flex-column'>
        <div className='mail-circle'>
          <a href='mailto:fyks1649@gmail.com'>
            <i className='fas fa-envelope fa-3x d-flex justify-content-center align-items-center' />
          </a>
        </div>
        <a className='contact-mail-link' href='mailto:fyks1649@gmail.com'>
          fyks1649@gmail.com
        </a>
        <a
          className='contact-mail-link'
          href='https://drive.google.com/open?id=1UWcCAs43ZA44E6kKdMEW8VkpSRIWmLlrvGFju2-w3ik'
        >
          Download Resume
        </a>
      </div>
      <div className='contact-social d-flex justify-content-around'>
        <a href='https://github.com/fykss'>
          <i className='fab fa-github fa-2x' />
        </a>
        <a href='https://gitlab.com/fyks1649'>
          <i className='fab fa-gitlab fa-2x' />
        </a>
        <a href='https://www.linkedin.com/in/vladyslav-lietun-454b19171/'>
          <i className='fab fa-linkedin-in fa-2x' />
        </a>
        <a href='https://t.me/fykss'>
          <i className='fab fa-telegram-plane fa-2x' />
        </a>
        <a href='https://www.instagram.com/lietunvlad/'>
          <i className='fab fa-instagram fa-2x' />
        </a>
      </div>
      <footer className='footer'>
        <span className='footer-copyright text-center text-black-50'>
          Designed and built by Vladyslav Lietun
        </span>
      </footer>
    </section>
  );
};

export default contact;
