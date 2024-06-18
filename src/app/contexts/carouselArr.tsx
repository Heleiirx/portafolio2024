import nDskt1 from '@/img/banner_nooks/nooksDesk1.png';
import nDskt2 from '@/img/banner_nooks/nooksDesk2.png';
import nDskt3 from '@/img/banner_nooks/nooksDesk3.png';
import nDskt4 from '@/img/banner_nooks/nooksDesk4.png';
import nDskt5 from '@/img/banner_nooks/nooksDesk5.png';
import nDskt6 from '@/img/banner_nooks/nooksDesk6.png';
import nDskt7 from '@/img/banner_nooks/nooksDesk7.png';
import nDskt8 from '@/img/banner_nooks/nooksDesk8.png';
import nDskt9 from '@/img/banner_nooks/nooksDesk9.png';
import nDskt10 from '@/img/banner_nooks/nooksDesk10.png';
import { StaticImageData } from 'next/image';

export interface Slide {
    img: StaticImageData; 
}

// --------------------------------------------------------------------------------------
// -----------------------  Arrays a renderizar para cada carousel ----------------------
// --------------------------------------------------------------------------------------

export const NooksArr:Slide[] =[
   { img : nDskt1, },
   { img : nDskt2, },
   { img : nDskt3, },
   { img : nDskt4, },
   { img : nDskt5, },
   { img : nDskt6, },
   { img : nDskt7, },
   { img : nDskt8, },
   { img : nDskt9, },
   { img : nDskt10 },
]