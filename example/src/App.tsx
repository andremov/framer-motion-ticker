import Ticker from 'framer-motion-ticker/src'
import MediaCard from './MediaCard'
import WideMediaCard from './WideMediaCard'

function App() {

  return (
    <div className="App">
      <Ticker duration={40}>
        <MediaCard mediaId='sm_1' />
        <MediaCard mediaId='sm_2' />
        <MediaCard mediaId='sm_3' />
        <WideMediaCard mediaId='sm_4' />
        <MediaCard mediaId='sm_5' />
        <MediaCard mediaId='sm_6' />
        <WideMediaCard mediaId='sm_7' />
        <MediaCard mediaId='sm_8' />
        <WideMediaCard mediaId='sm_9' />
      </Ticker>
    </div>
  )
}

export default App
