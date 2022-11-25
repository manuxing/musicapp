import React, {useContext} from 'react'
import { musicContext } from '../../pages/main/contexts/musicContext'
import Button from '../icons/More';
import "./index.css"

function List({props:{open, setOpen, song, setSong}}) {
    let music = useContext(musicContext);
  return (
    <div className="list">
      <div className="header">
          <Button text={"queue_music"} />
        <Button text={"close"} />
      </div>

      <ul>
        {music.map((tem, i) => {
          return (
            <li key={tem.id}>
              <div className="row">
                <p>{tem.title}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List