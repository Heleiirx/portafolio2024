import {Link} from "@nextui-org/react";
import { FaExternalLinkAlt, FaGithub, FaFigma } from "react-icons/fa";

interface proyectLinksProps{
    className:string,
    bgcolor:string,
    page:string,
    repo:string,
    figma?:string,
}

export default function ProyectLinks({className, bgcolor, page, repo, figma}:proyectLinksProps){
   return(
    <div className={`flex flex-wrap ${className} `}>
        <Link size="lg" href={page} className="lg:text-2xl" style={{color:`#${bgcolor}`}}>
            <FaExternalLinkAlt></FaExternalLinkAlt>
            Página web
        </Link>
        <Link size="lg" href={repo} className="lg:text-2xl" style={{color:`#${bgcolor}`}}>
            <FaGithub></FaGithub>
            Repositorio
        </Link>
        { ! figma ? null : ( <Link size="lg" href={figma} className="lg:text-2xl" style={{color:`#${bgcolor}`}}>
            <FaFigma></FaFigma>
            Diseño Figma
        </Link> )
        }
        
    </div>
)};