import { useContext } from "react";
import Image from "next/image";
import ProyectColors from "../components/proyectColors";
import ProyectLinks from "../components/proyectLinks";
import ProyectSkills from "../components/proyectSkills";
import { proyectsArr } from "./proyects/proyectsContext";
import hsDesk from '@/img/hstubeDesktop.png';

export default function HStube(){
    const proyects = useContext(proyectsArr);
    const hstube = proyects[2];
    const colors:object[] = hstube.colors;
    const primaryColor:string = hstube.primaryColor;

    return(
        <div className="" >
            <div className="flex flex-col px-12 gap-4 z-10">
                <h1 className='text-5xl lg:text-6xl' style={{color:`#${primaryColor}`}} >{hstube.title}</h1>
                <article className="font-mono text-lg lg:text-xl">{hstube.description}</article>
                <ProyectLinks page={hstube.pageURL} repo={hstube.repoURL} bgcolor={primaryColor} className='flex-col self-end translate-y-10 gap-6' />
            </div>
            <Image src={hsDesk} alt='Screenshot HStube desktop' className="-translate-x-20 z-0 -translate-y-20" />
            <ProyectColors colors={colors} primaryColor={primaryColor} />
            <ProyectSkills skills={hstube.skills} bgcolor={primaryColor} />
        </div>
    );
};