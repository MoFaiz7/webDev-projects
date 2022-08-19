let date  = new Date();

console.log(date);

let contain = document.getElementById("contain");
let addBtn = document.getElementById("btn");
let text = document.getElementById("textno");
showNotes();
addBtn.addEventListener("click", function(){
    let notes  = text.value;
    if(notes.length){
        let nn = localStorage.getItem("nn");
        if(nn == null){
            noteObj = [];
        }
        else{
            noteObj = JSON.parse(nn);
        }
        noteObj.push(text.value);
        localStorage.setItem("nn", JSON.stringify(noteObj));
        text.value = "";
        showNotes();
    }
})

function showNotes() {
    let nn = localStorage.getItem("nn");
        if(nn == null){
            noteObj = [];
        }
        else{
            noteObj = JSON.parse(nn);
        }
        let html = "";
        noteObj.forEach(function(ele, index) {
            let note = `<div class="card mx-3 my-3" style="width: 18rem;">
            <div class="card-body" id="templ">
              <h5 class="card-title" id="title">Notes #${index +1}</h5>
              <p class="card-text" id="content">${ele}</p>
              <hr>
              <p class="txt" >${date}</p>
              
              <a href="#" class="btn btn-primary" id="${index}" onclick="del(this.id)">Delete</a>
            </div>
          </div>`
          html += note;
        });
        contain.innerHTML = html;
}

function del(index) {
    let nn = localStorage.getItem("nn");
        if(nn == null){
            noteObj = [];
        }
        else{
            noteObj = JSON.parse(nn);
        }
        noteObj.splice(index, 1);
        localStorage.setItem("nn", JSON.stringify(noteObj));
        showNotes();
}