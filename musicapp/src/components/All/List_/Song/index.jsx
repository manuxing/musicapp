import React from 'react'
import { useContext } from 'react';
import Button from "../../../icons/More"
import { songsContext } from '../../contexts/songsContext';
import "./index.css"

function Song({song}) {

  const data = useContext(songsContext);
  const {set} = data;
  return (
    <li key={song.id}>
      {/* // onClick={() => setSong(i)} */}
      {/* className={`${song === i ? "playing" : "row"}`} */}
      <div className="song" onClick={()=>set(song)}>
        <p>{song.title}</p>
        <div className="add">
          <Button text={"add"} />
        </div>
      </div>
    </li>
  );
}

export default React.memo(Song)