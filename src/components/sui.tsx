import Image from "next/image"

function sui() {
  return (
    <div className="flex flex-1 h-64 bg-[#030a14] bg-cover bg-center p-3">
        <Image src="/sui.svg" alt="Sui logo" width={500} height={500} />
    </div>
  )
}

export default sui