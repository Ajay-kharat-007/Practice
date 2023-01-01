showNotes();
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click",()=>{
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes")

    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes)
    }

    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj))
    addTxt.value = ""
    showNotes();
})


function showNotes () {
    let notes = localStorage.getItem("notes");

    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes)
    }
    
    let html = ""

    notesObj.forEach((elem, index) => {
        html = html + `<div class="card m-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${index + 1}</h5>
          <p class="card-text">${elem}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>`
    });

    let notesElem = document.getElementById("notes");
    if(notesObj.length != 0){
        notesElem.innerHTML = html;
    }else{
        notesElem.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`
    }
}

function deleteNote (index) {
    let notes = localStorage.getItem("notes")

    if(notes == null){
        notesObj = []
    }else{
        notesObj = JSON.parse(notes)
    }

    notesObj.splice(index,1); // splice(index to delete, item to delte , item to add, item to add )

    localStorage.setItem("notes", JSON.stringify(notesObj))
    showNotes();
}