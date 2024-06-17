'use client';
import React,{useContext, useState} from "react"
import Cover from "./pages/cover";
import AboutMe from "./pages/aboutMe";
import Banner from "./components/banner";
import Navegacion from "./components/navbar";
import Education from "./pages/education";
import Proyects from "./pages/proyects/proyects";
import Contacto from "./pages/contacto";
import Footer from "./components/footer";
import { proyectsArr } from "./pages/proyects/proyectsContext";

export default function Home() {
  const [activeSection, setActiveSection] = useState('');

  const proyectos = useContext(proyectsArr);

 
  return (
    <main className="overflow-hidden">
      <Navegacion activeSection={activeSection} />
      <Cover/>
      <AboutMe id='about-me' setActiveSection={setActiveSection} />
      <Banner bannerText=' ☆ FORMACIÓN ACADEMICA' background='bg-secondary'></Banner>
      <Education id='education' setActiveSection={setActiveSection} />
      <proyectsArr.Provider value={proyectos}>
        <Proyects id='proyects' setActiveSection={setActiveSection} />
      </proyectsArr.Provider>
      <Contacto id='contact' setActiveSection={setActiveSection} />
      <Footer/>
    </main>
  );
}
