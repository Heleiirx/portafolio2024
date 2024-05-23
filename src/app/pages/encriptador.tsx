import { useContext } from "react";
import {Image} from "@nextui-org/react";
import { proyectsArr } from "./proyects/proyectsContext";
import ProyectLinks from "../components/proyectLinks";
import ProyectColors from "../components/proyectColors";
import ProyectSkills from "../components/proyectSkills";
import desktopImg from '@/img/encriptadorDesktop.png';

export default function Encriptador(){
    const proyects = useContext(proyectsArr);
    const encriptador= proyects[0];
    const colores:object[] = encriptador.colors;

    return<div className="flex flex-col min-h-screen pt-14">
        <h1 className="text-5xl" style={{color:`#${encriptador.primaryColor}`}}>{encriptador.title}</h1>
        <article className="font-mono">{encriptador.description}</article>
        <ProyectLinks page={encriptador.pageURL} repo={encriptador.repoURL} bgcolor={encriptador.primaryColor} />
        <ProyectColors colors={colores} />
        <ProyectSkills skills={encriptador.skills} bgcolor={encriptador.primaryColor} />
        {/* <Image src={`${desktopImg}`} ></Image> */}
    </div>
};