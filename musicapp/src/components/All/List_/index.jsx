import React, {useContext} from 'react'
import { songsContext } from '../contexts/songsContext';
import "./index.css"
import Song from './Song';

function ListSongs() {

    let data = useContext(songsContext);

  return (
        <div className={`listsong`}>
          <ul>
            {data.list.map((tem) => {
              return (
               <Song song={tem}/>
              );
            })}
          </ul>
        </div>
  );
}

export default React.memo(ListSongs);