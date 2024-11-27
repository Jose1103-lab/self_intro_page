console.log("Script is running");
let activeOn = false

function proj_preview(){
    const exist = document.querySelector(".preview-box")
    const main = document.getElementsByTagName("main")
    if (activeOn === true){
        exist.remove(); //remove the preview panel
        document.body.style.overflow = "scroll" //stops scrolling
        activeOn = false
    }else{
        const preview_cont = document.createElement("div")
        const img_caroussel = document.createElement("img")
        img_caroussel.setAttribute("src", "images/placeholder.png")
        img_caroussel.style.width = "100%"
        img_caroussel.style.height = "auto"
        img_caroussel.style.objectFit = "cover"
        preview_cont.appendChild(img_caroussel)
        preview_cont.classList.add("preview-box")
        main[0].appendChild(preview_cont)
        document.body.style.overflow = "hidden"
        
        
        
        activeOn = true
    }
}

let preview_call = document.querySelectorAll(".item-preview"); //take care of it later
preview_call.forEach((item) => addEventListener("click", proj_preview))