let hour = document.getElementById('hour')
let minute = document.getElementById('minute')
let second = document.getElementById('second')

 let h = 0
 let m = 0
 let s = 0
setInterval(()=>{
    s++
    second.innerHTML = s;
    if (s==59) {
        m++
        s = 0
        minute.innerHTML = m+':'
    }
    if(m==59){
        m = 0
        h++
        hour.innerHTML = h + ':'

    }
    if(h==24){
        h==0
    }
},1000)






