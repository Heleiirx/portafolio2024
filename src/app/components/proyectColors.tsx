import { useContext } from "react";
import {Tooltip, Button} from "@nextui-org/react";
import { MyButton } from "./MyButton";

export default function ProyectColors({colors, primaryColor}:any){
    return(
        <div className="absolute top-12 left-6 lg:relative lg:top-[8rem] lg:left-14 lg:flex lg:items-center lg:gap-6">
            <h3 className="lg:text-3xl" style={{color:`#${primaryColor}`}}>Colores</h3>
            <div className="flex flex-col gap-4 mt-3 items-center lg:flex-row lg:gap-7">
                {
                    colors.map((item:any, index:number)=>{
                        return(
                            <Tooltip content={item.rgb} key={index} >
                                <MyButton color={item.color} size="xs"></MyButton>
                            </Tooltip>
                        )
                    })
                }
            </div>
        </div>
    )
};