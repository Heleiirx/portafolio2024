'use client';
import React,{useContext} from "react"
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
  const proyectos = useContext(proyectsArr);

  return (
    <main className="overflow-hidden">
      <Navegacion/>
      <Cover/>
      <AboutMe/>
      <Banner bannerText=' ☆ FORMACIÓN ACADEMICA' background='bg-secondary'></Banner>
      <Education/>
      <proyectsArr.Provider value={proyectos}>
        <Proyects/>
      </proyectsArr.Provider>
      <Contacto/>
      <Footer/>
    </main>
  );
}
