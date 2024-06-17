import { useEffect, useState } from 'react'
import { getFact } from '../utils/getFact'

export function useCatFacts () {
  const [fact, setFact] = useState()

  const refreshCat = async () => {
    const newFact = await getFact()
    setFact(newFact)
  }

  useEffect(() => {
    refreshCat()
  }, [])

  return { fact, refreshCat }
}
