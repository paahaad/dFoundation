
import Image from "next/image"

function eth() {
  return (
    <div className="flex flex-1 h-64 bg-[#b6c3d4] bg-cover bg-center p-3">
        <Image src="/eth.svg" alt="Drft logo" width={500} height={500} />
    </div>
  )
}

export default eth