console.log("roger");
let turn = "X";
let gameOver = false;

//function to change the turn
const changeTurn = ()=>{
    return turn==="X"?"O":"X";
}

//function to check winner
const checkWinner = ()=>{
    let boxtexts = document.getElementsByClassName("boxText");
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [2,5,8,15,15,90],
        [1,4,7,5,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    wins.forEach((e)=>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && boxtexts[e[0]].innerText !== ""){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won";
            gameOver = true;
            document.querySelector(".line").style.width = "20vw";
            document.querySelector(".line").style.height = "5px";
            document.querySelector(".line").style.border = "2px solid white";
            document.querySelector(".line").style.padding = "5px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.getElementsByClassName('boxText').style.pointerEvents = 'none';
            
        }
        // return false;
    })
}

//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(ele =>{
    let boxText = ele.querySelector('.boxText');
    ele.addEventListener('click', (e)=>{
        if(boxText.innerText===""){
            boxText.innerText = turn;
            turn = changeTurn();
            checkWinner();
            if(!gameOver){

                document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
            }
        }
    })
})

//reset
let reset = document.getElementById("reset");
reset.addEventListener('click', (e)=>{
    document.querySelector(".line").style.width = "0vw";
    document.querySelector(".line").style.height = "0px";
    document.querySelector(".line").style.border = "0px solid white";
    document.querySelector(".line").style.padding = "0px";
    let boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach(ele =>{
        let boxText = ele.querySelector('.boxText');
        boxText.innerText = "";
    })
    turn = "X";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.getElementsByClassName('boxText').style.pointerEvents = 'auto';
    
    
})