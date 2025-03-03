import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact'
import "./App.css"
import axios from 'axios';
import WhatsApp from './components/WhatsApp';

function App() {

  // const url = `https://ps-agent.onrender.com`; // Replace with your Render URL
  // const interval = 30000; // Interval in milliseconds (30 seconds)
  
  // //Reloader Function
  // function reloadWebsite() {
  //   axios.get(url)
  //     .then(response => {
  //       console.log(`Reloaded at ${new Date().toISOString()}: Status Code ${response.status}`);
  //     })
  //     .catch(error => {
  //       console.error(`Error reloading at ${new Date().toISOString()}:`, error.message);
  //     });
  // }
  
  // setInterval(reloadWebsite, interval);


  return (
    <div className="flex flex-col min-h-screen w-screen relative overflow-hidden">
      <Header />
      <main className="flex-grow">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <WhatsApp />
    </div>
  );
}

export default App;
