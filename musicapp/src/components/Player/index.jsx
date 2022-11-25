import React, {useContext} from 'react'
import { musicContext } from '../../pages/main/contexts/musicContext';
import Button from '../icons/More';
import "./index.css"

function Player({props: {song, setSong}}) {
  const music = useContext(musicContext)
  console.log(music[song].title)
  
  return (
    <div className="card">
      Player
      <div className="nav">
        <Button text={"expand_more"} />
        <span>
          Now Playing {song + 1}/{music.length}
        </span>
        <Button text={"queue_music"} />
      </div>
      <div className="img">
        <img src={music[song].thumbnail} alt="img" />
      </div>
      <div className="details">
        <p className="title">{music[song].title}</p>
        <p className="artist">{music[song].artist}</p>
      </div>
      <div className="progress">
        <input type="range" min={0} max={100} />
      </div>
      <div className="timer">
        <span>00:00</span>
        <span>00:34</span>
      </div>
      <div className="controls">
        <Button text={"repeat"} />

        <Button text={"skip_previous"} id={"prev"} />
        <div className="play">
          <Button text={"play_arrow"} />
        </div>

        <Button text={"skip_next"} id={"next"}/>

        <div className="volume">
          <Button text={"volume_up"}/>
        </div>

      </div>
      <audio src={music[song].src} controls></audio>
    </div>
  );
}

export default React.memo(Player);