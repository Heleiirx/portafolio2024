import { useContext } from "react";
import {Tooltip, Button} from "@nextui-org/react";
import { MyButton } from "./MyButton";

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
                                <MyButton color={item} size="xs"></MyButton>
                            </Tooltip>
                        )
                    })
                }
                <div className={`bg-[#${colors.item}] text-primary`}></div>
            </div>
        </>
    )
};