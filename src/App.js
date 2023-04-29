import {useState, useEffect} from 'react'
import { getChamps } from './network'
import { getRandomChamp } from './utils'

const ROUTE_CHAMPIONS = 'http://ddragon.leagueoflegends.com/cdn/12.17.1/data/en_US/champion.json'
const ROUTE_CHAMPION = champ => `http://ddragon.leagueoflegends.com/cdn/12.17.1/data/en_US/champion/${champ}.json`
const ROUTE_SKIN = (champ, num) => `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ}_${num}.jpg`

export const App = () => {
  const [loading, setLoading] = useState(true)
  const [champs, setChamps] = useState([])
  const [selectedChamp, setSelectedChamp] = useState(null)
  console.log({champs})

  useEffect(() => {
    (async () => {
      const champs = await getChamps()
      setChamps(champs)
      setLoading(false)
    })()
  }, [])

  return loading ? <div>Loading...</div> : <div>
    <button onClick={() => setSelectedChamp(getRandomChamp(champs))}>Get Random Champ</button>
    {selectedChamp && <div>{selectedChamp.name}</div>}
  </div>
}

export default App;
