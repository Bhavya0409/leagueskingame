export const getChamps = async () => {
    return await fetch('http://ddragon.leagueoflegends.com/cdn/12.17.1/data/en_US/champion.json').then(res => res.json())
}
export const getChamp = async champ => {
    return await fetch(`http://ddragon.leagueoflegends.com/cdn/12.17.1/data/en_US/champion/${champ}.json`).then(res => res.json())
}