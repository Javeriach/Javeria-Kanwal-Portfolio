import { Box, Typography, TextField, Button } from '@mui/material';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Details, Email, GitHub, LocationCity } from '@mui/icons-material';
import DetailsIcon from '@mui/icons-material/Details';
import { Link } from 'react-router-dom';
const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_sg0naxl', 'template_rvb3srm', form.current, {
        publicKey: 'vOQ920oyVBUNagdGh',
      })
      .then(
          () => {
          toast.success('Message Sent!!');
        },
        (error) => {

          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="w-full h-[600px] md:h-[500px] flex flex-col md:flex-row  items-center justify-center md:justify-around  ">
      <div className=' text-black flex flex-col  font-semibold m-5 h-full md:pt-[90px]'>
        <h1 className='text-center text-[30px] font-bold text-pink-500'>Personal Details</h1>
        <label className='mr-[50px]'><LocationCity/> Lahore,Punjab,Pakistan</label>
        <label><Email/> javeriakanwal383@gmail.com</label>
        <label><GitHub/> <Link to="https://github.com/Javeriach">https://github.com/Javeriach</Link></label>
      </div>
      <form
        ref={form}
        className=" h-[400px] w-[400px] mb-[40px] md:mb-0 px-10 flex flex-col gap-2 p-3 border-2 text-black border-black rounded-md"
        onSubmit={sendEmail}
      >
        <h1 className="text-center text-pink-600 text-2xl font-bold">
          Contact Me!
        </h1>

        <label className="text-start">Name</label>

        <input
          type="text"
          placeholder="Enter Name"
          className="w-full py-2 border-black  text-black border-2 px-2 rounded"
          name="user_name"
        />
        <label>Email</label>
        <input
          type="email"
          className='w-full py-2 placeholder="Enter Email" border-black text-black border-2 px-2 rounded'
          name="user_email"
        />
        <label>Message</label>
        <textarea
          name="message"
          placeholder="Message"
          className="w-full border-black border-2 py-2 px-2 rounded text-black"
        />
        <input
          type="submit"
          value="Send"
          className="bg-pink-600 py-2 mt-2 w-full cursor-pointer"
        />
      </form>
    </div>
  );
};
export default ContactMe;
