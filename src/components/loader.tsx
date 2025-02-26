import Image from "next/image"

function Loader() {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center p-4">
      <div className="h-10 w-10 relative animate-spin ">
        {" "}
        <Image
        src="/logo.webp" 
        alt="No-image"
        fill
        />
      </div>
      <p className="text-sm text-muted-foreground">Navigator is thinking...</p>
    </div>
  );
}

export default Loader