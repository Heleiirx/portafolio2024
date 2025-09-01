type Icons = {
    id:number,
    icon:any,
    text:string,
}
type Item = {
    id:number,
    title:string,
    subtitle: {
        en: string,
        es: string
    },
    institution: string,
}

// ------------------------- Education Arr -----------------------
const educacion: Item[] = [
    {
        id: 1,
        title: '2024 - Present',
        subtitle: {
            en: 'Software Development Engineering',
            es: 'Ingeniería En Desarrollo De Software'
        },
        institution: 'Universidad Virtual Del Estado De Guanajuato, UVEG',
    },
];

const cursosTitulaciones: Item[] = [
    {
        id: 1,
        title: 'Nov 2023 - Dec 2023',
        subtitle: {
            en: 'Introduction to Oracle Cloud Infrastructure',
            es: 'Introducción A Oracle Cloud Infrastructure'
        },
        institution: 'Alura',
    },
    {
        id: 2,
        title: 'Nov 2023',
        subtitle: {
            en: 'SQL with MySQL',
            es: 'SQL Con MySQL'
        },
        institution: 'Alura',
    },
    {
        id: 3,
        title: 'Apr 2023 - Sep 2023',
        subtitle: {
            en: 'Oracle Next Education Program',
            es: 'Oracle Next Education Program'
        },
        institution: 'Alura',
    },
];

const liderazgoYactividades: Item[] = [
    {
        id: 1,
        title: 'Mar 2025 - May 2025',
        subtitle: {
            en: 'Aspire Leaders Program',
            es: 'Programa de Líderes Aspire'
        },
        institution: 'Aspire Institute',
    }
];

export{
    educacion,
    cursosTitulaciones,
    liderazgoYactividades
};