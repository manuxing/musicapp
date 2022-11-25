import React, {useState} from 'react'
import Player from '../../components/Player'
import { musicContext } from './contexts/musicContext';
import "./index.css"
import data from "../../assets/data"
import List from '../../components/List';

function MainPage() {

  const [song, setSong] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <div className='container'>
        <musicContext.Provider value={data}>
          <main>
              <Player props={{song, setSong}}/>
              <List props={{open, setOpen, song, setSong}}/>
          </main>
        </musicContext.Provider>
    </div>
  )
}

export default React.memo(MainPage);