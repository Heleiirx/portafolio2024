import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { montserrat } from "../ui/fonts";

export default function Navegacion() {
  return (
    <div className={`${montserrat.variable} bg-background fixed w-full z-50`}>
      <Navbar
      classNames={
        {
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className={`font-bold text-inherit tracking-wider text-primary text-2xl`}>ITZEL</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 font-mono" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Sobre mi
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Formación
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
    </div>
  );
}
