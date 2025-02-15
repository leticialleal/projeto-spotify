import React from 'react'
import Player from '../components/Player'
import { Link, useParams } from 'react-router'
import { songsArray } from '../assets/database/songs'
import { artistArray } from '../assets/database/artists'

const Song = () => {

  const { id } = useParams();

  // const { image, name, artist, duration } = songsArray.filter((currentSongObj) => currentSongObj._id === Number(id))[0];
  // Depois do back-end
  const { image, name, artist, duration, audio, _id } = songsArray.filter((currentSongObj) => currentSongObj._id === id)[0];

  const artistObj = artistArray.filter((currentArtistObj) => currentArtistObj.name === artist)[0];

  const songsArrayFromArtist = songsArray.filter((currentSongObj) => currentSongObj.artist === artist);

  // const currentSong = songsArrayFromArtist.filter((currentSongObj) => currentSongObj._id === Number(id))[0];
  const currentSong = songsArrayFromArtist.filter((currentSongObj) => currentSongObj._id === id)[0];
  const currentIndex = songsArrayFromArtist.indexOf(currentSong);

  let nextIndex;
  if(currentIndex < (songsArrayFromArtist.length - 1)) {
    nextIndex = currentIndex + 1;
  } else {
    nextIndex = 0;
  }

  let previousIndex;
  if(currentIndex > 0) {
    previousIndex = currentIndex - 1;
  } else {
    previousIndex = songsArrayFromArtist.length - 1;
  }

  const idNextSong = songsArrayFromArtist[nextIndex]._id;
  const idPreviousSong = songsArrayFromArtist[previousIndex]._id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da Música ${name}` } />
        </div>
      </div>
      
      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img src={artistObj.image} alt={`Imagem do Artista ${artist}`} width={75} height={75} />
        </Link>
        <Player duration={duration} idNextSong={idNextSong} idPreviousSong={idPreviousSong} audio={audio} />
        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  )
}

export default Song