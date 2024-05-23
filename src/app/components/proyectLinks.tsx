import {Link} from "@nextui-org/react";
import { FaExternalLinkAlt, FaGithub, FaFigma } from "react-icons/fa";

export default function ProyectLinks(props:any){
   return(
    <div className={`flex flex-wrap justify-${props.justify} w-${props.width}`}>
        <Link size="lg" href={props.page} style={{color:`#${props.bgcolor}`}}>
            <FaExternalLinkAlt></FaExternalLinkAlt>
            Página web
        </Link>
        <Link size="lg" href={props.repo} style={{color:`#${props.bgcolor}`}}>
            <FaGithub></FaGithub>
            Repositorio
        </Link>
        { !props.figma ? null : ( <Link size="lg" href={props.figma} style={{color:`#${props.bgcolor}`}}>
            <FaFigma></FaFigma>
            Diseño Figma
        </Link> )
        }
        
    </div>
)};