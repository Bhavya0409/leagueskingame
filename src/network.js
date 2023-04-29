export const getChamps = async () => {
    const res = await fetch('http://ddragon.leagueoflegends.com/cdn/12.17.1/data/en_US/champion.json').then(res => res.json())
    return Object.values(res.data)
}
export const getChamp = async champ => {
    return await fetch(`http://ddragon.leagueoflegends.com/cdn/12.17.1/data/en_US/champion/${champ}.json`).then(res => res.json())
}