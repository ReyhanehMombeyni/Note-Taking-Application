let notes=[];
const btn=document.querySelector("button");

btn.addEventListener("click", () => {
    const parent= document.querySelector(".items");
    const itemTag=document.createElement("li");
    itemTag.classList.add("item");
    parent.append(itemTag);

    const inputEL=document.createElement("input");
    inputEL.type="text";
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
        // const prevValue= inputTag.value;
        // inputTag.focus();
        // const noteLocal= JSON.parse(localStorage.getItem("notes"));
        // console.log(noteLocal)
    })
    
    deleteTag.addEventListener("click", () => {
        const divParent= editTag.parentElement;
        divParent.parentElement.remove();
    })

    inputEL.addEventListener("change", () => {
        notes= [...notes, inputEL.value];
        localStorage.setItem("notes", JSON.stringify(notes))
    })

})




