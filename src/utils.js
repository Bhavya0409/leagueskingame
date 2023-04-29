export const getRandomInt = max => Math.floor(Math.random() * max)
export const getRandomChamp = champs => champs[getRandomInt(champs.length)]
export const getRandomSkinNum = skins => skins[getRandomInt(skins.length)].num