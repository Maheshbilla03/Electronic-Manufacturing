const page = document.querySelector(".error-page");

for(let i = 0; i < 40; i++){
  let dot = document.createElement("span");
  dot.className = "dot";
  dot.style.left = Math.random() * 100 + "%";
  dot.style.top = Math.random() * 100 + "%";
  dot.style.animationDelay = Math.random() * 5 + "s";
  page.appendChild(dot);
}