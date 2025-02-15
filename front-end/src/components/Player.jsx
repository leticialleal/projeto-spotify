import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faBackwardStep , faForwardStep, faCirclePause } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router'
import { useRef, useEffect } from 'react'

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2,"0");
  const seconds = Math.floor(timeInSeconds - (minutes * 60)).toString().padStart(2,"0");
  return `${minutes}:${seconds}`
};

const timeInSeconds = (timeString) => {
  const splitArray = timeString.split(':');
  const minutes = Number(splitArray[0]);
  const seconds = Number(splitArray[1]);
  return (minutes * 60) + seconds;
}

const Player = ({ duration, idNextSong, idPreviousSong, audio }) => {
  
  // Web F12
  // const audioPlayer = document.querySelector('audio');
  // audioPlayer.play()
  // audioPlayer.pause()

  // const playerBar = document.querySelector('.player__bar-progress');
  // playerBar.style.setProperty('--_progress','95%');

  const audioPlayer = useRef();
  const progressBar = useRef();

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatTime(0));

  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying) 
        setCurrentTime(formatTime(audioPlayer.current.currentTime));
        progressBar.current.style.setProperty('--_progress',
          `${(100 * audioPlayer.current.currentTime) / timeInSeconds(duration)}%`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPlaying]);
  
  return (
    <div className="player">
      <div className="player__controllers">
        
        <Link to={`/song/${idPreviousSong}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} onClick={() => {
            audioPlayer.current.currentTime = 0
          }} />
        </Link>
        
        <FontAwesomeIcon className="player__icon player__icon--play" icon={isPlaying ? faCirclePause : faCirclePlay} onClick={() =>{
          playPause()
        }} />
        
        <Link to={`/song/${idNextSong}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} onClick={() => {
            audioPlayer.current.currentTime = 0
          }} />
        </Link>
      </div>
      
      <div className="player__progress">
        <p className="player__time">{currentTime}</p>
        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>
        <p className="player__time">{duration}</p>
      </div>

      {/* audioPlayer.current */}
      <audio ref={audioPlayer} src={audio}></audio>
      
    </div>
  )
}

export default Player