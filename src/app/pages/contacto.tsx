import React, { useRef } from 'react';
import { PageProps } from '../utils/types';
import { Link } from "@nextui-org/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useLanguage } from '../contexts/LanguageContext';

export default function Contacto({ id }: PageProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const { t, language } = useLanguage();

    const email = "itzelvargas2002@gmail.com";
    const subject = language === 'en' 
        ? "I'd like to know more about your work." 
        : "Me gustaría saber más sobre tu trabajo.";
    const body = "";
    const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
        <div className='h-screen flex flex-col justify-center items-start gap-6 ms-36' ref={ref} id={id}>
            <h2 className='text-6xl text-secondary'>{t('contact.greeting')}</h2>
            <div className="flex gap-8 ">
                <button className='border border-primary py-2 px-4 rounded bg-primary text-white tracking-wider font-mono font-bold' onClick={() => window.open(gmailHref, '_blank')}>Say hi</button>
                <span className='flex gap-2 items-center text-primary tracking-wide'> 
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