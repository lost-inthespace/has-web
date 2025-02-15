import { Logo } from "@/components/Logo"

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="animate-pulse">
        <Logo />
      </div>
      <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
    </div>
  )
}

