import React, {useContext} from "react";
import { proyectsArr } from "../../contexts/proyectsContext";
import ProyectColors from "../../components/proyectColors";
import ProyectLinks from "../../components/proyectLinks";
import ProyectSkills from "../../components/proyectSkills";
import Image from "next/image";
import nm1 from '@/img/nooksMob1.png';
import nm2 from '@/img/nooksMob2.png';
import nm3 from '@/img/nooksMob3.png';
import Carousel from "../../components/InfiniteCarousel";
import { NooksArr } from "@/app/contexts/carouselArr";

export default function Nooks(){
    const proyects = useContext(proyectsArr);
    const nooks = proyects[1];
    const colores:object[] = proyects[1].colors;
    const primaryColor:string = proyects[1].primaryColor;

    return(<>
     <Carousel imagenesArr={NooksArr} ></Carousel>
        <div className="h-screen relative pt-20 h-screen flex flex-col items-center overflow-y-hidden	">
            <div className="relative flex flex-col pr-10 gap-4 w-screen z-10">
                <h1 className="w-1/2 text-5xl lg:text-6xl text-right self-end" style={{color:`#${primaryColor}`}}>{nooks.title}</h1>
                <article className="text-right w-3/4 self-end font-mono text-lg lg:text-xl lg:w-1/2">{nooks.description}</article>
                <ProyectLinks page={nooks.pageURL} repo={nooks.repoURL} bgcolor={primaryColor} className="justify-evenly w-screen lg:w-2/5 lg:self-end lg:gap-1" />
            </div>
            <div className="flex w-5/6 justify-center gap-2 mt-16 lg:translate-y-36 lg:mt-0">
                <Image src={nm1} className="w-1/3 translate-y-12" alt="Screenshot pagina principal nooks"></Image>
                <Image src={nm2} className="w-1/3" alt="Screenshot productos nooks"></Image>
                <Image src={nm3} className="w-1/3 translate-y-12" alt="Screenshot producto nooks"></Image>
            </div>
            <div className="absolute flex flex-col-reverse gap-4 h-fill items-center bottom-14 bg-background py-4 lg:w-screen lg:bottom-20 lg:py-0 lg:h-fit lg:bg-transparent">
                <ProyectColors colors={colores} primaryColor={primaryColor} classNameParent="gap-4 self-end lg:pr-44 lg:-translate-y-20 bg-background lg:p-2"/>
                <ProyectSkills  skills={nooks.skills} bgcolor={primaryColor} className="mx-5 my-4 gap-4 lg:self-start lg:pl-24 lg:w-1/2 lg:my-0 bg-background lg:p-2" />
            </div>
        </div>
    </>
           
    );
};