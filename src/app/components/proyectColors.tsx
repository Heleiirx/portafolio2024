import {Tooltip} from "@nextui-org/react";
import { MyButton } from "./MyButton";

interface proyectColorsProps{
    colors:object[],
    primaryColor:string,
    classNameParent?:string,
    classNameChild?:string,
};

export default function ProyectColors({colors, primaryColor, classNameParent, classNameChild}:proyectColorsProps){
    return(
        <div className={`flex flex-col lg:flex lg:items-center lg:gap-6 ${classNameParent}`}>
            <h3 className="text-2xl lg:text-3xl" style={{color:`#${primaryColor}`}}>Colores</h3>
            <div className={`flex gap-4 items-center lg:flex-row lg:gap-7 ${classNameChild}`}>
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