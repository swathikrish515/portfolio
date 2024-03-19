import './ContactFormStyles.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const TestFormData = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_lwprrd6',
        'template_r7zeqgr', 
        form.current, 
        {
          publicKey: 'to-hgiG-zIbmTBWnO',
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className='formCon'>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default TestFormData;
