import Image from 'next/image';
import { NooksArr } from '../pages/proyects/carouselArr';

export default function Icarousel(props:object[]){
    return(
        <div className='flex gap-4'>
            <div className='inline-flex flex-nowrap gap-4 w-screen overflow-hidden relative animate-scrollW'>
                {NooksArr.map((item:any, index:number) => {
                    return(
                        <Image className='w-1/4 ' src={item} alt='Nooks mobile screenshot' key={index}></Image>
                    )
                } )}
            </div>
            <div className='inline-flex flex-nowrap gap-4 w-screen overflow-hidden relative animate-scrollW'>
                {NooksArr.map((item:any, index:number) => {
                    return(
                        <Image className='w-1/4 ' src={item} alt='Nooks mobile screenshot' key={index}></Image>
                    )
                } )}
            </div>
        </div>
    );
}