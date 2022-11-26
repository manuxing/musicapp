import React, {useEffect, useRef, useState} from 'react'
import Button from "../../components/icons/More"
import Player from '../../components/Player'
import { musicContext } from './contexts/musicContext';
import "./index.css"
import data from "../../assets/data"
import List from '../../components/Queue';
import All from "../../components/All"

function MainPage() {

  const [song, setSong] = useState(0);
  const [open, setOpen] = useState(false);
  const [duration, setDuration] = useState(0);
  const [cTime, setCtime] = useState(0);
  const [play, setPlay] = useState(false);
  const [volume, setVolume] = useState(100);
  const [showV, setShowV] = useState(false);
  const [repeat, setRepeat] = useState('repeat');
  const [page, setPage] = useState(true);
  const [playlists, setPlayLists] = useState(
    {
        queue:{
        name: "Queue",
          songs:[]
        }
    },
  );
  const [list, setList] = useState(data);
  const audio = useRef();

  const context = {
    music:playlists.queue.songs,
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
    song,
    setSong,
    page, 
    setPage,
    playlists, 
    setPlayLists,
    list,
    setList
  }

  useEffect(()=>{
    console.log(play)
    if(play){ audio.current.play(); }
  },[song, play, audio])

  return (
    <div className="container">
      <musicContext.Provider value={context}>
            <main>
            <div className="back" onClick={()=>setPage(!page)}>
              <Button text={"close"}/>
            </div>
              <Player props={{ song, setSong }} />
              {
                page === true ?
                <List props={{ open, setOpen, song, setSong }} />:
                <All/>
              }
            </main>
      </musicContext.Provider>
    </div>
  );
}

export default React.memo(MainPage);