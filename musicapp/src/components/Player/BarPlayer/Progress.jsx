import React, {useState, useContext} from 'react'
import { playerContext } from '../../../pages/main/contexts/playerContext';
import { loadStart } from '../playerActions';

function Progress() {

    const data = useContext(playerContext);
    const {
      timer,
      audio,
    } = data;

    const [cTime, setCtime] = useState(0);
    const [duration, setDuration] = useState(0);

    const handleLoadStart = (e)=> {
        loadStart(e, setDuration);
      }
    
      function handleTimeUpdate(){
        const currentTime = audio.current.currentTime;
        setCtime(currentTime);
      }

    function changeCurrentTime(e){
        const current = Number(e.target.value);
        audio.current.currentTime = current;
        setCtime(current)
      }
    

  return (
    <div className="div">
        <div className="timer">
            <p>{timer(cTime)}</p>
            </div>
            <div className="progress">
            <input
                type="range"
                min={0}
                max={duration}
                value={cTime}
                onChange={(e) => changeCurrentTime(e)}
            />
            </div>
    </div>
    )
}

export default React.memo(Progress)