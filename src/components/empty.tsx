import Image from "next/image"
interface Emptyprops {
    label : string;
}

function Empty({label}:Emptyprops) {
    return (
      <div className="hidden h-full p-20 md:flex flex-col items-center justify-center">
        <div className="relative h-72 w-72 ">
            <Image
            alt="empty"
            fill
            src="/Cartoon_Robot.svg.png"
            />
        </div>
        <p className="text-muted-foreground text-sm text-center">{label}</p>
      </div>
    )
  }
  
  export default Empty