let image_slider_next_btn = document.getElementById("image_slider_next_btn");
let coffee_slider_images = document.getElementById("coffee_slider_images");

image_slider_next_btn.addEventListener("click", () => {
    coffee_slider_images.style.transform = `translateX(-10%)`;
    let coffee_slider_img_container = document.getElementsByClassName("coffee_slider_img_container");

    for(elements of coffee_slider_img_container){
        if(elements.classList.contains("coffee_slider_img_container_selected")){
            elements.classList.remove("coffee_slider_img_container_selected");
            elements.nextElementSibling.classList.add("coffee_slider_img_container_selected");
        }
    }
});