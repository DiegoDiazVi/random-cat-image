import { FACT_CAT_API } from './constants'

export const getFact = async () => {
  try {
    const response = await fetch(FACT_CAT_API)
    const data = await response.json()
    const { fact } = data
    return fact
  } catch (error) {
    throw new Error(error)
  }
}
