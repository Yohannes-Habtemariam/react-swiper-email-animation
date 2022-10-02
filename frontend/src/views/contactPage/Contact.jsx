import React, { useRef, useEffect } from 'react'
import {MdEmail} from "react-icons/md"
import {FaFacebookMessenger, FaWhatsappSquare} from "react-icons/fa"
import emailjs from "emailjs-com"
import "./Contact.css";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
      
        emailjs.sendForm('service_vo82nec', 'template_yvc7tx1', form.current, 'LxtJcGGRO3jcr0syL')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      
          e.target.reset();
      };


  return (
    <main className='contact-page-container'>
        <section className="social-media-form-container">
        <h2 className='contact-h2'> Contact Me </h2>
        <div className='contact-container'>
          <div className='contact-options'>
            <article className='contact-option'>
              <MdEmail className='contact-option-icon'/>
              <h4> Email </h4>
              <h5> uelandrae@gmail.com </h5>
              <a href="mailto:uelandrae@gmail.com" target="_blank"> Sent a Message</a>
            </article>

            <article className='contact-option'>
              <FaFacebookMessenger className='contact-option-icon'/>
              <h4> Messenger </h4>
              <h5> Yohannes </h5>
              <a href="https://m.me/profile.php?id=100009710022882" target="_blank"> Sent a Message</a>
            </article>

            <article className='contact-option'>
              <FaWhatsappSquare className='contact-option-icon'/>
              <h4> WhatsApp </h4>
              <h5> +4917681005650 </h5>
              <a href="https://api.whatsapp.com/send?phone=+4917681005650" target="_blank"> Sent a Message</a>
            </article>
          </div>
          <form className='contact-form' ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Full Name' required />
            <input type="email" name='email' placeholder='Enter Email' required/>
            <textarea name="message" rows="21" placeholder='Type Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Contact;