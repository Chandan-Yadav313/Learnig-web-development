const btn = document.querySelector("button");
const box = document.querySelector(".box");

const color = ["green", "blue", "grey", "black", "red"]
let i = 0;
btn.addEventListener("click", function(){
    i = i % color.length;
    box.style.backgroundColor = color[i];
    i++;
}
)