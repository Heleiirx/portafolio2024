import IconsGroup from './iconsGroup'

interface listProps{
    content:object[],
    title:string,
    flexDirection:string,
    fatherClass?:string,
    childClass?:string,
}

export default function List({content, title, flexDirection, fatherClass, childClass}:listProps){

    return(
        <div className={`flex flex-col items-center lg:items-center ${fatherClass} lg:w-full`}>
            <h1 className="text-2xl text-left self-start ps-20">{title}</h1>
            <ul className={`font-mono flex flex-${flexDirection} gap-3 ${childClass} `}>
                {content.map((item :any) => {
                    return(
                    <div key={item.id}>
                        <li className="font-mono list-none first-line:tracking-widest
                        first-letter:text-3xl first-letter:font-bold
                        first-letter:mr-3 first-letter:float-left first-letter:text-secondary">☆{item.title}</li>
                        <li >{item.subtitle}</li>
                        <li className=''><IconsGroup iconsArr={item.iconos}></IconsGroup></li>
                    </div> 
                    )}
                )}
            </ul>
        </div>
    );
}