import React, { useContext } from "react";
import Image from 'next/image'
import { proyectsArr } from "../../contexts/proyectsContext";
import ProyectLinks from "../../components/proyectLinks";
import ProyectColors from "../../components/proyectColors";
import ProyectSkills from "../../components/proyectSkills";
import desktopImg from '@/img/encriptadorDesktop.png';
import mobileImg from '@/img/encriptadorMovile.png'

export default function Encriptador(){
    const proyects = useContext(proyectsArr);
    const encriptador= proyects[1];
    const colores:object[] = encriptador.colors;
    const primaryColor = encriptador.primaryColor;

    return(
    <div className="flex flex-col min-h-screen pt-16 relative">
        <div className="flex flex-col gap-4 items-center relative lg:flex-row lg:justify-evenly lg:items-start">
            <h1 className="text-5xl lg:text-6xl" style={{color:`#${encriptador.primaryColor}`}}>{encriptador.title}</h1>
            <p>{encriptador.type}</p>
            <p>{encriptador.timeline}</p>
            <article className="font-mono w-3/4 text-lg lg:w-1/2 lg:text-xl lg:pb-14">{encriptador.description}</article>
            <ProyectLinks page={encriptador.pageURL} repo={encriptador.repoURL} bgcolor={encriptador.primaryColor} className="lg:w-1/2 lg:absolute lg:bottom-0 lg:right-12 justify-evenly w-screen"/>
        </div>
        <div className="flex flex-col mt-5 relative lg:-translate-y-12 lg:mt-0">
            <Image alt="Encriptador Desktop" src={desktopImg} className="translate-x-1/4 h-96 lg:h-auto lg:w-1/2 lg:translate-x-2" ></Image>
            <ProyectColors colors={colores} primaryColor={encriptador.primaryColor} classNameParent="absolute top-12 left-6 lg:relative lg:top-[12rem] lg:left-14 lg:w-1/4" classNameChild="flex-col mt-3" />
            <ProyectSkills skills={encriptador.skills} bgcolor={primaryColor} className="p-4 -translate-y-9 lg:-translate-y-24 lg:translate-x-10 lg:flex-wrap lg:mt-4 lg:w-1/2"/>
        </div>
        <Image alt="Encriptador Movile" src={mobileImg} className="hidden lg:w-5/12 lg:absolute lg:bottom-0 lg:right-0 lg:inline"></Image>
    </div>);
};