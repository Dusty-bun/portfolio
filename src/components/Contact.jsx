import React from 'react'
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom'

export default function ContactUs () {

  let navigate = useNavigate
  navigate('/')

  function sendEmail(e) {
    e.preventDefault();
  

    emailjs.sendForm('service_gj0zybc', 'template_qtbwx2b', e.target, 'qhlPqiaJ_yyS2-Qeq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form onSubmit={sendEmail} onClick={() => navigate("/")} className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - denis.r.kostov@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button onClick={() => navigate("/")} className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}