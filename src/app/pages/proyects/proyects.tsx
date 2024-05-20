import Banner from "../../components/banner";
import Encriptador from "../encriptador";

export default function Proyects(){

    return (
        <div className="flex flex-col h-fit items-center justify-center relative">
            <Banner bannerText=' ☆ MIS PROYECTOS' background='bg-primary'></Banner>
            <Encriptador/>
        </div>
    );
}