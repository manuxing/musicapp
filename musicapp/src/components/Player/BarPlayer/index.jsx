import React, {useContext} from 'react'
import Button from "../../icons/More"
import { playerContext } from '../../../pages/main/contexts/playerContext';

function BarPlayer({page}) {

  const data = useContext(playerContext);
  const {
    timer,
    duration,
    cTime,
    changeCurrentTime,
    handleRepeat,
    repeat,
    handleNextPrev,
    handlePlay,
    setShowV,
    play,
  } = data;

  return (
    page === true ?
    <div className="bar">
      <div className="bartop">
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
        <div className='timer'>
          <p>{timer(duration)}</p>
        </div>
      </div>
      <div className="controls">
         <div className="div" onClick={handleRepeat}>
          <Button text={repeat} />
        </div>
        <div className="div" onClick={() => handleNextPrev(-1)}>
          <Button text={"skip_previous"} id={"prev"} />
        </div>
        <div className="play" onClick={handlePlay}>
          <Button text={!play ? "play_arrow" : "pause"} />
        </div>
        <div className="div" onClick={() => handleNextPrev(1)}>
          <Button text={"skip_next"} id={"next"} />
        </div>
          <div className="divz" onClick={() => setShowV((prev) => !prev)}>
            <Button text={"volume_up"} />
          </div>
      </div>
    </div>:
    <div className="bar-all">
    <div className="bartop-all">
      <div className="timer">
        <span>{timer(cTime)}</span>
      </div>
      <div className="progress-all">
        <input
          type="range"
          min={0}
          max={duration}
          value={cTime}
          onChange={(e) => changeCurrentTime(e)}
        />
      </div>
      <div>
        <span>{timer(duration)}</span>
      </div>
    </div>
    <div className="controls-all">
      <div className="div" onClick={() => handleNextPrev(-1)}>
        <Button text={"skip_previous"} id={"prev"} />
      </div>
      <div  onClick={handlePlay}>
        <Button text={!play ? "play_arrow" : "pause"} />
      </div>
      <div className="div" onClick={() => handleNextPrev(1)}>
        <Button text={"skip_next"} id={"next"} />
      </div>
    </div>
  </div>
  );
}

export default React.memo(BarPlayer);