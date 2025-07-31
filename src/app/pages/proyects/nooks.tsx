import React, {useContext} from "react";
import { proyectsArr } from "../../contexts/proyectsContext";
import ProyectColors from "../../components/proyectColors";
import ProyectLinks from "../../components/proyectLinks";
import ProyectSkills from "../../components/proyectSkills";
import Image from "next/image";
import nm1 from '@/img/nooksMob1.png';
import nm2 from '@/img/nooksMob2.png';
import nm3 from '@/img/nooksMob3.png';
import XCarousel from "@/app/components/XInfiniteCarousel";
import { NooksArr } from "@/app/contexts/carouselArr";

export default function Nooks(){
    const proyects = useContext(proyectsArr);
    const nooks = proyects[1];
    const colores:object[] = proyects[1].colors;
    const primaryColor:string = proyects[1].primaryColor;

    return(<div className="relative">
    <div className="absolute w-screen h-fit lg:translate-y-1/3">
     <XCarousel imagenesArr={NooksArr} direccion className="hidden lg:inline lg:translate-y-8 lg:-translate-x-1/3 lg:absolute" ></XCarousel>
     <XCarousel imagenesArr={NooksArr} className="hidden lg:inline lg:-translate-x-1/2 lg:translate-y-40 lg:absolute" ></XCarousel>
    </div>
    <div className="h-screen relative flex flex-col items-center overflow-y-hidden">
        <div className="relative flex flex-col pr-10 gap-4 w-screen z-10 lg:mt-16">
            <h1 className="w-1/2 text-5xl lg:text-6xl text-right self-end font-mono" style={{color:`#${primaryColor}`}}>{nooks.title}</h1>
            <article className="text-right w-3/4 self-end font-mono text-lg lg:text-xl lg:w-1/2">{nooks.description}</article>
            <ProyectLinks page={nooks.pageURL} repo={nooks.repoURL} bgcolor={primaryColor} className="justify-evenly w-screen lg:w-2/5 lg:self-end lg:gap-1" />
        </div>
        <div className="flex w-5/6 justify-center gap-2 mt-16 lg:translate-y-48 lg:mt-0">
            <Image src={nm1} className="w-1/3 translate-y-12" alt="Screenshot pagina principal nooks"></Image>
            <Image src={nm2} className="w-1/3" alt="Screenshot productos nooks"></Image>
            <Image src={nm3} className="w-1/3 translate-y-12" alt="Screenshot producto nooks"></Image>
        </div>
        <div className="absolute flex flex-col-reverse gap-4 h-fill items-center bottom-14 bg-background py-4 lg:flex-row-reverse lg:items-center lg:w-screen lg:justify-evenly lg:bottom-1/4 lg:py-0 lg:h-fit">
            <ProyectColors colors={colores} primaryColor={primaryColor} classNameParent="gap-4 lg:p-2"/>
            <ProyectSkills  skills={nooks.skills} bgcolor={primaryColor} className="mx-5 my-4 gap-4 lg:self-start lg:w-1/2 lg:my-0 lg:p-2" />
        </div>
    </div>
    </div>
           
    );
};