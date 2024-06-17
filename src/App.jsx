import { useCatFacts } from './hooks/useCatFacts'
import { useCatImage } from './hooks/useCatImage'
import './App.css'

function App () {
  const { fact, refreshCat } = useCatFacts()
  const { imageUrl } = useCatImage({ fact })

  return (
    <main>
      <h1>Cat Image With Fact</h1>
      <button onClick={() => refreshCat()}>Refresh</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt='a cat image with the first three words fact' />}
    </main>
  )
}

export default App
