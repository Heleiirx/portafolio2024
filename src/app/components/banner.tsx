export default function Banner(props:any){
    let listaBanner = [];
    for (let i = 0; i<4; i++){
        listaBanner.push(<li key={i}>{props.bannerText}</li>)
    }
    
    return(
        <div className={`w-screen ${props.background} text-background overflow-hidden relative top-0 inline-flex flex-nowrap gap-4`}>
            <ul className="flex gap-4 max-w-max justify-center py-12 text-5xl items-center text-center text-nowrap tracking-wider animate-scrollW w-fit">
                {listaBanner}
            </ul>
            <ul className="flex gap-4 max-w-max justify-center py-12 text-5xl items-center text-center text-nowrap tracking-wider animate-scrollW w-fit" >
                {listaBanner}
            </ul>
        </div>
    );
}