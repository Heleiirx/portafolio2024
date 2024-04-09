export default function Cover(){
    return (
    <div className="flex flex-col h-screen items-center justify-center bg-primary relative">
      <div className="w-3/4 relative lg:w-1/2 lg:flex lg:justify-center">
        <h1 className="
        text-8xl text-center text-secondary
        after:content-['2☆_\A_24'] after:whitespace-pre after:block after:w-20 after:h-20
        after:text-background after:bg-secondary after:rounded-full after:text-2xl after:pt-2
        after:absolute after:bottom-2 after:left-3/4
        lg:w-1/2 lg:text-9xl lg:after:bottom-5
        ">PORT-FOLIO</h1>
      </div>
      <h3 className="text-xl text-center tracking-wider self-center mt-1 text-background">PUEBLITO ITZEL ROMERO VARGAS</h3>
    </div>
    );
}