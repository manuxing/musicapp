export const timer = (t) =>{
    console.log(t)
    let min = "0" + Math.floor(t/60);
    let sec = Math.floor(t % 60);
    if(sec < 10){sec = "0" + sec};
    return `${min}:${sec}`
}