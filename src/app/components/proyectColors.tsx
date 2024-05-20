import { useContext } from "react";
import {Tooltip, Button} from "@nextui-org/react";

export default function ProyectColors({colors}:any){
    console.log(colors);
    return(
        <>
            <h3>Colores</h3>
            <div className="flex gap-2">
                {
                    colors.map((item:any, index:number)=>{
                        return(
                            <Tooltip content={item} key={index}>
                                <div className={`bg-[#${item}] text-primary size-20`}></div>
                            </Tooltip>
                        )
                    })
                }
                <div className={`bg-[#${colors.item}] text-primary`}></div>
            </div>
        </>
    )
};