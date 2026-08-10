import { RefObject, useEffect, useState } from 'react'

export const useTextOverflow = (
  textRef: RefObject<HTMLParagraphElement | null>,
  text: string,
  maxLines: number
) => {
  const [canExpand, setCanExpand] = useState(false)

  useEffect(() => {
    const checkOverflow = () => {
      if (!textRef.current) return

      const lineHeight = parseFloat(
        getComputedStyle(textRef.current).lineHeight
      )

      setCanExpand(textRef.current.scrollHeight > lineHeight * maxLines)
    }

    checkOverflow()

    window.addEventListener('resize', checkOverflow)

    return () => {
      window.removeEventListener('resize', checkOverflow)
    }
  }, [textRef, text, maxLines])

  return canExpand
}
