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
    type: 'personal' | 'team';
    timeline:string;
    role?:string;
};

// interface link{
//     icon: any,
//     link: string
// };

export const proyectsArr = createContext<proyect[]>([
    {
        title:'Kairo',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse cupiditate unde ipsa beatae consequatur inventore quia aliquam id distinctio placeat quasi, eos voluptates voluptate delectus neque cumque perspiciatis magnam.',
        primaryColor:'364C85',
        skills:['HTML','CSS','JavaScript','Git','Github'],
        colors:[
            {color:'kairo1',
            rgb:'364C85'},
            {color:'kairo2',
            rgb:'95B2EE'},
            {color:'kairo3',
            rgb:'1E2A38'},
            {color:'kairo4',
            rgb:'CDFF9A'},
        ],
        repoURL:'https://github.com/Heleiirx/kairo',
        pageURL:'https://kairo-nu.vercel.app/',
        figmaURL:'https://www.figma.com/design/LK0NBnSve1pLdu8MZyQMRy/Kairo?node-id=8-327&t=JK9p426625xp206l-1',
        type: 'team',
        timeline: '2 weeks',
        role: 'UX/UI designer | Front End Developer'
    },
    {
        title:'Encriptador',
        description:'Aplicacion que toma las vocales del texto ingresado y las sustituye por un texto determinado, tambien puede desencriptar texto encriptado en la misma aplicación.',
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
        type: 'personal',
        timeline: '1 week'
    },
    {
        title:'Nook\'s Shop',
        description:'Ecommerece que toma los productos y usuarios de una base de datos hecha con json-server, para publicarlos o validarlos respectivamente. Permite manipular ambos con CRUD.',
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
        type: 'personal',
        timeline: '3 weeks'
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
        type: 'personal',
        timeline: '1 week'
    },
    {
        title:'Red de Vida',
        description:'Aplicación de streaming que reune videos en una api rest creada con json-server. Permite eliminar, agregar, editar y redireccionar al video',
        primaryColor:'C42013', 
        skills:['React','JavaScript','JsonServer','Axios','CSS'],
        colors:[
            {color:'rdv1',
            rgb:'C42013'},
            {color:'rdv2',
            rgb:'F4DD51'},
            {color:'rdv3',
            rgb:'191919'},
        ],
        repoURL:'https://github.com/No-Country-simulation/c23-91-webapp',
        pageURL:'https://red-de-vida.netlify.app/',
        figmaURL:'https://www.figma.com/design/3hsArh14PUNMkx0JWfDG1q/App-donaci%C3%B3n-sangre?node-id=0-1&p=f',
        type: 'team',
        timeline: '1 week',
        role: 'UX/UI designer | Front End Developer'
    },
])
