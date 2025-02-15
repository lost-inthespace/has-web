import Image from "next/image"

export function Logo() {
  return (
    <div className="relative w-24 h-24 transition-transform hover:scale-105">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HAS-logo%20(1)-mxOJ9ldzrpzS7XoBCFv767m5E0u13u.png"
        alt="HAS Logo"
        width={96}
        height={96}
        className="object-contain"
        priority
      />
    </div>
  )
}

