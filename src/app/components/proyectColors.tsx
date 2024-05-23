import { useContext } from "react";
import {Tooltip, Button} from "@nextui-org/react";
import { MyButton } from "./MyButton";

export default function ProyectColors({colors}:any){
    return(
        <div className="absolute top-12 left-6">
            <h3>Colores</h3>
            <div className="flex flex-col gap-4 mt-3 items-center">
                {
                    colors.map((item:any, index:number)=>{
                        return(
                            <Tooltip content={item.rgb} key={index}>
                                <MyButton color={item.color} size="xs"></MyButton>
                            </Tooltip>
                        )
                    })
                }
                <div className={`bg-[#${colors.item}] text-primary`}></div>
            </div>
        </div>
    )
};