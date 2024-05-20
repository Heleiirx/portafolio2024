import React from "react";
import {Tooltip, Button} from "@nextui-org/react";


export default function IconsGroup({iconsArr}:any){
    return(
        <div className="flex flex-wrap gap-2 ms-9 w-2/3">
                {iconsArr.map((icon:any) => {
                    return(
                        <Tooltip content={icon.text} key={icon.id} >
                            <Button isIconOnly className="text-2xl bg-transparent text-primary "> {icon.icon} </Button> 
                        </Tooltip>
                    )}
                )}
        </div>
    );
}