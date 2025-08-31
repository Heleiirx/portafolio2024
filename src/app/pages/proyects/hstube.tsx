import { useContext } from "react";
import Image from "next/image";
import ProyectColors from "../../components/proyectColors";
import ProyectLinks from "../../components/proyectLinks";
import ProyectSkills from "../../components/proyectSkills";
import { proyectsArr } from "../../contexts/proyectsContext";
import hsDesk from '@/img/hstubeDesktop.png';
import VerticalCarousel from "../../components/VerticalCarousel";
import { HstubeArr } from "../../contexts/carouselArr";

export default function HStube(){
    const proyects = useContext(proyectsArr);
    const hstube = proyects[3];
    const colors:object[] = hstube.colors;
    const primaryColor:string = hstube.primaryColor;

    return(
        <div className="pt-6 relative h-screen lg:flex mt-12" >
            <div className="flex flex-col items-center">
                {/* <ProyectColors colors={colors} primaryColor={primaryColor} classNameParent="translate-x-20 -translate-y-6 gap-3 lg:translate-x-0 lg:-translate-y-0 lg:pb-4" classNameChild="" /> */}
                <div className="flex gap-12 w-1/2 h-96 lg:h-full overflow-hidden">
                    <VerticalCarousel direccion={true} imagenesArr={HstubeArr} />
                    <VerticalCarousel imagenesArr={HstubeArr} className="-translate-y-36" />
                </div>
                <ProyectSkills skills={hstube.skills} bgcolor={primaryColor} className="mx-5 gap-5 lg:w-96 lg:p-4"/>
            </div>
            <div className="flex flex-col px-12 gap-5 lg:basis-2/3 lg:gap-3 lg:pb-4">
                <h1 className='text-4xl lg:text-5xl font-bold text-white' style={{color:`#${primaryColor}`}} >{hstube.title}</h1>
                {hstube.type === 'personal' ?  <h5 className="text-md font-bold" >Personal project</h5> : <h5 className="text-md font-bold" >Team project</h5>} 
                <span className="flex gap-6">
                    <h5 className="text-md font-bold" >Timeline</h5>
                    <p className="text-sm font-mono">{hstube.timeline}</p>
                </span>
                <article className="text-sm font-mono">{hstube.description}</article>
                <ProyectLinks page={hstube.pageURL} repo={hstube.repoURL} figma={hstube.figmaURL} bgcolor={primaryColor} className='flex self-center gap-4 my-4' />
                <Image src={hsDesk} alt='Screenshot HStube desktop' className="-translate-x-20 z-0 -translate-y-20 lg:-translate-x-0 lg:-translate-y-0 lg:w-9/12" />
            </div>
        </div>
    );
};