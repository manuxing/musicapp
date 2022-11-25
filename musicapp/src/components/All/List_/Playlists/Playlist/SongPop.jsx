import React from 'react'
import "./index.css"
import Button from "../../../../icons/More"

function SongPop({song}) {
    const {tem, setInt} = song
  return (
    <li key={song.id}>
        {/* // onClick={() => setSong(i)} */}
        {/* className={`${song === i ? "playing" : "row"}`} */}
        <div className="song-pop">
          <div className="pop-p">
          <p>{tem.title}</p>
          </div>
          <div className="remove" onClick={() => setInt(tem, 1)}>
            <Button text={"remove"} />
          </div>
        </div>
      </li>
  );
}

export default SongPop;