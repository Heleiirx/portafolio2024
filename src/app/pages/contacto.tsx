import React, { useRef, useEffect } from 'react';
import gracias1 from '@/img/GRACIAS 1.svg';
import gracias2 from '@/img/GRACIAS 2.svg';
import Image from 'next/image';
import { useAnimate, useInView } from "framer-motion";
import { IoMdStarOutline, IoMdStar  } from "react-icons/io";


export default function Contacto(){
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);
    
    useEffect(() => {
       if (isInView) {
         animate('#gracias1', { y:100 }, { duration:2 });
         animate('#gracias2', { y:200 }, { duration:2 });
         animate('div svg', { rotateZ:240, scale:[.5, 1] }, { duration:2 });
       } else {
        animate('#gracias1', { y:0 });
        animate('#gracias2', { y:0 });
        animate('div svg', { rotateZ:0, scale:[ 1] });
       }
    }, [isInView])

    return(
        <div ref={scope} className="relative h-screen flex justify-center items-start pt-60 lg:pt-40">
            <div>
                <IoMdStar className='absolute text-2xl left-12 top-52 z-10 text-4xl star lg:left-1/3 lg:top-1/4'/>
                <IoMdStar className='absolute text-xl left-14 top-64 z-10 text-4xl lg:left-1/3 lg:top-1/3'/>
                <IoMdStarOutline className='absolute text-2xl right-14 top-64 z-10 text-4xl lg:right-1/3 lg:top-1/4' />
            </div>
            <Image src={gracias1} alt='' className='w-2/3 absolute lg:w-1/4'></Image>
            <Image id='gracias1' src={gracias2} alt='' className='w-2/3 absolute lg:w-1/4'></Image>
            <Image id='gracias2' src={gracias2} alt='' className='w-2/3 absolute lg:w-1/4'></Image>
        </div>
    )
}