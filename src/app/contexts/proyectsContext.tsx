'use client';
import { createContext } from "react";

interface color {
    color: string,
    rgb: string,
}

interface proyect {
    title: string;
    description: {
        en: string,
        es: string
    };
    primaryColor: string;
    repoURL: string;
    pageURL: string;
    figmaURL?: string;
    skills: string[];
    colors: color[];
    type: 'personal' | 'team';
    timeline: string;
    role?: string;
};

// interface link{
//     icon: any,
//     link: string
// };

export const proyectsArr = createContext<proyect[]>([
    {
        title: 'Kairo',
        description: {
            en: 'A full-stack web application for personal organization and project management, inspired by the Pomodoro technique and the philosophy of kairos (opportune time). The app helps users organize their tasks, track time spent on projects, and maintain productivity through structured time management.',
            es: 'Aplicación web full-stack para la organización personal y la gestión de proyectos, inspirada en la técnica Pomodoro y la filosofía de Kairós (tiempo oportuno). La app ayuda a los usuarios a organizar sus tareas, controlar el tiempo dedicado a los proyectos y mantener la productividad mediante una gestión del tiempo estructurada.'
        },
        primaryColor: '364C85',
        skills: ['React',
            'TypeScript',
            'Vite',
            'Tailwind CSS',
            'Zustand',
            'Axios',
            'Node.js',
            'Express.js',
            'MongoDB',
        ],
        colors: [
            {
                color: 'kairo1',
                rgb: '364C85'
            },
            {
                color: 'kairo2',
                rgb: '95B2EE'
            },
            {
                color: 'kairo3',
                rgb: '1E2A38'
            },
            {
                color: 'kairo4',
                rgb: 'CDFF9A'
            },
        ],
        repoURL: 'https://github.com/Heleiirx/kairo',
        pageURL: 'https://kairo-self.vercel.app/',
        figmaURL: 'https://www.figma.com/design/LK0NBnSve1pLdu8MZyQMRy/Kairo?node-id=8-327&t=JK9p426625xp206l-1',
        type: 'team',
        timeline: '—On development—',
        role: 'UX/UI designer | Front End Developer'
    },
    {
        title: 'Encriptador',
        description: {
            en: 'An application that takes the vowels from the entered text and replaces them with a specific text. It can also decrypt encrypted text in the same application.',
            es: 'Aplicacion que toma las vocales del texto ingresado y las sustituye por un texto determinado, tambien puede desencriptar texto encriptado en la misma aplicación.'
        },
        primaryColor: '0A3871',
        skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'Github'],
        colors: [
            {
                color: 'encriptador1',
                rgb: '0A3871'
            },
            {
                color: 'encriptador2',
                rgb: 'D8DFE8'
            }
        ],
        repoURL: 'https://github.com/Heleiirx/Portfolio',
        pageURL: 'https://heleiirx.github.io/encriptador/',
        type: 'personal',
        timeline: '1 week'
    },
    {
        title: 'Nook\'s Shop',
        description: {
            en: 'E-commerce that takes products and users from a database built with json-server, to publish or validate them respectively. It allows both to be manipulated with CRUD.',
            es: 'Ecommerece que toma los productos y usuarios de una base de datos hecha con json-server, para publicarlos o validarlos respectivamente. Permite manipular ambos con CRUD.',
        },
        primaryColor: '4EA966',
        skills: ['React', 'JavaScript', 'JsonServer', 'Axios', 'CSS', 'HTML'],
        colors: [
            {
                color: 'nooks1',
                rgb: '4EA966'
            },
            {
                color: 'nooks2',
                rgb: 'C5FF9D'
            },
            {
                color: 'nooks3',
                rgb: 'FAF4D2'
            },
        ],
        repoURL: 'https://github.com/Heleiirx/nooks-shop',
        pageURL: 'https://heleiirx.github.io/nooks-shop/',
        type: 'personal',
        timeline: '3 weeks'
    },
    {
        title: 'HStube',
        description: {
            en: "A React-based web application for browsing a curated collection of Harry Styles videos. Features include video categorization by albums, live performances, covers, concerts, and interviews. Users can browse videos through responsive carousels, add new videos and categories, edit existing content, and mark favorites. The application uses a mock backend with json-server to simulate a real API.",
            es: 'Una aplicación web basada en React para explorar una colección seleccionada de videos de Harry Styles. Las funciones incluyen la categorización de videos por álbumes, presentaciones en vivo, versiones, conciertos y entrevistas. Los usuarios pueden explorar videos a través de carruseles adaptables, agregar nuevos videos y categorías, editar contenido existente y marcar favoritos. La aplicación utiliza un backend simulado con json-server para simular una API real.'
        },
        primaryColor: 'EF9CA6',
        skills: [
            "React",
            "React Router",
            "Axios",
            "Swiper",
            "JSON Server",
            "CSS",
            "JavaScript"
        ],
        colors: [
            {
                color: 'hs1',
                rgb: 'EF9CA6'
            },
            {
                color: 'hs2',
                rgb: 'F4DD51'
            },
            {
                color: 'hs3',
                rgb: '191919'
            },
        ],
        repoURL: 'https://github.com/Heleiirx/hstube',
        pageURL: 'https://hstube.vercel.app/',
        figmaURL: 'https://www.figma.com/design/USri0Xho4FHysiwpDxKtv0/HStube?node-id=1-89&t=hsDfFKOn47il8raj-1',
        type: 'personal',
        timeline: '2 weeks'
    },
    {
        title: 'Red de Vida',
        description: {
            en: 'A gamified web platform designed to incentivize blood donation through a rewards system and simplified appointment scheduling. The platform aims to increase blood donation participation by making the process more engaging and accessible.',
            es: 'Plataforma web gamificada diseñada para incentivar la donación de sangre mediante un sistema de recompensas y una programación de citas simplificada. La plataforma busca aumentar la participación en la donación de sangre haciendo el proceso más atractivo y accesible.'
        },
        primaryColor: 'C42013',
        skills: ["JavaScript",
            "HTML5",
            "SASS",
            "Bootstrap",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "JWT",
            "RESTful APIs",
            "Postman",
        ],
        colors: [
            {
                color: 'rdv1',
                rgb: 'C42013'
            },
            {
                color: 'rdv2',
                rgb: 'F4DD51'
            },
            {
                color: 'rdv3',
                rgb: '191919'
            },
        ],
        repoURL: 'https://github.com/No-Country-simulation/c23-91-webapp',
        pageURL: 'https://red-de-vida.netlify.app/',
        figmaURL: 'https://www.figma.com/design/3hsArh14PUNMkx0JWfDG1q/App-donaci%C3%B3n-sangre?node-id=0-1&p=f',
        type: 'team',
        timeline: '1 month',
        role: 'UX/UI designer | Front End Developer'
    },
])
