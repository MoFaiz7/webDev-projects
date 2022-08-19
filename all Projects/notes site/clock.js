let y = document.getElementById('tt');
let x = document.getElementById('dd');
setInterval(tmup, 1000);
function tmup(){
    let time = new Date;
    let mon;
    if(time.getMonth()==0){
        mon = 'JAN';
    }

    else if(time.getMonth()==1){
        mon = 'FEB';
    }

    else if(time.getMonth()==2){
        mon = 'MAR';
    }

    else if(time.getMonth()==3){
        mon = 'APR';
    }

    else if(time.getMonth()==4){
        mon = 'MAY';
    }

    else if(time.getMonth()==5){
        mon = 'JUN';
    }

    else if(time.getMonth()==6){
        mon = 'JUL';
    }

    else if(time.getMonth()==7){
        mon = 'AUG';
    }

    else if(time.getMonth()==8){
        mon = 'SEPT';
    }

    else if(time.getMonth()==9){
        mon = 'OCT';
    }

    else if(time.getMonth()==10){
        mon = 'NOV';
    }

    else if(time.getMonth()==11){
        mon = 'DEC';
    }
x.innerHTML = time.getDate() + ' ' + (mon) +' '+time.getFullYear();
y.innerHTML = time.getHours() + ' : ' + time.getMinutes() + ' : ' + time.getSeconds();
}

let audio = new Audio('old_alarm_clock.mp3');
function ringBell() {
    document.getElementById('bg').style.border = '10px solid red'
    audio.play();
   
}

function pe(){
    audio.pause();
}


let t =  document.getElementById('hrs');
t.addEventListener('blur', (e)=>{
    // 38 - 37
    e.preventDefault();
    let kk = new Date(t.value);
    let now = new Date();
    let diff = kk - now;
    console.log(diff);
    if(diff >= 0){
        const tm = setInterval(() => {
            ringBell();
            
            clearInterval(tm);
            
        }, diff);
    }
    
})

let stop = document.getElementById('btn');
stop.addEventListener('click', ()=>{
    pe();
    let hk  = document.getElementById('bg')
    hk.style.border = '5px solid rgb(45, 207, 80)';
    // console.log("clicked");
})