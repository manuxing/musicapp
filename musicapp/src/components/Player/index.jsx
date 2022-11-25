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
import { End, loadStart, nextPrev, Play, randomNumber, Repeat } from './playerActions';

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
    loadStart(e, setDuration);
  }

  function handleTimeUpdate(){
    const currentTime = audio.current.currentTime;
    setCtime(currentTime);
  }

  function handlePlay(){
    Play(play, audio, setPlay);
  }

  function handleNextPrev(n){
    nextPrev(setSong, n, music)
  }

  function handleRepeat(){
    Repeat(setRepeat);
  }

  function changeCurrentTime(e){
    const current = Number(e.target.value);
    audio.current.currentTime = current;
    setCtime(current)
  }

  function endedAudio(){
    End(repeat, audio, handleShuffle, handleNextPrev);
  }

  const handleShuffle = ()=>{
    const num = randomNumber(music, song);
    setSong(num);
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