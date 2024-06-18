import React, {useEffect} from "react";

export function NavbarScroll( {id, setActiveSection} : any, ref:any ){

    return useEffect(() => {
            const observer = new IntersectionObserver(
                entries =>{
                    entries.forEach(entry => {
                        if (entry.isIntersecting){
                            setActiveSection(id);
                        }
                    })
                },
                {
                    threshold: 0.1,
                }
            )
            
            const currentRef = ref.current;
            if (currentRef) {
                observer.observe(currentRef);
            }
    
            return() =>{
                if (currentRef){
                    observer.unobserve(currentRef);
                }
            }
    
    
        }, [id, setActiveSection]);

}