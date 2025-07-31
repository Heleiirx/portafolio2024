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
    institution: string,
}
// ------------------------- Education Arr -----------------------
const educacion: Item[] = [
    // {id:1,
    // title: '2017 - 2020',
    // subtitle:'Escuela De Bachilleres',
    // institution: 'Plantel Norte, UAQ',
    // },
    {id:2,
        title: '2024-Actualidad',
        subtitle:'Ingeniería en Desarrollo de Software',
        institution: 'Universidad Virtual del Estado de Guanajuato',
    },
];
const cursosTitulaciones: Item[] = [
    {id:2,
    title: 'Abr 2023 - Sep 2023',
    subtitle:'Programa Oracle Next Education',
    institution: 'Alura',
    },
    {id:3,
    title: 'Sep 2023',
    subtitle:'Curso: SQL, A Practical Introductio For Querying Databases',
    institution: 'Coursera',
    },
    {id:4,
    title: 'Nov 2023',
    subtitle:'Formación SQL con MySQL',
    institution: 'Alura',
    },
    {id:5,
    title: 'Nov 2023 - Dic 2023',
    subtitle:'Formación Oracle Cloud Infrestructure',
    institution: 'Alura',
    },
];
const liderazgoYactividades: Item[] = [
    {
        id: 1,
        title:'Mar 2025 - May 2025',
        subtitle: 'Aspire Leaders Program',
        institution: 'Aspire institute',
    }
];
    

export{
    educacion,
    cursosTitulaciones,
    liderazgoYactividades
};