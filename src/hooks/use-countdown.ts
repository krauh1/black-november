import { useEffect, useState } from 'react'

/**
 * A custom hook to manage a countdown timer.
 * @param targetDate - The target date string (e.g., "2025-11-30T23:59:59").
 * @returns An object with the remaining days, hours, minutes, seconds, and a flag indicating if the countdown is finished.
 */
export const useCountdown = (targetDate: string) => {
  const countDownDate = new Date(targetDate).getTime()

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime(),
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [countDownDate])

  return getReturnValues(countDown)
}

const getReturnValues = (countDown: number) => {
  if (countDown < 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isFinished: true }
  }
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  )
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds, isFinished: false }
}
