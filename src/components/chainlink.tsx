import Image from "next/image"

function chainlink() {
  return (
    <div className="flex flex-1 h-64 bg-[#030a14] bg-cover bg-center p-3">
        <Image src="https://cdn.prod.website-files.com/5f6b7190899f41fb70882d08/665705c1f3833b5b5d8f4ffb_logo-chainlink-blue.svg" alt="Drft logo" width={500} height={500} />
    </div>
  )
}

export default chainlink