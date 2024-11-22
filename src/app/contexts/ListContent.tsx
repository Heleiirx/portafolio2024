import { FaGithub, FaGitAlt , FaHtml5, FaReact, FaCss3Alt} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql, GrOracle  } from "react-icons/gr";
import { PiFileSqlDuotone } from "react-icons/pi";
import {Agile, Comunicacion, DesarrolloPersonal, GestionTiempo, Oratoria, TeamWork} from "../components/icons";

type Icons = {
    id:number,
    icon:any,
    text:string,
}
type Item = {
    id:number,
    title:string,
    subtitle:string,
    iconos:Icons[],
}
// ------------------------- Arrays a mapear en educacion -----------------------
const educacion: Item[] = [
    {id:1,
    title: '2017 - 2020',
    subtitle:'Escuela De Bachilleres Plantel Norte, UAQ',
    iconos:[
        {id:1.1,
        icon: <TeamWork/>,
        text:'Trabajo En Equipo'},
        {id:1.2,
        icon: <Comunicacion/>,
        text:'Comunicación Asertiva',},
        {id:1.3,
        icon: <Oratoria />,
        text:'Oratoria',},
    ]},
    {id:2,
        title: '2024-Actualidad',
        subtitle:'Ingeniería en Desarrollo de Software, UVEG',
        iconos:[
            {id:1.1,
            icon: <TeamWork/>,
            text:'Trabajo En Equipo'},
            {id:1.2,
            icon: <Comunicacion/>,
            text:'Comunicación Asertiva',},
            {id:1.3,
            icon: <Oratoria />,
            text:'Oratoria',},
    ]},
];
const cursosTitulaciones: Item[] = [
    {id:2,
    title: 'Abr 2023 - Sep 2023',
    subtitle:'Programa Oracle Next Education',
    iconos:[
        {id:2.1,
        icon: <FaGitAlt></FaGitAlt>,
        text:'Git'},
        {id:2.2,
        icon: <FaGithub></FaGithub>,
        text:'Github',},
        {id:2.3,
        icon: <IoLogoJavascript></IoLogoJavascript>,
        text:'JavaScript',},
        {id:2.4,
        icon: <FaReact></FaReact>,
        text:'React',},
        {id:2.5,
        icon: <FaHtml5></FaHtml5>,
        text:'HTML',},
        {id:2.6,
        icon: <FaCss3Alt></FaCss3Alt>,
        text:'CSS',},
        {id:2.7,
        icon: <Agile/>,
        text:'Métodologias Agiles',},
        {id:2.8,
        icon: <DesarrolloPersonal/>,
        text:'Desarrollo Personal',},
    ]},
    {id:3,
    title: 'Sep 2023',
    subtitle:'Curso: SQL, A Practical Introductio For Querying Databases',
    iconos:[
        {id:3.1,
        icon: <PiFileSqlDuotone></PiFileSqlDuotone>,
        text:'SQL'},
        {id:3.2,
        icon: <BiLogoPostgresql></BiLogoPostgresql>,
        text:'PostreSQL',},
    ]},
    {id:4,
    title: 'Nov 2023',
    subtitle:'Formación SQL con MySQL',
    iconos:[
        {id:4.1,
        icon: <GrMysql></GrMysql>,
        text:'MySQL'},
        {id:4.2,
        icon: <GestionTiempo/>,
        text:'Gestion De Tiempo',},
    ]},
    {id:5,
    title: 'Nov 2023 - Dic 2023',
    subtitle:'Formación Oracle Cloud Infrestructure',
    iconos:[
        {id:5.1,
        icon: <GrOracle></GrOracle>,
        text:'Orace Cloud'},
    ]},
];
    

export{
    educacion,
    cursosTitulaciones,
};