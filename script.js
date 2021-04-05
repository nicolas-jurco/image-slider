const body_height = document.body.clientHeight
const body_width = document.body.clientWidth
const container = document.querySelector(".slide-container");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let counter = 1;

/* 
// ? lo hice pa jugar
let sign = -1
nextBtn.style.transform = 'translateY(500px)'
sign = (-1) * sign
slider.style.transform = 'translateX(' + (-SIZE_WIDTH * counter ) + 'px) rotate(' + sign * 2 * counter + 'deg)'
*/

// const SIZE_WIDTH = images[0].getBoundingClientRect().width
// let SIZE_WIDTH = images[0].getBoundingClientRect().width
let SIZE_WIDTH = 0
let SIZE_HEIGHT = 0
document.addEventListener('DOMContentLoaded',()=>{
	calculateImgWidth()
	// calculateImgHeight()
})

let _width

function calculateImgWidth() {
	SIZE_WIDTH = slider.offsetWidth
	_width =   SIZE_WIDTH  + 'px';
	for (let i = 0; i < images.length; i++) {
		images[i].style.width  	= _width
	}		
	slider.style.transform = "translateX(" + -SIZE_WIDTH * counter + "px)";
}

function calculateImgHeight() {
	SIZE_HEIGHT = slider.offsetHeight
	_height =   SIZE_HEIGHT  + 'px';
	for (let i = 0; i < images.length; i++) {
		images[i].style.height  	= _height
	}		
	slider.style.transform = "translateY(" + -SIZE_HEIGHT * counter + "px)";
}

window.addEventListener("resize", () => {
	calculateImgWidth()
	// calculateImgHeight()
});

nextBtn.addEventListener("click", () => {
	// !flex direction column
    slider.style.transition = "transform 0.4s ease-in-out";
	counter++
	slider.style.transform = "translateX(" + -(+SIZE_WIDTH) * counter + "px)";
	// !flex direction row
	// slider.style.transition = "transform 0.4s ease-in-out";
    // counter++;
    // slider.style.transform = "translateY(" + -SIZE_HEIGHT * counter + "px)";
});

prevBtn.addEventListener("click", () => {
    slider.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slider.style.transform = "translateX(" + -SIZE_WIDTH * counter + "px)";
});

// slider.addEventListener("transitionend", () => {
//     console.log("transition end triggered");
//     if (images[counter].id === "lastClone") {
//         console.log("counter " + counter);
//         slider.style.transition = "none";
//         counter = images.length - 2;
//         console.log("counter " + counter);
//         slider.style.transform = "translateX(" + -SIZE_WIDTH * counter + "px)";
//         slider.style.transition = "transform 0.4s ease-in-out";
//     }
// });
