import React, { useRef } from "react";
import { NavbarScroll } from "@/app/utils/AnimationUtils";
import Banner from "@/app/components/banner";
import Encriptador from "./proyects/encriptador";
import Nooks from "./proyects/nooks";
import HStube from "./proyects/hstube";
import { PageProps } from "../utils/types";
import Kairo from "./proyects/kairo";
import RedDeVida from "./proyects/redDeVida";

export default function Proyects( { id, setActiveSection }: PageProps ){
    const ref =useRef(null);

    //Funcion que activa el cambio de elemento activo en abrra de navegación
    NavbarScroll({id, setActiveSection, ref});

    return (
        <div ref={ref} id={id} className="flex flex-col h-fit items-center justify-center relative">
            <Kairo />
            <RedDeVida/>
            {/* <Encriptador/> */}
            {/* <Nooks/> */}
            <HStube/>
        </div>
    );
}