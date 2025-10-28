import { useCountdown } from '@/hooks/use-countdown'

export const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const { days, hours, minutes, seconds, isFinished } = useCountdown(targetDate)

  if (isFinished) {
    return (
      <div className="text-2xl font-bold text-destructive text-center p-8 bg-destructive/10 rounded-lg">
        OFERTA ENCERRADA
      </div>
    )
  }

  return (
    <div className="grid grid-cols-4 gap-2 md:gap-4 text-center">
      <TimeUnit value={days} label="Dias" />
      <TimeUnit value={hours} label="Horas" />
      <TimeUnit value={minutes} label="Minutos" />
      <TimeUnit value={seconds} label="Segundos" />
    </div>
  )
}

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center p-2 rounded-lg bg-white/5">
    <div className="text-4xl md:text-6xl font-bold text-primary tabular-nums">
      {String(value).padStart(2, '0')}
    </div>
    <span className="text-sm md:text-base text-muted-foreground mt-1 uppercase tracking-widest">
      {label}
    </span>
  </div>
)
