import {HowLongToBeatService} from "howlongtobeat";

export const getHLTB = async (title: string = "") => {
  const hltbService = new HowLongToBeatService();

  try {
    const result = await hltbService.search(title);
    console.log(result)

    if (result.length === 0) {
      return false;
    }
    return {
      gameplayMain: result[0].gameplayMain,
      gameplayMainExtra: result[0].gameplayMainExtra,
      gameplayCompletionist: result[0].gameplayCompletionist,
    };
  } catch (e) {
    console.log(e)
    return false;
  }
};