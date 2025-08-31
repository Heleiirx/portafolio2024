import { useContext } from "react";
import Image from "next/image";
import { proyectsArr } from "../../contexts/proyectsContext";
import ProyectLinks from "../../components/proyectLinks";
import ProyectSkills from "../../components/proyectSkills";
import { RedDeVidaArr } from "@/app/contexts/carouselArr";
import XCarousel from "@/app/components/XInfiniteCarousel";
import rdv1 from '@/img/rdv_mobile1.png';
import rdv2 from '@/img/rdv_mobile2.png';
import rdv3 from '@/img/rdv_mobile3.png';

export default function RedDeVida(){

    const proyects = useContext(proyectsArr);
    const redDeVida = proyects[4];

    return(
        <div className="w-full h-full flex flex-col py-4 px-6 lg:px-12 gap-4">
                <div className="absolute w-screen h-fit lg:translate-y-1/3">
                    <XCarousel imagenesArr={RedDeVidaArr} direccion className="hidden lg:inline lg:translate-y-6 lg:-translate-x-1/3 lg:absolute" ></XCarousel>
                    <XCarousel imagenesArr={RedDeVidaArr} className="hidden lg:inline lg:-translate-x-1/2 lg:translate-y-40 lg:absolute" ></XCarousel>
                </div>
            <div className="w-screen min-h-20 flex gap-1 lg:pe-36 lg:pt-24 relative justify-end">
                <div className="w-1/2 flex flex-col gap-1 p-4">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white self-end" style={{color:`#${redDeVida.primaryColor}`}}>{redDeVida.title}</h2>
                    {redDeVida.type === 'personal' ?  <h5 className="text-md font-bold self-end text-end" >Personal project</h5> : <h5 className="text-md font-bold self-end text-right" >Team project</h5>} 
                    <p className="text-sm font-mono self-end text-end lg:w-3/4">{redDeVida.description}</p>
                    <ProyectLinks page={redDeVida.pageURL} repo={redDeVida.repoURL} figma={redDeVida.figmaURL} bgcolor={redDeVida.primaryColor} className='                    
                    ' />
                </div>
            </div>
            <div className="w-full min-h-20 flex items-center gap-4 px-16">
                <div className="flex flex-col gap-2 mt-4 lg:mt-0 w-1/2">
                <ProyectSkills skills={redDeVida.skills} bgcolor={redDeVida.primaryColor} className="mb-16 w-3/4 "/>
                    <h5 className="text-md font-bold" >Timeline</h5>
                    <p className="text-sm font-mono">{redDeVida.timeline}</p>
                    <h5 className="text-md font-bold mt-6" >Role</h5>
                    <p className="text-sm font-mono">{redDeVida.role}</p>
                </div>
                <div className="flex gap-8 w-1/2">
                    <Image src={rdv1} className="w-1/3 translate-y-12 shadow-lg" alt="Screenshot pagina principal nooks"></Image>
                    <Image src={rdv2} className="w-1/3 shadow-lg" alt="Screenshot productos nooks"></Image>
                    <Image src={rdv3} className="w-1/3 translate-y-12 shadow-lg" alt="Screenshot producto nooks"></Image>
                </div>
            </div>
        </div>
    )
}