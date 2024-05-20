import {Link} from "@nextui-org/react";
import { FaExternalLinkAlt, FaGithub, FaFigma } from "react-icons/fa";

export default function ProyectLinks(props:any){
   return(
    <div className="flex gap-3 flex-wrap">
        <Link href={props.page}>
            <FaExternalLinkAlt></FaExternalLinkAlt>
            Página web
        </Link>
        <Link href={props.repo}>
            <FaGithub></FaGithub>
            Repositorio
        </Link>
        { !props.figma ? null : ( <Link href={props.figma}>
            <FaFigma></FaFigma>
            Diseño Figma
        </Link> )
        }
        
    </div>
)};