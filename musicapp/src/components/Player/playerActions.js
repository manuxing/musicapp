export const LoadStart = (e, action)=> {
    const src = e.nativeEvent.srcElement.src;
    const audioA =  new Audio(src);
    audioA.onloadedmetadata = ()=>{
    if (audioA.readyState > 0) {
      action(audioA.duration);
    }
  }
}