const Character = require("./../../model/character");

module.exports = async function UpgradeNFT(data) {
    if (data && data.length > 0) {
        let returnValues = data.map((i) => i.returnValues);
        for (const char of returnValues) {
            const tokenId = char["tokenId"];
            
            const nft = await Character.findOne({
                nftId: tokenId,
            }).populate({ path: "teamId", select: "teamId" });
            if (nft) {
                const level = char["level"];
                const teamId = nft["teamId"].teamId;
                const {
                    attackSpeed,
                    coolDown,
                    critDamage,
                    burnEffectDmg,
                    poisonEffectDmg,
                } = nft;
                const newAttackSpeed = attackSpeedFn(
                    Number(level),
                    teamId,
                    attackSpeed
                );
                const newCoolDown = coolDownFn(
                    Number(level),
                    teamId,
                    coolDown
                );
                const newCritDamage = critDamageFn(
                    Number(level),
                    teamId,
                    critDamage
                );
                const newBurnEffectDmg = burnEffectDmgFn(
                    Number(level),
                    teamId,
                    burnEffectDmg
                );
                const newPoisonEffectDmg = poisonEffectDmgFn(
                    Number(level),
                    teamId,
                    poisonEffectDmg
                );
                // console.log("tokenId-----------------", tokenId);
                // console.log("level-----------------", level);
                // console.log("newCoolDown", newCoolDown);
                // console.log("newCritDamage", newCritDamage);
                // console.log("newBurnEffectDmg", newBurnEffectDmg);
                // console.log("newPoisonEffectDmg", newPoisonEffectDmg);
                if (
                    newCoolDown &&
                    newCritDamage &&
                    newBurnEffectDmg &&
                    newPoisonEffectDmg &&
                    newPoisonEffectDmg
                ) {
                    const newUpgrade = {
                        level: level,
                        attack: Number(char["attack"]) / 1000,
                        defense: Number(char["defense"]) / 1000,
                        health: Number(char["health"]) / 1000,
                        hash: char['hash'],
                        attackSpeed: newAttackSpeed,
                        coolDown: newCoolDown,
                        critDamage: newCritDamage,
                        burnEffectDmg: newBurnEffectDmg,
                        poisonEffectDmg: newPoisonEffectDmg,
                    };

                    await Character.findOneAndUpdate(
                        { nftId: tokenId },
                        newUpgrade
                    );
                }
            }
        }
        delete returnValues;
    }
};
function attackSpeedFn(level, teamId, attackSpeed) {
    switch (level) {
        case 5:
            if (teamId === "16") return "1.5";
            return attackSpeed;
            break;
        case 10:
            if (teamId === "14") return "1.7";
            if (teamId === "16") return "2";
            return attackSpeed;
            break;
        default:
            return attackSpeed;
            break;
    }
}
function coolDownFn(level, teamId, coolDown) {
    switch (level) {
        case 5:
            switch (teamId) {
                case "0":
                    return "2.73";
                    break;
                case "1":
                    return "1.36";
                    break;
                case "2":
                    return "0.91";
                    break;
                case "3":
                    return "0.45";
                    break;
                case "4":
                    return "1.82";
                    break;
                case "5":
                    return "2.09";
                    break;
                case "6":
                    return "1.82";
                    break;
                case "7":
                    return "1.21";
                    break;
                case "8":
                    return "1.82";
                    break;
                case "9":
                    return "1.3";
                    break;
                case "10":
                    return "2.73";
                    break;
                case "11":
                    return "1.82";
                    break;
                case "12":
                    return "1.82";
                    break;
                case "13":
                    return "2.55";
                    break;
                case "14":
                    return "3.91";
                    break;
                case "15":
                    return "1.21";
                    break;
                case "16":
                    return "2.27";
                    break;
                case "17":
                    return "1.07";
                    break;
                case "18":
                    return "1.21";
                    break;
                case "19":
                    return "2.36";
                    break;
                default:
                    return false;
                    break;
            }
            break;

        case 10:
            switch (teamId) {
                case "0":
                    return "2";
                    break;
                case "1":
                    return "1";
                    break;
                case "2":
                    return "0.67";
                    break;
                case "3":
                    return "0.3";
                    break;
                case "4":
                    return "1.33";
                    break;
                case "5":
                    return "1.53";
                    break;
                case "6":
                    return "1.33";
                    break;
                case "7":
                    return "0.89";
                    break;
                case "8":
                    return "1.33";
                    break;
                case "9":
                    return "0.95";
                    break;
                case "10":
                    return "2";
                    break;
                case "11":
                    return "1.33";
                    break;
                case "12":
                    return "1.33";
                    break;
                case "13":
                    return "1.87";
                    break;
                case "14":
                    return "2.87";
                    break;
                case "15":
                    return "0.89";
                    break;
                case "16":
                    return "1.67";
                    break;
                case "17":
                    return "0.79";
                    break;
                case "18":
                    return "0.89";
                    break;
                case "19":
                    return "1.73";
                    break;
                default:
                    return false;
                    break;
            }
            break;

        case 15:
            switch (teamId) {
                case "0":
                    return "2";
                    break;
                case "1":
                    return "1";
                    break;
                case "2":
                    return "0.67";
                    break;
                case "3":
                    return "0.33";
                    break;
                case "4":
                    return "1.33";
                    break;
                case "5":
                    return "1.53";
                    break;
                case "6":
                    return "1.33";
                    break;
                case "7":
                    return "0.89";
                    break;
                case "8":
                    return "1.33";
                    break;
                case "9":
                    return "0.95";
                    break;
                case "10":
                    return "2";
                    break;
                case "11":
                    return "1.33";
                    break;
                case "12":
                    return "1.33";
                    break;
                case "13":
                    return "1.87";
                    break;
                case "14":
                    return "2.87";
                    break;
                case "15":
                    return "0.89";
                    break;
                case "16":
                    return "1.67";
                    break;
                case "17":
                    return "0.79";
                    break;
                case "18":
                    return "0.89";
                    break;
                case "19":
                    return "1.73";
                    break;
                default:
                    return false;
                    break;
            }
            break;

        case 20:
            switch (teamId) {
                case "0":
                    return "1.71";
                    break;
                case "1":
                    return "0.86";
                    break;
                case "2":
                    return "0.57";
                    break;
                case "3":
                    return "0.29";
                    break;
                case "4":
                    return "1.14";
                    break;
                case "5":
                    return "1.31";
                    break;
                case "6":
                    return "1.14";
                    break;
                case "7":
                    return "0.76";
                    break;
                case "8":
                    return "1.14";
                    break;
                case "9":
                    return "0.82";
                    break;
                case "10":
                    return "1.71";
                    break;
                case "11":
                    return "1.14";
                    break;
                case "12":
                    return "1.14";
                    break;
                case "13":
                    return "1.6";
                    break;
                case "14":
                    return "2.46";
                    break;
                case "15":
                    return "0.76";
                    break;
                case "16":
                    return "1.43";
                    break;
                case "17":
                    return "0.67";
                    break;
                case "18":
                    return "0.76";
                    break;
                case "19":
                    return "1.49";
                    break;
                default:
                    return false;
                    break;
            }
            break;

        case 25:
            switch (teamId) {
                case "6":
                    return "1.14";
                    break;
                case "9":
                    return "0.82";
                    break;
                case "3":
                    return "0.29";
                    break;
                case "2":
                    return "0.57";
                    break;
                case "4":
                    return "1.14";
                    break;
                case "0":
                    return "1.71";
                    break;
                case "1":
                    return "0.86";
                    break;
                case "5":
                    return "1.31";
                    break;
                case "7":
                    return "0.76";
                    break;
                case "8":
                    return "1.14";
                    break;
                case "12":
                    return "1.14";
                    break;
                case "13":
                    return "1.6";
                    break;
                case "14":
                    return "2.46";
                    break;
                case "15":
                    return "0.76";
                    break;
                case "16":
                    return "1.43";
                    break;
                case "10":
                    return "1.71";
                    break;
                case "17":
                    return "0.67";
                    break;
                case "18":
                    return "0.76";
                    break;
                case "19":
                    return "1.49";
                    break;
                case "11":
                    return "1.14";
                    break;

                default:
                    return false;
                    break;
            }
            break;

        case 30:
            switch (teamId) {
                case "6":
                    return "1.14";
                    break;
                case "9":
                    return "0.82";
                    break;
                case "3":
                    return "0.29";
                    break;
                case "2":
                    return "0.57";
                    break;
                case "4":
                    return "1.14";
                    break;
                case "0":
                    return "1.71";
                    break;
                case "1":
                    return "0.86";
                    break;
                case "5":
                    return "1.31";
                    break;
                case "7":
                    return "0.76";
                    break;
                case "8":
                    return "1.14";
                    break;
                case "12":
                    return "1.14";
                    break;
                case "13":
                    return "1.6";
                    break;
                case "14":
                    return "2.46";
                    break;
                case "15":
                    return "0.76";
                    break;
                case "16":
                    return "1.43";
                    break;
                case "10":
                    return "1.71";
                    break;
                case "17":
                    return "0.67";
                    break;
                case "18":
                    return "0.76";
                    break;
                case "19":
                    return "1.49";
                    break;
                case "11":
                    return "1.14";
                    break;

                default:
                    return false;
                    break;
            }
            break;
        default:
            return coolDown;
            break;
    }
}
function critDamageFn(level, teamId, critDamage) {
    switch (level) {
        case 15:
            if (teamId === "7") return "2.4";
            return critDamage;
            break;
        case 20:
            if (teamId === "17") return "3";
            return critDamage;
            break;
        default:
            return critDamage;
            break;
    }
}

function burnEffectDmgFn(level, teamId, burnEffectDmg) {
    switch (level) {
        case 5:
            switch (teamId) {
                case "0":
                    return "26";
                    break;
                case "1":
                    return "21";
                    break;
                case "2":
                    return "110";
                    break;
                case "3":
                    return "110";
                    break;
                case "4":
                    return "13";
                    break;
                case "5":
                    return "15";
                    break;
                case "6":
                    return "17";
                    break;
                case "7":
                    return "27";
                    break;
                case "8":
                    return "11";
                    break;
                case "9":
                    return "7";
                    break;
                case "10":
                    return "22";
                    break;
                case "11":
                    return "17";
                    break;
                case "12":
                    return "26";
                    break;
                case "13":
                    return "13";
                    break;
                case "14":
                    return "23";
                    break;
                case "15":
                    return "37";
                    break;
                case "16":
                    return "17";
                    break;
                case "17":
                    return "28";
                    break;
                case "18":
                    return "17";
                    break;
                case "19":
                    return "110";
                    break;
                default:
                    return false;
                    break;
            }
            break;

        case 10:
            switch (teamId) {
                case "0":
                    return "36";
                    break;
                case "1":
                    return "28";
                    break;
                case "2":
                    return "150";
                    break;
                case "3":
                    return "150";
                    break;
                case "4":
                    return "18";
                    break;
                case "5":
                    return "20";
                    break;
                case "6":
                    return "23";
                    break;
                case "7":
                    return "37";
                    break;
                case "8":
                    return "16";
                    break;
                case "9":
                    return "9";
                    break;
                case "10":
                    return "30";
                    break;
                case "11":
                    return "23";
                    break;
                case "12":
                    return "36";
                    break;
                case "13":
                    return "18";
                    break;
                case "14":
                    return "32";
                    break;
                case "15":
                    return "51";
                    break;
                case "16":
                    return "23";
                    break;
                case "17":
                    return "38";
                    break;
                case "18":
                    return "23";
                    break;
                case "19":
                    return "150";
                    break;
                default:
                    return false;
                    break;
            }
            break;

        case 15:
            switch (teamId) {
                case "0":
                    return "47";
                    break;
                case "1":
                    return "37";
                    break;
                case "2":
                    return "197";
                    break;
                case "3":
                    return "197";
                    break;
                case "4":
                    return "24";
                    break;
                case "5":
                    return "27";
                    break;
                case "6":
                    return "30";
                    break;
                case "7":
                    return "49";
                    break;
                case "8":
                    return "20";
                    break;
                case "9":
                    return "12";
                    break;
                case "10":
                    return "39";
                    break;
                case "11":
                    return "30";
                    break;
                case "12":
                    return "47";
                    break;
                case "13":
                    return "24";
                    break;
                case "14":
                    return "41";
                    break;
                case "15":
                    return "67";
                    break;
                case "16":
                    return "30";
                    break;
                case "17":
                    return "49";
                    break;
                case "18":
                    return "30";
                    break;
                case "19":
                    return "197";
                    break;
                default:
                    return false;
                    break;
            }
            break;

        case 20:
            switch (teamId) {
                case "0":
                    return "81";
                    break;
                case "1":
                    return "63";
                    break;
                case "2":
                    return "339";
                    break;
                case "3":
                    return "339";
                    break;
                case "4":
                    return "41";
                    break;
                case "5":
                    return "46";
                    break;
                case "6":
                    return "51";
                    break;
                case "7":
                    return "84";
                    break;
                case "8":
                    return "35";
                    break;
                case "9":
                    return "20";
                    break;
                case "10":
                    return "68";
                    break;
                case "11":
                    return "51";
                    break;
                case "12":
                    return "81";
                    break;
                case "13":
                    return "41";
                    break;
                case "14":
                    return "71";
                    break;
                case "15":
                    return "115";
                    break;
                case "16":
                    return "51";
                    break;
                case "17":
                    return "85";
                    break;
                case "18":
                    return "51";
                    break;
                case "19":
                    return "339";
                    break;
                default:
                    return false;
                    break;
            }
            break;

        case 25:
            switch (teamId) {
                case "6":
                    return "107";
                    break;
                case "9":
                    return "84";
                    break;
                case "3":
                    return "449";
                    break;
                case "2":
                    return "449";
                    break;
                case "4":
                    return "54";
                    break;
                case "0":
                    return "61";
                    break;
                case "1":
                    return "67";
                    break;
                case "5":
                    return "111";
                    break;
                case "7":
                    return "47";
                    break;
                case "8":
                    return "27";
                    break;
                case "12":
                    return "90";
                    break;
                case "13":
                    return "67";
                    break;
                case "14":
                    return "108";
                    break;
                case "15":
                    return "54";
                    break;
                case "16":
                    return "94";
                    break;
                case "10":
                    return "153";
                    break;
                case "17":
                    return "67";
                    break;
                case "18":
                    return "112";
                    break;
                case "19":
                    return "67";
                    break;
                case "11":
                    return "449";
                    break;

                default:
                    return false;
                    break;
            }
            break;

        case 30:
            switch (teamId) {
                case "6":
                    return "180";
                    break;
                case "9":
                    return "141";
                    break;
                case "3":
                    return "755";
                    break;
                case "2":
                    return "755";
                    break;
                case "4":
                    return "91";
                    break;
                case "0":
                    return "102";
                    break;
                case "1":
                    return "113";
                    break;
                case "5":
                    return "187";
                    break;
                case "7":
                    return "79";
                    break;
                case "8":
                    return "45";
                    break;
                case "12":
                    return "151";
                    break;
                case "13":
                    return "113";
                    break;
                case "14":
                    return "181";
                    break;
                case "15":
                    return "91";
                    break;
                case "16":
                    return "159";
                    break;
                case "10":
                    return "257";
                    break;
                case "17":
                    return "113";
                    break;
                case "18":
                    return "189";
                    break;
                case "19":
                    return "113";
                    break;
                case "11":
                    return "755";
                    break;

                default:
                    return false;
                    break;
            }
            break;
        default:
            return burnEffectDmg;
            break;
    }
}
function poisonEffectDmgFn(level, teamId, poisonEffectDmg) {
    switch (level) {
        case 5:
            switch (teamId) {
                case "0":
                    return "26";
                    break;
                case "1":
                    return "21";
                    break;
                case "2":
                    return "100";
                    break;
                case "3":
                    return "100";
                    break;
                case "4":
                    return "13";
                    break;
                case "5":
                    return "15";
                    break;
                case "6":
                    return "17";
                    break;
                case "7":
                    return "27";
                    break;
                case "8":
                    return "11";
                    break;
                case "9":
                    return "7";
                    break;
                case "10":
                    return "22";
                    break;
                case "11":
                    return "17";
                    break;
                case "12":
                    return "26";
                    break;
                case "13":
                    return "13";
                    break;
                case "14":
                    return "23";
                    break;
                case "15":
                    return "37";
                    break;
                case "16":
                    return "17";
                    break;
                case "17":
                    return "28";
                    break;
                case "18":
                    return "17";
                    break;
                case "19":
                    return "100";
                    break;
                default:
                    return false;
                    break;
            }
            break;

        case 10:
            switch (teamId) {
                case "0":
                    return "36";
                    break;
                case "1":
                    return "28";
                    break;
                case "2":
                    return "100";
                    break;
                case "3":
                    return "100";
                    break;
                case "4":
                    return "18";
                    break;
                case "5":
                    return "20";
                    break;
                case "6":
                    return "23";
                    break;
                case "7":
                    return "37";
                    break;
                case "8":
                    return "16";
                    break;
                case "9":
                    return "9";
                    break;
                case "10":
                    return "30";
                    break;
                case "11":
                    return "23";
                    break;
                case "12":
                    return "36";
                    break;
                case "13":
                    return "18";
                    break;
                case "14":
                    return "32";
                    break;
                case "15":
                    return "51";
                    break;
                case "16":
                    return "23";
                    break;
                case "17":
                    return "38";
                    break;
                case "18":
                    return "23";
                    break;
                case "19":
                    return "100";
                    break;
                default:
                    return false;
                    break;
            }
            break;

        case 15:
            switch (teamId) {
                case "0":
                    return "47";
                    break;
                case "1":
                    return "37";
                    break;
                case "2":
                    return "100";
                    break;
                case "3":
                    return "100";
                    break;
                case "4":
                    return "24";
                    break;
                case "5":
                    return "27";
                    break;
                case "6":
                    return "30";
                    break;
                case "7":
                    return "49";
                    break;
                case "8":
                    return "20";
                    break;
                case "9":
                    return "12";
                    break;
                case "10":
                    return "39";
                    break;
                case "11":
                    return "30";
                    break;
                case "12":
                    return "47";
                    break;
                case "13":
                    return "24";
                    break;
                case "14":
                    return "41";
                    break;
                case "15":
                    return "67";
                    break;
                case "16":
                    return "30";
                    break;
                case "17":
                    return "49";
                    break;
                case "18":
                    return "30";
                    break;
                case "19":
                    return "100";
                    break;
                default:
                    return false;
                    break;
            }
            break;

        case 20:
            switch (teamId) {
                case "0":
                    return "81";
                    break;
                case "1":
                    return "63";
                    break;
                case "2":
                    return "100";
                    break;
                case "3":
                    return "100";
                    break;
                case "4":
                    return "41";
                    break;
                case "5":
                    return "46";
                    break;
                case "6":
                    return "51";
                    break;
                case "7":
                    return "84";
                    break;
                case "8":
                    return "35";
                    break;
                case "9":
                    return "20";
                    break;
                case "10":
                    return "68";
                    break;
                case "11":
                    return "51";
                    break;
                case "12":
                    return "81";
                    break;
                case "13":
                    return "41";
                    break;
                case "14":
                    return "71";
                    break;
                case "15":
                    return "115";
                    break;
                case "16":
                    return "51";
                    break;
                case "17":
                    return "85";
                    break;
                case "18":
                    return "51";
                    break;
                case "19":
                    return "100";
                    break;
                default:
                    return false;
                    break;
            }
            break;

        case 25:
            switch (teamId) {
                case "6":
                    return "107";
                    break;
                case "9":
                    return "84";
                    break;
                case "3":
                    return "100";
                    break;
                case "2":
                    return "100";
                    break;
                case "4":
                    return "54";
                    break;
                case "0":
                    return "61";
                    break;
                case "1":
                    return "67";
                    break;
                case "5":
                    return "111";
                    break;
                case "7":
                    return "47";
                    break;
                case "8":
                    return "27";
                    break;
                case "12":
                    return "90";
                    break;
                case "13":
                    return "67";
                    break;
                case "14":
                    return "108";
                    break;
                case "15":
                    return "54";
                    break;
                case "16":
                    return "94";
                    break;
                case "10":
                    return "153";
                    break;
                case "17":
                    return "67";
                    break;
                case "18":
                    return "112";
                    break;
                case "19":
                    return "67";
                    break;
                case "11":
                    return "100";
                    break;

                default:
                    return false;
                    break;
            }
            break;

        case 30:
            switch (teamId) {
                case "6":
                    return "180";
                    break;
                case "9":
                    return "141";
                    break;
                case "3":
                    return "100";
                    break;
                case "2":
                    return "100";
                    break;
                case "4":
                    return "91";
                    break;
                case "0":
                    return "102";
                    break;
                case "1":
                    return "113";
                    break;
                case "5":
                    return "187";
                    break;
                case "7":
                    return "79";
                    break;
                case "8":
                    return "45";
                    break;
                case "12":
                    return "151";
                    break;
                case "13":
                    return "113";
                    break;
                case "14":
                    return "181";
                    break;
                case "15":
                    return "91";
                    break;
                case "16":
                    return "159";
                    break;
                case "10":
                    return "257";
                    break;
                case "17":
                    return "113";
                    break;
                case "18":
                    return "189";
                    break;
                case "19":
                    return "113";
                    break;
                case "11":
                    return "100";
                    break;

                default:
                    return false;
                    break;
            }
            break;
        default:
            return poisonEffectDmg;
            break;
    }
}
