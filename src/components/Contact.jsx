import React, { useState } from 'react';
import axios from 'axios';
import emailjs from "emailjs-com";
import dotenv from "dotenv"

// dotenv.config({path:"../.env"})

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit =async  (e) => {
    e.preventDefault();
console.log((import.meta.env.VITE_SERVICE_ID), import.meta.env.VITE_TEMPLATE_ID, import.meta.env.VITE_USER_ID)
    // Replace with your EmailJS service ID, template ID, and user ID
    const serviceID = "service_4j1aemh";
    const templateID = "template_84y6kdj";
    const userID = "09mvqdah_urRSaGrL";
    console.log(typeof(serviceID))
try {
  
  const response =  await emailjs.send(serviceID, templateID, formData, userID)
     
       console.log("Email sent successfully!", response);
       alert("Message sent successfully!");
       setFormData({
         name: '',
         email: '',
         phone: '',
         message: ''
       }); // Clear form
} catch (error) {
  
  console.error("Failed to send email:", error);
  alert("Failed to send message. Please try again.");
}
      
  };

  return (<>
    <section id="contact" className="bg-gradient-to-b from-gray-700 via-gray-600 to-gray-900 p-8 ">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Contact</h2>
      <p className="mt-4 md:mt-9 text-base md:text-xl text-center">Reach out to us for creating a website or enquires.</p>
      <form className="text-black form mt-8 max-w-xl mx-auto space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="placeholder:text-gray-700 block w-full p-3 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="placeholder:text-gray-700 block w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="number"
          name="phone"
          placeholder="Mobile number"
          value={formData.phone}
          onChange={handleChange}
          className="placeholder:text-gray-700 block w-full p-3 border border-gray-300 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="placeholder:text-gray-700 block w-full p-3 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="block bg-blue-700 mx-auto text-white px-6 py-3 rounded font-bold hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
      {statusMessage && <p className="text-center mt-4 text-red-500">{statusMessage}</p>}

      {/* WhatsApp Link */}
      <p className="mt-8 text-center">Prefer WhatsApp? <a href="https://api.whatsapp.com/send?phone=7021235201&text=Hello%2C%20I%20have%20a%20question%20about%20your%20services" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Chat with us on WhatsApp</a>.</p>
    </section>
  </>
  );
};

export default Contact;
