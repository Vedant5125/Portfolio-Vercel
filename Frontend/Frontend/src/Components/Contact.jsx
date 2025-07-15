import React from "react";
import axios from "axios";
import './Contact.css'
import { useState } from "react";

const Contact = () => {

  const [formData,setformData] = useState({
    name :"",
    email :"",
    message :""
  });

  const handleChange = (e) =>{
    setformData({
      ...formData,[e.target.name] : e.target.value
    });
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    let url = "http://localhost:9000/msg";
    axios.post(url , formData)
    .then(()=>{
      alert("Message sent successfully")
    })
    .catch((error)=>{
      alert(error)
    })
    .finally(()=>{
      setformData({
      name :"",
      email :"",
      message :""
      })
    })
  }

  return (
    <div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Me</h2>
        <input type="text" placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required />
        <input type="email" placeholder="Your Email" name="email" value={formData.email} onChange={handleChange} required />
        <textarea placeholder="Your Message" rows="5" name="message" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
