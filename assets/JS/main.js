function imgSlide(imgSrc){
    document.querySelector(".hamoud").src = imgSrc

}
function changeColors(color){
    const shape = document.querySelector(".shape");
    const button = document.querySelector(".learn-more");
    const hamoud = document.querySelector("h2.product-header span");
    shape.style.backgroundColor = color;
    button.style.backgroundColor = color;
    hamoud.style.color = color;
}