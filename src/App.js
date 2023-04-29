import {useState, useEffect} from 'react'
import { getChamp, getChamps, getSkin } from './network'
import { getRandomChamp, getRandomSkinNum } from './utils'

const ROUTE_CHAMPIONS = 'http://ddragon.leagueoflegends.com/cdn/12.17.1/data/en_US/champion.json'
const ROUTE_CHAMPION = champ => `http://ddragon.leagueoflegends.com/cdn/12.17.1/data/en_US/champion/${champ}.json`
const ROUTE_SKIN = (champ, num) => `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ}_${num}.jpg`

export const App = () => {
  const [loading, setLoading] = useState(true)
  const [champs, setChamps] = useState([])
  const [champ, setChamp] = useState(null)
  const [selectedChamp, setSelectedChamp] = useState({})
  const [selectedChampSkinBlobUrl, setSelectedChampSkinBlobUrl] = useState(null)

  useEffect(() => {
    (async () => {
      const champs = await getChamps()
      setChamps(champs)
      setLoading(false)
    })()
  }, [])

  useEffect(() => {
    if (selectedChamp.id) {
      (async () => {
        setLoading(true)
        const champ = await getChamp(selectedChamp.id)
        const skinBlob = await getSkin(selectedChamp.id, getRandomSkinNum(champ.skins.filter(a => a.num !== 0)))
        setSelectedChampSkinBlobUrl(URL.createObjectURL(skinBlob))
        console.log(champ)
        setChamp(champ)
        setLoading(false)
      })()
    }
  }, [selectedChamp.id])

  return loading ? <div>Loading...</div> : <div>
    <button onClick={() => setSelectedChamp(getRandomChamp(champs))}>Get Random Champ</button>
    {selectedChampSkinBlobUrl && <img src={selectedChampSkinBlobUrl}/>}
  </div>
}

export default App;
