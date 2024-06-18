import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import { Slide } from '../contexts/carouselArr';

interface CarouselProps{
    imagenesArr: Slide[],
    direccion?: boolean,
    className?:string,
}

export default function XCarousel({ direccion, imagenesArr, className } : CarouselProps ) {
    // Duplicamos las imagenes para asegurarnos que la animacion no se vea extraña
    const duplicatedSlides = [...imagenesArr, ...imagenesArr];

    return (
        <div className={` w-full overflow-hidden ${className}`}>
            {/* Div que hace la animacion */}
            <motion.div
                className="flex"
                animate={{
                    x: [ direccion ? '0%' : '-100%', direccion ? '-100%' : '0%' ],
                }}
                transition={{
                    ease: 'linear',
                    duration: 100,
                    repeat: Infinity,
                }}
            >
                {/* divs que conitenen las imagenes y se desplazan con la animacion */}
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="shrink-0" style={{ width: `${150 / imagenesArr.length}%` }}>
                        <div className="flex flex-col items-center justify-center h-full ml-4">
                            <Image src={slide.img} alt={`Slide ${index + 1}`} className='' />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}