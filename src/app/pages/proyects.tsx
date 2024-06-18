import React, { useRef } from "react";
import { NavbarScroll } from "@/app/utils/AnimationUtils";
import Banner from "@/app/components/banner";
import Encriptador from "./proyects/encriptador";
import Nooks from "./proyects/nooks";
import HStube from "./proyects/hstube";

export default function Proyects( { id, setActiveSection }: any ){
    const ref =useRef(null);

    //Funcion que activa el cambio de elemento activo en abrra de navegación
    NavbarScroll({id, setActiveSection}, ref);

    return (
        <div ref={ref} id={id} className="flex flex-col h-fit items-center justify-center relative">
            <Banner bannerText=' ☆ MIS PROYECTOS' background='bg-primary'></Banner>
            <Encriptador/>
            <Nooks/>
            <HStube/>
        </div>
    );
}