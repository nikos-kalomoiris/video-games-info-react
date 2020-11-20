const baseurl = "https://api.rawg.io/api";
const apiKey = process.env.REACT_APP_API_KEY;

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
   if(month < 10) return `0${month}`;
   return month;
}
const getCurrentDay = () => {
    const day = new Date().getDate();
   if(day < 10) return `0${day}`;
   return day;
}

const getCurrentYear = new Date().getFullYear();

const currentDate = `${getCurrentYear}-${getCurrentMonth()}-${getCurrentDay()}`;
const lastYear = `${getCurrentYear - 1}-${getCurrentMonth()}-${getCurrentDay()}`;
const nextYear = `${getCurrentYear + 1}-${getCurrentMonth()}-${getCurrentDay()}`;
export const upcomingGames = `${baseurl}/games?key=${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
export const popularGames = `${baseurl}/games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
export const newGames = `${baseurl}/games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
export const gameDetails = gameId => `${baseurl}/games/${gameId}?key=${apiKey}`;
export const gameScreenShots = gameId => `${baseurl}/games/${gameId}/screenshots?key=${apiKey}`;
export const gameSearch = gameName => `${baseurl}/games?search=${gameName}&page_size=10`;