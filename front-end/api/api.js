// Fetch (nativo do JS) ou Axios (pacote/biblioteca)

// npm i axios
import axios from 'axios'

const URL = "http://localhost:3000";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

// console.log(responseArtists.data);
// node ./api/api.js

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;