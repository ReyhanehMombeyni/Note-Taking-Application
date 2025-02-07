let notes=[];
localStorage.setItem("notes", JSON.stringify(notes))
let prevValue;
const btn=document.querySelector("button");

btn.addEventListener("click", () => {
    const parent= document.querySelector(".items");
    const itemTag=document.createElement("li");
    itemTag.classList.add("item");
    parent.append(itemTag);

    const inputEL=document.createElement("input");
    inputEL.type="text";
    inputEL.focus();
    inputEL.classList.add("inputItem");
    const divEL=document.createElement("div");
    divEL.classList.add("icons");
    itemTag.append(inputEL, divEL);

    const editTag=document.createElement("i");
    editTag.classList.add("fa", "fa-pencil", "edit");
    const deleteTag=document.createElement("i");
    deleteTag.classList.add("fa", "fa-trash", "delete");
    divEL.append(editTag, deleteTag);
    
    
    editTag.addEventListener("click", () => {
        const inputTag= editTag.parentElement.previousSibling;
        prevValue= inputTag.value;
        inputTag.focus();
    })
        
    
    deleteTag.addEventListener("click", () => {
        const divParent= editTag.parentElement;
        divParent.parentElement.remove();


        const noteLocal= JSON.parse(localStorage.getItem("notes"));
        const inputTag= editTag.parentElement.previousSibling;
        let filterNoteLocal= noteLocal.filter(item => item!=inputTag.value)
        localStorage.setItem("notes", JSON.stringify(filterNoteLocal))

    })


    inputEL.addEventListener("change", () => {
        const noteLocal= JSON.parse(localStorage.getItem("notes"));

        if(noteLocal.length) {
            let mapNoteLocal=[];
            let exist=false;
            mapNoteLocal= noteLocal.map(item => {
                if(item===prevValue) {
                    exist=true;
                    return inputEL.value;
                }
                else {
                    return item;
                }
            })
            if (!exist) {
                notes= [...notes, inputEL.value];
            }
            else {
                notes= mapNoteLocal;
            }
        }
        else {
            notes= [inputEL.value];
        }

        localStorage.setItem("notes", JSON.stringify(notes))

    })

})




