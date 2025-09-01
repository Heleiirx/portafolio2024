import React, { useRef } from "react";
import { FaLinkedin, FaGithub   } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {Link} from "@nextui-org/link";
import meAvatar from '@/img/me_avatar.png';
import Image from 'next/image';
import { NavbarScroll } from "../utils/AnimationUtils";
import { PageProps } from "../utils/types";
import { useLanguage } from "../contexts/LanguageContext";

export default function AboutMe( { id, setActiveSection  }:PageProps ){
    const ref =useRef(null);
    const { t, language } = useLanguage();

    //Funcion que activa el cambio de elemento activo en abrra de navegación
    NavbarScroll({id, setActiveSection, ref});
    
    const email = "itzelvargas2002@gmail.com";
    const subject = language === 'en' 
        ? "I'd like to know more about your work." 
        : "Me gustaría saber más sobre tu trabajo.";
    const body = "";
    const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;


    return(
        <div ref={ref} id={id} className="flex flex-col-reverse min-h-screen items-center gap-0 justify-evenly 
        lg:justify-between lg:flex-row">
            <div className="flex flex-col w-11/12 h-full gap-y-2 justify-between items-center
            lg:w-1/2">
                <h1 className="w-3/4 text-5xl lg:w-5/6">{t('about.greeting')}</h1>
                <h2 className="w-3/4 text-5xl lg:w-5/6">{t('about.name')}</h2>
                <p className="font-mono w-3/4 text-lg lg:w-5/6 text-lg"> 
                {t('about.description')}
                </p>
                <div className="flex w-1/2 justify-around">
                    <Link size="lg" isExternal showAnchorIcon href="https://www.linkedin.com/in/itzel-romero/" anchorIcon={<FaLinkedin className="size-9 hover:animate-bounce" />}></Link>
                    <Link size="lg" isExternal showAnchorIcon href="https://github.com/Heleiirx" anchorIcon={<FaGithub className="size-9 hover:animate-bounce" />}></Link>
                    <Link size="lg" isExternal showAnchorIcon href={gmailHref} anchorIcon={<MdEmail className="size-9 hover:animate-bounce" />}></Link>
                </div>
            </div>
            <div className="flex flex-col w-11/12 items-center relative
            lg:w-1/2">  
                <div className="w-3/4 relative lg:mr-6
                before:content-['☆'] before:text-9xl before:absolute before:rotate-12 before:top-0 before:right-2/3
                after:content-['☆'] after:text-9xl after:absolute after:rotate-120 after:rotate-45 after:bottom-0 after:left-2/3
                lg:before:top-12 lg:before:right-3/4 lg:after:bottom-1 lg:after:left-3/4
                ">
                    <span className="w-1/3 rounded-full h-12 bg-primary text-2xl p-2 text-center
                    absolute top-48 right-2/3 text-background tracking-wider
                    lg:text-2xl lg:top-48">
                        FrontEnd
                    </span>
                    <Image
                    src={meAvatar}
                    alt="Picture of the author "
                    className="w-fill lg:w-3/4 lg:ml-12"
                    priority
                    />
                    <span className="w-1/3 rounded-full h-12 bg-primary text-2xl p-2 text-center
                    absolute left-2/3 bottom-32 text-background tracking-wider
                    lg:text-2xl bottom-32">
                        Developer
                    </span>
                </div>
            </div>
        </div>
    );
}
