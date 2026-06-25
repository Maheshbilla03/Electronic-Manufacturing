function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("active");
}

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(item => {
    let windowHeight = window.innerHeight;
    let revealTop = item.getBoundingClientRect().top;
    let revealPoint = 120;

    if(revealTop < windowHeight - revealPoint){
      item.classList.add("show");
    }
  });
});

const counters = document.querySelectorAll(".counter");
let started = false;

function startCounter(){
  counters.forEach(counter => {
    let target = +counter.getAttribute("data-target");
    let count = 0;
    let speed = target / 100;

    let update = setInterval(() => {
      count += speed;

      if(count >= target){
        counter.innerText = target + "+";
        clearInterval(update);
      }else{
        counter.innerText = Math.floor(count);
      }
    }, 20);
  });
}

window.addEventListener("scroll", () => {
  const stats = document.querySelector(".stats");
  const position = stats.getBoundingClientRect().top;

  if(position < window.innerHeight && !started){
    startCounter();
    started = true;
  }
});