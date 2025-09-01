import React, { useRef } from "react";
import List from "@/app/components/list";
import { educacion, cursosTitulaciones, liderazgoYactividades } from "../contexts/ListContent";
import { NavbarScroll } from "../utils/AnimationUtils";
import { PageProps } from "../utils/types";
import SkillsSpiderChart from '../components/SkillsSpiderChart';
import Tools from "../components/Tools";
import Languages from "../components/Languages";
import { toolsData } from "../contexts/toolsData";
import { languagesData } from "../contexts/languagesData";
import { useLanguage } from "../contexts/LanguageContext";

export default function Education({ id, setActiveSection }: PageProps) {
    const ref = useRef(null);
    const { t } = useLanguage();

    //Funcion que activa el cambio de elemento activo en abrra de navegación
    NavbarScroll({ id, setActiveSection, ref });

    return (
        <div ref={ref} id={id} className="min-h-screen py-12 px-6 lg:px-20 flex items-center">
            <div className="max-w-6xl mx-auto w-full">
                {/* Layout mobile: una columna */}
                <div className="flex flex-col space-y-12 lg:hidden">
                    <List
                        title={t('education.education')}
                        content={educacion}
                        flexDirection={'col'}
                        fatherClass=""
                        childClass=""
                    />

                    <List
                        title={t('education.certifications')}
                        content={cursosTitulaciones}
                        flexDirection={'col'}
                        fatherClass=""
                        childClass=""
                    />

                    <List
                        title={t('education.leadership')}
                        content={liderazgoYactividades}
                        flexDirection={'col'}
                        fatherClass=""
                        childClass=""
                    />
                </div>

                {/* Layout desktop: todas las listas en columna izquierda */}
                <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
                    {/* Columna izquierda - Todas las listas educativas */}
                    <div className="space-y-12">
                        <List
                            title={t('education.education')}
                            content={educacion}
                            flexDirection={'col'}
                            fatherClass=""
                            childClass=""
                        />

                        <List
                            title={t('education.certifications')}
                            content={cursosTitulaciones}
                            flexDirection={'col'}
                            fatherClass=""
                            childClass=""
                        />

                        <List
                            title={t('education.leadership')}
                            content={liderazgoYactividades}
                            flexDirection={'col'}
                            fatherClass=""
                            childClass=""
                        />
                    </div>

                    {/* Columna derecha - Espacio libre para otros componentes */}
                    <div className="space-y-12">
                        <SkillsSpiderChart />
                        <div className="flex gap-24">
                            <Tools tools={toolsData} />
                            <Languages languages={languagesData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}