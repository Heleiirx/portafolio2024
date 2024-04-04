import React from "react";
import { FaStar, FaRegStar , FaLinkedin, FaGithub   } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {Link} from "@nextui-org/react";
import Bokuto from '@/Bokuto.png'
import Image from 'next/image'


export default function AboutMe(){
    return(
        <div className="flex min-h-screen items-center gap-8 justify-between ">
            <div className="flex flex-col w-1/2 h-full gap-y-1.5 justify-between items-center">
                <h1 className="w-3/4 text-6xl">HOLA,</h1>
                <h2 className="w-3/4 text-6xl">Soy Itzel!</h2>
                <p className="font-mono w-3/4 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c</p>
                <div className="flex w-1/2 justify-around">
                    <Link size="lg" isExternal showAnchorIcon href="https://www.linkedin.com/in/itzel-romero/" anchorIcon={<FaLinkedin className="size-9" />}></Link>
                    <Link size="lg" isExternal showAnchorIcon href="https://github.com/Heleiirx" anchorIcon={<FaGithub className="size-9" />}></Link>
                    <Link size="lg" showAnchorIcon href="#" anchorIcon={<MdEmail className="size-9" />}></Link>
                </div>
            </div>
            <div className="flex flex-col w-1/2 items-center relative">
                <div className="w-3/4 relative 
                before:content-['☆'] before:text-9xl before:absolute before:rotate-12 before:top-12 before:left-8
                after:content-['☆'] after:text-9xl after:absolute after:rotate-120 after:bottom-1 after:end-6 after:rotate-45
                ">
                    <div className="w-1/2 rounded-full h-16 bg-primary text-3xl p-2 text-center
                    absolute top-48 left-0 text-background tracking-wider">FrontEnd</div>
                    <Image
                    src={Bokuto}
                    alt="Picture of the author "
                    className="w-fill"
                    />
                    <div className="w-1/2 rounded-full h-16 bg-primary text-3xl p-2 text-center
                    absolute right-2 bottom-32 text-background tracking-wider">Developer</div>
                </div>
            </div>
        </div>
    );
}