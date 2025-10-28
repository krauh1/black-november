import { useEffect, useRef, useState } from 'react'

/**
 * A custom hook to detect when an element is visible in the viewport.
 * @param options - IntersectionObserver options.
 * @returns A ref to attach to the element and a boolean indicating visibility.
 */
export const useScrollAnimation = (options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      }
    }, options)

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [options])

  return { ref, isVisible }
}
