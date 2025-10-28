import { ArrowDown } from 'lucide-react'

export const ScrollDownIndicator = () => {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <span className="text-sm text-white/70">Role para baixo</span>
      <ArrowDown className="w-6 h-6 text-white animate-bounce" />
    </div>
  )
}
