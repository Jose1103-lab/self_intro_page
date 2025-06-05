
console.log("Script is running");
let activeOn = false

function proj_preview_creator(){
    const exist = document.querySelector(".preview-page")
    const main = document.getElementsByTagName("main")
    if (activeOn === true){
        // document.body.style.overflow = "scroll" //stops scrolling
        exist.remove(); //removes the preview panel
        activeOn = false
    }else{
        const preview_cont = document.createElement("div")
        const preview_box = document.createElement("div")
        const close_button = document.createElement("button")
        const preview_button = document.createElement("button")
        const img_caroussel = document.createElement("img")

        preview_cont.classList.add("preview-page")
        main[0].appendChild(preview_cont)

        preview_box.classList.add("preview-box")
        preview_cont.appendChild(preview_box)

        close_button.classList.add("close-option", "arvo-regular-normal")
        close_button.textContent = "Close"
        preview_box.appendChild(close_button)
        
        preview_button.classList.add("preview-option", "arvo-regular")
        preview_button.textContent = "Visit demo"
        preview_box.appendChild(preview_button)

        img_caroussel.classList.add("preview-img")
        img_caroussel.setAttribute("src", "images/placeholder.png")
        preview_box.appendChild(img_caroussel)
        
        activeOn = true
    }
}

let preview_call = document.querySelectorAll(".item-preview"); //take care of it later; 
//each time i click some where the popup opens up
preview_call.forEach((item) => {item.addEventListener("click", proj_preview_creator)})
// preview_call.onclick = () => proj_preview()  