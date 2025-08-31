import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Slide } from '../contexts/carouselArr';

interface CarouselProps{
    imagenesArr: Slide[],
    direccion?: boolean,
    className?:string,
}

export default function VerticalCarousel({ direccion, imagenesArr, className } : CarouselProps ) {
    // Duplicamos las imagenes para asegurarnos que la animacion no se vea extraña
    const duplicatedSlides = [...imagenesArr, ...imagenesArr];

    return (
        <div className={`h-full overflow-hidden ${className}`}>
            {/* Div que hace la animacion */}
            <motion.div
                className="flex flex-col"
                animate={{
                    y: [ direccion ? '0%' : '-100%', direccion ? '-100%' : '0%' ],
                }}
                transition={{
                    ease: 'linear',
                    duration: 700,
                    repeat: Infinity,
                }}
            >
                {/* divs que conitenen las imagenes y se desplazan con la animacion */}
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="shrink-0" style={{ height: `${150 / imagenesArr.length}%` }}>
                        <div className="flex flex-col items-center justify-center h-full mb-4">
                            <Image src={slide.img} alt={`Slide ${index + 1}`} className='' />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}