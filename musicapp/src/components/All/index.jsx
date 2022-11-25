import React, {useState} from 'react'
import { songsContext } from './contexts/songsContext';
import data from "../../assets/data"
import "./index.css"
import ListSongs from './List_';
import Playlists from './List_/Playlists';

function SongsPage() {

  const [playlists, setPlayLists] = useState(
    {
        queue:{
        name: "Queue",
          songs:[]
        }
    },
  );
  const [list, setList] = useState(data);
  const set = (song, rev) =>{
    if(rev === 1){
      let res = playlists.queue.songs.filter(p => p.id !== song.id);
      console.log(res)
      setPlayLists({...playlists, queue:{...playlists.queue, songs:res}})
    } else {
      setPlayLists({...playlists, queue:{...playlists.queue, songs:[...playlists.queue.songs, song]}})
    }
  }

  return (
    <div className='containersongs'>
        <songsContext.Provider value={{playlists, set, setPlayLists, list, setList}}>
              <Playlists />
              <ListSongs/>
        </songsContext.Provider>
    </div>
  )
}

export default React.memo(SongsPage);