import React, {useContext, useRef} from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { musicContext } from '../../pages/main/contexts/musicContext';
import { timer } from '../../tools';
import BarPlayer from './BarPlayer';
import DetallePlayer from './DetallePlayer';
import Volume from './Volume';
import { playerContext } from '../../pages/main/contexts/playerContext';
import "./index.css"
import { LoadStart } from './playerActions';

function Player({props: {song, setSong}}) {

  const music = useContext(musicContext);
  const [duration, setDuration] = useState(0);
  const [cTime, setCtime] = useState(0);
  const [play, setPlay] = useState(false);
  const [volume, setVolume] = useState(100);
  const [showV, setShowV] = useState(false);
  const [repeat, setRepeat] = useState('repeat');
  const audio = useRef();

  const handleLoadStart = (e)=> {
    //setDuration
    loadStart(e, setDuration);
  }
}

  function handleTimeUpdate(audion, action){
    const currentTime = audio.current.currentTime;
    setCtime(currentTime);
  }

  function handlePlay(play, audio, action){
    if(play){
      audio.current.pause();
      setPlay(false);
    }else{
      audio.current.play();
      setPlay(true);
    }
  }

  function handleNextPrev(n, action, music){
    setSong(v =>{
      if(n > 0){
        return v + n > music.length - 1 ? 0 :v + n;
      }
      return v + n < 0 ? music.length - 1: v+n 
    })
  }

  function handleRepeat(action){
    setRepeat(val=>{
      switch(val){
        case "repeat":
          return 'repeat_one';

        case "repeat_one":
          return 'shuffle';

        default:
          return 'repeat'
      }
    })
  }

  function changeCurrentTime(e, audio, action){
    const current = Number(e.target.value);
    audio.current.currentTime = current;
    setCtime(current)
  }

  function endedAudio(audio, action, action2){
    switch(repeat){
      case 'repeat_one':
        return audio.current.play();
      case 'shuffle':
        return handleShuffle();
        default:
          return handleNextPrev(1);
    }
  }

  function handleShuffle(action, cb){
    const num = randomNumber();
    setSong(num);
  }

  function randomNumber(music, song){
    const number = Math.floor(Math.random() * (music.length-1))
    if(number === song)return randomNumber();
    return number
  }
  
  useEffect(()=>{
    audio.current.volume = volume / 100;
  },[volume])

  useEffect(()=>{
    if(play){ audio.current.play(); }
  },[song, play])

  const data = {
    music,
    song,
    timer,
    duration,
    cTime,
    changeCurrentTime,
    handleRepeat,
    repeat,
    handleNextPrev,
    handlePlay,
    setShowV,
    play,
    setVolume,
    volume,
  };

  return (
    <playerContext.Provider value={data}>
      <div className="card">
        <DetallePlayer/>
        <BarPlayer/>
        {showV === true ? (
          <Volume/>
        ) : (
          <></>
        )}
        <audio
          src={music[song].src}
          hidden
          ref={audio}
          onLoadStart={handleLoadStart}
          onTimeUpdate={() => handleTimeUpdate()}
          onEnded={endedAudio}
        ></audio>
      </div>
      </playerContext.Provider>
  );
}

export default React.memo(Player);