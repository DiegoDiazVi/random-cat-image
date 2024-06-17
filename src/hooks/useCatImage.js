import { useEffect, useState } from 'react'
import { IMAGE_CAT_API } from '../utils/constants'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const threeWords = fact.split(' ').slice(0, 3).join('')
    fetch(`${IMAGE_CAT_API}/cat/says/${threeWords}?json=true`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Something is wrong')
        }
        return response.json()
      })
      .then(data => {
        const { _id } = data
        const url = `${IMAGE_CAT_API}/cat/${_id}/says/${threeWords}`
        console.log(url)
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl }
}
