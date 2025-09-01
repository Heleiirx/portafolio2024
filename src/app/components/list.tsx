import { useLanguage } from '../contexts/LanguageContext';

interface listProps{
    content:object[],
    title:string,
    flexDirection:string,
    fatherClass?:string,
    childClass?:string,
}

export default function List({content, title, flexDirection, fatherClass, childClass}:listProps){
    const { language } = useLanguage();

    return(
        <div className={`flex flex-col ${fatherClass}`}>
            <h1 className="text-2xl lg:text-3xl mb-2 uppercase tracking-wider">{title}</h1>
            <div className={`flex flex-${flexDirection} gap-2 ${childClass}`}>
                {content.map((item :any) => {
                    return(
                        <div key={item.id} className="flex flex-col">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-purple-500 text-2xl">★</span>
                                <span className="text-sm font-mono">{item.title}</span>
                            </div>
                            <h3 className="font-bold text-black text-base leading-tight mb-1">
                                {typeof item.subtitle === 'object' ? item.subtitle[language] : item.subtitle}
                            </h3>
                            <p className="italic text-sm font-mono">{item.institution}</p>
                        </div> 
                    )}
                )}
            </div>
        </div>
    );
}