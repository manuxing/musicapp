import React, {useContext, useEffect} from 'react'
import { musicContext } from '../../pages/main/contexts/musicContext';
import { timer } from '../../tools';
import BarPlayer from './BarPlayer';
import DetallePlayer from './DetallePlayer';
import Volume from './Volume';
import { playerContext } from '../../pages/main/contexts/playerContext';
import "./index.css"
import { End, loadStart, nextPrev, Play, randomNumber, Repeat } from './playerActions';

function Player({props: {song, setSong}}) {

  const context = useContext(musicContext);
  const {
    music,
    duration,
    setDuration,
    cTime,
    setCtime,
    play,
    setPlay,
    volume,
    setVolume,
    showV,
    setShowV,
    repeat, 
    setRepeat,
    audio,
    page,
  } = context;


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

  // useEffect(()=>{
  //   if(play){ audio.current.play(); }
  // },[song, play, audio])

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
    showV,
    play,
    setVolume,
    volume,
  };

  return (
    <playerContext.Provider value={data}>
      {
        page === true ? 
        <div className="card">
          <DetallePlayer page={page}/>
          <BarPlayer page={page}/>
            <Volume/>
        </div>:
           <div className="card-all">
           <DetallePlayer page={page}/>
           <BarPlayer page={page}/>
         </div>
      }
      <audio
            src={music[song].src}
            hidden
            ref={audio}
            onLoadStart={handleLoadStart}
            onTimeUpdate={() => handleTimeUpdate()}
            onEnded={endedAudio}
          ></audio>
      </playerContext.Provider>
  );
}

export default React.memo(Player);