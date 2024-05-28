import React, { useContext } from "react";
import Image from 'next/image'
import { proyectsArr } from "./proyects/proyectsContext";
import ProyectLinks from "../components/proyectLinks";
import ProyectColors from "../components/proyectColors";
import ProyectSkills from "../components/proyectSkills";
import desktopImg from '@/img/encriptadorDesktop.png';
import mobileImg from '@/img/encriptadorMovile.png'

export default function Encriptador(){
    const proyects = useContext(proyectsArr);
    const encriptador= proyects[0];
    const colores:object[] = encriptador.colors;
    const primaryColor = encriptador.primaryColor;

    return(
    <div className="flex flex-col min-h-screen pt-16 relative">
        <div className="flex flex-col gap-4 items-center relative lg:flex-row lg:justify-evenly lg:items-start">
            <h1 className="text-5xl lg:text-6xl" style={{color:`#${encriptador.primaryColor}`}}>{encriptador.title}</h1>
            <article className="font-mono w-3/4 text-lg lg:w-1/2 lg:text-xl lg:pb-14">{encriptador.description}</article>
            <ProyectLinks page={encriptador.pageURL} repo={encriptador.repoURL} bgcolor={encriptador.primaryColor} justify="evenly" width="screen"/>
        </div>
        <div className="flex flex-col mt-5 relative lg:-translate-y-12 lg:mt-0">
            <Image alt="Encriptador Desktop" src={desktopImg} className="translate-x-1/4 h-96 lg:h-auto lg:w-1/2 lg:translate-x-2" ></Image>
            <ProyectColors colors={colores} primaryColor={encriptador.primaryColor}/>
            <ProyectSkills skills={encriptador.skills} bgcolor={primaryColor} />
        </div>
        <Image alt="Encriptador Desktop" src={mobileImg} className="lg:w-5/12 lg:absolute lg:bottom-0 lg:right-0"></Image>
    </div>);
};