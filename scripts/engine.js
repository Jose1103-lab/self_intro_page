
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
        preview_cont.classList.add("preview-page")
        main[0].appendChild(preview_cont)

        const preview_box = document.createElement("div")
        preview_box.classList.add("preview-box")
        preview_cont.appendChild(preview_box)

        const close_button = document.createElement("button")
        close_button.classList.add("close-option", "arvo-regular-normal")
        close_button.textContent = "Close"
        preview_box.appendChild(close_button)

        const preview_button = document.createElement("button")
        preview_button.classList.add("preview-option", "arvo-regular")
        preview_button.textContent = "Visit demo"
        preview_box.appendChild(preview_button)

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