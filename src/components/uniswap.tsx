import Image from "next/image"

function drift() {
  return (
    <div className="flex flex-1 h-64 bg-[#030a14] bg-cover bg-center p-3">
        <Image src="/uniswap.svg" alt="uniswap logo" width={500} height={500} />
    </div>
  )
}

export default drift