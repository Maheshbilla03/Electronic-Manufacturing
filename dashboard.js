function toggleTheme(){
  document.body.classList.toggle("light");
}


function toggleTheme(){
  document.body.classList.toggle("light");
}

function logout(){
  window.location.href = "index.html";
}

const links = document.querySelectorAll(".sidebar a[href]");

links.forEach(link => {
  link.addEventListener("click", function(){
    links.forEach(item => item.classList.remove("active"));
    this.classList.add("active");
  });
});