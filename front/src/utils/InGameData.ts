import axios from "axios";

export async function getSummonerAccountId(summonerName: string) {
  const { data } = await axios.get(
    `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=RGAPI-2ac5a836-31ac-44bc-a1fc-2b95165b8e9a`
  );

  console.log(data);
}
