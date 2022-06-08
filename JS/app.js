let min=0
let seg=0
let hr=0
let tmp

function start() {
    tmp=setInterval(time,1000)
}
function time() {
    seg++
    if (seg>60) {
        seg=0
        min++
    } else if(min>60){
        min=0
        hr++
    }
    let clock=document.querySelector('div#clock')
    clock.innerHTML=`'${hr}:${min}:${seg}'`
}
function stop() {
    clearInterval(tmp)
}
function reset() {
    stop()
    clock.innerHTML="'00.00.00'"
    hr=0
    min=0
    seg=0
}