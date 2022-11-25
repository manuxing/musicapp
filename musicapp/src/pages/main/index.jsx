import React, {useState} from 'react'
import Player from '../../components/Player'
import { musicContext } from './contexts/musicContext';
import "./index.css"
import data from "../../assets/data"

function MainPage() {

  const [song, setSong] = useState(0);

  return (
    <div className='container'>
        <musicContext.Provider value={data}>
          <main>
              <Player props={{song, setSong}}/>
          </main>
        </musicContext.Provider>
    </div>
  )
}

export default React.memo(MainPage);