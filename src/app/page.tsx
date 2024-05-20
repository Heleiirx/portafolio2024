'use client';
import React,{useContext} from "react"
import Cover from "./pages/cover";
import AboutMe from "./pages/aboutMe";
import Navegacion from "./components/navbar";
import Education from "./pages/education";
import Proyects from "./pages/proyects/proyects";
import { proyectsArr } from "./pages/proyects/proyectsContext";

export default function Home() {
  const proyectos = useContext(proyectsArr);

  return (
    <main className="overflow-hidden">
      <Navegacion/>
      <Cover/>
      <AboutMe/>
      <Education/>
      <proyectsArr.Provider value={proyectos}>
        <Proyects/>
      </proyectsArr.Provider>
    </main>
  );
}
