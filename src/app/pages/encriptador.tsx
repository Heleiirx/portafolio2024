import React, { useContext } from "react";
import Image from 'next/image'
import { proyectsArr } from "./proyects/proyectsContext";
import ProyectLinks from "../components/proyectLinks";
import ProyectColors from "../components/proyectColors";
import ProyectSkills from "../components/proyectSkills";
import desktopImg from '@/img/encriptadorDesktop.png';

export default function Encriptador(){
    const proyects = useContext(proyectsArr);
    const encriptador= proyects[0];
    const colores:object[] = encriptador.colors;

    return(
    <div className="flex flex-col min-h-screen pt-14">
        <div className="flex flex-col gap-4 items-center">
            <h1 className="text-5xl" style={{color:`#${encriptador.primaryColor}`}}>{encriptador.title}</h1>
            <article className="font-mono w-3/4 text-lg">{encriptador.description}</article>
            <ProyectLinks page={encriptador.pageURL} repo={encriptador.repoURL} bgcolor={encriptador.primaryColor} justify="evenly" width="screen"/>
        </div>
        <div className="flex flex-col mt-5 relative">
            <Image alt="Encriptador Desktop" src={desktopImg} className="translate-x-1/4 h-96" ></Image>
            <ProyectColors colors={colores}/>
            <ProyectSkills skills={encriptador.skills} bgcolor={encriptador.primaryColor} />
        </div>
    </div>);
};