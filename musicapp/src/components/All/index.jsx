import React, {useContext} from 'react'
import { songsContext } from './contexts/songsContext';
import "./index.css"
import ListSongs from './List_';
import Playlists from './List_/Playlists';
import { musicContext } from '../../pages/main/contexts/musicContext';

function SongsPage() {

  let context = useContext(musicContext)
  const {playlists, setPlayLists, list, setList} = context
  
  const set = (song, rev) =>{
    if(rev === 1){
      let res = playlists.queue.songs.filter(p => p.id !== song.id);
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