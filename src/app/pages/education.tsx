import Banner from "../components/banner";
import List from "../components/list/list";
import {educacion, cursosTitulaciones} from "../components/list/ListContent";
// import cursosTitulaciones from "../components/list/ListContent";

export default function Education(){

    return (
    <div className="flex flex-col min-h-screen items-center justify-center relative">
        <Banner bannerText=' ☆ FORMACIÓN ACADEMICA' background='bg-secondary'></Banner>
        <div className="w-screen flex flex-col items-center my-12 gap-8">
            <List title='Educación' content={educacion} flexDirection={'col'}/>
            <List title='Cursos y Titulaciones' content={cursosTitulaciones} flexDirection={'col'}/>
            <div className="felx flex-col items-center w-3/4 gap-6">
                <h1 className="text-2xl text-left">Idiomas</h1>
                <ul className="flex gap-16">
                    <li className="first-line:tracking-widest
                            first-letter:text-3xl first-letter:font-bold
                            first-letter:mr-3 first-letter:float-left first-letter:text-secondary">
                        ☆ Español <br /> Nativo
                        
                    </li>
                    <li className="first-line:tracking-widest
                            first-letter:text-3xl first-letter:font-bold
                            first-letter:mr-3 first-letter:float-left first-letter:text-secondary">
                        ☆ Inglés <br /> Básico
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
}