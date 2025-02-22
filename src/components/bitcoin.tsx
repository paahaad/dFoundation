import Image from "next/image"

function drift() {
  return (
    <div className="flex flex-1 h-64 bg-[#aebacc] bg-cover bg-center p-3">
        <Image src="/bitcoin.svg" alt="bitcoin logo" width={500} height={500} />
    </div>
  )
}

export default drift