import { MyChip } from "./MyChip";

interface proyectSkillsProps{
    className:string,
    bgcolor:string,
    skills:string[],
}

export default function ProyectSkills({className, bgcolor, skills}:proyectSkillsProps){
    return(
     <div className={`flex flex-col w-fill  ${className}`}>
        <h3 className="text-xl mb-2 lg:text-3xl lg:mb-4" style={{color:`#${bgcolor}`}}>Stack</h3>
        <div className="flex gap-3 flex-wrap ">
            {
                skills.map((skill:any, index:number)=>{
                    return <MyChip size="sm" key={index} style={{backgroundColor:`#${bgcolor}`}} className={`text-background tracking-wider`} >{skill}</MyChip>
                })
            }
        </div>
     </div>   
    )
}