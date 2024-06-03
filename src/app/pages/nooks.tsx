import React, {useContext} from "react";
import { proyectsArr } from "./proyects/proyectsContext";
import ProyectColors from "../components/proyectColors";
import ProyectLinks from "../components/proyectLinks";
import ProyectSkills from "../components/proyectSkills";
import Image from "next/image";
import nm1 from '@/img/nooksMob1.png';
import nm2 from '@/img/nooksMob2.png';
import nm3 from '@/img/nooksMob3.png';

export default function Nooks(){
    const proyects = useContext(proyectsArr);
    const nooks = proyects[1];
    const colores:object[] = proyects[1].colors;
    const primaryColor:string = proyects[1].primaryColor;

    return(
        <div className="h-screen relative pt-20 h-screen flex flex-col items-center">
            <div className="relative flex flex-col pr-10 gap-4 w-screen">
                <h1 className="w-1/2 text-5xl lg:text-6xl text-right self-end" style={{color:`#${primaryColor}`}}>Nooks Shop</h1>
                <article className="text-right w-3/4 lg:w-1/3 self-end">Aplicación web de streaming que reune videos de youtube en una API rest diseñada con Json-Server, permite añadir videos, eliminarlos y editar la información añadida.</article>
                <ProyectLinks page={nooks.pageURL} repo={nooks.repoURL} bgcolor={primaryColor} className="justify-evenly w-screen" />
            </div>
            <div className="flex w-5/6 justify-center gap-2 mt-16">
                <Image src={nm1} className="w-1/3 translate-y-12" alt="Screenshot pagina principal nooks"></Image>
                <Image src={nm2} className="w-1/3" alt="Screenshot productos nooks"></Image>
                <Image src={nm3} className="w-1/3 translate-y-12" alt="Screenshot producto nooks"></Image>
            </div>
            <div className="absolute flex flex-col-reverse gap-4 h-fill items-center bottom-14 bg-background py-4">
                <ProyectColors colors={colores} primaryColor={primaryColor} classNameParent="gap-4"/>
                <ProyectSkills  skills={nooks.skills} bgcolor={primaryColor} className="mx-5 my-10 gap-4" />
            </div>
        </div>
    );
};