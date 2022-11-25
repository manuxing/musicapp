import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { songsContext } from '../../../contexts/songsContext';
import SongPop from './SongPop';
import Button from "../../../../icons/More"
import "./index.css"

function Playlist({playList, handlePop}) {
    const data = useContext(songsContext);
    const [songs, setSongs] = useState([]);
    let {set} = data;
    useEffect(()=>{
      setSongs(playList.songs)
    },[]);
    const setInt = (song)=>{
      let copi = songs.filter(p => p.id !== song.id);
      setSongs(copi)
      set(song, 1);
    }
  return (
    playList !== false ?
    <div className={`listsong-pop`}>
      <div className='close' onClick={handlePop}>
        <Button text={"close"}/>
      </div>
      <div className="playlist-title">
        <h2>{playList.name}</h2>
      </div>
      <ul>
        {songs.map((tem, i) => {
          return <SongPop song={{ tem, setInt }} />;
        })}
      </ul>
    </div> : <></>
  );
}

export default React.memo(Playlist);