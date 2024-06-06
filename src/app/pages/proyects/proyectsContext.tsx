'use client';
import {createContext} from "react";

interface color{
    color:string,
    rgb:string,
}

interface proyect{
    title:string;
    description:string;
    primaryColor:string;
    repoURL:string;
    pageURL:string;
    figmaURL?:string;
    skills:string[];
    colors:color[];
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
        colors:[
            {color:'encriptador1',
            rgb:'0A3871'},
            {color:'encriptador2',
            rgb:'D8DFE8'}
        ],
        repoURL:'https://github.com/Heleiirx/Portfolio',
        pageURL:'https://heleiirx.github.io/encriptador/',
    },
    {
        title:'Nook\'s Shop',
        description:'Aplicación web de streaming que reune videos de youtube en una API rest diseñada con Json-Server, permite añadir videos, eliminarlos y editar la información añadida',
        primaryColor:'4EA966',
        skills:['React','JavaScript','JsonServer','Axios','CSS','HTML'],
        colors:[
            {color:'nooks1',
            rgb:'4EA966'},
            {color:'nooks2',
            rgb:'C5FF9D'},
            {color:'nooks3',
            rgb:'FAF4D2'},
        ],
        repoURL:'https://github.com/Heleiirx/nooks-shop',
        pageURL:'https://heleiirx.github.io/nooks-shop/',
    },
    {
        title:'HStube',
        description:'Aplicación de streaming que reune videos en una api rest creada con json-server. Permite eliminar, agregar, editar y redireccionar al video',
        primaryColor:'EF9CA6', 
        skills:['React','JavaScript','JsonServer','Axios','CSS'],
        colors:[
            {color:'hs1',
            rgb:'EF9CA6'},
            {color:'hs2',
            rgb:'F4DD51'},
            {color:'hs3',
            rgb:'191919'},
        ],
        repoURL:'https://github.com/Heleiirx/hstube',
        pageURL:'https://hstube.vercel.app/',
        figmaURL:'https://www.figma.com/design/USri0Xho4FHysiwpDxKtv0/HStube?node-id=1-89&t=hsDfFKOn47il8raj-1',
    },
])