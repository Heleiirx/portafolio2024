import IconsGroup from '../iconsGroup'

export default function List({content, title, flexDirection}:any){

    return(
        <div className="felx flex-col items-center w-3/4">
            <h1 className="text-2xl text-left">{title}</h1>
            <ul className={`font-mono flex flex-${flexDirection} gap-3`}>
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