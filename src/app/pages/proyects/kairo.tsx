import { useContext } from "react";
import Image from "next/image";
import { proyectsArr } from "../../contexts/proyectsContext";
import ProyectLinks from "../../components/proyectLinks";
import kairoDesk from '@/img/Dashboard.png';
import kairoTasks from '@/img/Tasks.png';
import kairoBoard from '@/img/Projects.png';
import kairoPomodoro from '@/img/Pomodoro.png';

export default function Kairo(){

    const proyects = useContext(proyectsArr);
    const kairo = proyects[0];

    return(
        <div className="w-full h-full flex py-4 px-12 gap-4">
            <div className="w-2/5 min-h-20 flex flex-col gap-1 p-4">
                <h2 className="text-5xl font-bold text-white" style={{color:`#${kairo.primaryColor}`}}>{kairo.title}</h2>
                <h5 className="text-md font-bold" >{kairo.type}</h5>
                <p className="text-sm font-mono">{kairo.description}</p>
                <ProyectLinks page={kairo.pageURL} repo={kairo.repoURL} figma={kairo.figmaURL} bgcolor={kairo.primaryColor} className='flex self-center gap-4 my-4' />

                <Image alt="Kairo tasks" src={kairoTasks} className="w-full self-center h-auto" />
                {/* <Image alt="Kairo projects board" src={kairoBoard} className="w-full self-center h-auto my-4" /> */}
            </div>
            <div className="w-3/5 min-h-20 flex flex-col items-center gap-1 p-4">
                <Image alt="Kairo Dashboard" src={kairoDesk} className="w-4/5 h-auto"/>
                <div className="flex justiify-center items-center flex-wrap gap-2 mt-4">
                    <Image alt="Kairo Dashboard" src={kairoPomodoro} className="w-1/2 h-auto"/>
                    <div className="w-1/3 flex flex-col gap-2 self-center ms-6">
                        <h5 className="text-md font-bold" >Timeline</h5>
                        <p className="text-sm font-mono">{kairo.timeline}</p>
                        <h5 className="text-md font-bold mt-6" >Role</h5>
                        <p className="text-sm font-mono">{kairo.role}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}