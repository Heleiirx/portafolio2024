import {Chip, Tooltip} from "@nextui-org/react";

export default function ProyectSkills(props:any){
    return(
     <div className="flex flex-col">
        <h3>Herramientas</h3>
        <div className="flex gap-4 flex-wrap">
            {
                props.skills.map((skill:any, index:number)=>{
                    return <Chip size="lg" key={index} className={`bg-[#${props.bgcolor}] text-background tracking-wider`} >{skill}</Chip>
                })
            }
        </div>
     </div>   
    )
}