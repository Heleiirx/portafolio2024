import { useContext } from "react";
import { proyectsArr } from "../../contexts/proyectsContext";
import ProyectLinks from "../../components/proyectLinks";

export default function Kairo(){

    const proyects = useContext(proyectsArr);
    const kairo = proyects[0];

    return(
        <div className="w-full h-full flex p-4 gap-4">
            <div className="bg-primary w-2/5 min-h-20 flex flex-col gap-1 p-4">
                <h2 className="text-5xl font-bold text-white">{kairo.title}</h2>
                <h5 className="text-md font-bold" >Team project</h5>
                <p className="text-sm font-mono">{kairo.description}</p>
                <ProyectLinks page={kairo.pageURL} repo={kairo.repoURL} figma={kairo.figmaURL} bgcolor={kairo.primaryColor} className='flex-col self-start gap-4 mt-4' />
            </div>
            <div className="bg-secondary w-3/5 min-h-20"></div>
        </div>
    )
}