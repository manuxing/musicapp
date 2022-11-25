import React, { useContext } from 'react'
import { useState } from 'react';
import { songsContext } from '../../contexts/songsContext';
import "./index.css"
import Playlist from './Playlist';

function PlayLists() {
  let data = useContext(songsContext);
   const [pop, setPop] = useState(false)

   const handlePop =(p)=>{
    if (pop === false) {
      setPop(p);
    } else {
      setPop(false);
    }

   }

  return (
    <div className="playlists-container">
      {Object.values(data.playlists).map((p) => {
        console.log(p)
        return (
          <div className="playlistcard" onClick={()=>handlePop(p)}>
            <p>{p.name}</p>
          </div>
        );
      })}
      <div className="addcard">
        <p>+</p>
      </div>
      {
        pop !== false ? 
        <Playlist playList={pop} handlePop={handlePop}/>:
         <></>
      }
    </div>
  );
}

export default React.memo(PlayLists)