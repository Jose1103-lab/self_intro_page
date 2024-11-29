console.log("Script is running");
let activeOn = false

function proj_preview(){
    const exist = document.querySelector(".preview-page")
    const main = document.getElementsByTagName("main")
    if (activeOn === true){
        exist.remove(); //removes the preview panel
        // document.body.style.overflow = "scroll" //stops scrolling
        activeOn = false
    }else{
        const preview_cont = document.createElement("div")
        const preview_box = document.createElement("div")
        preview_cont.classList.add("preview-page")
        preview_box.classList.add("preview-box")
        main[0].appendChild(preview_cont)
        preview_cont.appendChild(preview_box)
        // document.body.style.overflow = "hidden"
        const img_caroussel = document.createElement("img")
        img_caroussel.classList.add("preview-img")
        img_caroussel.setAttribute("src", "images/placeholder.png")
        preview_box.appendChild(img_caroussel)
        
        activeOn = true
    }
}

let preview_call = document.querySelectorAll(".item-preview"); //take care of it later; 
//each time i click some  where the popup opens up
preview_call.forEach((item) => {item.addEventListener("click", proj_preview)})
// preview_call.onclick = () => proj_preview()  