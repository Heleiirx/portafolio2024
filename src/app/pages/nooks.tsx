import React, {useContext} from "react";
import { proyectsArr } from "./proyects/proyectsContext";
import ProyectColors from "../components/proyectColors";
import ProyectLinks from "../components/proyectLinks";
import ProyectSkills from "../components/proyectSkills";

export default function Nooks(){
    const proyects = useContext(proyectsArr);
    const nooks = proyects[0];
    const colores:object[] = proyects[1].colors;
    const primaryColor:string = proyects[1].primaryColor;

    return(
        <div className="h-screen relative pt-16">
            <div className="relative flex flex-col items-end pr-10">
                <h1 className="w-1/2 text-5xl lg:text-6xl text-right" style={{color:`#${primaryColor}`}}>Nooks Shop</h1>
                <article className="text-right w-3/4 lg:w-1/3">Aplicación web de streaming que reune videos de youtube en una API rest diseñada con Json-Server, permite añadir videos, eliminarlos y editar la información añadida.</article>
                <ProyectLinks page={nooks.pageURL} repo={nooks.repoURL} bgcolor={primaryColor}  />
            </div>
            <div className="relative flex flex-col-reverse gap-4 h-fill">
                <ProyectColors colors={colores} primaryColor={primaryColor} />
                <ProyectSkills  skills={nooks.skills} bgcolor={primaryColor}/>
            </div>
        </div>
    );
};