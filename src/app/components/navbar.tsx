import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import { montserrat } from "../ui/fonts";
import { TbWorld } from "react-icons/tb";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";

export default function Navegacion( activeSection:any ) {
  const { t } = useLanguage();

  interface link{
    key:number,
    title:string,
    href:string,
  }

  const sectionsArr:link[] =[
    {
      key: 1,
      title: t('navigation.about'),
      href: 'about-me',
    },
    {
      key: 2,
      title: t('navigation.education'),
      href: 'education',
    },
    {
      key: 3,
      title: t('navigation.projects'),
      href: 'proyects',
    },
    {
      key: 4,
      title: t('navigation.contact'),
      href: 'contact',
    },
  ]

  return (
    <div className={`${montserrat.variable} bg-background fixed w-full z-50`}>
      <Navbar >
      <NavbarBrand>
        <Link href={'/'} className={`font-bold text-inherit tracking-wider text-primary text-2xl`}>ITZEL</Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 font-mono" justify="center">

      {
        sectionsArr.map((section:link) => {
          return (
            <motion.div key={section.href} 
            initial={{ color: '#52575a' }}
            animate={{ color: (activeSection.activeSection) == (section.href) ? '#ed64a6' : '#52575a' }} >
              <Link href={`#${section.href}`} className="font-bold">
                {section.title}
              </Link>
            </motion.div>

          )
        } )
      }

      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <LanguageSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    </div>
  );
}
