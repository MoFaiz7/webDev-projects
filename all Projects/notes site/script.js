
console.log("hey there")
let it = document.getElementById('textno');
let btn = document.getElementById("btn");
let contain = document.getElementById("contain")
showNotes();

btn.addEventListener('click', function () {
    if(it.value.length != 0){
      let nn = localStorage.getItem("nn");
    if(nn==null){
      notesObj = [];
    }
    else{
      notesObj = JSON.parse(nn);
    }
    notesObj.push(it.value);
    localStorage.setItem("nn", JSON.stringify(notesObj));
    it.value = "";
    showNotes();
    // console.log(typeof(notes))
    }
})

function showNotes() {
  let nn = localStorage.getItem("nn");
    if(nn==null){
      notesObj = [];
    }
    else{
      notesObj = JSON.parse(nn);
    }
    let html = "";
    notesObj.forEach(function(element, index ) {
      let notes = `<div class="card mx-3 my-3" style="width: 18rem;">
                          <div class="card-body" id="templ">
                            <h5 class="card-title" id="title">Notes #${index +1}</h5>
                            <p class="card-text" id="content">${element}</p>
                            <a href="#" class="btn btn-primary" id="${index}" onclick="del(this.id)">Delete</a>
                          </div>
                        </div>`
    html += notes;
    });
    contain.innerHTML  =  html;
}

function del(index) {
  let nn = localStorage.getItem("nn");
    if(nn==null){
      notesObj = [];
    }
    else{
      notesObj = JSON.parse(nn);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("nn", JSON.stringify(notesObj));
    showNotes();
  }