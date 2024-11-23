import React, {useEffect} from "react";

type NavbarScrollProps = {
    id: string;
    setActiveSection: (id: string) => void;
    ref: React.RefObject<HTMLElement>;
};

// Funcion que detecta si un elemento esta visible en la pantalla
export function NavbarScroll( {id, setActiveSection, ref} : NavbarScrollProps ){
    return useEffect(() => {
        // Definimos el observer para detectar el elemento dentro de la pagina del navegador
            const observer = new IntersectionObserver(
                entries =>{
                    entries.forEach(entry => {
                        // Verificamos si el elemento es visible en el viewport, si si actualizamos el valor de activeSection
                        if (entry.isIntersecting){
                            setActiveSection(id);
                        }
                    })
                },
                { // Definimos que tiene que haber al menos un 10% del objeto para activar el callback
                    threshold: 0.1,
                }
            )
            // Conectamos al observador y la referencia
            const currentRef = ref.current;
            if (currentRef) {
                observer.observe(currentRef);
            }
            // Limpiamos el observador cuando el componente se desmonta
            return() =>{
                if (currentRef){
                    observer.unobserve(currentRef);
                }
            }
    
    
        }, [id, setActiveSection]);

}