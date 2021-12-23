const Character = require("./../../model/character");
const Team = require("./../../model/team");
const User = require("./../../model/user");
const getUserId = require("./../../getUserId");

const MintNftLog = require("./../../model/log/mintNft");

const CharacterStats = require("./dataChar");


module.exports = async function createChar(data) {
    if (data && data.length > 0) {
        let {logs, returnValues} = data.reduce((acc, cur) => {
            if (Object.keys(acc).length > 0) {
                return {
                    logs: [
                        ...acc.logs,
                        {
                            address: cur.address,
                            transactionHash: cur.transactionHash,
                            event: cur.event,
                        },
                    ],
                    returnValues: [...acc.returnValues, cur.returnValues],
                };
            } else {
                return {
                    logs: [
                        {
                            address: cur.address,
                            transactionHash: cur.transactionHash,
                            // returnValues: i.returnValues,
                            event: cur.event,
                        },
                    ],
                    returnValues: [cur.returnValues],
                };
            }
        }, {});

        let newCharArr = [];
        for (const char of returnValues) {
            const userId = await getUserId(char.receiver);
            const existChar = await Character.exists({
                nftId: char.tokenId,
            });
            if (!existChar) {
                const infoStat = CharacterStats.find(
                    (charStat) => charStat.teamId === char.teamId
                );
                const infoTeam = await Team.findOne({
                    teamId: char.teamId,
                }).select("type");
                const newCharacter = new Character({
                    userId,
                    nftId: char.tokenId,
                    level: char.level,
                    rarity: char.rarity,
                    element: char.elementType,
                    cardType: infoTeam.type,
                    attack: Number(char.attack) / 1000,
                    defense: Number(char.defense) / 1000,
                    health: Number(char.health) / 1000,
                    baseAttack: Number(char.attack) / 1000,
                    baseDefense: Number(char.defense) / 1000,
                    baseHealth: Number(char.health) / 1000,
                    hash: char.hash,
                    ...infoStat,
                    teamId: infoTeam._id,
                    
                });
                newCharArr.push(newCharacter);
            }
        }
        await Character.insertMany(newCharArr);
        delete logs;
        delete returnValues;
        delete newCharArr;
        console.log("newCharacter");
    }
};
