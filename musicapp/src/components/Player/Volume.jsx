import React, {useContext} from 'react'
import Button from "../../components/icons/More";
import { playerContext } from '../../pages/main/contexts/playerContext';

function Volume() {

  const data = useContext(playerContext);
    const {
        setVolume,
        volume
    } = data;

  return (
    <div className="volume">
      <div onClick={() => setVolume((v) => (v > 0 ? 0 : 100))}>
        <Button text={volume > 0 ? "volume_up" : "volume_off"} />
      </div>
      <input
        type="range"
        min={0}
        max={100}
        onChange={(e) => setVolume(parseInt(e.target.value))}
        value={volume}
      />
      <div className="div">
        <span>{volume}</span>
      </div>
    </div>
  );
}

export default React.memo(Volume)