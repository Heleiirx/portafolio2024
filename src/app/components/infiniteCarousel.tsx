import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import nooks1 from '@/img/banner_nooks/nooksDesk1.png';
import nooks2 from '@/img/banner_nooks/nooksDesk2.png';
import nooks3 from '@/img/banner_nooks/nooksDesk3.png';
import nooks4 from '@/img/banner_nooks/nooksDesk4.png';
import nooks5 from '@/img/banner_nooks/nooksDesk5.png';

// Define the array of slides with numbers
const slides = [
    { img: nooks1 },
    { img: nooks2 },
    { img: nooks3 },
    { img: nooks4 },
    { img: nooks5 }
];

interface CarouselProps{
    imagenesArr: object[],
    direccion?: boolean,
    rotacion?:string,
}

export default function Carousel({ direccion, imagenesArr, rotacion } : CarouselProps ) {
    // Duplicate the slides array to ensure seamless looping
    const duplicatedSlides = [...slides, ...slides];

    return (
        <div className="relative w-full overflow-hidden -rotate-12">
            {/* Wrapping div for seamless looping */}
            <motion.div
                className="flex"
                animate={{
                    x: ['0%', '100%'],
                }}
                transition={{
                    ease: 'linear',
                    duration: 10,
                    repeat: Infinity,
                }}
            >
                {/* Render duplicated slides */}
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: `${100 / slides.length}%` }}>
                        <div className="flex flex-col items-center justify-center h-full ml-4">
                            <Image src={slide.img} alt={`Slide ${index + 1}`} />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}