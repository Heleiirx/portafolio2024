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
        <div>
            <h1>HStube</h1>
            <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore laboriosam rem in, modi illo incidunt doloribus alias. Ea, nihil molestiae dicta repellat dolorem reiciendis, perspiciatis ipsum exercitationem excepturi odit deserunt?</article>
            <Image src={hsDesk} alt='Screenshot HStube desktop' />
            <ProyectLinks page={hstube.pageURL} repo={hstube.repoURL} bgcolor={primaryColor} />
            <ProyectColors colors={colors} primaryColor={primaryColor} />
            <ProyectSkills skills={hstube.skills} bgcolor={primaryColor} />
        </div>
    );
};