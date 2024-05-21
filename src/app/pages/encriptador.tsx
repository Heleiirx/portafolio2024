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

    return<div className="flex flex-col">
        <h1>{encriptador.title}</h1>
        <article className="font-mono">{encriptador.description}</article>
        <ProyectLinks page={encriptador.pageURL} repo={encriptador.repoURL} />
        <ProyectColors colors={colores} />
        <ProyectSkills skills={encriptador.skills} bgcolor={encriptador.primaryColor} />
        {/* <Image src={`${desktopImg}`} ></Image> */}
    </div>
};