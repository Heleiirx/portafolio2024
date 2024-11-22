import React, { useRef } from "react";
import List from "@/app/components/list";
import {educacion, cursosTitulaciones} from "../contexts/ListContent";
import { NavbarScroll } from "../utils/AnimationUtils";

export default function Education( { id, setActiveSection  }:any ){
    const ref =useRef(null);

    //Funcion que activa el cambio de elemento activo en abrra de navegación
    NavbarScroll({id, setActiveSection}, ref);

    return (
    <div ref={ref} id={id} className="flex flex-col h-fit items-center justify-center relative lg:h-full lg:mb-24">
        <div className="w-screen flex flex-col items-center my-12 gap-8 relative lg:h-96 lg:items-start lg:px-24">
            <List title='Educación' content={educacion} flexDirection={'col'} fatherClass="w-3/4 lg:h-1/2" childClass="lg:flex-wrap" />
            <List title='Cursos y Titulaciones' content={cursosTitulaciones} flexDirection={'col'} fatherClass="w-3/4" childClass="lg:flex-wrap"/>
            {/* Inicia card idiomas */}
            <div className="felx flex-col items-center w-3/4 gap-6 lg:w-fit lg:p-24 lg:absolute lg:top-0 lg:right-0 lg:bg-primary lg:rounded">
                <h1 className="text-2xl text-left lg:text-background lg:tracking-wide">Idiomas</h1>
                <ul className="flex lg:flex-col gap-16 ">
                    <li className="first-line:tracking-widest
                            first-letter:text-3xl first-letter:font-bold lg:text-background lg:tracking-wide
                            first-letter:mr-3 first-letter:float-left first-letter:text-secondary">
                        ☆ Español <br /> Nativo
                        
                    </li>
                    <li className="first-line:tracking-widest
                            first-letter:text-3xl first-letter:font-bold lg:text-background lg:tracking-wide
                            first-letter:mr-3 first-letter:float-left first-letter:text-secondary">
                        ☆ Inglés <br /> Básico
                    </li>
                </ul>
            </div>
            {/* Termina card idiomas */}
        </div>
    </div>
    );
}