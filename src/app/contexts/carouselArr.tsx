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
// ------------------ Red de vida images ------------------
import rdv1 from '@/img/banner_rdv/rdv_desktop1.png';
import rdv2 from '@/img/banner_rdv/rdv_desktop2.png';
import rdv3 from '@/img/banner_rdv/rdv_desktop3.png';
import rdv4 from '@/img/banner_rdv/rdv_desktop4.png';
import rdv5 from '@/img/banner_rdv/rdv_desktop5.png';
import rdv6 from '@/img/banner_rdv/rdv_desktop6.png';
import rdv7 from '@/img/banner_rdv/rdv_desktop7.png';
import rdv8 from '@/img/banner_rdv/rdv_desktop8.png';
import rdv9 from '@/img/banner_rdv/rdv_desktop9.png';
// ------------------ Hstube images ------------------
import hstube1 from '@/img/banner_hstube/hst_mobile1.png';
import hstube2 from '@/img/banner_hstube/hst_mobile2.png';
import hstube4 from '@/img/banner_hstube/hst_mobile4.png';
import hstube5 from '@/img/banner_hstube/hst_mobile5.png';
import hstube6 from '@/img/banner_hstube/hst_mobile6.png';
import hstube7 from '@/img/banner_hstube/hst_mobile7.png';

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

export const RedDeVidaArr:Slide[] =[
    { img : rdv1 },
    { img : rdv2 },
    { img : rdv3 },
    { img : rdv4 },
    { img : rdv5 },
    { img : rdv6 },
    { img : rdv7 },
    { img : rdv8 },
    { img : rdv9 },
];

export const HstubeArr:Slide[] = [
    { img: hstube1 },
    { img: hstube2 },
    { img: hstube7 },
    { img: hstube4 },
    { img: hstube5 },    
    { img: hstube6 },
];