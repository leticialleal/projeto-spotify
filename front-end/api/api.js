// Fetch (nativo do JS) ou Axios (pacote/biblioteca)

// npm i axios
import axios from 'axios'

// const URL = "http://localhost:3000";
// Depois do deploy
const URL = "https://projeto-spotify-hha5.onrender.com/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

// console.log(responseArtists.data);
// node ./api/api.js

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;