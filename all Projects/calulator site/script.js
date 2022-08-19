console.log('hii');

let strin = "";
let buttons  = document.querySelectorAll(".btn");
let screen = document.getElementById("screen");

for (let item of buttons) {
    item.addEventListener('click', (e)=>{
        let btn = e.target.innerText;
        screen.value = "";
        if(btn == 'X'){
            btn = '*';
            strin += btn;
            screen.value = strin;
        } 

        else if(btn == 'C'){
            strin = "0";
            screen.value = strin;
        }

        else if(btn == '='){
            screen.value = eval(strin);
            strin = screen.value;
        }

        else if(btn == '<'){
            strin = strin.substring(0, strin.length-1);
            screen.value = strin;
        }

        else{
            strin += btn;
            screen.value = strin;
        }
    })
}
