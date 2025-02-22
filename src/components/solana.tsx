import Image from "next/image"

function solana() {
  return (
    <div className="flex flex-1 h-64 bg-solana bg-cover bg-center p-3">
        <Image src="/solanaLogo.svg" alt="Solana logo" width={500} height={500} />
  </div>
  )
}

export default solana