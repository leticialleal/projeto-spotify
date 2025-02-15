import React from 'react'
import SongItem from './SongItem'
import { useState } from 'react'

const SongList = ( {songsArray} ) => {

  // let items = 5;

  // Variável de estado
  // const items = useState(5);
  const [ items, setItems ] = useState(5);

  return (
    <div className="song-list">
        {songsArray
          .filter((currentValue, index) => index < items)
          .map((currentSongObj, index) => 
            <SongItem key={index} index={index} {...currentSongObj} />)}
        <p className="song-list__see-more" 
          onClick={() => {
          // {items += 5}
          // setItems(10);
          setItems(items + 5)
          }}>Ver mais</p>

    </div>
  )
}

export default SongList