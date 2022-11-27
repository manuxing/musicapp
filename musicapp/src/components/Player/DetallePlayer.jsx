import React, {useContext} from 'react'
import { musicContext } from '../../pages/main/contexts/musicContext';
import { playerContext } from '../../pages/main/contexts/playerContext';

function DetallePlayer({page}) {
    const data = useContext(playerContext);
    const context = useContext(musicContext);
    const { music, song } = data;
    const {setPage} = context;

  return (
    page === true ?
    <div className="detcontainer">
      <div className="img">
        <img src={music[song].thumbnail} alt="img" />
      </div>
      <div className="details">
        <span className="title">{music[song].title}</span>
        <div className="artist">
          <span>{music[song].artist}</span>
        </div>
      </div>
    </div> : 
    <div className="detcontainer-all" onClick={()=>setPage(!page)}>
      <span className="title-all">{music[song].title}</span>
      <span className='art'>{music[song].artist}</span>
    </div>
  );
}

export default React.memo(DetallePlayer);