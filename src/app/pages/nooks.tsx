import React, {useContext} from "react";
import Image from "next/image";
import { proyectsArr } from "./proyects/proyectsContext";
import ProyectColors from "../components/proyectColors";
import ProyectLinks from "../components/proyectLinks";
import ProyectSkills from "../components/proyectSkills";
import hsDesktop from "@/img/hstubeDesktop.png";

export default function Nooks(){
    const proyects = useContext(proyectsArr);
    const nooks = proyects[0];
    const colores:object[] = proyects[1].colors;
    const primaryColor:string = proyects[1].primaryColor;

    return(
        <div>
            <h1>HStube</h1>
            <article>Aplicación web de streaming que reune videos de youtube en una API rest diseñada con Json-Server, permite añadir videos, eliminarlos y editar la información añadida.</article>
            <ProyectLinks page={nooks.pageURL} repo={nooks.repoURL} bgcolor={nooks.primaryColor}  />
            <ProyectColors colors={colores} primaryColor={primaryColor} />
            <Image src={hsDesktop} alt="HStube Desktop"></Image>
            <ProyectSkills  skills={nooks.skills} bgcolor={primaryColor}/>
        </div>
    );
};