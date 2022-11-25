export const loadStart = (e, action)=> {
    const src = e.nativeEvent.srcElement.src;
    const audioA =  new Audio(src);
    audioA.onloadedmetadata = ()=>{
    if (audioA.readyState > 0) {
      action(audioA.duration);
    }
  }
}

export const Play = (play, audio, setPlay) => {
  if (play) {
    audio.current.pause();
    setPlay(false);
  } else {
    audio.current.play();
    setPlay(true);
  }
};

export const nextPrev = (action, n, music) => {
  action((v) => {
    if (n > 0) {
      return v + n > music.length - 1 ? 0 : v + n;
    }
    return v + n < 0 ? music.length - 1 : v + n;
  });
};

export const Repeat = (action)=>{
    action(val=>{
        switch(val){
          case "repeat":
            return 'repeat_one';
  
          case "repeat_one":
            return 'shuffle';
  
          default:
            return 'repeat'
        }
      })
}

export const randomNumber = (music, song)=>{
    const number = Math.floor(Math.random() * (music.length-1))
    if(number === song)return randomNumber();
    return number
  }

  export const End = (repeat, audio, action, action2)=>{
    switch(repeat){
        case 'repeat_one':
          return audio.current.play();
        case 'shuffle':
          return action();
          default:
            return action2(1);
      }
  }