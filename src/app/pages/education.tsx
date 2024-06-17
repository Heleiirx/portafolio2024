import React, { useRef } from "react";
import List from "../components/list/list";
import {educacion, cursosTitulaciones} from "../components/list/ListContent";
import { navbarScroll } from "../utils/AnimationUtils";

export default function Education( { id, setActiveSection  }:any ){
    const ref =useRef(null);

    //Funcion que activa el cambio de elemento activo en abrra de navegación
    navbarScroll({id, setActiveSection}, ref);

    return (
    <div ref={ref} id={id} className="flex flex-col h-fit items-center justify-center relative lg:h-full lg:mb-12">
        <div className="w-screen flex flex-col items-center my-12 gap-8 relative lg:h-96 lg:items-start lg:px-24 ">
            <List title='Educación' content={educacion} flexDirection={'col'}/>
            <List title='Cursos y Titulaciones' content={cursosTitulaciones} flexDirection={'col'}/>
            <div className="felx flex-col items-center w-3/4 gap-6 lg:w-1/2 lg:absolute lg:top-0 lg:right-0">
                <h1 className="text-2xl text-left">Idiomas</h1>
                <ul className="flex gap-16 ">
                    <li className="first-line:tracking-widest
                            first-letter:text-3xl first-letter:font-bold
                            first-letter:mr-3 first-letter:float-left first-letter:text-secondary">
                        ☆ Español <br /> Nativo
                        
                    </li>
                    <li className="first-line:tracking-widest
                            first-letter:text-3xl first-letter:font-bold
                            first-letter:mr-3 first-letter:float-left first-letter:text-secondary">
                        ☆ Inglés <br /> Básico
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
}