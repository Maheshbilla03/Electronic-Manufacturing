function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("active");
}

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(item => {
    let windowHeight = window.innerHeight;
    let itemTop = item.getBoundingClientRect().top;
    let revealPoint = 120;

    if(itemTop < windowHeight - revealPoint){
      item.classList.add("show");
    }
  });
});