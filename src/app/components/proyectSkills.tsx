import { MyChip } from "./MyChip";

export default function ProyectSkills(props:any){
    return(
     <div className={`flex flex-col w-fill  ${props.className}`}>
        <h3 className="text-2xl mb-2 lg:text-3xl lg:mb-4" style={{color:`#${props.bgcolor}`}}>Herramientas</h3>
        <div className="flex gap-3 flex-wrap ">
            {
                props.skills.map((skill:any, index:number)=>{
                    return <MyChip size="sm" key={index} className={`bg-[#${props.bgcolor}] text-background tracking-wider`} >{skill}</MyChip>
                })
            }
        </div>
     </div>   
    )
}