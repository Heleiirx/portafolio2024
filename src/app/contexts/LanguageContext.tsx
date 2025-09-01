'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  en: {
    'navigation.about': 'About Me',
    'navigation.projects': 'Projects',
    'navigation.contact': 'Contact',
    'navigation.home': 'Home',
    'navigation.education': 'Education',
    'banners.education': '☆ ACADEMIC BACKGROUND',
    'banners.projects': '☆ MY PROJECTS',
    'common.welcome': 'Welcome',
    'common.loading': 'Loading...',
    'common.viewProject': 'View Project',
    'common.technologies': 'Technologies',
    'common.sendMessage': 'Send Message',
    'home.title': 'Hello, I\'m',
    'home.subtitle': 'Full Stack Developer',
    'home.description': 'I create modern web applications with cutting-edge technologies',
    'about.title': 'About Me',
    'about.greeting': 'HELLO,',
    'about.name': 'I\'m Itzel!',
    'about.description': 'A software engineering student and web developer passionate about creating technology that makes a difference. I enjoy designing and building user-friendly interfaces while also exploring backend development and integrations with modern tools like AI. I thrive in agile, team-based environments that encourage creativity, problem-solving, and continuous learning.',
    'education.title': 'Education',
    'education.education': 'EDUCATION',
    'education.certifications': 'CERTIFICATIONS',
    'education.leadership': 'LEADERSHIP',
    'education.languages': 'LANGUAGES',
    'education.tools': 'TOOLS',
    'projects.title': 'My Projects',
    'projects.personalProject': 'Personal project',
    'projects.teamProject': 'Team project',
    'projects.timeline': 'Timeline',
    'projects.repoLink': 'Repository',
    'projects.demoLink': 'Demo Link',
    'projects.figmaLink': 'Figma Design',
    'contact.title': 'Contact',
    'contact.greeting': 'Let\'s get in touch!',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'footer.rights': 'All rights reserved'
  },
  es: {
    'navigation.about': 'Sobre Mi',
    'navigation.projects': 'Proyectos',
    'navigation.contact': 'Contacto',
    'navigation.home': 'Inicio',
    'navigation.education': 'Formación',
    'banners.education': '☆ FORMACIÓN ACADEMICA',
    'banners.projects': '☆ MIS PROYECTOS',
    'common.welcome': 'Bienvenido',
    'common.loading': 'Cargando...',
    'common.viewProject': 'Ver Proyecto',
    'common.technologies': 'Tecnologías',
    'common.sendMessage': 'Enviar Mensaje',
    'home.title': 'Hola, soy',
    'home.subtitle': 'Desarrollador Full Stack',
    'home.description': 'Creo aplicaciones web modernas con tecnologías de vanguardia',
    'about.title': 'Sobre Mi',
    'about.greeting': 'HOLA,',
    'about.name': 'Soy Itzel!',
    'about.description': 'Desarrolladora jr con experiencia en React, JavaScript, CSS, TypeScript y bases de datos, así como la configuración de infraestructuras sencillas en la nube. Destacaría mi capacidad para adaptarme rápidamente a nuevas tecnologías y mi creatividad para encontrar soluciones. También he tomado formaciones en metodologías ágiles, lo que me permite integrarme de manera más eficiente a nuevos equipos y tener una mejor gestión de tiempos.',
    'education.title': 'Formación',
    'education.education': 'EDUCACIÓN',
    'education.certifications': 'CERTIFICACIONES',
    'education.leadership': 'LIDERAZGO',
    'education.languages': 'IDIOMAS',
    'education.tools': 'HERRAMIENTAS',
    'projects.title': 'Mis Proyectos',
    'projects.personalProject': 'Proyecto personal',
    'projects.teamProject': 'Proyecto en equipo',
    'projects.timeline': 'Duración',
    'projects.repoLink': 'Repositorio',
    'projects.demoLink': 'Demo Link',
    'projects.figmaLink': 'Diseño Figma',
    'contact.title': 'Contacto',
    'contact.greeting': '¡Pongámonos en contacto!',
    'contact.name': 'Nombre',
    'contact.email': 'Correo',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'footer.rights': 'Todos los derechos reservados'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');
  const router = useRouter();

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    // Update HTML lang attribute
    document.documentElement.lang = lang;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}