import Image from 'next/image'
import agile from '@/img/agile.svg';
import comunicacion from '@/img/comunicacionAsertiva.svg';
import desarrollo from '@/img/desarrolloPersonal.svg';
import tiempo from '@/img/gestionTiempo.svg';
import oratoria from '@/img/oratoria.svg';
import teamWork from '@/img/teamWork.svg';

function Agile(){
    return <Image src={agile} alt="Métodologías Agiles" className='w-8'/>
};

function Comunicacion(){
    return <Image src={comunicacion} alt="Comunicación Asertiva" className='w-8'/>
};

function DesarrolloPersonal(){
    return <Image src={desarrollo} alt="Desarrollo Personal" className='w-8'/>
};

function GestionTiempo(){
    return <Image src={tiempo} alt="Gestión de Tiempo" className='w-8'/>
};

function Oratoria(){
    return <Image src={oratoria} alt="Oratoria" className='w-8'/>
};

function TeamWork(){
    return <Image src={teamWork} alt="Trabajo en Equipo" className='w-8'/>
};

export{
    Agile,
    Comunicacion,
    DesarrolloPersonal,
    GestionTiempo,
    Oratoria,
    TeamWork,
};