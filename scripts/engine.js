console.log("Script is running");
let activeOn = false

function proj_preview(){
    exist = document.querySelector(".preview-box")
    if (activeOn === true){
        exist.remove();
        activeOn = false
    }else{
        const preview_cont = document.createElement("div")
        preview_cont.classList.add("preview-box")
        document.body.appendChild(preview_cont)
        activeOn = true
    }
}

let preview_call = document.querySelectorAll(".item-preview"); //take care of it later
preview_call.addEventListener("click", proj_preview)