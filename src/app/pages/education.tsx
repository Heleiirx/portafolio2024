import React, { useRef } from "react";
import List from "@/app/components/list";
import {educacion, cursosTitulaciones, liderazgoYactividades} from "../contexts/ListContent";
import { NavbarScroll } from "../utils/AnimationUtils";
import { PageProps } from "../utils/types";

export default function Education( { id, setActiveSection  }:PageProps ){
    const ref =useRef(null);

    //Funcion que activa el cambio de elemento activo en abrra de navegación
    NavbarScroll({id, setActiveSection, ref});

    return (
    <div ref={ref} id={id} className="flex flex-col h-fit items-center justify-center lg:h-full lg:mb-24">
        <div className="w-screen flex flex-col items-center my-12 gap-8 relative lg:h-96 lg:items-start lg:px-28">
            <List title='Educación' content={educacion} flexDirection={'col'} fatherClass="w-3/4" childClass="lg:flex-wrap lg:gap-x-28" />
            <List title='Cursos y Titulaciones' content={cursosTitulaciones} flexDirection={'col'} fatherClass="w-3/4" childClass="lg:flex-wrap lg:gap-x-28"/>
            <List title='Liderazgo y Actividades' content={liderazgoYactividades} flexDirection={'col'} fatherClass="w-3/4" childClass="lg:flex-wrap lg:gap-x-28" />
        </div>
    </div>
    );
}