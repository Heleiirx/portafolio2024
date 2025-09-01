import React, { useRef, useEffect } from 'react';
import gracias1 from '@/img/GRACIAS 1.svg';
import gracias2 from '@/img/GRACIAS 2.svg';
import Image from 'next/image';
import { useAnimate, useInView, useScroll } from "framer-motion";
import { IoMdStarOutline, IoMdStar  } from "react-icons/io";
import { NavbarScroll } from '../utils/AnimationUtils';
import { PageProps } from '../utils/types';
import {Link} from "@nextui-org/link";
import { FaLinkedin, FaGithub   } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contacto( { id, setActiveSection }:PageProps ){
    const ref =useRef<HTMLDivElement | null>(null);
    
    const email = "itzelvargas2002@gmail.com";
    const subject = "Me gustaría saber más sobre tu trabajo.";
    const body = "";
    const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    //Función que cambia el elemento activo en la barra de navegacion
    // NavbarScroll({id, setActiveSection, ref});

    // const [scope, animate] = useAnimate();
    // const isInView = useInView(scope);
    
    // useEffect(() => {
    //    if (isInView) {
    //      animate('#gracias1', { y:100 }, { duration:2 });
    //      animate('#gracias2', { y:200 }, { duration:2 });
    //      animate('div svg', { rotateZ:240, scale:[.5, 1] }, { duration:2 });
    //    } else {
    //     animate('#gracias1', { y:0 });
    //     animate('#gracias2', { y:0 });
    //     animate('div svg', { rotateZ:0, scale:[ 1] });
    //    }
    // }, [isInView, animate])

    return(
        // <div ref={ref} id={id} className="relative h-screen  pt-60 lg:pt-40">
        //     <div ref={scope} className='flex justify-center items-start h-fit'>
        //         <div>
        //             <IoMdStar className='absolute text-2xl left-12 top-52 z-10 text-4xl star lg:left-1/3 lg:top-1/4'/>
        //             <IoMdStar className='absolute text-xl left-14 top-64 z-10 text-4xl lg:left-1/3 lg:top-1/3'/>
        //             <IoMdStarOutline className='absolute text-2xl right-14 top-64 z-10 text-4xl lg:right-1/3 lg:top-1/4' />
        //         </div>
        //         <Image src={gracias1} alt='' className='w-2/3 absolute lg:w-1/3'></Image>
        //         <Image id='gracias1' src={gracias2} alt='' className='w-2/3 absolute lg:w-1/3'></Image>
        //         <Image id='gracias2' src={gracias2} alt='' className='w-2/3 absolute lg:w-1/3'></Image>

        //     </div>
        // </div>
        <div className='h-screen flex flex-col justify-center items-start gap-6 ms-36' ref={ref} id={id}>
            <h2 className='text-6xl text-secondary'>Let´s get in touch!</h2>
            <div className="flex gap-8 ">
                <button className='border border-primary py-2 px-4 rounded bg-primary text-white tracking-wider font-mono font-bold'>Say Hello</button>
                <span className='flex gap-2 items-center text-primary tracking-wide'> 
                    {/* <div className='size-4 bg-primary rounded-full animate-pulse shadow-2xl shadow-primary'></div>  */}
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    Available for work</span>
            </div>
            <div className="flex w-fit gap-4 justify-around text-secondary">
                    <Link size="sm" isExternal showAnchorIcon href="https://www.linkedin.com/in/itzel-romero/" anchorIcon={<FaLinkedin className="size-6 hover:animate-bounce" />}></Link>
                    <Link size="sm" isExternal showAnchorIcon href="https://github.com/Heleiirx" anchorIcon={<FaGithub className="size-6 hover:animate-bounce" />}></Link>
                    <Link size="sm" isExternal showAnchorIcon href={gmailHref} anchorIcon={<MdEmail className="size-6 hover:animate-bounce" />}></Link>
            </div>
        </div>
    )
}