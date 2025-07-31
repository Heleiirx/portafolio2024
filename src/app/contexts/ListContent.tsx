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
    {
        id: 1,
        title: '2024 - Actualidad',
        subtitle: 'Ingeniería En Desarrollo De Software',
        institution: 'Universidad Virtual Del Estado De Guanajuato, UVEG',
    },
];

const cursosTitulaciones: Item[] = [
    {
        id: 1,
        title: 'Nov 2023 - Dic 2023',
        subtitle: 'Introducción A Oracle Cloud Infrastructure',
        institution: 'Alura',
    },
    {
        id: 2,
        title: 'Nov 2023',
        subtitle: 'SQL Con MySQL',
        institution: 'Alura',
    },
    {
        id: 3,
        title: 'Abril 2023 - Septiembre 2023',
        subtitle: 'Oracle Next Education Program',
        institution: 'Alura',
    },
];

const liderazgoYactividades: Item[] = [
    {
        id: 1,
        title: 'Mar 2025 - May 2025',
        subtitle: 'Aspire Leaders Program',
        institution: 'Aspire Institute',
    }
];

export{
    educacion,
    cursosTitulaciones,
    liderazgoYactividades
};