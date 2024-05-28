import {Link} from "@nextui-org/react";
import { FaExternalLinkAlt, FaGithub, FaFigma } from "react-icons/fa";

export default function ProyectLinks(props:any){
   return(
    <div className={`flex flex-wrap justify-${props.justify} w-${props.width} lg:w-1/2 lg:absolute lg:bottom-0 lg:right-12 `}>
        <Link size="lg" href={props.page} className="lg:text-2xl" style={{color:`#${props.bgcolor}`}}>
            <FaExternalLinkAlt></FaExternalLinkAlt>
            Página web
        </Link>
        <Link size="lg" href={props.repo} className="lg:text-2xl" style={{color:`#${props.bgcolor}`}}>
            <FaGithub></FaGithub>
            Repositorio
        </Link>
        { !props.figma ? null : ( <Link size="lg" href={props.figma} className="lg:text-2xl" style={{color:`#${props.bgcolor}`}}>
            <FaFigma></FaFigma>
            Diseño Figma
        </Link> )
        }
        
    </div>
)};