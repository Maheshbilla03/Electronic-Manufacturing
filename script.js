function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("active");
}

let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlider(){
  slides.forEach(slide => slide.classList.remove("active"));
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(showSlider, 3500);

let counters = document.querySelectorAll(".counter");
let started = false;

window.addEventListener("scroll", () => {
  let statsSection = document.querySelector(".stats");

  if(window.scrollY > statsSection.offsetTop - 500 && !started){
    counters.forEach(counter => {
      let target = +counter.getAttribute("data-target");
      let count = 0;
      let speed = target / 80;

      let updateCounter = setInterval(() => {
        count += speed;

        if(count >= target){
          counter.innerText = target + "+";
          clearInterval(updateCounter);
        }else{
          counter.innerText = Math.floor(count);
        }
      }, 25);
    });

    started = true;
  }
});

function sendMessage(event){
  event.preventDefault();
  alert("Thank you! Your message has been sent successfully.");
}