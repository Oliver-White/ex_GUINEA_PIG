let content = document.getElementById("content");
let user_input = document.getElementById("keypress-input");
let output = document.getElementById("output-target");
let title_page = document.getElementById("page-title");
let guinea_pig = document.getElementById("guinea-pig");

let color = document.getElementById("add-color");
let hulkify = document.getElementById("make-large");
let capture = document.getElementById("add-border");
let rounded = document.getElementById("add-rounding");


content.addEventListener("click", content_event);
user_input.addEventListener("keyup", user_input_mirror);
title_page.addEventListener("mouseover", header_hover);
title_page.addEventListener("mouseout", header_hover_stop);

color.addEventListener("click", color_changer);
hulkify.addEventListener("click", hulkify_stuff);
capture.addEventListener("click", capture_stuff);
rounded.addEventListener("click", rounded_stuff);


function content_event(stuff) {

    output.innerHTML = "You clicked on the " + stuff.target.innerHTML + " section";
}

function header_hover(things) {
    output.innerHTML = "You moused over the header";
}

function header_hover_stop(doesnt_matter) {
    output.innerHTML = "You left me!!"
}

function user_input_mirror(what_ever) {
    output.innerHTML = user_input.value;
}



function color_changer() {
    guinea_pig.classList.toggle("color");
}

function hulkify_stuff() {
    guinea_pig.classList.toggle("hulkify");
}

function capture_stuff() {
    guinea_pig.classList.toggle("captured");
}

function rounded_stuff() {
    guinea_pig.classList.toggle("rounded");
}