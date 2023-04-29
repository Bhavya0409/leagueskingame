import {useState, useEffect} from 'react'
import { getChamps, test } from './network'

const ROUTE_CHAMPIONS = 'http://ddragon.leagueoflegends.com/cdn/12.17.1/data/en_US/champion.json'
const ROUTE_CHAMPION = champ => `http://ddragon.leagueoflegends.com/cdn/12.17.1/data/en_US/champion/${champ}.json`
const ROUTE_SKIN = (champ, num) => `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ}_${num}.jpg`

export const App = () => {
  useEffect(() => {
    (async () => {
      const champs = await getChamps()
    })()
  }, [])
  return ''
}

export default App;
