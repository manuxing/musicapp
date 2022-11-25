import React, {useContext} from 'react'
import { musicContext } from '../../pages/main/contexts/musicContext';
import Button from '../icons/More';
import "./index.css"

function Player({props: {song, setSong}}) {
  const music = useContext(musicContext)
  console.log(music[song].title)
  
  return (
    <div className="card">
      <div className="detcontainer">
        <div className="img">
          <img src={music[song].thumbnail} alt="img" />
        </div>
        <div className="details">
          <p className="title">{music[song].title}</p>
          <div className="artist">
            <p >{music[song].artist}</p>
          </div>
        </div>
      </div>
      <div className="bar">
        <div className="bartop">
          <div className="timer">
            <p>00:00</p>
          </div>
          <div className="progress">
            <input type="range" min={0} max={100} />
          </div>
          <div>
            <p>00:34</p>
          </div>
        </div>
        <div className="controls">
          <Button text={"repeat"} />

          <Button text={"skip_previous"} id={"prev"} />
          <div className="play">
            <Button text={"play_arrow"} />
          </div>

          <Button text={"skip_next"} id={"next"}/>

          <Button text={"volume_up"}/>


        </div>
      </div>
          {/* <div className="volume">
            <Button text={"volume_up"}/>
            <input type="range" min={0} max={100} />
          </div> */}
      <div className="navcontainer">
        <div className="nav">
          <Button text={"expand_more"} />
          <span>
            Now Playing {song + 1}/{music.length}
          </span>
          <Button text={"queue_music"} />
        </div>
      </div>
      <audio src={music[song].src} controls></audio>
    </div>
  );
}

export default React.memo(Player);