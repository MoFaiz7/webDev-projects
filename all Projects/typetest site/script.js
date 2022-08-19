console.log("type test online!!");
let btn = document.getElementById('start');
let sample = `For the most part, novels are dedicated to narrating individual experiences of characters, creating a closer, more complex portrait of these characters and the world they live in. Inner feelings and thoughts, as well as complex, even conflicting ideas or values are typically explored in novels, more so than in preceding forms of literature. It’s not just the stories themselves that are more personal, but the experience of reading them as well. Where epic poetry and similar forms of storytelling were designed to be publicly read or consumed as an audience, novels are geared more towards an individual reader. For the most part, novels are dedicated to narrating individual experiences of characters, creating a closer, more complex portrait of these characters and the world they live in. Inner feelings and thoughts, as well as complex, even conflicting ideas or values are typically explored in novels, more so than in preceding forms of literature. It’s not just the stories themselves that are more personal, but the experience of reading them as well. Where epic poetry and similar forms of storytelling were designed to be publicly read or consumed as an audience, novels are geared more towards an individual reader. `;
console.log(sample+" "+typeof(sample));

function count(intxt, time){
    let wrdcount = 0;
    let flag = 0;
    let inptxtarr = intxt.split(" ");
    let samplearr = sample.split(" ");
    for (let i = 0 ; i < inptxtarr.length-1 ; i++) {
        if(inptxtarr[i] == samplearr[i]){
            wrdcount++;
        }
        else{
            flag = 1;
        }
        
    }
    let str = "";
    let res = wrdcount/time;
    if(res < 30){
        str = "keep practicing";
    }
    else if(res > 30 && res < 50){
        str = "you are doing well"
    }
    else if (res > 50){
        str = "awesome";
    }
    if(flag == 0){
        document.getElementById("result").innerHTML = `${res} wpm  ${str}`;
    }
    else{
    document.getElementById("result").innerHTML = `${res} wpm : you made mistake that is why typing speed is deducted ${str}`;
    }
    console.log(inptxtarr.length);
    console.log(wrdcount);
    console.log(inptxtarr);
    console.log(samplearr);
}





btn.addEventListener("click", function(){
    
    let time = document.getElementById("time").value;
    let tt = time;
    time = time*1000*60;
    // console.log(time);
    let samplearr = sample.split(" ");
    // btn.style.display = "none";
    document.getElementById("starter").style.display = "none";
    // document.getElementById("text").style.display = "block";
    document.getElementById("writable").style.display = "block";
        let keypre = document.getElementById('write');
        keypre.addEventListener("keypress", function(e){
            let strin = document.getElementById("write").value; 
            let it = (strin.match(/ /g) || []).length;
            // console.log(it);
            if(e.key == " "){
            
            let inptxtarr = strin.split(" ");
             let samplearr = sample.split(" ");
            if(inptxtarr[it]!=samplearr[it]){
                document.getElementById("danger").style.visibility = "visible";
            }
            else{
                document.getElementById("danger").style.visibility = "hidden";
            }
            }
        })
        
    let inptxt = "";
    setTimeout(function(){
        inptxt = document.getElementById("write").value;
        document.getElementById("writable").style.display = "none";
        document.getElementById("result").style.display = "block";
        document.getElementById("result").innerHTML = "please wait... calculating...";
        // console.log(inptxt+" "+typeof(inptxt));
        count(inptxt, tt);
    }, time);
})