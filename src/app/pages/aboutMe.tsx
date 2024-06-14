import React from "react";
import { FaStar, FaRegStar , FaLinkedin, FaGithub   } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {Link} from "@nextui-org/react";
import Yo from '@/img/Yo.svg'
import Image from 'next/image'


export default function AboutMe(){
    return(
        <div className="flex flex-col-reverse min-h-screen items-center gap-0 justify-evenly 
        lg:justify-between lg:flex-row lg:gap-8">
            <div className="flex flex-col w-11/12 h-full gap-y-1.5 justify-between items-center
            lg:w-1/2">
                <h1 className="w-3/4 text-6xl">HOLA,</h1>
                <h2 className="w-3/4 text-6xl">Soy Itzel!</h2>
                <p className="font-mono w-3/4 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c</p>
                <div className="flex w-1/2 justify-around">
                    <Link size="lg" isExternal showAnchorIcon href="https://www.linkedin.com/in/itzel-romero/" anchorIcon={<FaLinkedin className="size-9" />}></Link>
                    <Link size="lg" isExternal showAnchorIcon href="https://github.com/Heleiirx" anchorIcon={<FaGithub className="size-9" />}></Link>
                    <Link size="lg" showAnchorIcon href="#" anchorIcon={<MdEmail className="size-9" />}></Link>
                </div>
            </div>
            <div className="flex flex-col w-11/12 items-center relative
            lg:w-1/2">  
                <div className="w-3/4 relative lg:mr-6
                before:content-['☆'] before:text-9xl before:absolute before:rotate-12 before:top-0 before:right-2/3
                after:content-['☆'] after:text-9xl after:absolute after:rotate-120 after:rotate-45 after:bottom-0 after:left-2/3
                lg:before:top-12 lg:before:right-3/4 lg:after:bottom-1 lg:after:left-3/4
                ">
                    <span className="w-1/2 rounded-full h-16 bg-primary text-2xl p-2 text-center
                    absolute top-48 right-2/3 text-background tracking-wider
                    lg:text-3xl lg:top-48">
                        FrontEnd
                    </span>
                    <Image
                    src={ Yo}
                    alt="Picture of the author "
                    className="w-fill lg:w-3/4 lg:ml-12"
                    priority
                    />
                    <span className="w-1/2 rounded-full h-16 bg-primary text-2xl p-2 text-center
                    absolute left-2/3 bottom-32 text-background tracking-wider
                    lg:text-3xl bottom-32">
                        Developer
                    </span>
                </div>
            </div>
        </div>
    );
}