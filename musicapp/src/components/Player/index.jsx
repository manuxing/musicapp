import React, {useContext, useRef} from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { musicContext } from '../../pages/main/contexts/musicContext';
import { timer } from '../../tools';
import Button from '../icons/More';
import "./index.css"

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
    const src = e.nativeEvent.srcElement.src;
    const audioA =  new Audio(src);
    audioA.onloadedmetadata = ()=>{
    if (audioA.readyState > 0) {
      setDuration(audioA.duration);
    }
  }
  if(play){    audio.current.play();  }
}

  function handleTimeUpdate(){
    const currentTime = audio.current.currentTime;
    setCtime(currentTime);
  }

  function handlePlay(){
    if(play){
      audio.current.pause();
      setPlay(false);
    }else{
      audio.current.play();
      setPlay(true);
    }
  }

  function handleNextPrev(n){
    setSong(v =>{
      if(n > 0){
        return v + n > music.length - 1 ? 0 :v + n;
      }
      return v + n < 0 ? music.length - 1: v+n 
    })
  }

  function handleRepeat(){
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

  function changeCurrentTime(e){
    const current = Number(e.target.value);
    audio.current.currentTime = current;
    setCtime(current)
  }

  function endedAudio(){
    switch(repeat){
      case 'repeat_one':
        return audio.current.play();
      case 'shuffle':
        return handleShuffle();
        default:
          return handleNextPrev(1);
    }
  }

  function handleShuffle(){
    const num = randomNumber();
    setSong(num);
  }

  function randomNumber(){
    const number = Math.floor(Math.random() * (music.length-1))
    if(number === song)return randomNumber();
    return number
  }
  
useEffect(()=>{
  audio.current.volume = volume / 100;
},[volume])

  return (
    <div className="card">
      <div className="detcontainer">
        <div className="img">
          <img src={music[song].thumbnail} alt="img" />
        </div>
        <div className="details">
          <p className="title">{music[song].title}</p>
          <div className="artist">
            <p>{music[song].artist}</p>
          </div>
        </div>
      </div>
      <div className="bar">
        <div className="bartop">
          <div className="timer">
            <p>{timer(cTime)}</p>
          </div>
          <div className="progress">
            <input type="range" min={0} max={duration}
            value={cTime} onChange={e => changeCurrentTime(e)} />
          </div>
          <div>
            <p>{timer(duration)}</p>
          </div>
        </div>
        <div className="controls">
          <div className="div" onClick={handleRepeat}>
            <Button text={repeat} />
          </div>
          <div className="div" onClick={()=>handleNextPrev(-1)}>
            <Button text={"skip_previous"} id={"prev"} />
          </div>
          <div className="play" onClick={handlePlay}>
            <Button text={!play ? "play_arrow" : "pause"} />
          </div>
          <div className="div" onClick={()=>handleNextPrev(1)}>
            <Button text={"skip_next"} id={"next"} />
          </div>
<div className="divz" onClick={()=>setShowV(prev => !prev)}>
          <Button text={"volume_up"} />
</div>
        </div>
      </div>
      {showV === true ?
      <div className="volume">
        <div onClick={()=> setVolume(v =>  v > 0 ? 0 : 100)}>
            <Button text={volume > 0 ? "volume_up" : "volume_off"}/>
        </div>
            <input type="range" min={0} max={100}
            onChange={e=>setVolume(parseInt(e.target.value))} 
            value={volume}/>
            <div className="div">
              <span>{volume}</span>
          </div>
          </div> 
          : <></> 
      }
      <audio
        src={music[song].src}
        hidden
        ref={audio}
        onLoadStart={handleLoadStart}
        onTimeUpdate={() => handleTimeUpdate()}
        onEnded={endedAudio}
      ></audio>
    </div>
  );
}

export default React.memo(Player);