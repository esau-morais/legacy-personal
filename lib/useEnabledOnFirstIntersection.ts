import { useEffect, useRef, useState } from 'react'
import { useIntersection } from 'react-use'

export const useEnabledOnFirstIntersection = () => {
  const [enabled, setEnabled] = useState(false)
  const intersectionRef = useRef<HTMLDivElement | null>(null)
  const intersection = useIntersection(intersectionRef, {})

  useEffect(() => {
    if (!enabled && intersection?.isIntersecting) {
      setEnabled(true)
      intersectionRef.current = null
    }
  }, [intersection?.isIntersecting])

  return { enabled, intersectionRef }
}
