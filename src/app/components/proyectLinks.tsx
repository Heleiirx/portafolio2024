import {Link} from "@nextui-org/react";
import { FaExternalLinkAlt, FaGithub, FaFigma } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

interface proyectLinksProps{
    className:string,
    bgcolor:string,
    page:string,
    repo:string,
    figma?:string,
}

export default function ProyectLinks({className, bgcolor, page, repo, figma}:proyectLinksProps){
    const {t, language} = useLanguage();

   return(
    <div className={`flex flex-wrap ${className} items-center justify-center `}>
    <Link size="lg" href={page} className="lg:text-xl flex gap-1 hover:underline transition-all duration-200 mx-8" style={{color:`#${bgcolor}`}}>
            <FaExternalLinkAlt></FaExternalLinkAlt>
            {t('projects.demoLink')}
        </Link>
    <Link size="lg" href={repo} className="lg:text-xl flex gap-1 hover:underline transition-all duration-200 mx-8" style={{color:`#${bgcolor}`}}>
            <FaGithub></FaGithub>
            {t('projects.repoLink')}
        </Link>
    { ! figma ? null : ( <Link size="lg" href={figma} className="lg:text-xl flex gap-1 hover:underline transition-all duration-200 mx-8" style={{color:`#${bgcolor}`}}>
            <FaFigma></FaFigma>
            {t('projects.figmaLink')}
        </Link> )
        }
        
    </div>
)};