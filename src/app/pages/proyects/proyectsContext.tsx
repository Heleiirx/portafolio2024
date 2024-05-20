'use client';
import {createContext} from "react";

interface proyect{
    title:string;
    description:string;
    primaryColor:string;
    repoURL:string;
    pageURL:string;
    figmaURL?:string;
    skills:string[];
    colors:string[];
};

// interface link{
//     icon: any,
//     link: string
// };

export const proyectsArr = createContext<proyect[]>([
    {
        title:'Encriptador',
        description:'Aplicacion que toma las vocales del texto ingresado y las sustituye por un texto determinado o viceversa.',
        primaryColor:'0A3871',
        skills:['HTML','CSS','JavaScript','Git','Github'],
        colors:['0A3871','D8DFE8'],
        repoURL:'https://github.com/Heleiirx/Portfolio',
        pageURL:'https://heleiirx.github.io/encriptador/',
    },
    {
        title:'Nook\'s Shop',
        description:'Web Store que usa un servidor hecho con json-server para manipular los productos (CRUD) y validar usuarios',
        primaryColor:'4EA966',
        skills:['React','JavaScript','JsonServer','Axios','CSS','HTML'],
        colors:['4EA966','C5FF9D','FAF4D2'],
        repoURL:'https://github.com/Heleiirx/nooks-shop',
        pageURL:'https://heleiirx.github.io/nooks-shop/',
    },
    {
        title:'HStube',
        description:'Aplicación de streaming que reune videos en una api rest creada con json-server. Permite eliminar, agregar, editar y redireccionar al video',
        primaryColor:'ED64A6',
        skills:['React','JavaScript','JsonServer','Axios','CSS'],
        colors:['EF9CA6','F4DD51','191919'],
        repoURL:'https://github.com/Heleiirx/hstube',
        pageURL:'https://hstube.vercel.app/',
    },
])