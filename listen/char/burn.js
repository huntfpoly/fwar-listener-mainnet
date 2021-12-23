const Character = require('./../../model/character');

module.exports = async function burnChar(data) {
  if (data && data.length > 0) {
    let arrayTokenIdBurn = [];
    for (const burn of data) {
      const { returnValues } = burn;
      const { tokenId } = returnValues;
      arrayTokenIdBurn.push(tokenId);
    }
    console.log("Burn");
    const newCharacter = await Character.updateMany(
      { nftId: { $in: arrayTokenIdBurn } },
      { isBurn: true }
    );

    arrayTokenIdBurn = null;
  }
};
