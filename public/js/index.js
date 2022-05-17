let image_slider_next_btn = document.getElementById("image_slider_next_btn");
var coffee_slider_images = document.querySelector(".coffee_slider_images");



let img_slider_event_listener = () => {
    let coffee_slider_img_container = document.getElementsByClassName("coffee_slider_img_container");
    let arr = Array.from(coffee_slider_img_container);
    coffee_slider_images.style.transform += `translateX(-10%)`;
    console.log(arr);
    for (let i = 0; i < arr.length; i++){
        if(arr[i].classList.contains("coffee_slider_img_container_selected")){
            if(arr.indexOf(arr[i]) == 9){
                coffee_slider_images.style.transform = `translateX(0%)`;
                arr[i].classList.remove("coffee_slider_img_container_selected");
                arr[i].children[0].classList.remove("img_5");
                i = 0;
            }
            console.log(arr.indexOf(arr[i]));
            arr[i].classList.remove("coffee_slider_img_container_selected");
            // div.firstChild.classList.remove("img_5");
            arr[i].children[0].classList.remove("img_5");
            arr[i].nextElementSibling.classList.add("coffee_slider_img_container_selected");
            arr[i].nextElementSibling.children[0].classList.add("img_5");
            break;
        }
    }
};

image_slider_next_btn.addEventListener("click", img_slider_event_listener);