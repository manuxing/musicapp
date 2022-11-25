import React, {useContext} from 'react'
import { playerContext } from '../../pages/main/contexts/playerContext';

function DetallePlayer() {
    const data = useContext(playerContext);
    const { music, song } = data;

  return (
    <div className="detcontainer">
      <div className="img">
        <img src={music[song].thumbnail} alt="img" />
      </div>
      <div className="details">
        <p className="title">{music[song].title}</p>
        <div className="artist">
          <p>{music[song].artist}</p>
        </div>
      </div>
    </div>
  );
}

export default React.memo(DetallePlayer);