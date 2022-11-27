import React, {useContext} from 'react'
import { musicContext } from '../../pages/main/contexts/musicContext'
import Button from '../icons/More';
import "./index.css"

function List({props:{open, setOpen, song, setSong}}) {

    let {music} = useContext(musicContext);

    function handleOpen(){
      setOpen(!open);
    }

  return (
    <div>
      <div className="navcontainer">
        <div className="nav">
          <div className="div" onClick={handleOpen}>
            <Button text={"expand_more"} />
          </div>
          <span>
            Playing {song + 1}/{music.length}
          </span>
          <div>
          </div>
        </div>
      </div>
      {open === true ? (
        <div className={`list`}>
          <div className="header">
            <div className="div" onClick={handleOpen}>
              <Button text={"close"} />
            </div>
          </div>
          <ul>
            {music.map((tem, i) => {
              return (
                <li key={tem.id} onClick={() => setSong(i)}>
                  <div className={`${song === i ? "playing" : "row"}`}>
                    <p>{tem.title}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default React.memo(List);