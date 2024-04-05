export default function Banner(props:any){
    let listaBanner = [];
    for (let i = 0; i<5; i++){
        listaBanner.push(<li>{props.bannerText}</li>)
    }
    
    return(
        <div className={`w-full ${props.background} text-background overflow-hidden absolute top-0 inline-flex flex-nowrap gap-4`}>
            <ul className="flex gap-4 max-w-none justify-center py-12 text-5xl items-center text-center text-nowrap tracking-wider animate-scrollW w-fit">
                {listaBanner}
            </ul>
            <ul className="flex gap-4 max-w-none justify-center py-12 text-5xl items-center text-center text-nowrap tracking-wider animate-scrollW w-fit" >
                {listaBanner}
            </ul>
        </div>
    );
}