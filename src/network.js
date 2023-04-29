export const getChamps = async () => {
    const res = await fetch('http://ddragon.leagueoflegends.com/cdn/12.17.1/data/en_US/champion.json').then(res => res.json())
    return Object.values(res.data)
}
export const getChamp = async champId => {
    const champ = await fetch(`http://ddragon.leagueoflegends.com/cdn/12.17.1/data/en_US/champion/${champId}.json`).then(res => res.json())
    return champ.data[champId]
}
export const getSkin = async (champId, num) => {
    return await fetch(`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champId}_${num}.jpg`).then(res => res.blob())
}